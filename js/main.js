// display movies
let allMoviesByWord = document.getElementById("allMovies");
let byWord = document.getElementById("ByWord");
let apiLink = "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let allMovies = [];
function movies() {
    let myHttp = new XMLHttpRequest();
    myHttp.open('Get', apiLink),
    myHttp.send()
    myHttp.addEventListener('readystatechange', function () {
        if (myHttp.readyState == 4 && myHttp.status == 200) {
            allMovies = (JSON.parse(myHttp.response).results);
            displayMovies();
        }
    });
}

movies();
function displayMovies() {
    let cartoona = ``;
    for (let i = 0; i < allMovies.length; i++) {

        cartoona += ` <div class="item-moving col-md-6 col-lg-4 my-3"> 
        <div class="item rounded position-relative">
            <img src="${"https://image.tmdb.org/t/p/w500" + allMovies[i].poster_path}" class="img-fluid rounded w-100"/>
            <div class="layer d-flex align-items-center justify-content-center ">
            <div class="info p-0">
            <h2>${allMovies[i].original_title}</h2>
            <p>${allMovies[i].overview}</p>
            <p>rate: ${allMovies[i].vote_average}</p>
            <p> ${allMovies[i].release_date}</p>
      </div>
      </div>
      </div>
      </div>
        `



    }

    document.getElementById('postsRow').innerHTML = cartoona;


}

// first search to get all movies contain the word

function searchAllByWord(word) {
    let http = new XMLHttpRequest();
    http.open('Get', `https://api.themoviedb.org/3/search/movie?query=` + word + `&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false`),
    http.send()
    http.addEventListener('readystatechange', function () {
    if (http.readyState == 4 && http.status == 200) {
            allMovies = (JSON.parse(http.response).results);
                displayMovies();
            }
    });
       

}
allMoviesByWord.addEventListener("keyup" , function () {
    searchAllByWord(allMoviesByWord.value);   
})
// second search by word you put
function searchByFirstWord() {
    cartoona = ``;
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].original_title.includes(byWord.value) == true) {

            cartoona += ` <div class="item-moving col-md-6 col-lg-4 my-3"> 
            <div class="item rounded position-relative">
                <img src="${"https://image.tmdb.org/t/p/w500" + allMovies[i].poster_path}" class="img-fluid rounded w-100"/>
                <div class="layer d-flex align-items-center justify-content-center ">
                <div class="info p-0">
                <h2>${allMovies[i].original_title}</h2>
                <p>${allMovies[i].overview}</p>
                <p>rate: ${allMovies[i].vote_average}</p>
                <p> ${allMovies[i].release_date}</p>
          </div>
          </div>
          </div>
          </div>
            `


        }
        (document.getElementById('postsRow').innerHTML = cartoona);



    }

}
byWord.addEventListener("keyup" , function () {
    searchByFirstWord(byWord.value);
})

// form validation

let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userNumber = document.getElementById("number");
let userAge = document.getElementById("age");
let userPassword = document.getElementById("password");
let userRepassword = document.getElementById("repassword");
let nameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let numberAlert = document.getElementById("numberAlert");
let ageAlert = document.getElementById("ageAlert");
let passwordAlert = document.getElementById("passwordAlert");
let repasswordAlert = document.getElementById("repasswordAlert");
let submitBtn = document.getElementById("submitBtn");
var alerts = document.querySelectorAll("p.alert");



userName.onkeyup = function showNameError() {
    var nameRejex = /^[A-Z][a-z]{2,8}$/
    if (!nameRejex.test(userName.value) || userName.value == null || userName.value == "") {
        submitBtn.disabled = "true";
        userName.classList.add("is-invalid");
        userName.classList.remove("is-valid");
        nameAlert.classList.remove("d-none");
    }
    else {
        // submitBtn.removeAttribute("disabled");
        userName.classList.add("is-valid");
        userName.classList.remove("is-invalid");
        nameAlert.classList.add("d-none");

    }
}

userEmail.onkeyup = function showEmailError() {
    var emailRejex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!emailRejex.test(userEmail.value) || userEmail.value == null || userEmail.value == "") {
        submitBtn.disabled = "true";
        userEmail.classList.add("is-invalid");
        userEmail.classList.remove("is-valid");
        emailAlert.classList.remove("d-none");
    }
    else {
        // submitBtn.removeAttribute("disabled");
        userEmail.classList.add("is-valid");
        userEmail.classList.remove("is-invalid");
        emailAlert.classList.add("d-none");

    }
}

userNumber.onkeyup = function showNumberError() {
    var numberRejex = /^(002)?01[0125][0-9]{8}$/
    if (!numberRejex.test(userNumber.value) || userNumber.value == null || userNumber.value == "") {
        submitBtn.disabled = "true";
        userNumber.classList.add("is-invalid");
        userNumber.classList.remove("is-valid");
        numberAlert.classList.remove("d-none");
    }
    else {
        // submitBtn.removeAttribute("disabled");
        userNumber.classList.add("is-valid");
        userNumber.classList.remove("is-invalid");
        numberAlert.classList.add("d-none");

    }
}

userAge.onkeyup = function showAgeError() {
    var ageRejex = /^([1-9][0-9]|100)$/
    if (!ageRejex.test(userAge.value) || userAge.value == null || userAge.value == "") {
        submitBtn.disabled = "true";
        userAge.classList.add("is-invalid");
        userAge.classList.remove("is-valid");
        ageAlert.classList.remove("d-none");
    }
    else {
        // submitBtn.removeAttribute("disabled");
        userAge.classList.add("is-valid");
        userAge.classList.remove("is-invalid");
        ageAlert.classList.add("d-none");

    }
}

userPassword.onkeyup = function showPasswordError() {
    var passwordRejex = /^[A-Za-z0-9]\w{7,14}$/
    if (!passwordRejex.test(userPassword.value) || userPassword.value == null || userPassword.value == "") {
        submitBtn.disabled = "true";
        userPassword.classList.add("is-invalid");
        userPassword.classList.remove("is-valid");
        passwordAlert.classList.remove("d-none");
    }
    else {
        // submitBtn.removeAttribute("disabled");
        userPassword.classList.add("is-valid");
        userPassword.classList.remove("is-invalid");
        passwordAlert.classList.add("d-none");

    }
}

userRepassword.onkeyup = function showRepasswordError() {
    if (userPassword.value != userRepassword.value || userPassword.value == null || userPassword.value == "") {
        submitBtn.disabled = "true";
        userRepassword.classList.add("is-invalid");
        userRepassword.classList.remove("is-valid");
        repasswordAlert.classList.remove("d-none");
    }
    else {
        // submitBtn.removeAttribute("disabled");
        userRepassword.classList.add("is-valid");
        userRepassword.classList.remove("is-invalid");
        repasswordAlert.classList.add("d-none");

    }
}

function userNameCheck(name) {
    if (name == null || name == "") {
        return false;
    }
    return true;
}
function userEmailCheck(email) {
    if (email == null || email == "") {
        return false;
    }
    return true;
}
function userNumberCheck(number) {
    if (number == null || number == "") {
        return false;
    }
    return true;
}
function userAgeCheck(age) {
    if (age == null || age == "") {
        return false;
    }
    return true;
}
function userPasswordCheck(password) {
    if (password == null || password == "") {
        return false;
    }
    return true;
}
function userRepasswordCheck(repassword) {
    if (repassword == null || repassword == "") {
        return false;
    }
    return true;
}


// side nav

$("#openandCloseMenu").click(() => {

    let navContent = $(".insideNav").outerWidth();
    console.log(navContent);

    if ($(".insideNav").css("left") == "0px") {
        $(".insideNav").animate({ left: `-${navContent}` }, 500)
        $(".nav").animate({ left: "0px" }, 500)
        $(".fa-align-justify").toggleClass("fa-times")
        $(".insideNav li").animate({ opacity: "0", paddingTop: "400px" }, 500)


    }
    else if ($(".insideNav").css("left") != "0px") {
        $(".insideNav").animate({ left: `0px` }, 500)
        $(".nav").animate({ left: "250px" }, 500)
        $(".fa-align-justify").toggleClass("fa-times")
        $(".insideNav .element1").animate({ opacity: "1", paddingTop: "24px" }, 1200),
        $(".insideNav .element2").animate({ opacity: "1", paddingTop: "24px" }, 1300),
        $(".insideNav .element3").animate({ opacity: "1", paddingTop: "24px" }, 1400),
        $(".insideNav .element4").animate({ opacity: "1", paddingTop: "24px" }, 1500),
        $(".insideNav .element5").animate({ opacity: "1", paddingTop: "24px" }, 1600),
        $(".insideNav .element6").animate({ opacity: "1", paddingTop: "24px" }, 1700)


    }
});


// Nav elements
let element1 = document.querySelector(".elements .element1 a");
let element2 = document.querySelector(".elements .element2 a");
let element3 = document.querySelector(".elements .element3 a");
let element4 = document.querySelector(".elements .element4 a");
let element5 = document.querySelector(".elements .element5 a");
let element6 = document.querySelector(".elements .element6 a");
// console.log(element6);
element1.addEventListener("click", function () {
    apiLink = "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
        movies();
})

element2.addEventListener("click", function () {
    apiLink = "https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
        movies();
})

element3.addEventListener("click", function () {
    apiLink = "https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
        movies();
})

element4.addEventListener("click", function () {
    apiLink = "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
        console.log(apiLink);
    movies();
})

element5.addEventListener("click", function () {
    apiLink = "https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
        movies();
})

// $(".element6").click(function (e) {
//     let aHref = e.target.getAttribute('href');
//     console.log(aHref);
//     let sectionOffset = $(aHref).offset().top;
//     console.log(sectionOffset);
//     $("html,body").animate({ scrollTop: sectionOffset }, 1000)

// })