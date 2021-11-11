var localcoursera=JSON.parse(localStorage.getItem("coursera"));
console.log(localcoursera);
var mydata=localcoursera[0]
var courseimg=document.getElementById("courseimg");
courseimg.src=mydata.photoUrl;
async function see(){
 var q=mydata.partnerIds[0]
    let res = await fetch(`https://api.coursera.org/api/partners.v1/${q}`)
    let data=await res.json();
    console.log(data.elements[0].name);
var uniName=data.elements[0].name;
var universityname=document.getElementById("universityname");
universityname.innerHTML=uniName
}
see();
var univImg=document.getElementById("univImg");
univImg.src=mydata.partnerLogo;
var courseName=document.getElementById("coursename1");
courseName.innerHTML=mydata.name;
var fatborders=document.getElementsByClassName("fatborder")
for(let i =0;i<fatborders.length;i++){
   fatborders[i].onclick=()=>{
       if(i==0){
        fatborders[i].style.borderBottom="4px solid #2a73cc";
        fatborders[i].style.color="#2a73cc";
        fatborders[i].style.fontWeight="600";
        fatborders[6].style.borderBottom="none";
        fatborders[6].style.fontWeight="500";
        fatborders[6].style.color="black";
        fatborders[1].style.borderBottom="none";
        fatborders[1].style.fontWeight="500";
        fatborders[1].style.color="black";
        fatborders[2].style.borderBottom="none";
        fatborders[2].style.fontWeight="500";
        fatborders[2].style.color="black";
        fatborders[3].style.borderBottom="none";
        fatborders[3].style.fontWeight="500";
        fatborders[3].style.color="black";
        fatborders[4].style.borderBottom="none";
        fatborders[4].style.fontWeight="500";
        fatborders[4].style.color="black";
        fatborders[5].style.borderBottom="none";
        fatborders[5].style.fontWeight="500";
        fatborders[5].style.color="black";
       }
       if(i==1){
        fatborders[i].style.borderBottom="4px solid #2a73cc";
        fatborders[i].style.color="#2a73cc";
        fatborders[i].style.fontWeight="600";
        fatborders[0].style.borderBottom="none";
        fatborders[0].style.fontWeight="500";
        fatborders[0].style.color="black";
        fatborders[6].style.borderBottom="none";
        fatborders[6].style.fontWeight="500";
        fatborders[6].style.color="black";
        fatborders[2].style.borderBottom="none";
        fatborders[2].style.fontWeight="500";
        fatborders[2].style.color="black";
        fatborders[3].style.borderBottom="none";
        fatborders[3].style.fontWeight="500";
        fatborders[3].style.color="black";
        fatborders[4].style.borderBottom="none";
        fatborders[4].style.fontWeight="500";
        fatborders[4].style.color="black";
        fatborders[5].style.borderBottom="none";
        fatborders[5].style.fontWeight="500";
        fatborders[5].style.color="black";
        }
        if(i==2){
            fatborders[i].style.borderBottom="4px solid #2a73cc";
            fatborders[i].style.color="#2a73cc";
            fatborders[i].style.fontWeight="600";
            fatborders[0].style.borderBottom="none";
            fatborders[0].style.fontWeight="500";
            fatborders[0].style.color="black";
            fatborders[1].style.borderBottom="none";
            fatborders[1].style.fontWeight="500";
            fatborders[1].style.color="black";
            fatborders[6].style.borderBottom="none";
            fatborders[6].style.fontWeight="500";
            fatborders[6].style.color="black";
            fatborders[3].style.borderBottom="none";
            fatborders[3].style.fontWeight="500";
            fatborders[3].style.color="black";
            fatborders[4].style.borderBottom="none";
            fatborders[4].style.fontWeight="500";
            fatborders[4].style.color="black";
            fatborders[5].style.borderBottom="none";
            fatborders[5].style.fontWeight="500";
            fatborders[5].style.color="black";
            }
            if(i==3){
                fatborders[i].style.borderBottom="4px solid #2a73cc";
                fatborders[i].style.color="#2a73cc";
                fatborders[i].style.fontWeight="600";
                fatborders[0].style.borderBottom="none";
                fatborders[0].style.fontWeight="500";
                fatborders[0].style.color="black";
                fatborders[1].style.borderBottom="none";
                fatborders[1].style.fontWeight="500";
                fatborders[1].style.color="black";
                fatborders[2].style.borderBottom="none";
                fatborders[2].style.fontWeight="500";
                fatborders[2].style.color="black";
                fatborders[6].style.borderBottom="none";
                fatborders[6].style.fontWeight="500";
                fatborders[6].style.color="black";
                fatborders[4].style.borderBottom="none";
                fatborders[4].style.fontWeight="500";
                fatborders[4].style.color="black";
                fatborders[5].style.borderBottom="none";
                fatborders[5].style.fontWeight="500";
                fatborders[5].style.color="black";
                }
                if(i==4){
                    fatborders[i].style.borderBottom="4px solid #2a73cc";
                    fatborders[i].style.color="#2a73cc";
                    fatborders[i].style.fontWeight="600";
                    fatborders[0].style.borderBottom="none";
                    fatborders[0].style.fontWeight="500";
                    fatborders[0].style.color="black";
                    fatborders[1].style.borderBottom="none";
                    fatborders[1].style.fontWeight="500";
                    fatborders[1].style.color="black";
                    fatborders[2].style.borderBottom="none";
                    fatborders[2].style.fontWeight="500";
                    fatborders[2].style.color="black";
                    fatborders[3].style.borderBottom="none";
                    fatborders[3].style.fontWeight="500";
                    fatborders[3].style.color="black";
                    fatborders[6].style.borderBottom="none";
                    fatborders[6].style.fontWeight="500";
                    fatborders[6].style.color="black";
                    fatborders[5].style.borderBottom="none";
                    fatborders[5].style.fontWeight="500";
                    fatborders[5].style.color="black";
                    }
                    if(i==5){
                        fatborders[i].style.borderBottom="4px solid #2a73cc";
                        fatborders[i].style.color="#2a73cc";
                        fatborders[i].style.fontWeight="600";
                        fatborders[0].style.borderBottom="none";
                        fatborders[0].style.fontWeight="500";
                        fatborders[0].style.color="black";
                        fatborders[1].style.borderBottom="none";
                        fatborders[1].style.fontWeight="500";
                        fatborders[1].style.color="black";
                        fatborders[2].style.borderBottom="none";
                        fatborders[2].style.fontWeight="500";
                        fatborders[2].style.color="black";
                        fatborders[3].style.borderBottom="none";
                        fatborders[3].style.fontWeight="500";
                        fatborders[3].style.color="black";
                        fatborders[4].style.borderBottom="none";
                        fatborders[4].style.fontWeight="500";
                        fatborders[4].style.color="black";
                        fatborders[6].style.borderBottom="none";
                        fatborders[6].style.fontWeight="500";
                        fatborders[6].style.color="black";
                        }
                      
                        if(i==6){
                            
                           
                            console.log(fatborders[i].textContent);
                            fatborders[i].style.borderBottom="4px solid #2a73cc";
                            fatborders[i].style.color="#2a73cc";
                            fatborders[i].style.fontWeight="600";
                            fatborders[0].style.borderBottom="none";
                            fatborders[0].style.fontWeight="500";
                            fatborders[0].style.color="black";
                            fatborders[1].style.borderBottom="none";
                            fatborders[1].style.fontWeight="500";
                            fatborders[1].style.color="black";
                            fatborders[2].style.borderBottom="none";
                            fatborders[2].style.fontWeight="500";
                            fatborders[2].style.color="black";
                            fatborders[3].style.borderBottom="none";
                            fatborders[3].style.fontWeight="500";
                            fatborders[3].style.color="black";
                            fatborders[4].style.borderBottom="none";
                            fatborders[4].style.fontWeight="500";
                            fatborders[4].style.color="black";
                            fatborders[5].style.borderBottom="none";
                            fatborders[5].style.fontWeight="500";
                            fatborders[5].style.color="black";
                            }
                         
      
   }
}
changeingContent=document.getElementById("changeingContent");
// changeingContent.textContent=mydata.description
 var min = Math.ceil(10);
 var max = Math.floor(30);
 var random=Math.floor(Math.random() * (max - min) + min);
var money =document.getElementById("money")
money.innerHTML=random;
var min = Math.ceil(10);
var max = Math.floor(20);
var random=Math.floor(Math.random() * (max - min) + min);
var month1 =document.getElementById("month1")
month1.innerHTML=random;
var min = Math.ceil(20);
var max = Math.floor(30);
var random=Math.floor(Math.random() * (max - min) + min);
var month2 =document.getElementById("month2")
month2.innerHTML=random;