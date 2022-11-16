const spellsUrl = "https://hp-api.herokuapp.com/api/spells"

const container = document.querySelector(".container")

let htmlStr = ""

function getSpells(url){
    $.get(url,
        function(data, status){

            if( status === "success" && data.length > 0){

                for (let i = 0; i < data.length; i++){
                    htmlStr += `
                    <div class="card m-4" style="width: 18rem; color-rendering: auto">
                        <div class="card-body">
                            <h5 class="card-title">Spells: ${data[i].name}</h5>
                            <h5 class="card-title">Description: ${data[i].description}</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                `
                }

                container.innerHTML = htmlStr

            }


        })
}

document.onload = getSpells(spellsUrl)