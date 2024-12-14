import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_qvJxq8Tn.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_H7v7Ft_U.mjs';
import 'clsx';

const frontmatter = {
  "poster": "LegionOfBullets",
  "publishDate": "2020-12-01T04:28:00.000Z"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Just a quick note on the map reset policy:"
    }), "\n", createVNode(_components.p, {
      children: ["The overworld and Nether will ", createVNode(_components.strong, {
        children: "NEVER"
      }), " be reset. When any new update hit that impact world generation or if the map gets overpopulated overtime, the world border will expand to reflect these changes."]
    }), "\n", createVNode(_components.p, {
      children: "When the End starts to get a bit stale, or when elytra’s start becoming too scarce, we will cast a vote to see if players prefer if they want the End to be reset or if they rather have the border expand. Though this won’t happen at least for a month plus."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/announcements/2020/12/1.mdx";
const file = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/announcements/2020/12/1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/announcements/2020/12/1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
