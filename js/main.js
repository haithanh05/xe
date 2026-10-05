
// =========================
// BACK TO TOP
// =========================

const backTop = document.getElementById("backTop");

if(backTop){

    window.addEventListener("scroll",function(){

        if(window.scrollY>300){

            backTop.style.display="block";

        }else{

            backTop.style.display="none";

        }

    });

    backTop.onclick=function(){

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    }

}


// =========================
// CARD HOVER
// =========================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition=".3s";

    });

});


// =========================
// ACTIVE MENU
// =========================

const current=window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link=>{

    if(link.getAttribute("href")==current){

        link.classList.add("active");

    }

});

// ĐĂNG KÝ

function registerUser(event){

    event.preventDefault();


    let username =
    document.getElementById("username").value;


    let password =
    document.getElementById("password").value;


    let repassword =
    document.getElementById("repassword").value;



    if(password !== repassword){

        alert("Mật khẩu nhập lại không đúng!");

        return;

    }



    let user = {

        username: username,

        password: password

    };



    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );


    alert("Đăng ký thành công!");

    location.href="login.html";


}






// ĐĂNG NHẬP DEMO

function loginUser(event){

    event.preventDefault();


    alert("Đăng nhập thành công!");


    window.location.href = "profile.html";

}