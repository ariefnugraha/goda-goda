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
if (document.getElementById("load-more") !== null) {
  let loadMore = document.getElementById("load-more");
  let moreText = document.getElementById("more");

  loadMore.addEventListener("click", () => {
    if (moreText.classList.contains("hide")) {
      moreText.classList.remove("hide");
      moreText.classList.add("show");
      loadMore.innerText = "Kurangi";
    } else {
      moreText.classList.add("hide");
      moreText.classList.remove("show");
      loadMore.innerText = "Lebih Banyak";
    }
  });
}

// HANDLE TAB CATEGORY
if (document.getElementById('tab-list') !== null && document.getElementById('tab-list').innerHTML.length > 0) {
  let tabButton = document.querySelectorAll('.tab-button');
  let tabContent = document.querySelectorAll('.tab-content');


  for(let i = 0; i < tabButton.length; i++) {
    
    tabButton[i].addEventListener('click', function(event) {
      let getId = tabButton[i].getAttribute("id");

      for(let j = 0; j < tabContent.length; j++) {
        tabContent[j].classList.remove('active');
        tabButton[j].classList.remove('active');
      }
      
    

      tabButton[i].classList.add('active');
      document.getElementById(`${getId}-tab`).classList.add('active')
    })
  }
}
