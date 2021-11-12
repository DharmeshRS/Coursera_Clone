
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
         // content.style.display = 'block';
        // content.style.display = 'none';
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        //  content.style.display = 'block';
        } 
      });
    }


   
    let cartData = JSON.parse(localStorage.getItem("userData"))

    //let dele = JSON.parse(localStorage.setItem("data"))
    // console.log("cartDate ", cartData)
    let data_div = document.getElementById("banner");
   // let data_divv = document.getElementById("firstbox");
    //console.log(cartData.length)
  
    cartData.forEach(function(product) {
        let div = document.createElement("div")
      //  let div1 = document.createElement("div")
        let u_name = document.createElement('p')
        u_name.innerHTML = "You're signed in as" + " " + product.emailAddress + " " + "Not you?" + " " + " Log" + " " + "out" + " ";


      ///  let nam = document.createElement('p')
      // nam.innerHTML = product.username;

        div.append(u_name);
        data_div.append(div);
    
console.log(u_name)

    });
 
    let cartData1 = JSON.parse(localStorage.getItem("userData"))

    //let dele = JSON.parse(localStorage.setItem("data"))
    // console.log("cartDate ", cartData)
   // let data_div = document.getElementById("banner");
    let data_divv = document.getElementById("firstbox1");
    //console.log(cartData.length)
  
    cartData.forEach(function(product) {
      // let div = document.createElement("div")
        let div1 = document.createElement("div")
      //  let u_name = document.createElement('p')
      //  u_name.innerHTML = "You're signed in as" + " " + product.emailAddress + " " + "Not you?" + " " + " Log" + " " + "out" + " ";


        let nam = document.createElement('p')
        nam.innerHTML = product.username;

        div1.append(nam);
       // data_div.append(div);
        data_divv.append(div1);
console.log(nam)

    });
    function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
