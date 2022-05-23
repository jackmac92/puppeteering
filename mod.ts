import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";
import { cmdResponse } from "https://gitlab.com/jackmac92/deno-exec/-/raw/master/mod.ts";

export const getDefaultChromePage = async () => {
  const debugPort = await cmdResponse(
    `href-router --info --profile "chrome/Default" | jq '.thisprofile.port'`
  );
  const browser = await puppeteer.connect({
    browserURL: `http://127.0.0.1:${debugPort}`,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  return page;
};

// NOTE I want to create a new window for this attached processes,
// but doesn't seem like I can force it to open in a different window
// since it opens in the defaultBrowserContext
