function navIconHover(element, id, active = false) {
  switch (id) {
    case "about":
      element.setAttribute("src", "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/NavBar%20Icons/hover/about.webp");
      break;
    case "team":
      element.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/NavBar%20Icons/hover/ourteam.webp"
      );
      break;
    case "services":
      element.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/NavBar%20Icons/hover/services.webp"
      );
      break;
    case "portfolio":
      element.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/NavBar%20Icons/hover/portfolio.webp"
      );
      break;
    case "career":
      element.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/NavBar%20Icons/hover/career.webp"
      );
      break;
    case "call":
      element.setAttribute("src", "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/NavBar%20Icons/hover/call.webp");
      break;
    case "sentMail":
      element.setAttribute("src", "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/Mail%20Button/Group%203384.webp");
      break;
    default:
      break;
  }
}

function navIconUnHover(element, id, active = false) {
  switch (id) {
    case "about":
      if (!active) {
        element.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/NavBar%20Icons/Group%201588.webp"
        );
        break;
      }

    case "team":
      if (!active) {
        element.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/NavBar%20Icons/Group%201545.webp"
        );
        break;
      }

    case "services":
      if (!active) {
        element.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/NavBar%20Icons/Group%201543.webp"
        );
        break;
      }

    case "portfolio":
      if (!active) {
        element.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/NavBar%20Icons/Group%201578.webp"
        );
        break;
      }

    case "career":
      if (!active) {
        element.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/NavBar%20Icons/Group%201577.webp"
        );
        break;
      }

    case "call":
      if (!active) {
        element.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/NavBar%20Icons/Group%201576.webp"
        );
        break;
      }
    case "sentMail":
      if (!active) {
        element.setAttribute("src", "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/Mail%20Button/Group%203383.webp");
        break;
      }
    default:
      break;
  }
}

function selectService(element) {
  var serviceImage = document.getElementById("service-view-img");
  var building = document.getElementById("building");
  var awareness = document.getElementById("awareness");
  var marketing = document.getElementById("marketing");
  var buildingContent = document.getElementById("building-content");
  var awarenessContent = document.getElementById("awareness-content");
  var marketingContent = document.getElementById("marketing-content");
  switch (element.id) {
    case "building":
      building.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Hover/Group%203343.webp"
      );
      serviceImage.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/TREE/Group%202.webp"
      );
      awareness.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203382.webp"
      );
      marketing.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203345.webp"
      );
      serviceImage.style.bottom = "0";
      buildingContent.style.display = "block";
      awarenessContent.style.display = "none";
      marketingContent.style.display = "none";

      break;
    case "marketing":
      building.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203342.webp"
      );
      serviceImage.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/TREE/Group%204.webp"
      );

      awareness.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203382.webp"
      );
      marketing.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Hover/Group%203376.webp"
      );
      serviceImage.style.bottom = "0";
      buildingContent.style.display = "none";
      awarenessContent.style.display = "none";
      marketingContent.style.display = "block";
      break;
    case "awareness":
      building.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203342.webp"
      );
      serviceImage.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/TREE/Group%203.webp"
      );

      awareness.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Hover/Group%203375.webp"
      );
      marketing.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203345.webp"
      );
      serviceImage.style.bottom = "1px";
      buildingContent.style.display = "none";
      awarenessContent.style.display = "block";
      marketingContent.style.display = "none";
      break;
    default:
      break;
  }

  setTimeout(() => {
    $("html,body").animate(
      {
        scrollTop: $(".service-port-fill").offset().top - 110,
      },
      "slow"
    );
  }, 1000);
}
function selectServiceMob(element, type) {
  var buildingContent = document.getElementById("building-content-mob");
  var awarenessContent = document.getElementById("awareness-content-mob");
  var marketingContent = document.getElementById("marketing-content-mob");
  var building = document.getElementById("building-mob");
  var awareness = document.getElementById("awareness-mob");
  var marketing = document.getElementById("marketing-mob");
  switch (type) {
    case "building":
      if (buildingContent.style.display === "none") {
        building.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Hover/Group%203343.webp"
        );
        setTimeout(() => {
          $("html,body").animate(
            {
              scrollTop: $("#building-content-mob").offset().top - 110,
            },
            "slow"
          );
        }, 0);
      } else {
        building.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203342.webp"
        );
      }

      awareness.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203382.webp"
      );
      marketing.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203345.webp"
      );
      buildingContent.style.display =
        buildingContent.style.display === "none" ? "block" : "none";
      awarenessContent.style.display = "none";
      marketingContent.style.display = "none";
      break;
    case "marketing":
      if (marketingContent.style.display === "none") {
        marketing.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Hover/Group%203376.webp"
        );
        setTimeout(() => {
          $("html,body").animate(
            {
              scrollTop: $("#marketing-content-mob").offset().top - 110,
            },
            "slow"
          );
        }, 0);
      } else {
        marketing.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203345.webp"
        );
      }
      building.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203342.webp"
      );
      awareness.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203382.webp"
      );
      buildingContent.style.display = "none";
      awarenessContent.style.display = "none";
      marketingContent.style.display =
        marketingContent.style.display === "none" ? "block" : "none";
      break;
    case "awareness":
      if (awarenessContent.style.display === "none") {
        awareness.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Hover/Group%203375.webp"
        );
        setTimeout(() => {
          $("html,body").animate(
            {
              scrollTop: $("#awareness-content-mob").offset().top - 110,
            },
            "slow"
          );
        }, 0);
      } else {
        awareness.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203382.webp"
        );
      }
      building.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203342.webp"
      );

      marketing.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Group%203345.webp"
      );
      buildingContent.style.display = "none";
      awarenessContent.style.display =
        awarenessContent.style.display === "none" ? "block" : "none";
      marketingContent.style.display = "none";
      break;
    default:
      break;
  }
}
function onCareerSelect(element) {
  var parentElement = element.closest(".career-mg-card");
  var cardElement = element.closest(".card");
  cardElement.style.height = "auto";
  parentElement.setAttribute("class", "col-lg-12 col-md-12 career-mg-card");
  var otherCards = Array.from(document.querySelectorAll(".career-mg-card"));
  var hideView = cardElement.querySelector(".onMiniVis");
  hideView.style.display = "none";
  var showView = cardElement.querySelector(".onOpenView");
  showView.style.display = "block";

  otherCards.forEach((element) => {
    console.log();
    if (element !== parentElement) {
      element.style.display = "none";
    }
  });
  $("html,body").animate(
    {
      scrollTop: $("#rootCareer").offset().top - 100,
    },
    "slow"
  );
}
function onServiceOpen(element) {
  var parentElement = element.closest(".service-mg-card");
  parentElement.setAttribute("class", "col-lg-12 col-md-12 service-mg-card");
  var otherCards = Array.from(
    parentElement.parentElement.querySelectorAll(".service-mg-card")
  );
  var hideView = parentElement.querySelector(".serHideView");
  hideView.style.display = "none";
  var showView = parentElement.querySelector(".serOpenView");
  showView.style.display = "block";
  otherCards.forEach((element) => {
    if (element !== parentElement) {
      element.style.display = "none";
    }
  });
}

function onServiceBackKey(element, type) {
  var parentElement = element.closest(".service-mg-card");
  parentElement.setAttribute("class", "col-lg-2 col-md-2 p-3 service-mg-card");

  var otherCards = Array.from(document.querySelectorAll(".service-mg-card"));
  var hideView = parentElement.querySelector(".serHideView");
  hideView.style.display = "block";
  var showView = parentElement.querySelector(".serOpenView");
  showView.style.display = "none";
  otherCards.forEach((element) => {
    element.style.display = "block";
  });
}
function onCareerBackKey(element) {
  var parentElement = element.closest(".career-mg-card");
  var cardElement = element.closest(".card");
  cardElement.style.height = "480px";
  var hideView = cardElement.querySelector(".onMiniVis");
  hideView.style.display = "block";
  var showView = cardElement.querySelector(".onOpenView");
  var otherCards = Array.from(document.querySelectorAll(".career-mg-card"));
  parentElement.setAttribute("class", "col-lg-4 col-md-6 career-mg-card my-3");
  showView.style.display = "none";
  otherCards.forEach((element) => {
    element.style.display = "block";
  });
}
function nextTeamSlider() {
  var teamSlider = document.getElementById("team-slider");
  let style = getComputedStyle(teamSlider);

  let marginLeft = parseInt(style.marginLeft);
  console.log(marginLeft);

  if (marginLeft > -800) {
    teamSlider.style.marginLeft = marginLeft - 200 + "px";
  }
}
function prevTeamSlider() {
  var teamSlider = document.getElementById("team-slider");
  let style = getComputedStyle(teamSlider);

  let marginLeft = parseInt(style.marginLeft);
  if (marginLeft < 300) {
    teamSlider.style.marginLeft = marginLeft + 200 + "px";
  }
}
function portfolioHover(element) {
  var parentElement = element.parentElement;
  var imgCont = element.querySelector("img");
  imgCont.style.transform = "scale(1.2)";
  var allImage = Array.from(parentElement.querySelectorAll("img"));
  var text = element.querySelector(".onHver");
  text.style.opacity = "50%";
  allImage.forEach((ele) => {
    if (ele !== imgCont) {
      ele.style.transform = "scale(0.9)";
      ele.style.filter = "brightness(35%)";
    }
  });
}

function portfolioOut(element) {
  var parentElement = element.parentElement;
  var imgCont = element.querySelector("img");
  imgCont.style.transform = "scale(1)";
  var text = element.querySelector(".onHver");
  text.style.opacity = "0";

  var allImage = Array.from(parentElement.querySelectorAll("img"));

  allImage.forEach((ele) => {
    if (ele !== imgCont) {
      ele.style.transform = "scale(1)";
      ele.style.filter = "unset";
    }
  });
}
function portfolioFilter(element, type) {
  var allCard = document.querySelectorAll(".port-card");

  Array.from(document.querySelectorAll(".filter-btn li")).forEach((ele) => {
    ele.setAttribute("class", "text-center");
  });
  element.setAttribute("class", "active text-center");

  switch (type) {
    case "all":
      allCard.forEach((ele) => {
        ele.style.display = "block";
      });
      break;
    case "app":
      allCard.forEach((ele) => {
        if (Array.from(ele.classList).indexOf("tag-app") > -1) {
          ele.style.display = "block";
        } else {
          ele.style.display = "none";
        }
      });
      break;
    case "web":
      allCard.forEach((ele) => {
        if (Array.from(ele.classList).indexOf("tag-web") > -1) {
          ele.style.display = "block";
        } else {
          ele.style.display = "none";
        }
      });
      break;
    case "card":
      allCard.forEach((ele) => {
        if (Array.from(ele.classList).indexOf("tag-card") > -1) {
          ele.style.display = "block";
        } else {
          ele.style.display = "none";
        }
      });
      break;
    default:
      break;
  }
}

function openPortfolioHover(id) {
  var modal = document.getElementById("model-container");
  modal.style.display = "block";
  console.log(modal);

  Array.from(document.querySelectorAll(".allps")).forEach((ele) => {
    ele.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}
function openteamsModel(id) {
  var modal = document.getElementById("model-container");
  modal.style.display = "block";
  console.log(modal);

  Array.from(document.querySelectorAll(".allps")).forEach((ele) => {
    ele.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}
function closePortModel() {
  var modal = document.getElementById("model-container");
  modal.style.display = "none";
  Array.from(document.querySelectorAll(".allps")).forEach((ele) => {
    modal.style.display = "none";
  });
}

function uploadCv(e, ele) {
  var fileName = this.target.files[0].name;
  alert('The file "' + fileName + '" has been selected.');
}

function onHoverBrandingList(element, type) {
  var img = element.querySelector("img");
  switch (type) {
    case "id1":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/buildings/hover/trian.webp"
      );
      break;
    case "id2":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/buildings/hover/man.webp"
      );
      break;
    case "id3":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/buildings/hover/link.webp"
      );
      break;
    case "id4":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/buildings/hover/shake.webp"
      );
      break;
    case "id5":
      img.setAttribute(
        "src",
        "assets/images/services/ICONS/buildings/hover/location.png"
      );
      break;
    case "id6":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Awareness/hover/SMO.webp"
      );
      break;
    case "id7":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Awareness/hover/SEO.webp"
      );
      break;
    case "id8":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Awareness/hover/ORM.webp"
      );
      break;
    case "id9":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Marketing/hover/PA.webp"
      );
      break;
    case "id10":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Marketing/hover/AM.webp"
      );
      break;
    case "id11":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Marketing/hover/IM.webp"
      );
      break;
    case "id12":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Marketing/hover/EM.webp"
      );
      break;
    default:
      break;
  }
}
function onHoverOutBrandingList(element, type) {
  var img = element.querySelector("img");
  switch (type) {
    case "id1":
      img.setAttribute("src", "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/buildings/GR.webp");
      break;
    case "id2":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/buildings/Gman.webp"
      );
      break;
    case "id3":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/buildings/Glink.webp"
      );
      break;
    case "id4":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/buildings/Gshake.webp"
      );
      break;
    case "id5":
      img.setAttribute(
        "src",
        "assets/images/services/ICONS/buildings/Gcontact.png"
      );
      break;
    case "id6":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Awareness/Social%20media%20optimization.webp"
      );
      break;
    case "id7":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Awareness/Searchengine%20optimization.webp"
      );
      break;
    case "id8":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Awareness/Online%20reputation%20management.webp"
      );
      break;
    case "id9":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Marketing/Paid%20advertisement.webp"
      );
      break;
    case "id10":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Marketing/Affiliate%20marketing.webp"
      );
      break;
    case "id11":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Marketing/Influencer%20marketing.webp"
      );
      break;
    case "id12":
      img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Gana-exe/popasset/master/images/services/ICONS/Marketing/Email%20marketing.webp"
      );
      break;
    default:
      break;
  }
}
