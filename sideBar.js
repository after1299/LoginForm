document.querySelector(".sideBar2").addEventListener("mouseover", () => {
    document.querySelector(".sideBar").style.left="0"
})

document.querySelector(".sideBar2").addEventListener("mouseout", () => {
    document.querySelector(".sideBar").style.left="-200px"
})