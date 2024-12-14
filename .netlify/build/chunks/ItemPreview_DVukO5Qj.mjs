import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, a as renderComponent } from './astro/server_qvJxq8Tn.mjs';
import 'kleur/colors';
import { $ as $$CDN } from './CDN_C5zgV1Rm.mjs';
import { I as ItemTypeBadge, B as Badge } from './Badge_C50vlkbT.mjs';

const $$Astro = createAstro("https://bcuw.xyz");
const $$ItemPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ItemPreview;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="border p-4 duration-300 ease-out focus-within:outline hover:bg-sidebar rounded-lg shadow flex-shrink flex-grow"> <div> <a${addAttribute(`/items/${post.slug.replaceAll("/", "-")}/`, "href")} class="flex flex-row gap-2 items-center flex-wrap"> ${renderComponent($$result, "CDN", $$CDN, { "id": post.data.images.item, "alt": post.data.title })} <h2 class="noborder"${addAttribute(post.slug, "id")}>${post.data.title}</h2> <div class="flex flex-col gap-2"> ${renderTemplate`${renderComponent($$result, "ItemTypeBadge", ItemTypeBadge, { "type": post.data.type })}`} ${post.data.rarity && renderTemplate`${renderComponent($$result, "Badge", Badge, { "className": "no-underline" }, { "default": ($$result2) => renderTemplate`${post.data.rarity}` })}`} </div> ${post.data.enchantments && renderTemplate`<div class="flex flex-wrap flex-row gap-2"> ${post.data.enchantments.map((enchantment) => {
    return renderTemplate`${renderComponent($$result, "Badge", Badge, {}, { "default": ($$result2) => renderTemplate`${enchantment}` })}`;
  })} </div>`} </a> </div> </article>`;
}, "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/pages/items/_components/ItemPreview.astro", void 0);

export { $$ItemPreview as $ };
