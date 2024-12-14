import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_qvJxq8Tn.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_H7v7Ft_U.mjs';
import 'clsx';

const frontmatter = {
  "poster": "LegionOfBullets",
  "publishDate": "2020-12-08T17:14:00.000Z"
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
      children: ["There will be a planned maintenance at ", createVNode(_components.strong, {
        children: "10PM Thursday"
      }), " to ", createVNode(_components.strong, {
        children: "10AM Friday EST"
      }), " due to a hosting change. Stay tuned for any updates!"]
    }), "\n", createVNode(_components.p, {
      children: ["After the maintenance, Ill update post the new port for ", createVNode(_components.strong, {
        children: "Bedrock players"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Thank you everyone who helped make this happen!"
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

const url = "src/content/announcements/2020/12/8.mdx";
const file = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/announcements/2020/12/8.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/announcements/2020/12/8.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
