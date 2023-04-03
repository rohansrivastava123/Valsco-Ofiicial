let obj = [{
    img: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    id: 0,

},
{
    img: "https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    id: 1,


},
{
    img: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    id: 2,


},
{
    img: "https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    id: 3,


},
{
    img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    id: 4,


}
];

let prevpointer = 4;
let currpointer = 2;

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp': small(0);
        case 'ArrowDown': small(1);
        case 'ArrowLeft': small(0);
        case 'ArrowRight': small(1);
    }
})

let lef = document.getElementById("test");
console.log(lef);
let change = function () {
    // console.log(event);
    console.log("Clicked");
    // let up = document.getElementById("up");
    // let ld = document.getElementsByClassName("one")[1];
    // let rd = document.getElementsByClassName("rights")[0];
    // console.log(ld);
    // console.log(rd);
    // ld.classList.add("leftd");
    // rd.classList.add("rightd");
    // up.removeAttribute("id", "up");
    // up.setAttribute("class", "down");

    // let rm = document.getElementsById("ps");
    // rm.style.display = "none";

    // let cur = document.getElementsByTagName("div")[2];
    // cur.classList.add("cur");

    // setTimeout(previ, 700);



}
change();
lef.addEventListener("click", change);

function small(id) {
    console.log("Clicked")
    let up = document.getElementById("up");
    let ld = document.getElementsByClassName("one")[1];
    let rd = document.getElementsByClassName("rights")[0];
    console.log(ld);
    console.log(rd);
    ld.classList.add("leftd");
    rd.classList.add("rightd");
    up.removeAttribute("id", "up")
    up.setAttribute("class", "down")

    // let rm = document.getElementsById("ps");
    // rm.style.display = "none";

    // let cur = document.getElementsByTagName("div")[2];
    // cur.classList.add("cur");
    if (id == 0) {
        setTimeout(previ, 700);
    }
    else {
        setTimeout(nexti, 700);

    }
}

function previ() {
    let ph = document.getElementById("ph");
    let cen = document.getElementById("cen");
    let nex = document.getElementById("nex");
    console.log(nex)

    ph.src = obj[currpointer].img;
    currpointer++;
    if (currpointer == 5) {
        currpointer = 0;
    }
    cen.src = obj[currpointer].img;


    console.log("Curr pointer before change :--> " + currpointer);
    // currpointer = obj[currpointer + 1].id;
    console.log("Curr pointer after change :--> " + currpointer);
    if (currpointer == 4) {
        nex.src = obj[0].img;
    } else {
        nex.src = obj[currpointer + 1].img;
    }

    setTimeout(up, 200);
    // prevAnimiClass();
}

function up() {
    let up = document.getElementsByClassName("down")[0];
    up.classList.remove("down")
    up.classList.add("top");
    up.setAttribute("id", "up");

}

function nexti() {


    let ph = document.getElementById("ph");
    let cen = document.getElementById("cen");
    let nex = document.getElementById("nex");



    nex.src = obj[currpointer].img;
    currpointer--;
    // ph.src = obj[currpointer].img;
    if (currpointer == -1) {
        currpointer = 4;
    }
    cen.src = obj[currpointer].img;


    console.log("Curr pointer before change :--> " + currpointer);
    // currpointer = obj[currpointer ].id;
    console.log("Curr pointer after change :--> " + currpointer);
    if (currpointer == 0) {
        ph.src = obj[4].img;
    }
    else {
        ph.src = obj[currpointer - 1].img;
    }
    setTimeout(up, 200);
}






// function prevAnimiClass() {
//     let prev = document.getElementsByClassName("one")[1];
//     console.log(prev)
//     prev.classList.add("prevAni");
//     setTimeout(remClass, 2000);

//     let curr = document.getElementsByTagName("div")[3];
//     curr.classList.add("prevCurrAni");

//     let next = document.getElementsByTagName("div")[4];
//     next.classList.add("prevNextAni");

// }

// function remClass() {
//     // if (id == 0) {
//     let prev = document.getElementsByClassName("one")[1];
//     prev.classList.remove("prevAni");
//     console.log("Removed prev");


//     let curr = document.getElementsByTagName("div")[3]
//     curr.classList.remove("prevCurrAni");

//     console.log("Removed curr")



//     let next = document.getElementsByTagName("div")[4];
//     next.classList.remove("prevNextAni");
//     console.log("Remove next")


// }




