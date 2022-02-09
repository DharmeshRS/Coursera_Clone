

var searchbutton=document.getElementById("searchicon")

searchbutton.onclick=function(){
    
if(localStorage.getItem("coursera_search")===null){
    localStorage.setItem("coursera_search",JSON.stringify([]))
}

    // alert("searchdata")
    let search=document.getElementById("searchinput").value;
    // alert(search)
    if(search==""|| search==" "){
        alert("please Enter Valid Course-name")
    }else if(search!=""){
        let se=JSON.parse(localStorage.getItem("coursera_search"));
        se.push(search);
        localStorage.setItem("coursera_search",JSON.stringify(se));
        document.location.href="course_list_page.html";
    }
    
    // alert("Item Added Into Cart");
    
}


    