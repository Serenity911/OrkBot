
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import login from './login.js';
import checkNotification from './checkNotification.js'
import { handleSignInConference, isSignedIn } from './handleConference.js'

const browser = await puppeteer.launch({
  executablePath: '/opt/homebrew/bin/chromium'
});
let page = await browser.newPage();
await login(page)
page = await browser.newPage()
const cookies = fs.readFileSync('cookies.json', 'utf8')
const deserializedCookies = JSON.parse(cookies)
await page.setCookie(...deserializedCookies)
await page.goto('https://test.orkmanager.com/en/User/View');

const usernameDiv = await page.$eval('#username a', (el) => el.innerHTML);
if (usernameDiv === 'Login!') {
  console.log("log or nothing")
}
else {
  console.log("logged in")
}
let notification = await checkNotification(page)
console.log(notification)
if (notification === "You should sign into a Conference") {
  console.log("here")
  await page.click('#badges_div a')
  await page.waitForNavigation({ waitUntil: 'networkidle0' })
  // await page.setCookie(...deserializedCookies)
  await handleSignInConference(page)
  console.log("back here")
  // await page.setCookie(...deserializedCookies)
  await page.goto('https://test.orkmanager.com/en/Conference/View/1');
  const signedSuccess = await isSignedIn(page)
  console.log(signedSuccess, "is Signed?")
}
if (notification === "The pythosphorys ✓") {
  console.log("all good, come back later")
  await browser.close();
}
else {
  console.log("it's time to develop, is it?")
}
  // forEachTakeAction

  // await page.screenshot({ 
  //   path: '../static/test.png'
  //   // path: path.join(__dirname, `../static/test.png`) 
  // });

  // await browser.close();


