console.log("Visibility");

let boolean = document.hidden;
let link = document.querySelector("link[rel~='icon']");

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    document.title = "We miss you!";
    link.href = "../dist/img/logo-missyou.svg";
  } else {
    document.title = "Chingu: Find your K-drama Seoulmate";
    link.href = "../dist/img/logo.svg";
  }
});

