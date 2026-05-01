import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { createServer } from "node:http";

const root = import.meta.dirname;
const port = Number(process.env.PORT || 4173);

const routes = new Map([
  ["/", "index.html"],
  ["/docs", "docs.html"],
  ["/mcp", "mcp.html"],
  ["/pricing", "pricing.html"],
  ["/compare", "compare.html"],
  ["/tos", "tos.html"],
  ["/privacy", "privacy.html"],
]);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function resolvePath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const routeFile = routes.get(cleanPath);
  if (routeFile) return join(root, routeFile);

  const normalized = normalize(cleanPath).replace(/^(\.\.[/\\])+/, "");
  return join(root, normalized);
}

const server = createServer(async (request, response) => {
  const filePath = resolvePath(request.url || "/");
  const fallbackPath = join(root, "404.html");
  const target = existsSync(filePath) ? filePath : fallbackPath;

  try {
    const info = await stat(target);
    if (!info.isFile()) throw new Error("Not a file");

    response.writeHead(target === fallbackPath ? 404 : 200, {
      "Content-Type": types[extname(target)] || "application/octet-stream",
    });
    createReadStream(target).pipe(response);
  } catch {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Unable to serve file.");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Sinyx preview running at http://127.0.0.1:${port}`);
});
