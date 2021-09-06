/// <reference path="./deploy.d.ts" />

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(
    new Response("Hello world, I'm GYJ", {
      status: 200,
      headers: {
        server: "deploy",
        "content-type": "text/plain",
      },
    })
  );
});
