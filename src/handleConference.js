const signInPath = '#body div:nth-child(2) table tr:nth-child(3) td:nth-child(2) div div span:nth-child(1)'

export async function handleSignInConference(page) {

    await Promise.all([
        page.click(signInPath),
        page.waitFor(3000)

        // page.waitForNavigation({ waitUntil: 'networkidle0' })
    ]);    
    console.log('finished sign in')
}

export async function isSignedIn(page){
    const signInSpan = await page.$eval(signInPath, 
        (el) => el.innerText)
    console.log(signInSpan,"signInButton")
    return signInSpan=="Paid:"
}