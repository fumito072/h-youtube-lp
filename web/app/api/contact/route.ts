// app/api/contact/route.ts
import { NextResponse } from 'next/server';

/** 
 * OPTIONS ハンドラ（CORS プリフライトリクエスト対応）
 */
export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // 必要に応じてオリジンを制限する
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

/**
 * POST ハンドラ：お問い合わせのデータを Slack に転送する
 */
export async function POST(request: Request) {
  try {
    // リクエストのパース
    let body;
    try {
      body = await request.json();
    } catch (e) {
      console.error('リクエストのパースに失敗:', e);
      return NextResponse.json(
        { error: '無効なリクエスト形式です' },
        {
          status: 400,
          headers: { 'Access-Control-Allow-Origin': '*' },
        }
      );
    }

    const { name, email, message: messageContent } = body;

    // バリデーション
    if (!name || !email || !messageContent) {
      return NextResponse.json(
        { error: 'すべての項目を入力してください' },
        {
          status: 400,
          headers: { 'Access-Control-Allow-Origin': '*' },
        }
      );
    }

    // Webhook URL の取得と検証
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    console.log(process.env.SLACK_WEBHOOK_URL)
    if (!webhookUrl) {
      console.error('環境変数 SLACK_WEBHOOK_URL が設定されていません');
      return NextResponse.json(
        { error: 'サーバーの設定エラー' },
        {
          status: 500,
          headers: { 'Access-Control-Allow-Origin': '*' },
        }
      );
    }

    // Slack に送信するメッセージフォーマット
    const payload = {
      text: `新しい問い合わせ\n\n名前: ${name}\nメール: ${email}\n\n${messageContent}`,
    };

    // Slack に送信
    const slackResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const slackResponseText = await slackResponse.text();
    console.log('Slack API レスポンス:', slackResponse.status, slackResponseText);

    // Slack は成功時に "ok" を返すため、そのチェックをする
    if (!slackResponse.ok || slackResponseText !== 'ok') {
      throw new Error(`Slack API エラー: ${slackResponse.status} ${slackResponseText}`);
    }

    return NextResponse.json(
      { success: true },
      { headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  } catch (error) {
    console.error('問い合わせ処理エラー:', error);
    return NextResponse.json(
      { error: '送信に失敗しました。しばらく待ってから再度お試しください。' },
      { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  }
}



// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   try {
//     const data = await request.json();
    
//     // バリデーション
//     if (!data.name || !data.email || !data.message) {
//       return NextResponse.json(
//         { error: '必須項目が入力されていません' },
//         { status: 400 }
//       );
//     }
//     // Slack Webhook URL
//     const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    
//     if (!webhookUrl) {
//       throw new Error('Slack Webhook URLが設定されていません');
//     }

//     // Slackメッセージのフォーマット
//     const message = {
//       blocks: [
//         {
//           type: "header",
//           text: {
//             type: "plain_text",
//             text: "新しい問い合わせがありました",
//             emoji: true
//           }
//         },
//         {
//           type: "section",
//           fields: [
//             {
//               type: "mrkdwn",
//               text: `*名前:*\n${data.name}`
//             },
//             {
//               type: "mrkdwn",
//               text: `*メール:*\n${data.email}`
//             }
//           ]
//         },
//         {
//           type: "section",
//           text: {
//             type: "mrkdwn",
//             text: `*問い合わせ内容:*\n${data.message}`
//           }
//         },
//         {
//           type: "divider"
//         },
//         {
//           type: "context",
//           elements: [
//             {
//               type: "mrkdwn",
//               text: `*送信日時:* ${new Date().toLocaleString('ja-JP')}`
//             }
//           ]
//         }
//       ]
//     };

//     // Slackに送信
//     const response = await fetch(webhookUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(message),
//     });

//     if (!response.ok) {
//       throw new Error('Slackへの送信に失敗しました');
//     }

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error('問い合わせ送信エラー:', error);
//     return NextResponse.json(
//       { error: '送信に失敗しました' },
//       { status: 500 }
//     );
//   }
// } 