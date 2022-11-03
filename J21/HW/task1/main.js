function ajax(url, callback){
    const aj = new XMLHttpRequest();
    aj.onload = () => {
        callback(aj.responseText);
    }
    aj.open('GET', url);
    aj.send();
}

const CSV_LINK = 'https://so2niko-students.github.io/FE22-1/data/POPPROJ_18102022173124332.csv'
ajax(CSV_LINK, d => {
    console.log(d);
    const rowSeparator = '\n';
    const comaSeparator = '","';
    const data = d.split(rowSeparator).map(r => r.split(comaSeparator));
    console.log(data);
})












// / const LOCATION = document.getElementById("Location");
// const Country = document.getElementById("Country");
//
//
//
// const getInfo = () => {
//     fetch('https://so2niko-students.github.io/FE22-1/data/POPPROJ_18102022173124332.csv')
//         .then(response => response.json())
//         .then(data => getInfo(data.results[0]))
// }
//
//
// function info (data) {
//     LOCATION.innerText = data.Location;
//     Country.innerText = data.Country;
// }
//
// getInfo();




