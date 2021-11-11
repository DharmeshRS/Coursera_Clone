

async function showlist(){
    let search=JSON.parse(localStorage.getItem("coursera_search"));

    localStorage.removeItem("coursera_search")

    // alert(search)
    // let q=search
    let res = await fetch(`https://api.coursera.org/api/courses.v1?q=search&query=${search}&includes=instructorIds,photoUrl,description,largeIcon&fields=instructorIds,photoUrl,description,partnerLogo,certificates,startDate,workload,specializations,domainTypes`)
    let data =await res.json();

    console.log(data)
    displaydata(data)
}

showlist()
let parent=document.getElementById("displaydiv")
function displaydata(data){
    console.log("display",data)

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

// elements: Array(89)
// 0:
// certificates: ['VerifiedCert']
// courseType: "v2.ondemand"
// description: "By the end of this project, you will be able to apply statistics to perform an A/B Test for an ad campaign using python. A/B Testing is widely used by digital marketing agencies as it is the  most effective mean to determine the best content to convert visits into sign-ups and purchases. Throughout the project, you will be able to set up hypothesis testing to advise a digital marketing agency that designed a new ad for their client on whether they should go for the new ad or not. \n\nNote: This course works best for learners who are based in the North America region. We’re currently working on providing the same experience in other regions."
// domainTypes: (2) [{…}, {…}]
// id: "Qr6QVXnSEeuIrRIFuaY2iw"
// instructorIds: ['2388082']
// name: " perform an A/B Test for an ad campaign using python"
// partnerLogo: "http://coursera-university-assets.s3.amazonaws.com/37/fa0d14d281428bb2f111ab5a67974a/coursera-projectnetwork-full-rgb.png"
// photoUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/bd/5fc3f47d454392a5b268126b4b9c98/Creating-Accounting-Statements-Using-Accounting-Fundamentals-37-.png"
// slug: "perform-abtest-python"
// specializations: []
// startDate: 1617680699128
// workload: "2 hours"