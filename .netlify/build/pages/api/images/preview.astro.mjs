import puppeteer from 'puppeteer';
import axios from 'axios';
import robotsParser from 'robots-parser';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const allowedSites = [
  "https://docs.google.com/spreadsheets/d/1yf47G3E3BYSiWvWH5bD7ZWq1K1-ySP766eHpFuvJwpc/edit?usp=sharing",
  "https://www.pythonanywhere.com/gists/2c0915f71ab5a67ad03ce90136d2710a/BlossomCraft Jobs Calculator/ipython/",
  "https://www.pythonanywhere.com/gists/2c0915f71ab5a67ad03ce90136d2710a/BlossomCraft%20Jobs%20Calculator/ipython/",
  "https://minecraftcircle.pages.dev/"
];
async function checkRobotsTxt(siteUrl, userAgent) {
  const robotsUrl = new URL("/robots.txt", siteUrl).toString();
  try {
    const response = await axios.get(robotsUrl);
    const robotsTxt = response.data;
    const robots = robotsParser(robotsUrl, robotsTxt);
    return robots.isAllowed(siteUrl, userAgent);
  } catch (error) {
    console.error("Error fetching robots.txt:", error);
    return true;
  }
}
async function GET({ params, request }) {
  try {
    const url = new URL(request.url);
    const site = url.searchParams.get("site");
    const darkmode = url.searchParams.get("darkmode");
    if (!site) {
      return new Response("Missing 'site' parameter", { status: 400 });
    }
    console.log(site);
    console.log(allowedSites);
    console.log(allowedSites.includes(site));
    if (!allowedSites.includes(site)) {
      return new Response("Forbidden", { status: 403 });
    }
    const userAgent = "BCUWBot/1.0 (+https://bcuw.xyz/bot-info)";
    const isAllowed = await checkRobotsTxt(site, userAgent);
    if (!isAllowed) {
      return new Response("Forbidden by robots.txt", { status: 403 });
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setUserAgent(userAgent);
    await page.setViewport({ width: 1920, height: 1080 });
    if (darkmode === "true") {
      await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "dark" }]);
    }
    await page.goto(site, { waitUntil: "networkidle2" });
    const image = await page.screenshot();
    await browser.close();
    return new Response(image, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=3600"
      }
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
