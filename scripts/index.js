let explore=document.getElementById("explore");
let hovermenu=document.getElementById("hovermenu")
explore.onmouseover=()=>{
    explore.setAttribute("id","exploreJs")
  
   hovermenu.style.display="block"
}
var searchinput=document.getElementById("searchinput")
explore.onmouseout=()=>{
explore.setAttribute("id","explore")

}
hovermenu.onmouseover=()=>{
explore.setAttribute("id","exploreJs")
}
searchinput.onmouseover=()=>{
hovermenu.style.display="none"
}
// searchinput.onmouseover=()=>{
//     explore.setAttribute("id","explore")
//     hovermenu.setAttribute("id","hovermenuJs");
// }
// debounce Js
if(localStorage.getItem("coursera")===null){
localStorage.setItem("coursera",JSON.stringify([]))
}

async function show(){
//search api
var input=document.getElementById("searchinput").value
    //let res = await fetch("https://api.coursera.org/api/courses.v1?q=search&query=malwar")
     let res = await fetch(`https://api.coursera.org/api/courses.v1?q=search&query=${input}&includes=instructorIds,photoUrl,description&fields=instructorIds,photoUrl,description,partnerLogo,certificates,startDate,workload,specializations,domainTypes`)
    let data =await res.json();
    console.log(data)
}

async function fillPreviousSearched(){
    var input=document.getElementById("searchinput").value
if(input.length<=0){

// var q=courseraL[0]
var q="java script"
}
else{
q=input
}
let res = await fetch(`https://api.coursera.org/api/courses.v1?q=search&query=${q}&includes=instructorIds,photoUrl,description,largeIcon&fields=instructorIds,photoUrl,description,partnerLogo,certificates,startDate,workload,specializations,domainTypes`)
    let data =await res.json();
let elements=data.elements
    console.log(elements);
    var count=0;
    var debounce=document.getElementById("debounce")
    debounce.style.display="block"
    var rV=document.getElementById("rV")
    rV.innerHTML=null;
    elements.forEach((el)=>{
       
        count++
        if(count<=3){
        console.log(el)
        
        
    var debouncediv=document.createElement("div")
    var img=document.createElement("img")
    img.src=el.photoUrl
    var div1=document.createElement("div")
    var p1=document.createElement("p")
  p1.innerHTML=el.name
    var img2=document.createElement("img")
    img2.src=el.partnerLogo
    div1.append(p1,img2)
    debouncediv.append(img,div1)
    debouncediv.setAttribute("id","debouncediv")
    rV.append(debouncediv)

            return
        }
    })
    var container=document.getElementById("container")
    container.onclick=()=>{
        var debounce=document.getElementById("debounce")
        debounce.style.display="none"
    }

}