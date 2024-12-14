import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_qvJxq8Tn.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_H7v7Ft_U.mjs';
import 'clsx';

const frontmatter = {
  "poster": "LegionOfBullets",
  "publishDate": "2020-12-16T22:13:00.000Z"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: [createVNode("span", {
          className: "mention",
          children: "@here"
        }), " Helper Application is finally here!"]
      }), "\r\nBlossomCraft is looking for chill players who want to join the BlossomCraft staff! We are currently receiving applications for the Helper role through the form below."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "What does a Helper do?"
      }), "\r\nHelpers will be the backbone of the server as they are active members of the community who can help new and old players alike. This includes welcoming anyone who stops by BlossomCraft and answering any questions they may have. Knowing the many features BlossomCraft as well as vanilla Minecraft features is a must as this will assist you in your capabilities. Helpers will also moderate the chat and insure the server rules are not being broken."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Applying"
      }), "\r\nIf you are interested, feel free to apply here: ", createVNode("span", {
        className: "bg-black text-white",
        children: [" Please join the ", createVNode(_components.a, {
          href: "https://discord.gg/blossomcraft",
          children: "offical discord server"
        }), " for the link"]
      }), ". We will accept up to three helpers. Applications end on the 31st of December, but we may complete the final selection a bit later."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Receiving the Helper role will also enable you to reach higher moderation positions."
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Helper Applications are currently closed."
      })
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

const url = "src/content/announcements/2020/12/16.mdx";
const file = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/announcements/2020/12/16.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/announcements/2020/12/16.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
