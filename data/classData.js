var classData = {

    //text
    coursename: "Oil & Gas",
    coursecode: "BCU-1001",
    profname: "Fname Lname",
    classtime: ["Tues 1PM", "Fri 9AM"],
    coursedesc: "This is the course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus incidunt provident officiis eligendi excepturi dolor perspiciatis amet, cupiditate soluta similique culpa possimus magnam molestias natus mollitia, repellat aliquid, quisquam! Numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid similique dolor, repudiandae quo quae voluptatibus ipsa, doloribus possimus ratione natus dicta voluptatem distinctio libero reprehenderit iure minima id architecto corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nemo, voluptas voluptate modi dolorum maxime sunt ipsum fuga quas numquam deserunt dolorem labore voluptatum est at cumque consectetur! Laborum, numquam.",
    coursecontent: ["Lecture Materials", "Tutorials & Labs", "Quizzes", "Discussion Groups"],

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
document.getElementById("classtimes").innerHTML = classData.classtime;
document.getElementById("profname").innerHTML = classData.profname;

//images
document.getElementById("profImg").src = classData.profimg;
document.getElementById("logo1").src = classData.logo;
document.getElementById("topImg").src = classData.mainImage;
document.getElementById("img").src = classData.profile;