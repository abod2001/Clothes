// let loading = document.querySelector("#loading");
let Nav = document.querySelector("nav");
console.log(Nav);
// setTimeout((_) => {
//   loading.style.display = "none";
// }, 2000);


let search = document.querySelector(".search");
let con = document.querySelector(".Ssearch");
let closeIc = document.querySelector(".close");

search.onclick = _=> {
    console.log("guhbnj");
    con.classList.add("sear")
}
closeIc.onclick = _=> {
    console.log("guhbnj");
    con.classList.remove("sear")
}

let linkAll = document.querySelectorAll("nav a");
linkAll.forEach(link => {
    link.onclick = function color() {
        clearStyle()
        link.style.color = "#23c6ea";
    }
});
// تنظيف التنسيقات عن كل الروابط
function clearStyle() {
    linkAll.forEach(element => {
        element.style.color = "";
        element.style.background = "";
    });
}
