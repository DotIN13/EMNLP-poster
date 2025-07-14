import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:3000/poster.html", {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: "output.pdf",
    width: "36in",
    height: "24in",
    printBackground: true,
  });

  await browser.close();
})();
