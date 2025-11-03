import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:8080/poster.html", {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: "output.pdf",
    width: "33.1in",
    height: "46.8in",
    printBackground: true,
  });

  await browser.close();
})();
