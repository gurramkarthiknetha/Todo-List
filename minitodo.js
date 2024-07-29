// document.addEventListener("DOMContentLoaded", function() {
// let maincon=document.getElementById('main');
// let images=[
//    'https://png.pngtree.com/background/20221223/original/pngtree-cyan-blue-background-mobile-4k-wallpaper-hd-victor-picture-image_1986461.jpg',
//    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlF2m6lvQoAeMSgQCrYaPCyISs2I0GFefohXzFQwzvCw&s',
//    'https://png.pngtree.com/thumb_back/fh260/background/20211225/pngtree-mountain-sunset-minimalist-landscape-scenery-wallpaper-full-hd-4k-8k-images-image_934390.jpg',
//    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMJmpk27bCbWbio_N5U-eD_1UlGBZOP1b7PUb4Avl7A&s'
// ]
// let randomnumber=Math.ceil(Math.random()*images.length);
// maincon.style.backgroundImage=URL(images[0]);
// maincon.classList.add("row");
// document.body.appendChild(maincon);
// maincon.
// console.log(maincon);  
//  });
// let bgimg=document.getElementById("main");
// let myarry=[
//     "https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg",
//     "https://i.pinimg.com/originals/37/04/b1/3704b10a51e86a806fbd135881505bb0.jpg",
//     "https://i.pinimg.com/originals/2b/2b/11/2b2b1110569856cc7b4962abf6695e9c.jpg",
//     "https://img.freepik.com/free-photo/mountain-landscape-during-day-time_23-2150724985.jpg",
//     "https://images.hdqwalls.com/download/nature-outdoors-plants-4k-ut-1920x1080.jpg",
//     "https://wallpaper.forfun.com/fetch/2d/2d5e150fa3e3db13bff125c137584a53.jpeg",
//     "https://images.wallpapersden.com/image/download/windows-11-nature-stock-desktop_bG1lZWyUmZqaraWkpJRobWllrWdma2U.jpg",
//     "https://www.desktopbackground.org/download/1366x768/2010/09/18/82064_nature-4k-ultra-hd-wallpapers-4k-wallpaper-net_2560x1600_h.jpg",
// ]
// let random=Math.ceil(Math.random()*myarry.length);
// bgimg.style.backgroundImage =`url(${myarry[random]})`;
let bgimg = document.getElementById("main");
let myarry = [
    "https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg",
    "https://i.pinimg.com/originals/37/04/b1/3704b10a51e86a806fbd135881505bb0.jpg",
    "https://i.pinimg.com/originals/2b/2b/11/2b2b1110569856cc7b4962abf6695e9c.jpg",
    "https://img.freepik.com/free-photo/mountain-landscape-during-day-time_23-2150724985.jpg",
    "https://images.hdqwalls.com/download/nature-outdoors-plants-4k-ut-1920x1080.jpg",
    "https://wallpaper.forfun.com/fetch/2d/2d5e150fa3e3db13bff125c137584a53.jpeg",
    "https://images.wallpapersden.com/image/download/windows-11-nature-stock-desktop_bG1lZWyUmZqaraWkpJRobWllrWdma2U.jpg",
    "https://www.desktopbackground.org/download/1366x768/2010/09/18/82064_nature-4k-ultra-hd-wallpapers-4k-wallpaper-net_2560x1600_h.jpg"
];
let random = Math.ceil(Math.random() * myarry.length);
bgimg.style.backgroundImage = `url(${myarry[random-1]})`;

let con1 = document.getElementById('e1');
let eh = document.getElementById("heading");

function add() {
    let proname = document.getElementById('proname').value;
    console.log(proname);
    eh.textContent = proname;
    con1.appendChild(eh);
    if (proname === "") {
        alert("Please enter a valid text");
        document.getElementById('proname').style.display = "block";
        document.getElementById('b1').add(b1);
        document.getElementById('b2').add(b2);
    }
    document.getElementById('proname').style.display = "none";
    document.getElementById('b1').remove(b1);
    document.getElementById('b2').remove(b2);
}
document.getElementById("addingtask").addEventListener("keydown", key);

function key(event) {
    if (event.key === "Enter") {
        adding();
    }
}
// right now
function adding() {
    let enteredinput = document.getElementById('addingtask').value;
    if (enteredinput === "") {
        alert("Please enter a text");
    }

    console.log(enteredinput);

    let unorderfromhtml = document.getElementById('matask');

    let listcon = document.createElement('li');
    unorderfromhtml.appendChild(listcon);

    let taskcon = document.createElement('div');
    taskcon.classList.add("taskmain", "d-flex", "flex-row", "justify-content-between");
    listcon.appendChild(taskcon);

    let subconforhe = document.createElement('div');
    subconforhe.classList.add("d-flex", "flex-row");
    taskcon.appendChild(subconforhe);

    let inputele = document.createElement('input');
    inputele.type = "checkbox";
    inputele.id = "checkboxclick";
    inputele.setAttribute("name", "click");
    subconforhe.appendChild(inputele);
    inputele.onclick = function() {
        statuscheck();
    }

    function statuscheck() {
        if (inputele.checked == true) {
            text.style.textDecoration = "line-through";
            completed();
        } else {
            text.style.textDecoration = "none";
        }
    }

    let text = document.createElement('h5');
    text.classList.add("text");
    text.textContent = enteredinput;
    subconforhe.appendChild(text);

    let iconcon = document.createElement('div');
    iconcon.classList.add("icon", "oo");
    taskcon.appendChild(iconcon);

    let icon = document.createElement('i');
    icon.classList.add("fa-regular", "fa-trash-can");
    iconcon.appendChild(icon);

    iconcon.onclick = function() {
        listcon.remove(listcon);
    }
    enteredinput.value = "";
    // let ok=document.getElementById("ok");
    // let x=enteredinput.textContent.value="";
    // ok.appendChild(x);


    // completed container
    let hh = document.getElementById("addingtask");
    hh.value = null;

    function completed() {
        let newcompletedtask = listcon;
        let newk = document.getElementById("completedt");
        newk.appendChild(newcompletedtask);
    }
}