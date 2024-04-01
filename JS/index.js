var addBtn = document.querySelector("#add_emp-btn");
var Modal = document.querySelector(".modal");
var CloseButton = document.querySelector(".close-btn");
addBtn.onclick = function () {
  Modal.classList.add("active");
};
CloseButton.onclick = function () {
  Modal.classList.remove("active");
};

// CloseButton.addEventListener("click",()=>{
//     Modal.classList.remove("active")
// })
var RegisterBtn = document.getElementById("register-btn");

var EmpId = document.getElementById("emp_id");
var EmpName = document.getElementById("emp_name");
var EmpEmail = document.getElementById("emp_email");
var EmpMobile = document.getElementById("emp_mob");
var EmpDesig = document.getElementById("emp_desig");
var Form = document.getElementById("reg-form");

var UserRegData = [];

RegisterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  RegistrationData();
  getDatafromLocal();
  Form.reset("");
  CloseButton.click();
});
if (localStorage.getItem("MyData") != null) {
  var UserRegData = JSON.parse(localStorage.getItem("MyData"));
}
var TableData = document.getElementById("tabledata");
const getDatafromLocal = () => {
  TableData.innerHTML = ""
  UserRegData.forEach((data, index) => {
  TableData.innerHTML += `<tr>
                                <td>${index+1}</td>
                                <td>${data.EmpId}</td>
                                <td>${data.EmpName}</td>
                                <td>${data.EmpEmail}</td>
                                <td>${data.EmpMobile}</td>
                                <td>${data.EmpDesig}</td>
                                <td>
                                    <button><i class="fa fa-eye"></i></button>
                                    <button class="del-btn" style="background-color: red;"><i class="fa fa-trash"></i></button>
                                </td>
                            </tr>`;
  });
// Delete row coding
// var i;
// var allDltBtn =document.querySelectorAll(".del-btn")
// for(i=0;i<=allDltBtn.length;i++){
//         allDltBtn[i].onclick = function(){
//         var tr = this.parentElement.parentElement;
//         var id = tr.getAttribute("index")
//         UserRegData.splice(id,1)
//         var UserRegStringData = JSON.stringify(UserRegData);
//         localStorage.setItem("MyData", UserRegStringData);
//         tr.remove()
//       }

// }


};
getDatafromLocal();

function RegistrationData() {
  UserRegData.push({
    EmpId: EmpId.value,
    EmpName: EmpName.value,
    EmpEmail: EmpEmail.value,
    EmpMobile: EmpMobile.value,
    EmpDesig: EmpDesig.value,
  });
  var UserRegStringData = JSON.stringify(UserRegData);
  localStorage.setItem("MyData", UserRegStringData);
  swal("Good job!", "You are registered successfully!", "success");
}
