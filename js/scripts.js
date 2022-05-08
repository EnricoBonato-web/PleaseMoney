var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        for (var _i = 0, _a = coll; _i < _a.length; _i++) {
            var item = _a[_i];
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
function copyToClipboard(element) {
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
//# sourceMappingURL=scripts.js.map