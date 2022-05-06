var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    for (item of coll) {
      if (item != this) {
        item.classList.remove("active");
        item.nextElementSibling.style.display = "none";
      }
    }

    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      console.log("none");
    } else {
      content.style.display = "block";
      console.log("block");
    }
  });
}
