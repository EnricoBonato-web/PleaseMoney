let coll: any = document.getElementsByClassName("collapsible");
let i: number;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function (this: HTMLElement) {
    for (let item of coll) {
      if (item != this) {
        item.classList.remove("active");
        item.nextElementSibling.style.display = "none";
      }
    }

    this.classList.toggle("active");
    const content: HTMLElement | null = this.nextElementSibling as HTMLElement;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
