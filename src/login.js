// import findElementByText from './utilities/findElementByText.js';
import fs from 'fs';

export default async function (page) {
//   const browser = await puppeteer.launch({headless: false,
//     executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
//   });
//   const page = await browser.newPage();
//   await page.setViewport({width: 1200, height: 720});
    await page.goto('https://test.orkmanager.com/en/User/Login', { waitUntil: 'networkidle0' }); // wait until page load
    await page.type('#Username', process.env.username);
    await page.type('#Password', process.env.password);
    await Promise.all([
            page.click('#submit_login_button'),
            page.waitForNavigation({ waitUntil: 'networkidle0' })
        ]);
    const cookies = await page.cookies()
    const cookieJson = JSON.stringify(cookies)

    fs.writeFileSync('cookies.json', cookieJson)
    page.waitFor(3000)
}

