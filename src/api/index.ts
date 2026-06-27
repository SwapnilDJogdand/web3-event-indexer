import { db } from "ponder:api";
import schema from "ponder:schema";
import { Hono } from "hono";
import { client, graphql } from "ponder";
import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const frontendRoot = join(__dirname, "../../frontend");

const app = new Hono();

app.get("/", async (c) => {
  const html = await fs.readFile(join(frontendRoot, "index.html"), "utf8");
  return c.body(html, 200, { "Content-Type": "text/html; charset=utf-8" });
});

app.use("/sql/*", client({ db, schema }));
app.use("/graphql", graphql({ db, schema }));

app.get("/style.css", async (c) => {
  const body = await fs.readFile(join(frontendRoot, "style.css"), "utf8");
  return c.body(body, 200, { "Content-Type": "text/css; charset=utf-8" });
});

app.get("/app.js", async (c) => {
  const body = await fs.readFile(join(frontendRoot, "app.js"), "utf8");
  return c.body(body, 200, { "Content-Type": "application/javascript; charset=utf-8" });
});

export default app;
