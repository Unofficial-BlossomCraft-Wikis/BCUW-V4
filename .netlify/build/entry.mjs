import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_3yO7qcg5.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/images/preview.astro.mjs');
const _page3 = () => import('./pages/blog/_slug_.astro.mjs');
const _page4 = () => import('./pages/blog/_---page_.astro.mjs');
const _page5 = () => import('./pages/cdn.astro.mjs');
const _page6 = () => import('./pages/contributing.astro.mjs');
const _page7 = () => import('./pages/crates/_---page_.astro.mjs');
const _page8 = () => import('./pages/crates/_---slug_.astro.mjs');
const _page9 = () => import('./pages/credits.astro.mjs');
const _page10 = () => import('./pages/discordresources.astro.mjs');
const _page11 = () => import('./pages/foreign-ip.astro.mjs');
const _page12 = () => import('./pages/items/all.astro.mjs');
const _page13 = () => import('./pages/items/_slug_.astro.mjs');
const _page14 = () => import('./pages/items/_---page_.astro.mjs');
const _page15 = () => import('./pages/logos.astro.mjs');
const _page16 = () => import('./pages/officialresources.astro.mjs');
const _page17 = () => import('./pages/privacy.astro.mjs');
const _page18 = () => import('./pages/ranks.astro.mjs');
const _page19 = () => import('./pages/tutorials/_slug_.astro.mjs');
const _page20 = () => import('./pages/tutorials/_---page_.astro.mjs');
const _page21 = () => import('./pages/usermaderesources.astro.mjs');
const _page22 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/images/preview.ts", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog/[...page].astro", _page4],
    ["src/pages/cdn.mdx", _page5],
    ["src/pages/contributing.mdx", _page6],
    ["src/pages/crates/[...page].astro", _page7],
    ["src/pages/crates/[...slug].astro", _page8],
    ["src/pages/credits.mdx", _page9],
    ["src/pages/DiscordResources.mdx", _page10],
    ["src/pages/foreign-ip.astro", _page11],
    ["src/pages/items/all.astro", _page12],
    ["src/pages/items/[slug].astro", _page13],
    ["src/pages/items/[...page].astro", _page14],
    ["src/pages/logos.mdx", _page15],
    ["src/pages/OfficialResources.mdx", _page16],
    ["src/pages/privacy.mdx", _page17],
    ["src/pages/ranks.mdx", _page18],
    ["src/pages/tutorials/[slug].astro", _page19],
    ["src/pages/tutorials/[...page].astro", _page20],
    ["src/pages/UserMadeResources.astro", _page21],
    ["src/pages/index.astro", _page22]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b25f592a-9fb1-4b58-b6a5-2af8f4e282a7"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
