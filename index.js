// document.addEventListener("DOMContentLoaded", function() {
//     updateDOM(selector)
// });

// function updateDOM(selector){

//     update = document.querySelector(selector)
//     return update.innerHTML = "This is really cool!";

// }

document.addEventListener("DOMContentLoaded", function() {
    updateDOM()
});

function updateDOM(){

    document.querySelector('p').innerHTML = "This is really cool!";

}

