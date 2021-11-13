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
universityname.innerHTML=uniName;
var puttheuni=document.getElementById("puttheuni");
puttheuni.innerHTML=uniName;
}
see();
var univImg=document.getElementById("univImg");
univImg.src=mydata.partnerLogo;
var courseName=document.getElementById("coursename1");
courseName.innerHTML=mydata.name;
var fatborders=document.getElementsByClassName("fatborder");
// the changing pages;
// the changing div
changeingContent=document.getElementById("changeingContent")
var overview=document.getElementById("overview");
var admission=document.getElementById("admission")
var academics=document.getElementById("academics");
var tution=document.getElementById("tution-main");
var stu_exp=document.getElementById("stu_exp");
var careers=document.getElementById("careersd");
var about_the_university=document.getElementById("about_the_university")
for(let i =0;i<fatborders.length;i++){
   fatborders[i].onclick=()=>{
       if(i==0){
           changeingContent.innerHTML=null;
      changeingContent.innerHTML=overview.innerHTML

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
        changeingContent.innerHTML=null;
        changeingContent.innerHTML=admission.innerHTML
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
            changeingContent.innerHTML=null;
            changeingContent.innerHTML=academics.innerHTML
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
                changeingContent.innerHTML=null;
                changeingContent.innerHTML=tution.innerHTML
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
                    changeingContent.innerHTML=null;
                    changeingContent.innerHTML=stu_exp.innerHTML
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
                        changeingContent.innerHTML=null;
                        changeingContent.innerHTML=careers.innerHTML
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
                            changeingContent.innerHTML=null;
                            changeingContent.innerHTML=about_the_university.innerHTML
                           
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
// putting dynamic details
var putthecoursename=document.getElementById("putcoursename");
putthecoursename.innerHTML=mydata.name;
var putthecoursename2=document.getElementById("putcoursename2");
putthecoursename2.innerHTML=mydata.name;
var putthecoursename3=document.getElementById("put3");
putthecoursename3.innerHTML=mydata.name;
var colorarr=["#34568B","#FF6F61","#6B5B95","#88B04B","#F7CAC9","#92A8D1",
"#955251","#009B77","#DD4124","#45B8AC","#EFC050"];
var imgbox=document.getElementById("imgbox");
var min = Math.ceil(1);
var max = Math.floor(10);
var random=Math.floor(Math.random() * (max - min) + min);
imgbox.style.backgroundColor=colorarr[random];
takemetoapply=()=>{
    window.location.href="contact.html"
}
// 
if(localStorage.getItem("logindata")!=null){
    var logindata=JSON.parse( localStorage.getItem("logindata"));
    console.log((logindata[0].name));
    var jff=document.getElementById("jff");
    jff.innerHTML=logindata[0].name;
    jff.style.color="black";
    jff.style.backgroundColor="white"
// hid;
var login=document.getElementById("login");
login.style.display="none";
var bellsign=document.getElementById("bellsign");
bellsign.style.display="block";
var hiddenfig=document.getElementById("hiddenfig");
hiddenfig.style.display="block";
var verticalline=document.getElementById("verticalline");
verticalline.style.display="block";
}