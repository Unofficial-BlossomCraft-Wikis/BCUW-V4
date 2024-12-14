import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, a as renderComponent } from './astro/server_qvJxq8Tn.mjs';
import 'kleur/colors';
import { format } from 'date-fns';
import { C as CrateTagBadge } from './Badge_C50vlkbT.mjs';

const $$Astro = createAstro("https://bcuw.xyz");
const $$CratePreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CratePreview;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="border p-4 duration-300 ease-out focus-within:outline hover:bg-sidebar rounded-lg shadow flex-shrink flex-grow"> <a${addAttribute(`/crates/${post.slug}/`, "href")} data-astro-prefetch class="block outline-none"> <div class="flex flex-row gap-2"> <div class="flex flex-col gap-2 flex-shrink flex-grow"> <h3 class="text-lg sm:text-xl lg:text-2xl text-secondary-foreground">${post.data.title}</h3> <time${addAttribute(post.data.release.toISOString(), "datetime")}> ${format(post.data.release, "MMMM d, yyyy")} </time> </div> <div class="flex flex-wrap flex-col items-center flex-shrink flex-grow">
Tags:
${post.data.tags.map((tag) => {
    return renderTemplate`${renderComponent($$result, "CrateTagBadge", CrateTagBadge, { "tag": tag })}`;
  })} </div> </div> </a> </article>`;
}, "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/pages/crates/_components/CratePreview.astro", void 0);

export { $$CratePreview as $ };
