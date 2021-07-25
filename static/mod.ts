/// <reference path="./../deploy.d.ts" />

async function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);

  // This is how the proxy works:
  // 1. A request comes in for a specific asset.
  // 2. We construct a URL to that asset.
  // 3. We fetch the asset and respond to the request.

  // Check if the request is for style.css.
  if (pathname.startsWith("/style.css")) {
    //  Construct a new URL to style.css by using the URL
    //  of the script (mod.ts) as base (import.meta.url).
    const style = new URL("styles.css", import.meta.url);
    // Fetch the asset and return the fetched response
    // to the client.
    const response = await fetch(style);
    // We cannot directly modify the headers of a Response instance
    // as they are immuntable. So we create a new headers object
    // using the existing headers of the response.
    const headers = new Headers(response.headers);
    // Set the appropriate content-type header value.
    headers.set("content-type", "text/css; charset=utf-8");
    // Construct a new response with the modified headers.
    return new Response(response.body, { ...response, headers });
  }

  return new Response(
    `<html>
      <head>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    }
  );
}

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});
