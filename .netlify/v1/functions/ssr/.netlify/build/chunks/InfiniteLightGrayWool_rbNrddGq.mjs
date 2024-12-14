import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_qvJxq8Tn.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_H7v7Ft_U.mjs';
import 'clsx';

const frontmatter = {
  "title": "Infinite Light Gray Wool",
  "images": {
    "color": "MUfCHtba5zu79SarsRigBL758cRPNbnWesMklZIOzFX1gKDo",
    "item": "MUfCHtba5zu7ydXRkG4Lc0YOjy3hMtClX2m4wAoWFZEJzPRa"
  },
  "type": "magic/infinite",
  "crate": "wool",
  "unmodifiable": true,
  "winChance": 6
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/bcitems/WoolCrate/InfiniteLightGrayWool.mdx";
const file = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/bcitems/WoolCrate/InfiniteLightGrayWool.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/bcitems/WoolCrate/InfiniteLightGrayWool.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
