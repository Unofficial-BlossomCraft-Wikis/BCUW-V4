import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from './astro/server_qvJxq8Tn.mjs';
import 'kleur/colors';

const $$Astro = createAstro("https://bcuw.xyz");
const $$CDN = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CDN;
  const { id, alt, copyurl, copy, divClassName, imgClassName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "CDNBase", null, { "url": `https://utfs.io/a/co6j4hk884/${id}`, "alt": alt, "copyurl": copyurl, "copy": copy, "divClassName": divClassName, "imgClassName": imgClassName, "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/components/CDNBase", "client:component-export": "default" })}`;
}, "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/components/CDN.astro", void 0);

export { $$CDN as $ };
