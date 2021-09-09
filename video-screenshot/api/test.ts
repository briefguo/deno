import type { APIHandler } from "aleph/types.d.ts";

export const handler: APIHandler = ({ response }) => {
  const api = localStorage.setItem("API", "GYJ");
  console.log(location);
  response.json({ message: "Hello API" });
};
