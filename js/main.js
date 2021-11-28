// HANDLE OPEN MENU

document.querySelector("#open-menu").addEventListener("click", () => {
  let buttonOpenMenuIcon = document.querySelector("#open-menu i");
  let sideMenu = document.querySelector("nav ul");

  if (sideMenu.classList.contains("close")) {
    sideMenu.classList.remove("close");
    sideMenu.classList.add("open");
    sideMenu.style.right = "0";

    buttonOpenMenuIcon.classList.remove("fa-bars");
    buttonOpenMenuIcon.classList.add("fa-times");
  } else {
    sideMenu.classList.add("close");
    sideMenu.classList.remove("open");
    sideMenu.style.right = "-31.25rem";

    buttonOpenMenuIcon.classList.add("fa-bars");
    buttonOpenMenuIcon.classList.remove("fa-times");
  }
});

// HANDLE LOAD MORE
let loadMore = document.getElementById("load-more");
let moreText = document.getElementById("more");

loadMore.addEventListener("click", () => {
  if (moreText.classList.contains('hide')) {
    moreText.classList.remove('hide');
    moreText.classList.add('show');
    loadMore.innerText = "Kurangi"
  } else {
    moreText.classList.add('hide');
    moreText.classList.remove('show');
    loadMore.innerText = "Lebih Banyak";
  }
});
