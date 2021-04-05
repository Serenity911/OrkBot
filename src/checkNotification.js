export default async function (page) {
    // EXP add a eval handle to get all the notifications not just the first
    // let notificationTags = []
    const notificationBox = await page.$eval('#badges_div a', (el) => {
        return el.innerText
    })
    return notificationBox
}