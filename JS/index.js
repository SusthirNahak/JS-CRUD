var addBtn =document.querySelector("#add_emp-btn");
var Modal =document.querySelector(".modal");
var CloseButton =document.querySelector(".close-btn");
addBtn.onclick=function(){
   Modal.classList.add("active")
}
CloseButton.onclick=function(){
   Modal.classList.remove("active")
}

// CloseButton.addEventListener("click",()=>{
//     Modal.classList.remove("active")
// })
var RegisterBtn = document.getElementById("register-btn");

var EmpId = document.getElementById("emp_id");
var EmpName = document.getElementById("emp_name");
var EmpEmail = document.getElementById("emp_email");
var EmpMobile = document.getElementById("emp_mob");
var EmpDesig = document.getElementById("emp_desig");
var Form =document.getElementById("reg-form")


var UserRegData=[];

RegisterBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    RegistrationData();
    Form.reset('');
    CloseButton.click();
})
if(localStorage.getItem("MyData") != null){
    var UserRegData=JSON.parse(localStorage.getItem("MyData"));
}
var Table =document.getElementById("tabledata")
const getDatafromLocal =()=>{
    UserRegData.forEach((data,index)=>{

    })
}


function RegistrationData(){
    UserRegData.push({
        EmpId :EmpId.value,
        EmpName :EmpName.value,
        EmpEmail :EmpEmail.value,
        EmpMobile :EmpMobile.value,
        EmpDesig :EmpDesig.value,
    })
    var UserRegStringData = JSON.stringify(UserRegData);
    localStorage.setItem("MyData",UserRegStringData)

}
