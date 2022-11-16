
const heroesUrl = "https://hp-api.herokuapp.com/api/characters"

const container = document.querySelector(".container")

let htmlStr = ""

function getGeroes(url){
    $.get(url,
        function(data, status){

        if( status === "success" && data.length > 0){

            for (let i = 0; i < data.length; i++){
                htmlStr += `
                    <div class="card m-4" style="width: 18rem;">
                        <img src="${data[i].image}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">Name: ${data[i].name}</h5>
                            <h5 class="card-title">Birthday: ${data[i].dateOfBirth}</h5>
                            <h5 class="card-title">Actor: ${data[i].actor}</h5>
                            <h5 class="card-title">House: ${data[i].house}</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                `
            }

            container.innerHTML = htmlStr

        }


    })
}

document.onload = getGeroes(heroesUrl)