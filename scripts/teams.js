function hideAns(target) {
    var answer = document.getElementById(`${target}`)
    if (answer.style.display === "block") {
         answer.style.display = "none";
       } else {
         answer.style.display = "block";
       }
    }