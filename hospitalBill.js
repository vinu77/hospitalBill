
let test_report = 
[
    {
        slno : 01,
        test_name :"GENERAL CHECK UP",
        amount : 500
    },
    {
        slno : 02,
        test_name :"ECG",
        amount : 150
    },
    {
        slno : 03,
        test_name :"ANTI TPO TEST",
        amount : 1020
    },
    {
        slno : 04,
        test_name :"BLOOD TEST",
        amount : 500
    },
    {
        slno : 05,
        test_name :"HIV TEST",
        amount : 700
    },
    {
        slno : 06,
        test_name :"X-RAY",
        amount : 400
    },
    {
        slno : 07,
        test_name :"SONOGRAPHY",
        amount : 750
    },
    {
        slno : 08,
        test_name :"DIALISYS",
        amount : 1000
    },
    {
        slno : 09,
        test_name :"CITY SCANNING",
        amount : 15000
    },
    {
        slno : 10,
        test_name :"THYROID TEST",
        amount : 500
    }
]
let billDetails = document.querySelector(".bill_details");
[...test_report].forEach(element =>{
    billDetails.innerHTML += `<tr><td>${element.slno}</td><td>${element.test_name}</td><td>${element.amount}</td></tr>`;
})
let i=1;
let form = document.querySelector("form");
form.addEventListener("submit",el=>{
    el.preventDefault();
    let patientName = document.querySelector("#patientName");
    let test = document.querySelector("#test");
    let pname = document.querySelector(".pname");
    let pay = document.querySelector(".billToPay");
    let total = document.querySelector(".total");

    pname.innerHTML = patientName.value.trim().toUpperCase();
    [...test_report].forEach((check,index) =>{
       if(test.value.trim().toUpperCase() == check.test_name)
       {
        pay.innerHTML +=`<tr><td>${i}</td><td>${check.test_name}</td><td>${check.amount}</td></tr>`;
        total.innerHTML = Number(total.innerHTML) + check.amount;
        console.log(total.innerHTML); 
        console.log(typeof(total.innerHTML));
        test.value = "";
        i++;
       }
    })
})