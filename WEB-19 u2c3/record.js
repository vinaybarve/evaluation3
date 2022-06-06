// fill in javascript code here
document.querySelector('form').addEventListener("submit",myFunction);
function myFunction(event) {
    event.preventDefault()
    let avatar=document.querySelector("#name").value
    let name=document.querySelector("#employeeID").value
    let department = document.querySelector("#department").value
    let experience=document.querySelector("#exp").value
    let email=document.querySelector("#email").value
    let number =document.querySelector("#mbl").value

    console.log(avatar,name,department,experience,email,number);
    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerText=Name

    let td2=document.createElement("td");
    td2.innerText=EmployeeID

    let td3=document.createElement("td");
    td3.innerText=Department

    let td4=document.createElement("td");
    td4.innerText=Experienceinyears

    let td5=document.createElement("td");
    td5.innerText=Emailaddress

    let td6=document.createElement("td");
    td6.innerText=MobileNumber

    let td7=document.createElement("td");
    td7.innerText=Role

    if(experience>5){
        td7.innerText="Senior";
    }if(experience>=2,5){
        td7.innerText="Junior";
    }if(experience<=1){
        td7.innerText="Fresher";
    }
    

    let td8=document.createElement("td");
    td8.innerText=Delete
    td8.style.backgroundColor=red

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);








}