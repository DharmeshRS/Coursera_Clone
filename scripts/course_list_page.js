let search=JSON.parse(localStorage.getItem("coursera_search"));


async function showlist(search){
    localStorage.removeItem("coursera_search")
    let res = await fetch(`https://api.coursera.org/api/courses.v1?q=search&query=${search}&includes=instructorIds,photoUrl,description,largeIcon&fields=instructorIds,photoUrl,description,partnerLogo,certificates,startDate,workload,specializations,domainTypes`)
    let data =await res.json();
    displaydata(data)
}

showlist(search)
let parent=document.getElementById("displaydiv")

function displaydata(data){
    data.elements.forEach((el) => {
        console.log(el)
        let maindiv=document.createElement("div")
        let imgdiv=document.createElement("div")
        let descdiv=document.createElement("div")

        let img=document.createElement("img")
        img.src=el.photoUrl
        imgdiv.append(img)
        //description

        let title=document.createElement("p")
        let instructor=document.createElement("p")
        let type=document.createElement("p")
        let studenttotal=document.createElement("p")
        let studenttype=document.createElement("p")

        title.innerText=el.name;
        instructor.innerText=el.domainTypes[0].domainId;

        let len=el.certificates.length;
        if(len==0 || len == 1){
            type.innerText="Certification";
        }else if(len==2){
            type.innerText="Specialization";
        }

        function getRandomNumberBetween(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
        }
        let num=getRandomNumberBetween(200,998)

        studenttotal.innerText=num+"K Students"

        var randNo = Math.floor(Math.random() * 3) + 1
        if (randNo==0 || randNo==1){
           var st="Beginner";
        }else if(randNo==2){
            var st="Intermediate";
        }else if(randNo==3){
            var st="Advanced";
        }
        studenttype.innerText=st
        let hr=document.createElement("hr")
        descdiv.append(title,instructor,type,studenttotal,studenttype)
        maindiv.append(imgdiv,descdiv)
        maindiv.onclick=function(){
            alert("go to desc page")
            document.location.href="course_ldesc_page.html";
        }
        parent.append(maindiv,hr)
    })
}

function empty(){
    let box=document.getElementById("displaydiv")
    box.innerHTML=null;
    alert("clear")
}

async function lang_select(){
    empty()
    let lang_form=document.getElementById("formid1")
    let  lang_name=lang_form.languages[lang_form.languages.selectedIndex].text
    let res = await fetch(`http://localhost:3000/api/data`)
    let data =await res.json();
    show_server_data(data,lang_name)
   
}


function show_server_data(data,lang_name){
     empty()
    data.forEach((el) => {
        if(el.Language1==lang_name){
            let maindiv=document.createElement("div")
        let imgdiv=document.createElement("div")
        let descdiv=document.createElement("div")

        let img=document.createElement("img")
        img.src=el.img
        imgdiv.append(img)
        //description

        let title=document.createElement("p")
        let institute=document.createElement("p")
        let type=document.createElement("p")
        let studenttotal=document.createElement("p")
        let studenttype=document.createElement("p")

        title.innerText=el.coursename;
        institute.innerText=el.institute;
        type.innerText=el.category;

        


        studenttotal.innerText=el.student_enroll+" Students"

        studenttype.innerText=el.level
        let hr=document.createElement("hr")
        descdiv.append(title,institute,type,studenttotal,studenttype)
        maindiv.append(imgdiv,descdiv)
        maindiv.onclick=function(){
            alert("go to desc page")
            document.location.href="course_ldesc_page.html";
        }
        parent.append(maindiv,hr)
        }
        
    })
}
 
// https://api.coursera.org/api/courses.v1?q=search&query=${search}&index=prod_all_launched_products_term_optimization&allLanguages=english&includes=instructorIds,photoUrl,description,largeIcon&fields=instructorIds,photoUrl,description,partnerLogo,certificates,startDate,workload,specializations,domainTypes
// &productDifficultyLevel=Beginner
// &entityTypeDescription=Courses => learning products


async function level_select(){
    empty()
    let lang_form=document.getElementById("formid2")
    let  level_name=lang_form.level[lang_form.level.selectedIndex].text
    alert(level_name)
    let res = await fetch(`http://localhost:3000/api/data`)
    let data =await res.json();
    
    show_server_data_level(data,level_name)
   
}

function  show_server_data_level(data,level_name){
        empty()
        data.forEach((el) => {
        if(el.level==level_name){
            let maindiv=document.createElement("div")
        let imgdiv=document.createElement("div")
        let descdiv=document.createElement("div")

        let img=document.createElement("img")
        img.src=el.img
        imgdiv.append(img)
        //description
        let title=document.createElement("p")
        let institute=document.createElement("p")
        let type=document.createElement("p")
        let studenttotal=document.createElement("p")
        let studenttype=document.createElement("p")
        title.innerText=el.coursename;
        institute.innerText=el.institute;
        type.innerText=el.category;
        studenttotal.innerText=el.student_enroll+" Students"
        studenttype.innerText=el.level
        let hr=document.createElement("hr")
        descdiv.append(title,institute,type,studenttotal,studenttype)
        maindiv.append(imgdiv,descdiv)
        maindiv.onclick=function(){
            alert("go to desc page")
            document.location.href="course_ldesc_page.html";
        }
        parent.append(maindiv,hr)
        }
        
    })
}

async function duration_select(){
    empty()
    let lang_form=document.getElementById("formid3")
    let  duration_name=lang_form.duration[lang_form.duration.selectedIndex].value
    alert(duration_name)
    let res = await fetch(`http://localhost:3000/api/data`)
    let data =await res.json();
    
    show_server_data_duration(data,duration_name)
   
}

function show_server_data_duration(data,duration_name){
    empty()
        data.forEach((el) => {
        if(el.duration==duration_name){
            let maindiv=document.createElement("div")
        let imgdiv=document.createElement("div")
        let descdiv=document.createElement("div")

        let img=document.createElement("img")
        img.src=el.img
        imgdiv.append(img)
        //description
        let title=document.createElement("p")
        let institute=document.createElement("p")
        let type=document.createElement("p")
        let studenttotal=document.createElement("p")
        let studenttype=document.createElement("p")

        title.innerText=el.coursename;
        institute.innerText=el.institute;
        type.innerText=el.category;

        studenttotal.innerText=el.student_enroll+" Students"

        studenttype.innerText=el.level
        let hr=document.createElement("hr")
        descdiv.append(title,institute,type,studenttotal,studenttype)
        maindiv.append(imgdiv,descdiv)
        maindiv.onclick=function(){
            document.location.href="course_ldesc_page.html";
        }
        parent.append(maindiv,hr)
        }
        
    })
}
async function subject_select(){
    empty()
    let lang_form=document.getElementById("formid4")
    let  duration_name=lang_form.duration[lang_form.duration.selectedIndex].value
    alert(duration_name)
    let res = await fetch(`https://api.coursera.org/api/courses.v1?query=${search}&index=prod_all_launched_products_term_optimization&productDifficultyLevel=${level_name}`)
    let data =await res.json();
    
    displaydata(data)
   
}
