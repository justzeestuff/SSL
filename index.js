function getList() {
    const listContainerParent = document.body.querySelector('.main-view-container')
    // nested containers stupid spotify
    const listContainer = listContainerParent.querySelector('.main-view-container__scroll-node-child')
    const cp = listContainer.querySelector('[data-testid="recommended-track"]').parentElement
    const cpChild1 = cp.childNodes[0].childNodes[0]
    const cpChild2 = cpChild1.lastChild


    return [listContainerParent, listContainer, cp, cpChild1, cpChild2]
}

for (let i = 0; i < getList().length; i++) {
    const arr = getList()[i];
    console.log(arr)
}
