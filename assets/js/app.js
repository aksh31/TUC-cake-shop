let cl = console.log;

let cakeShop = document.getElementById("cake-time");
let searchBar = document.getElementById("search");

let cakeArray = [
    {
        img : "./assets/images/cake-1.jpg",
        flavour : "cake-1",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/cake-2.jpg",
        flavour : "cake-2",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/cake-3.jpg",
        flavour : "cake-2",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/cake-4.jpg",
        flavour : "cake-4",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/cake-5.jpg",
        flavour : "cake-5",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/white-1.jpg",
        flavour : "White-Forest",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
];


cakeArray.forEach(ele =>{
    cakeShop.innerHTML += `
    <div class="col-md-4">
    <img src="${ele.img}">
    <span>${ele.flavour}</span>
    <h3>${ele.prize}</h3>
    <h4>${ele.weight}</h4>
    </div>`;
})


// ===========================================================
// let newData =[];

// cakeArray.forEach(ele =>{
//     if(ele.flavour === "White-Forest"){
//        newData.push(ele);
//     }
// })
// cl(newData);


// newData.innerHTML += `
// <div class="col-md-4">
// <img src="${newData[0].img}">
// <span>${newData[0].flavour}</span>
// <h3>${newData[0].prize}</h3>
// <h4>${newData[0].weight}</h4>
// </div>`;


// cakeShop.appendChild(newData);
// ===========================================================






searchBar.addEventListener("keyup", filterData);

function filterData(){
    let selectedData = cakeArray.filter(ele => {
        return ele.flavour === "White-Forest";
    })
    cl(selectedData);

    document.getElementById("cake-time").innerHTML = selectedData;

    // selectedData.forEach(ele =>{
    //     cakeShop.innerHTML += `
    //     <div class="col-md-4">
    //     <img src="${ele.img}">
    //     <span>${ele.flavour}</span>
    //     <h3>${ele.prize}</h3>
    //     <h4>${ele.weight}</h4>
    //     </div>`;
    // })

    cakeShop.style.display ="none";
}