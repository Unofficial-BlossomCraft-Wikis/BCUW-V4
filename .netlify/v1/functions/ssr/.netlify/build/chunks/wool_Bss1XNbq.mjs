import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_qvJxq8Tn.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_H7v7Ft_U.mjs';
import 'clsx';

const frontmatter = {
  "title": "Wool Crate",
  "release": "2024-01-29T19:40:00.000Z",
  "cratePreview": ["MUfCHtba5zu7Us7xhmOC2wXIL30kZBvz4gMRTOldixcq8FWG"],
  "items": ["woolcrate/infinitewhitewool", "woolcrate/infinitelightgraywool", "woolcrate/infinitegraywool", "woolcrate/infiniteblackwool", "woolcrate/infinitebrownwool", "woolcrate/infiniteredwool", "woolcrate/infiniteorangewool", "woolcrate/infiniteyellowwool", "woolcrate/infinitelimewool", "woolcrate/infinitegreenwool", "woolcrate/infinitecyanwool", "woolcrate/infinitelightbluewool", "woolcrate/infinitebluewool", "woolcrate/infinitepurplewool", "woolcrate/infinitemagentawool", "woolcrate/infinitepinkwool"],
  "tags": ["infinite crate"],
  "warpKeyShopPurchasable": true,
  "warpKeyShopPrice": 60000
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

const url = "src/content/crates/wool.mdx";
const file = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/crates/wool.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/crates/wool.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
