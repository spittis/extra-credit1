var classData = {

    //text
    coursename: "Oil & Gas",
    coursecode: "BCU-1001",
    profname: "Fname Lname",
    classtime: ["Tues 1PM", "Fri 9AM"],
    coursedesc: "This is the course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus incidunt provident officiis eligendi excepturi dolor perspiciatis amet, cupiditate soluta similique culpa possimus magnam molestias natus mollitia, repellat aliquid, quisquam! Numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid similique dolor, repudiandae quo quae voluptatibus ipsa, doloribus possimus ratione natus dicta voluptatem distinctio libero reprehenderit iure minima id architecto corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nemo, voluptas voluptate modi dolorum maxime sunt ipsum fuga quas numquam deserunt dolorem labore voluptatum est at cumque consectetur! Laborum, numquam.",
    coursecontent: ["Lecture Materials", "Tutorials &amp; Labs", "Quizzes", "Discussion Groups"],
    nav: ["Dashboard", "File Manager", "Email", "News"],
    classProf: "Oil & Gas - BCU-1001",
    admin: "Admin",

    //images
    profimg: "images/eEdu_prof.jpg",
    logo: "images/eEdu_ANUC_logo.jpg",
    mainImage: "images/eEdu_mainImg.jpg",
    profile: "images/eEdu_profile.jpg"
};



//text
document.getElementById("oill").innerHTML = classData.coursename;
document.getElementById("code").innerHTML = classData.coursecode;
document.getElementById("coursedesc").innerHTML = classData.coursedesc;
document.getElementById("profname").innerHTML = classData.profname;
document.getElementsByClassName("classtimes")[0].innerHTML = classData.classtime[0];
document.getElementsByClassName("classtimes")[1].innerHTML = classData.classtime[1];
document.getElementsByClassName("contents")[0].innerHTML = classData.coursecontent[0];
document.getElementsByClassName("contents")[1].innerHTML = classData.coursecontent[1];
document.getElementsByClassName("contents")[2].innerHTML = classData.coursecontent[2];
document.getElementsByClassName("contents")[3].innerHTML = classData.coursecontent[3];
document.getElementsByClassName("navi")[0].innerHTML = classData.nav[0];
document.getElementsByClassName("navi")[1].innerHTML = classData.nav[1];
document.getElementsByClassName("navi")[2].innerHTML = classData.nav[2];
document.getElementsByClassName("navi")[3].innerHTML = classData.nav[3];
document.getElementById("classProf").innerHTML = classData.classProf;

//images
document.getElementById("profImg").src = classData.profimg;
document.getElementById("logo1").src = classData.logo;
document.getElementById("topImg").src = classData.mainImage;
document.getElementById("img").src = classData.profile;