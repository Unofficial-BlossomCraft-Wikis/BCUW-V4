import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, g as renderSlot } from './astro/server_qvJxq8Tn.mjs';
import 'kleur/colors';
import { $ as $$Main } from './main_FWQ_Vt29.mjs';

const $$FullPageBox = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full px-2 md:pl-0 pb-2 h-[calc(100svh-4rem)] lg:h-[calc(100%-1rem)]"> <div class="flex flex-row bg-sidebar text-sidebar-foreground rounded-lg border border-sidebar-border shadow h-full overflow-y-scroll main-scroll"> ${renderSlot($$result2, $$slots["default"])} </div> </div> ` })}`;
}, "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/layouts/fullPageBox.astro", void 0);

export { $$FullPageBox as $ };
