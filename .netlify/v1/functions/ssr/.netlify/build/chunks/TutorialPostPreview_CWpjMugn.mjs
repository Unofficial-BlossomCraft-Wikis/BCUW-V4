import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, a as renderComponent } from './astro/server_qvJxq8Tn.mjs';
import 'kleur/colors';
import { format } from 'date-fns';
import { $ as $$Avatar } from './avatar_B7rOBXvT.mjs';

const $$Astro = createAstro("https://bcuw.xyz");
const $$TutorialPostPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TutorialPostPreview;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`border p-4 transition-color duration-300 ease-out focus-within:outline hover:bg-sidebar rounded-lg shadow`, "class")}> <a${addAttribute(`/tutorials/${post.slug}/`, "href")} data-astro-prefetch class="block outline-none"> <header> <time${addAttribute(post.data.publishDate.toISOString(), "datetime")}> ${format(post.data.publishDate, "MMMM d, yyyy")} </time> <div class="flex flex-wrap items-center gap-2"> <span>By</span> ${post.data.authors.map((author) => {
    return renderTemplate`<div class="flex items-center gap-2"> ${renderComponent($$result, "Avatar", $$Avatar, { "name": author })} <span>${author}</span> </div>`;
  })} </div> </header> <div class="mt-6 grid gap-x-16 gap-y-4 md:grid-cols-2"> <h3 class="text-lg sm:text-xl lg:text-2xl text-secondary-foreground">${post.data.title}</h3> <p class="text-secondary-foreground">${post.data.description}</p> </div> </a> </article>`;
}, "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/pages/tutorials/_components/TutorialPostPreview.astro", void 0);

export { $$TutorialPostPreview as $ };
