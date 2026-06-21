const elements = [{}]

const mainView = document.getElementById('main-view') as HTMLDivElement
const contentSpacingGrabber = document.querySelector('[data-testid="recommended-track"]') as HTMLDivElement
const contentSpacing = contentSpacingGrabber?.parentElement as HTMLDivElement
const songList = contentSpacing.children[0].children[0].children[1].children[1]

for (let i = 0; i < songList.childElementCount; i++) {
    const name = songList.childNodes[i]
    console.log(name)
}

