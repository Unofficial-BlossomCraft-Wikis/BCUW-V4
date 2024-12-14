import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_qvJxq8Tn.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getEntry } from './_astro_content_Ce-4g-Ei.mjs';

const allImages = /* #__PURE__ */ Object.assign({

});
async function resolveImage(entry) {
  if (!entry.data.pfp) {
    return void 0;
  }
  const pfp = entry.data.pfp;
  if (pfp.startsWith("https://")) {
    return {
      src: pfp
    };
  }
  if (!(entry.data.pfp in allImages)) {
    throw new Error(
      `[authors] Image for "${entry.data.pfp}" not found! Provided: "${entry.data.pfp}", is there a typo?`
    );
  }
  const { default: image } = await allImages[entry.data.pfp]();
  return image;
}

const $$Astro = createAstro("https://bcuw.xyz");
const $$Avatar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Avatar;
  let { name, image, lg = false, xl = false } = Astro2.props;
  if (!image && name) {
    const author = await getEntry("authors", name);
    image = author && (await resolveImage(author))?.src;
  }
  return renderTemplate`${image && renderTemplate`${maybeRenderHead()}<img${addAttribute([
    "my-0 inline-block rounded-full border border-accent drop-shadow-2xl",
    lg ? "h-6 w-6 md:h-10 md:w-10" : xl ? "h-6 w-6 md:h-14 md:w-14" : "h-6 w-6"
  ], "class:list")}${addAttribute(image, "src")} alt="" aria-hidden="true"${addAttribute(48, "width")}${addAttribute(48, "height")} loading="lazy" decoding="async">`}`;
}, "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/components/avatar.astro", void 0);

export { $$Avatar as $ };
