import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_qvJxq8Tn.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_H7v7Ft_U.mjs';
import 'clsx';

const frontmatter = {
  "title": "Blossom Key - LEGACY",
  "images": {
    "color": "MUfCHtba5zu7Mn6ZZMba5zu7iLjmT6d2S0owlMqJvpKOfXeA",
    "item": "MUfCHtba5zu7e9qmdKFzXwvQsBGrRSkMJAq9nL0uKtI4Ypg5"
  },
  "type": "key",
  "crate": "anniversary",
  "multiinstance": true,
  "multiinstanceuuid": "ec9f006c-353b-4db3-a648-fd00aa725f21"
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

const url = "src/content/bcitems/Anniversary/BlossomKey/Legacy.mdx";
const file = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/bcitems/Anniversary/BlossomKey/Legacy.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/bcitems/Anniversary/BlossomKey/Legacy.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
