import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// mailrain.md and malbot.md are intentionally excluded
const projects = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!**/README.md", "!mailrain.md", "!malbot.md"],
    base: "../development/projects",
  }),
  schema: z.object({}),
});

export const collections = { projects };
