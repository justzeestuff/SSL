var _a;
const mainView = document.getElementById('main-view');
const contentSpacing = (_a = document.querySelector('[data-testid="recommended-track"]')) === null || _a === void 0 ? void 0 : _a.parentElement;
const songList = contentSpacing === null || contentSpacing === void 0 ? void 0 : contentSpacing.children[0].children[0].children[1].children[1].children;
if (songList) {
    for (let i = 0; i < (songList === null || songList === void 0 ? void 0 : songList.length); i++) {
        console.log(songList[i]);
    }
}
