import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_qvJxq8Tn.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_H7v7Ft_U.mjs';
import 'clsx';

const frontmatter = {
  "title": "Anniversary Crate 2024",
  "release": "2024-11-01T19:56:00.000Z",
  "cratePreview": ["MUfCHtba5zu7EBiQqdUXfBVD5mju0pe2iyr4F19s3bIxqLTS", "MUfCHtba5zu72JMNm8XZpVNYALOowxWzHdDGvBsmI7hP6Qu8"],
  "items": ["anniversary/blossomkey/legacy", "anniversary/blossomkey/spirit", "anniversary/blossomkey/cosmic", "anniversary/blossomkey/fantasy", "anniversary/blossomkey/elemental", "anniversary/blossomkey/odyssey", "anniversary/blossomkey/arcane", "anniversary/blossomkey/ragnarok", "anniversary/blossomkey/dynasty", "anniversary/blossomkey/constellation", "anniversary/blossomkey/chronopunk", "anniversary/blossomkey/elementalii", "anniversary/communitykey/vol1", "anniversary/communitykey/vol2", "anniversary/aprilfools2021", "anniversary/halloween2021", "anniversary/christmas2021", "anniversary/artifact", "anniversary/warden", "anniversary/halloween2022", "anniversary/christmas2022", "anniversary/april", "anniversary/forestgod", "anniversary/communitykey/vol3", "anniversary/halloween2023", "anniversary/christmas2023", "anniversary/valentines", "anniversary/spring", "anniversary/piratecove", "anniversary/blossomcrown", "anniversary/blossomstaff"],
  "tags": ["other"],
  "warpKeyShopPurchasable": false,
  "shopPurchasable": true,
  "shopPrice": 9.95
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

const url = "src/content/crates/anniversary.mdx";
const file = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/crates/anniversary.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/crates/anniversary.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
