This is a small project to experiment using Puppeteer. 
The project uses the test version of a game for which I got previous authorization from the owner.

To start the project:
1) install direnv (e.g brew install direnv ) and hook it into the shell eval "$(direnv hook zsh)"
2) create a .envrc file in the root of the project 
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
export PUPPETEER_EXECUTABLE_PATH=`which chromium`
3) direnv allow
4) start project with node brawlBot.js