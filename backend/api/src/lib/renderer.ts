import { experimental_AstroContainer } from "astro/container";
import { render } from "astro:content";
import reactRenderer from "@astrojs/react/server.js";
import mdxRenderer from "@astrojs/mdx/server.js";


export async function renderMDX(source: any) {
  const container = await experimental_AstroContainer.create();
  container.addServerRenderer({
    renderer: mdxRenderer,
    name: "",
  });

  container.addServerRenderer({
    renderer: reactRenderer,
    name: "",
  });
  container.addClientRenderer({
    name: "@astrojs/react",
    entrypoint: "@astrojs/react/client.js",
  });
  const { Content } = await render(source);
  const result = await container.renderToString(Content);
  return result;
}