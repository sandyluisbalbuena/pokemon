var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
});

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        pokemonApi();
    }
}

function pokemonApi()
{
    let pokemonName = document.getElementById('pokeSearhInput').value;
    let targetSection = document.getElementById('pokeSearhResult');
    let targetFlavortext = document.getElementById('pokemonFlavorText');

    // console.log(targetFlavortext);

    targetSection.innerHTML="";

    // Constant URL value for JAAS API
    let RAPIDAPI_API_URL = 'https://pokeapi.co/api/v2/pokemon/'+pokemonName.toLowerCase();

    // Making a GET request using an axios instance from a connected library
    axios.get(`${RAPIDAPI_API_URL}`)
    .then(response => {
        // console.log(response.data.stats[0].base_stat);
        // console.log(response.data);

        targetSection.innerHTML='<img src="https://img.pokemondb.net/sprites/home/normal/'+response.data.name+'.png" width="100%" height="100%">';
        targetFlavortext.innerHTML='<h1>'+response.data.name+'</h1>';

        let HP = response.data.stats[0].base_stat;
        let ATTACK = response.data.stats[1].base_stat;
        let DEFENSE = response.data.stats[2].base_stat;
        let SPECIAL_ATTACK = response.data.stats[3].base_stat;
        let SPECIAL_DEFENSE = response.data.stats[4].base_stat;
        let SPEED = response.data.stats[5].base_stat;

        const dataRadarChart = {
            labels: [
                'HP',
                'SPECIAL ATTACK',
                'ATTACK',
                'SPEED',
                'DEFENSE',
                'SPECIAL DEFENSE',
            ],
            datasets: [{
                label: 'ATTRIBUTES',
                data: [HP, SPECIAL_ATTACK, ATTACK, SPEED, DEFENSE, SPECIAL_DEFENSE],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                // pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }]
        };

     
        // Get a reference to the existing chart instance
        var existingChart = Chart.getChart("pokemonStatscanvas");

        // Destroy the existing chart instance
        if (existingChart) {
            existingChart.destroy();
        }

        var options = {
            scale: {
                min:0,
                max:150,
                // r:{
                //     angleLines:{
                //         color:black
                //     }
                // },
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    stepSize: 20,
                }
            },
            elements: {
                line: {
                    borderWidth: 0
                }
            },
            animation: {
                duration: 2000, 
                delay: 500,
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: -0.2,
                    to: 0,
                    loop: true
                  }

            }
        };

        // pokemonFlavorText()
          
        pokemonFlavorText(pokemonName.toLowerCase());

        var ctx = document.getElementById("pokemonStatscanvas").getContext("2d");
        new Chart(ctx, {
            type: 'radar',
            data: dataRadarChart,
            options: options
        });
        // pokemonStats.innerHTML = '<h6>HP</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+HP+'%" aria-valuenow="'+HP+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>ATTACK</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+ATTACK+'%" aria-valuenow="'+ATTACK+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>DEFENSE</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+DEFENSE+'%" aria-valuenow="'+DEFENSE+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPECIAL ATTACK</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPECIAL_ATTACK+'%" aria-valuenow="'+SPECIAL_ATTACK+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPECIAL DEFENSE</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPECIAL_DEFENSE+'%" aria-valuenow="'+SPECIAL_DEFENSE+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPEED</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPEED+'%" aria-valuenow="'+SPEED+'%" aria-valuemin="0" aria-valuemax="100"></div></div>';
        // // existingChart.innerHTML = '<h6>HP</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+HP+'%" aria-valuenow="'+HP+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>ATTACK</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+ATTACK+'%" aria-valuenow="'+ATTACK+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>DEFENSE</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+DEFENSE+'%" aria-valuenow="'+DEFENSE+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPECIAL ATTACK</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPECIAL_ATTACK+'%" aria-valuenow="'+SPECIAL_ATTACK+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPECIAL DEFENSE</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPECIAL_DEFENSE+'%" aria-valuenow="'+SPECIAL_DEFENSE+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPEED</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPEED+'%" aria-valuenow="'+SPEED+'%" aria-valuemin="0" aria-valuemax="100"></div></div>';
    })
    .catch(error => console.error('On get pokemon data:', error))

    
    // tabTable.style.height = "300px";
    // tabTable.setAttribute('style', "height:200px; overflow:auto;");
}



function pokemonFlavorText(name)
{
    let RAPIDAPI_API_URL = 'https://pokeapi.co/api/v2/pokemon-species/'+name;

    // Making a GET request using an axios instance from a connected library
    axios.get(`${RAPIDAPI_API_URL}`)
    .then(response => {
        // console.log(response.data);

        // const cleanedString = myString.replace(/[^a-zA-Z0-9 ]/g, "");

        console.log(response.data.flavor_text_entries[0].flavor_text.replace(/[^a-zA-Z0-9 ]/g, " "));

        // modalDescription(response.data.flavor_text_entries[0].flavor_text.replace(/[^a-zA-Z0-9 ]/g, " "));

        // pokemonDescription.textContent = response.data.flavor_text_entries[0].flavor_text.replace(/[^a-zA-Z0-9 ]/g, " ");

        // chainEvolution(response.data.evolution_chain.url);
    })
    .catch(error => console.error('On get pokemon description data:', error))
    .then(()=>{

        }
    )
}


