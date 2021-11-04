// profesional courses

var span=document.getElementsByClassName('arrowspan1')
var div=document.getElementsByClassName('item')
var l=0;
span[1].onclick=()=>{
    l++;
    for(var i of div){
        if(l==0){i.style.left="0px";}
        if(l==1){i.style.left="-1250px";}
        if(l==2){i.style.left="-2500px";}
        if(l==3){i.style.left="-2650px";}   
        // if(l==4){i.style.colo="-2600px";}
        if(l>4){l=4;}


    }

    span[0].onclick=()=>{
        l--;
        for(var i of div){
            if(l==0){i.style.left="0px";}
            if(l==1){i.style.left="-1250px";}
            if(l==2){i.style.left="-2500px";}
            // if(l==3){i.style.left="-2660px";}
            if(l<0){l=0;}
    
        }
        }
}
var span2=document.getElementsByClassName('arrowspan2')
var degree_div=document.getElementsByClassName('degree-item')
var l2=0;
span2[1].onclick=()=>{
    l2++;
    for(var i of degree_div){
        if(l2==0){i.style.left="0px";}
        if(l2==1){i.style.left="-1250px";}
        if(l2==2){i.style.left="-2500px";}
        if(l2==3){i.style.left="-2650px";}   
        // if(l2==4){i.style.colo="-2600px";}
        if(l2>4){l2=4;}


    }

    span2[0].onclick=()=>{
        l2--;
        for(var i of degree_div){
            if(l2==0){i.style.left="0px";}
            if(l2==1){i.style.left="-1250px";}
            if(l2==2){i.style.left="-2500px";}
            // if(l==3){i.style.left="-2660px";}
            if(l2<0){l2=0;}
    
        }
        }
}



let parent=document.getElementById("prof_degree")
let degree_slider=document.getElementById("degree-slider")
async function getData(){
    let res=await fetch("http://localhost:3000/api/course_data")
    let data=await res.json()
    displaydata(data)
    // console.log(data)
}

function displaydata(data){
    data.forEach((el)=>{
        if (el.category=="course"){
            let div=document.createElement("div")
        div.innerHTML=`<div class="item" id="elements">
        <div style="margin-top:-60px;"><img src="${el.backgroundimage}"></div>
        <div style="background-color: #046082;height: 42%;margin-top: -130px;position: relative;">
            <div>
                <img src="${el.logo}" style="margin-top: -40px;margin-left: -130px;position: absolute;background-color:white;border-radius: 5px;"></div>
                <p style="padding-top: 35px;text-align: justify;margin-left: 10px;">${el.coursename}</p>
                <h5 style="text-align: justify;margin-left: 10px;margin-top: 10px;">${el.institute}</h5>
            
                
            </div>
            <div style="background-color: #046082;;">
                Professional Certificate
            </div>
            
        </div>`
        parent.append(div)
        }
        else if(el.category=="degree"){
                let div=document.createElement("div")
            div.innerHTML=`<div class="degree-item" id="elements">
            <div style="height: 70%;background-color: black;margin-top: -60px;border: 0.2px solid black;">
                <img src="${el.backgroundimage}" style="height: 90%;width: fit-content;" alt="">
            </div>
            <div style="background-color: #ffffff;height: 80%;margin-top: -60px;position: relative;">
                <div style="margin-top: 10px;margin-left: 0px;position: absolute;background-color:white;border-radius: 5px;color:black;text-align: justify;">${el.coursename}</div>
                <h5 style="position: absolute;color: black;margin-top: 70px;">From ${el.institute} </h5>
                <div style="position: absolute;margin-top: 155px;background-color: rgb(97, 97, 255);display: flex;">
                    <strong style="width: 237px;margin: auto;">100% Online</strong>
                    <img class="table_img" src="${el.logo}" />
                </div> 
            </div>
        </div>`
        degree_slider.append(div)
        }
        
    })
}

getData()


