import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_qvJxq8Tn.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_H7v7Ft_U.mjs';
import 'clsx';

const frontmatter = {
  "poster": "LegionOfBullets",
  "publishDate": "2020-12-14T16:46:00.000Z"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Blossom Build Event"
      }), "\r\nWelcome ", createVNode("span", {
        className: "mention",
        children: "@here"
      }), " to the first ever BlossomCraft event! For our first ever event, we will be holding the tried and true, ", createVNode(_components.strong, {
        children: "BUILD CONTEST"
      }), "! The theme of the contest will be ", createVNode(_components.strong, {
        children: "OREIENTAL"
      }), " (Japanese, Asian). For inspiration, take a look at /spawn! Anything is allowed as long as it follows the theme (eg. Interiors, landscapes, statues, buildings, etc)."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Rewards"
      }), "\r\n1st: 3 Blossom Keys, $10000, 5000 Claim Blocks\r\n2nd: 2 Blossom Keys, $5000, 2500 Claim Blocks\r\n3rd: 1 Blossom Key, $2500, 1250 Claim Blocks"]
    }), "\n", createVNode(_components.p, {
      children: "Community Vote: 1 Spawner Key + Everything located in the community chest in /spawn."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Rules"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "All normal server rules will be followed."
      }), "\n", createVNode(_components.li, {
        children: "All builds must be built on the server."
      }), "\n", createVNode(_components.li, {
        children: "Group builds are allowed, but rewards must be divided among the group."
      }), "\n", createVNode(_components.li, {
        children: "Only one submission is allowed per group/player."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Submission"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "The build contest ends on 11:59 PM, January 17th, EST."
      }), "\n", createVNode(_components.li, {
        children: ["All build submissions will go into ", createVNode("span", {
          className: "mention",
          children: "#⁠unknown"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Submissions need to include: your Minecraft Username, screenshots (1-5), and coordinates of the build."
      }), "\n", createVNode(_components.li, {
        children: "A community vote will also be held after the build contest ends."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "THE BUILD CONTEST HAS ENDED"
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

const url = "src/content/announcements/2020/12/14.mdx";
const file = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/announcements/2020/12/14.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/announcements/2020/12/14.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
