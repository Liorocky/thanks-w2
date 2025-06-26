const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thanks W2 :)</title>
    <style>
        img {
            max-width: 100%;
            height: auto;
            display: block;
            margin-top: 20px;
            margin: 0 auto;
            width: 50%; /* 缩小图片 */
        }
    </style>
</head>
<body>
    <p style="text-align: center;"><span style="font-size: 36pt; font-family: wingdings, 'zapf dingbats';"><strong>谢谢二哥慷慨赞助</strong></span></p>
    <p style="text-align: center;"><span style="font-family: 'comic sans ms', sans-serif; font-size: 36pt;">Thank you W2 for your generous sponsorship</span></p>
    <p style="text-align: center;"><span style="font-family: 'comic sans ms', sans-serif; font-size: 36pt;">Merci W2 pour votre g&eacute;n&eacute;reux parrainage</span></p>

    <img src="https://imgur.la/images/2025/06/23/c542d64fba5ec0e661e4a774de7a171f.md.jpg" alt="Additional Image">

</body>
</html> `;

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  return new Response(htmlContent, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
} 