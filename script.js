function showLogin(){
document.getElementById("signupSection").classList.add("hidden");
document.getElementById("loginSection").classList.remove("hidden");
}

function showSignup(){
document.getElementById("loginSection").classList.add("hidden");
document.getElementById("signupSection").classList.remove("hidden");
}

function signup(){

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

const file=document.getElementById("photo").files[0];

if(!name || !email || !password || !file){
alert("Fill all fields");
return;
}

const reader=new FileReader();

reader.onload=function(){

const student={
name,
email,
password,
photo:reader.result,
attendance:"Absent",
marks:0
};

localStorage.setItem("student",JSON.stringify(student));

alert("Signup Successful");

showLogin();

};

reader.readAsDataURL(file);

}

function login(){

const email=document.getElementById("loginEmail").value;
const password=document.getElementById("loginPassword").value;

const student=
JSON.parse(localStorage.getItem("student"));

if(
student &&
student.email===email &&
student.password===password
){

loadDashboard(student);

}else{
alert("Invalid Credentials");
}
}

function loadDashboard(student){

document.getElementById("loginSection")
.classList.add("hidden");

document.getElementById("dashboard")
.classList.remove("hidden");

document.getElementById("profileImage")
.src=student.photo;

document.getElementById("studentName")
.innerText=student.name;

document.getElementById("studentEmail")
.innerText=student.email;

document.getElementById("attendanceDisplay")
.innerText=student.attendance;

document.getElementById("marksDisplay")
.innerText=student.marks;
}

function saveAttendance(){

let student=
JSON.parse(localStorage.getItem("student"));

student.attendance=
document.getElementById("attendance").value;

localStorage.setItem(
"student",
JSON.stringify(student)
);

document.getElementById("attendanceDisplay")
.innerText=student.attendance;

alert("Attendance Updated");
}

function saveMarks(){

let student=
JSON.parse(localStorage.getItem("student"));

student.marks=
document.getElementById("marks").value;

localStorage.setItem(
"student",
JSON.stringify(student)
);

document.getElementById("marksDisplay")
.innerText=student.marks;

alert("Marks Updated");
}

function logout(){

document.getElementById("dashboard")
.classList.add("hidden");

document.getElementById("loginSection")
.classList.remove("hidden");
}
