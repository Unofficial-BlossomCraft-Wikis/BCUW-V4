import { b as createAstro, c as createComponent, r as renderTemplate, e as addAttribute, a as renderComponent, k as renderHead, g as renderSlot } from './astro/server_qvJxq8Tn.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

const $$Astro = createAstro("https://bcuw.xyz");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Head;
  const { title, description, icon, banner } = Astro2.props;
  const domain = String(Astro2.site);
  const banner_formatted = banner.startsWith("/") ? banner.slice(1) : banner;
  const page = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate`<!-- DO NOT ADD THE HEAD TAG --><!-- sitemap, favicon, title, and metadata --><link rel="sitemap" href="/sitemap-index.xml"><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/png"${addAttribute(icon, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="manifest" href="/manifest.json"><title>${title}</title><!-- canonical --><link rel="canonical"${addAttribute(page, "href")}><!-- Social meta --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(page, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:image"${addAttribute(domain + banner_formatted, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:site_name" content="Bleeding Stars"><meta property="og:locale" content="en_US"><meta property="og:image:width" content="1000"><meta property="og:image:height" content="500"><!-- Twitter --><meta name="twitter:card" content="summary"><meta name="twitter:site" content="@LolbitTheFox14"><meta name="twitter:creator" content="@LolbitTheFox14"><meta name="twitter:url"${addAttribute(page, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(domain + banner_formatted, "content")}><!-- apple --><link rel="apple-touch-icon"${addAttribute(icon, "href")}><link rel="apple-touch-startup-image"${addAttribute(domain + banner_formatted, "href")}><meta name="apple-mobile-web-app-title"${addAttribute(title, "content")}>`;
}, "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/components/head.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_b || (_b = __template([`<script>
	const getThemePreference = () => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return localStorage.getItem('theme');
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};
	const isDark = getThemePreference() === 'dark';
	document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
 
	if (typeof localStorage !== 'undefined') {
		const observer = new MutationObserver(() => {
			const isDark = document.documentElement.classList.contains('dark');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		});
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
	}
<\/script> <script>
	document.addEventListener("DOMContentLoaded", () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Check if the user is on an iPhone or iPad
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

  if (isIOS) {
    // Apply a specific class or attribute for iOS devices
    document.documentElement.classList.add("ios-device");
  }
});
<\/script> <html lang="en"> <head>`, "", '</head> <body class="h-svh w-screen overflow-hidden"> ', " ", " </body></html>"])), renderComponent($$result, "Head", $$Head, { "title": "BCUW", "description": "BlossomCraft Unofficial Wiki | The community-run BlossomCraft Wiki, documenting since August 13, 2023.", "icon": "/bcuwOnlyTitleSquare.png", "banner": "/bcuwTitleNormal.png" }), renderHead(), renderComponent($$result, "Layout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@components/layout", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` }), process.env.NODE_ENV === "production" && renderTemplate(_a || (_a = __template(['<!-- Cloudflare Web Analytics --><script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon="{&quot;token&quot;: &quot;c601a619e3b44ae382b4fe5262cfbca2&quot;}"><\/script><!-- End Cloudflare Web Analytics -->']))));
}, "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/layouts/main.astro", void 0);

export { $$Main as $ };
