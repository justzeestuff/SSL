const mainView = document.getElementById('main-view') as HTMLDivElement | null;
const contentSpacing = document.querySelector('[data-testid="recommended-track"]')?.parentElement as HTMLDivElement | null
const songList = contentSpacing?.children[0].children[0].children[1].children[1].children as HTMLCollection | null

if (songList) {
    for (let i = 0; i < songList?.length; i++) {
        console.log(songList[i])
    }
}



