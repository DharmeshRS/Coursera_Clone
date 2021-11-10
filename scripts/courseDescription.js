var localcoursera=JSON.parse(localStorage.getItem("coursera"));
console.log(localcoursera);
var mydata=localcoursera[0]
var courseimg=document.getElementById("courseimg");
courseimg.src=mydata.photoUrl;
async function see(){
 
    let res = await fetch(`https://api.coursera.org/api/partners.v1/31`)
    let data=await res.json();
    console.log(data.elements[0].name);
var uniName=data.elements[0].name;

}
see();
var univImg=document.getElementById("univImg");
univImg.src=mydata.partnerLogo;
var courseName=document.getElementById("coursename@");
courseName.innerHTML=mydata.name;