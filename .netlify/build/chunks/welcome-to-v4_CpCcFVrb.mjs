import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_qvJxq8Tn.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_H7v7Ft_U.mjs';
import 'clsx';

const frontmatter = {
  "title": "Welcome to BCUW v4!",
  "description": "Welcome to BCUW v4! This blog post will cover some of the changes and what to expect in the future.",
  "publishDate": "2024-10-23T18:39:12.000Z",
  "authors": ["altie122"],
  "isDraft": false
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "bcuw-v4-why",
    "text": "BCUW v4: Why?"
  }, {
    "depth": 1,
    "slug": "bcuw-v4-whats-changed",
    "text": "BCUW v4: What’s Changed?"
  }, {
    "depth": 1,
    "slug": "whats-coming-in-the-future",
    "text": "What’s Coming in the Future?"
  }, {
    "depth": 1,
    "slug": "short-term-whats-happening",
    "text": "Short Term: What’s Happening?"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    del: "del",
    h1: "h1",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "bcuw-v4-why",
      children: "BCUW v4: Why?"
    }), "\n", createVNode(_components.p, {
      children: "The first time we switched from Astro Starlight, the build time was reaching a minute and a half. While that’s still better than v1 of the site, v3 wasn’t fast enough. Although we are sticking with Astro, we are switching off of Starlight and coding the site from scratch!"
    }), "\n", createVNode(_components.h1, {
      id: "bcuw-v4-whats-changed",
      children: "BCUW v4: What’s Changed?"
    }), "\n", createVNode(_components.p, {
      children: "We have now switched off of Astro Starlight to just Astro. This will not only help speed up build time but also give us more customizability when it comes to making pages. With this switch, not only do we now have a blog, but we also have a whole new layout! Although we are still working on search, this site should be fully functional by the end of 2024!"
    }), "\n", createVNode(_components.h1, {
      id: "whats-coming-in-the-future",
      children: "What’s Coming in the Future?"
    }), "\n", createVNode(_components.p, {
      children: "Ah, the fun section! I have a lot of plans for the site, some of which are in alpha and some still in planning. So, they may not be released for a while, if ever, but here’s a list of my plans:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "A downloadable desktop app (planned)"
      }), "\n", createVNode(_components.li, {
        children: ["A community website designed for buying and selling items and listing your player warps (", createVNode(_components.a, {
          href: "https://community.bcuw.xyz",
          children: "alpha"
        }), " (USA only as of now, we are trying to get the site up in other countries.))"]
      }), "\n", createVNode(_components.li, {
        children: ["A Minecraft mod that connects with the site (both the main docs and the community website) (", createVNode(_components.del, {
          children: "planned"
        }), " We have permission; programming will start as early as today (as of writing)!)"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Again, these are mostly ideas, so they may not be implemented."
    }), "\n", createVNode(_components.h1, {
      id: "short-term-whats-happening",
      children: "Short Term: What’s Happening?"
    }), "\n", createVNode(_components.p, {
      children: "Within the next few months, I will be working to get the community website up and running and getting previous crates documented! I plan to have these done by the end of 2024! We should also have a working alpha, if not beta or release, of both the desktop app and Minecraft mod by the end of the year! For now, I will prioritize getting the wiki caught up with all of the crates!"
    }), "\n", createVNode(_components.p, {
      children: "That’s all for now! Have a great day or night!"
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

const url = "src/content/blog/welcome-to-v4.mdx";
const file = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/blog/welcome-to-v4.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/blog/welcome-to-v4.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
