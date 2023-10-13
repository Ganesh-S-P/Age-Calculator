const btnEle = document.getElementById("btn")
const birthdayEle = document.getElementById("birthday")


function calculateAge(){
    const birthdayValue = birthdayEle.value;    
    if (birthdayValue === "") {
        alert("Please enter your birthday");
    } else {
        let age = getAge(birthdayValue);
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    console.log(birthdayDate.getFullYear());

}
btnEle.addEventListener("click",calculateAge)