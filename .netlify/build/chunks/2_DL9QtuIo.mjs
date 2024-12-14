import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_qvJxq8Tn.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_H7v7Ft_U.mjs';
import 'clsx';

const frontmatter = {
  "poster": "LegionOfBullets",
  "publishDate": "2020-12-11T09:05:00.000Z"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode("span", {
        className: "mention",
        children: "@here"
      }), " Server is back up! For our Bedrock players the new port is the default port (19132). Everything should be as you left it. Currently the voting site ", createVNode(_components.a, {
        href: "https://minecraft-server-list.com/server/469971/vote/",
        children: "https://minecraft-server-list.com/server/469971/vote/"
      }), " is temporarily disabled."]
    }), "\n", createVNode(_components.p, {
      children: "Edit: All voting sites work now!"
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

const url = "src/content/announcements/2020/12/11/2.mdx";
const file = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/announcements/2020/12/11/2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/announcements/2020/12/11/2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
