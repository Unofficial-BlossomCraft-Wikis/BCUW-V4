import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment, e as addAttribute } from '../chunks/astro/server_qvJxq8Tn.mjs';
import 'kleur/colors';
import { a as getCollection } from '../chunks/_astro_content_U8N_at7f.mjs';
import { $ as $$FullPageBox } from '../chunks/fullPageBox_D8TmgXN3.mjs';
import { $ as $$ItemPreview } from '../chunks/ItemPreview_DPz1xG5u.mjs';
import { $ as $$CratePreview } from '../chunks/CratePreview_D0KTnD-4.mjs';
import { $ as $$BlogPostPreview } from '../chunks/BlogPostPreview_BIEKh1CX.mjs';
import { $ as $$TutorialPostPreview } from '../chunks/TutorialPostPreview_XrmgOmD6.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allItems = [...await getCollection("bcitems")];
  let recommendedItems = [];
  const shuffledItems = allItems.sort(() => Math.random() - 0.5);
  recommendedItems = shuffledItems.slice(0, Math.min(5, shuffledItems.length));
  const allCrates = [...await getCollection("crates")];
  let recommendedCrates = [];
  const shuffledCrates = allCrates.sort(() => Math.random() - 0.5);
  recommendedCrates = shuffledCrates.slice(0, Math.min(5, shuffledCrates.length));
  const allBlogPosts = [...await getCollection("blog")];
  let recommendedBlogPosts = [];
  const filteredBlogPosts = allBlogPosts.filter((post) => post.data.isDraft !== true );
  const sortedBlogPosts = filteredBlogPosts.sort((a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime());
  recommendedBlogPosts = sortedBlogPosts.slice(0, 5);
  const allTutorials = [...await getCollection("tutorials")];
  let recommendedTutorials = [];
  const filteredTutorials = allTutorials.filter((tutorial) => tutorial.data.isDraft !== true );
  const sortedTutorials = filteredTutorials.sort((a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime());
  recommendedTutorials = sortedTutorials.slice(0, 5);
  return renderTemplate`${renderComponent($$result, "Layout", $$FullPageBox, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="extra-top-padding"> <div class="flex h-[50%] flex-col-reverse justify-center md:flex-row"> <div class="prose flex flex-col items-center justify-center text-center md:basis-1/2 "> <h1>BCUW</h1> <p>
BlossomCraft Unofficial Wiki
<br> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
Owned and maintained by${" "}<span class="mention">@🌸 Altie122</span> ` })} </p> <p>
Now with a total of <span class="text-ranks-celestial">${allItems.length}</span> items and <span class="text-ranks-celestial">${allCrates.length}</span> crates! (and we are always adding more)
</p> </div> <div class="flex items-center justify-center md:basis-1/2 "> <img src="/bcuwTitleNormal.png" alt="BCUW" class="h-auto w-1/2"${addAttribute({
    filter: "drop-shadow(0 0 3rem hsla(306, 66%, 66%, 0.2))"
  }, "style")}${addAttribute(400, "width")}${addAttribute(400, "height")}> </div> </div> <div class="flex flex-row flex-wrap gap-2 w-full px-2"> <div class="flex-grow flex-shrink"> <h2 class="prose-h2 noborder text-center">Explore These Items:</h2> <div class="flex gap-2 flex-wrap flex-col w-full p-2"> ${recommendedItems.map((item) => (
    // @ts-expect-error post has two diffrent types that align enough to work
    renderTemplate`${renderComponent($$result2, "ItemPreview", $$ItemPreview, { "post": item })}`
  ))} </div> </div> <div class="flex-grow flex-shrink"> <h2 class="prose-h2 noborder text-center">Explore These Crates:</h2> <div class="flex gap-2 flex-wrap flex-col w-full p-2"> ${recommendedCrates.map((item) => renderTemplate`${renderComponent($$result2, "CratePreview", $$CratePreview, { "post": item })}`)} </div> </div> <div class="flex-grow flex-shrink"> <h2 class="prose-h2 noborder text-center">Recent Blog Posts:</h2> <div class="flex gap-2 flex-wrap flex-col w-full p-2"> ${recommendedBlogPosts && recommendedBlogPosts.map((item) => renderTemplate`${renderComponent($$result2, "BlogPostPreview", $$BlogPostPreview, { "post": item })}`)} </div> </div> <div class="flex-grow flex-shrink"> <h2 class="prose-h2 noborder text-center">Recent Tutorials:</h2> <div class="flex gap-2 flex-wrap flex-col w-full p-2"> ${recommendedTutorials && recommendedTutorials.map((item) => renderTemplate`${renderComponent($$result2, "TutorialPostPreview", $$TutorialPostPreview, { "post": item })}`)} </div> </div> </div> </main> ` })}`;
}, "/workspaces/BCUW-V4/src/pages/index.astro", void 0);
const $$file = "/workspaces/BCUW-V4/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
