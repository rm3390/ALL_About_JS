// let user =[{
//     name:"tft"
// },{
//     name:"rm"
// }]
// localStorage.setItem("name",JSON.stringify(user));
let form = document.querySelector("form")
let main = document.querySelector(".main")
let clrAll = document.querySelector("#clrAll");
form.addEventListener("submit",(event)=>{
    let name = event.target.uname.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;
    let checkStatus =0;
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
   
    for (const v of userData) {
        if (v.email==email || v.phone==phone) {
             checkStatus = 1;
             break;
        }
    }
    if (checkStatus==1) {
        alert("E-mail or Phone Already Exists");
    }
    else{
          userData.push ({
        "name":name,
        "email":email,
        "phone":phone
     })
    localStorage.setItem("userDetails",JSON.stringify(userData));
      
    }
   
   
      displayData();
      event.target.reset();
      event.preventDefault();

})

let displayData =()=>{
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
     let finalData = '';
     userData.forEach((element,i) => {
        finalData += ` <div class="items">
        <span onclick ='removeData(${i})'>&times;</span>
        <h5>Name</h5>
        <div>${element.name}</div>
        <h5>Email</h5>
        <div>${element.email}</div>
        <h5>Phone</h5>
        <div>${element.phone}</div>
    </div>`
     });

     main.innerHTML = finalData;
}

  let removeData=(index)=>{
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    userData.splice(index,1);
    localStorage.setItem("userDetails",JSON.stringify(userData));
    displayData();

  }

clrAll.addEventListener("click",()=>{
    localStorage.clear("userDetails");
    displayData();
})
displayData();