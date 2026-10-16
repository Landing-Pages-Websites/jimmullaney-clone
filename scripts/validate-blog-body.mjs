import { readFileSync } from "node:fs";

const route = readFileSync("src/app/blog/[year]/[month]/[slug]/page.tsx", "utf8");
const article = readFileSync(
  "src/app/blog/how-to-change-jurisdiction-for-child-custody-in-florida-body.ts",
  "utf8",
);

if (route.includes("<p dangerouslySetInnerHTML")) {
  throw new Error("Blog body blocks must not be wrapped in a paragraph element.");
}
if (!route.includes("<div dangerouslySetInnerHTML={{ __html: paragraph }} />")) {
  throw new Error("Blog body blocks are not rendered through the block-level wrapper.");
}
for (const block of ["<h2>", "<ol>", "<li>"]) {
  if (!article.includes(block)) {
    throw new Error(`Regression fixture is missing ${block} content.`);
  }
}
console.log("Blog body block rendering regression assertion passed.");
