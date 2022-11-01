
const displayUserPhoto = document.getElementById("displayUserPhoto");
const displayUserName = document.getElementById("displayUserName");
const displayUserFullName = document.getElementById("displayUserFullName");
const displayUserEmail = document.getElementById("displayUserEmail");
const displayUserPhoneNumber = document.getElementById("displayUserPhoneNumber");
const displayUserGander = document.getElementById("displayUserGander");
const userDOB = document.getElementById("displayUserDOB");
const userAddress = document.getElementById("displayUserAddress");

const getNewUserInfo = () => {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => displayUserInfo(data.results[0]))
}

function displayUserInfo (data) {

    displayUserPhoto.src = data.picture.large;
    displayUserName.innerText = `${data.name.first} ${data.name.last}`;
    displayUserFullName.innerText = `${data.name.title}. ${data.name.first} ${data.name.last}`;
    displayUserEmail.innerText = data.email;
    displayUserPhoneNumber.innerText = data.phone;
    displayUserGander.innerText = data.gender;

    let DOB = new Date(data.dob.date);
    userDOB.innerText = `${DOB.getDate()}/${DOB.getMonth() + 1}/${DOB.getFullYear()} (${data.dob.age} years old)`;
    userAddress.innerText = `Street: ${data.location.street.number} ${data.location.street.name}, 
    City: ${data.location.city}, State: ${data.location.state}, ${data.location.country}.`;

}


getNewUserInfo();