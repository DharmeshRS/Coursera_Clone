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
    container2.style.opacity="1";
hovermenu.style.display="none";
var infodiv=document.getElementById("infodiv")
infodiv.style.display="none";
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
    debouncediv.append(img,div1);
    debouncediv.onclick=()=>{
        alert (el.name);
        debouncediv.style.backgroundColor="red"
        var coursera=JSON.parse(localStorage.getItem("coursera"));
        coursera[0]=el;
        localStorage.setItem("coursera",JSON.stringify(coursera))
    }
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
var doc=document.getElementById("iT");
doc=doc.textContent.trim().split("\n");

console.log(doc[0])
var hoverdivs =document.getElementById("hovermenu").children;

console.log(hoverdivs.tAfC)


for(let i =1;i<hoverdivs.length;i++){
    console.log(hoverdivs[i])
    var infodiv=document.getElementById("infodiv")

    var coursename=document.getElementById("coursename");
    coursename.innerHTML=null;
    
    hoverdivs[i].onmouseover=async()=>{
      infodiv.style.display="block";
      var container2=document.getElementById("container2");
      container2.style.opacity="0.1";
      
      var rV=document.getElementById("degreediv")
      rV.innerHTML=null;
      var cert=document.getElementById("certificatediv")
      cert.innerHTML=null;
      var popularskills=document.getElementById("popularskills")
      popularskills.innerHTML=null;
  if(i>=6){
     
          var q=hoverdivs[i].textContent.trim().split("\n");
        //   alert(q[0]);
        coursename.innerHTML=q[0]
          let res = await fetch(`https://api.coursera.org/api/courses.v1?q=search&query=${q[0]}&includes=instructorIds,photoUrl,description,largeIcon,shortName,location&fields=instructorIds,partnerIds ,location,photoUrl,description,partnerLogo,certificates,startDate,workload,specializations,domainTypes`)
    let data =await res.json();

let elements=data.elements
    console.log(elements);
    var count=0;
    
   
    elements.forEach((el)=>{
        count++;
        if(count<=5){
        //    popular skills;
        var popdiv=document.createElement("div");
        var cTu=el.domainTypes[0].subdomainId;
        var str=cTu[0].toUpperCase()
        for(let j=1;j<cTu.length;j++){
            str=str+cTu[j]
        }
        // cTu[0].toUpperCase()
        popdiv.innerHTML=str
           popularskills.append(popdiv)
            // update the degree and certificate div;
            var debouncediv=document.createElement("div")
            var img=document.createElement("img")
            img.src=el.photoUrl
            var div1=document.createElement("div")
            var p1=document.createElement("p")
          p1.innerHTML=el.name;
          p1.style.fontSize="12px"
            var img2=document.createElement("img")
            img2.src=el.partnerLogo;
            img2.style.width="40px"
            div1.append(p1,img2)
            debouncediv.append(img,div1)
            debouncediv.setAttribute("id","debouncediv");
            debouncediv.onmouseover=()=>{
                debouncediv.style.backgroundColor="white"
            }
            rV.append(debouncediv);
            debouncediv.onclick=()=>{
                alert (el.name);
                var coursera=JSON.parse(localStorage.getItem("coursera"));
                coursera[0]=el;
                localStorage.setItem("coursera",JSON.stringify(coursera))
            }
        }
        else if(count>5&&count<=8){
            var cTu=el.domainTypes[0].subdomainId;
        var str=cTu[0].toUpperCase()
        for(let j=1;j<cTu.length;j++){
            str=str+cTu[j]
        }
            var popdiv=document.createElement("div");
            popdiv.innerHTML=str;
               popularskills.append(popdiv)
            var debouncediv=document.createElement("div")
            var img=document.createElement("img")
            img.src=el.photoUrl
            var div1=document.createElement("div")
            var p1=document.createElement("p")
          p1.innerHTML=el.name;
          p1.style.fontSize="12px"
            var p2=document.createElement("p")
            p2.innerHTML=el.domainTypes[0].subdomainId;
            // p2.style.width="40px"
            p2.style.fontSize="14px"
            div1.append(p2,p1)
            debouncediv.append(img,div1)
            debouncediv.setAttribute("id","debouncediv");
            debouncediv.onmouseover=()=>{
                debouncediv.style.backgroundColor="white"
            }
            debouncediv.onclick=()=>{
                alert (el.name);
                debouncediv.style.backgroundColor="red"
                var coursera=JSON.parse(localStorage.getItem("coursera"));
                coursera[0]=el;
                localStorage.setItem("coursera",JSON.stringify(coursera))
            }
            cert.append(debouncediv)

        }
    })
      }
  }
}

container2.onmouseover=()=>{
    container2.style.opacity="1";
    container2.style.backgroundColor="white";
    infodiv.style.display="none"
  hovermenu.style.display="none";
  explore.setAttribute("id","explore");
 
}
container2.onclick=()=>{
    var debounce=document.getElementById("debounce");
    debounce.style.display="none"
}
// console.log(hoverdivs)

