const elements = [{}];
const mainView = document.getElementById('main-view');
const contentSpacingGrabber = document.querySelector('[data-testid="recommended-track"]');
const contentSpacing = contentSpacingGrabber === null || contentSpacingGrabber === void 0 ? void 0 : contentSpacingGrabber.parentElement;
const songList = contentSpacing.children[0].children[0].children[1].children[1];
for (let i = 0; i < songList.childElementCount; i++) {
    const name = songList.childNodes[i];
    console.log(name);
}
