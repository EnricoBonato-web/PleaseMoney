var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        for (var _i = 0, coll_1 = coll; _i < coll_1.length; _i++) {
            var item = coll_1[_i];
            if (item != this) {
                item.classList.remove("active");
                item.nextElementSibling.style.display = "none";
            }
        }
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        }
        else {
            content.style.display = "block";
        }
    });
}
//# sourceMappingURL=scripts.js.map