var loader = document.getElementById("preloader");

//284445

window.addEventListener("load", function(){
    loader.style.display = "none";
});


const multipleItemCarousel = document.querySelector('#carouselExampleInterval');

if(window.matchMedia("(min-width:768px)").matches){
    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false
    })

    var carouselWidth = $('.carousel-inner')[0].scrollWidth;
    var cardWidth = $('.carousel-item').width();

    var scrollPosition = 0;

    $('.carousel-control-next').on('click', function(){
        if(scrollPosition < (carouselWidth - (cardWidth*4))){
            console.log('next');
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner').animate({scrollLeft: scrollPosition},600);
        }
    });

    $('.carousel-control-prev').on('click', function(){
        if(scrollPosition > 0){
            console.log('prev');
            scrollPosition = scrollPosition - cardWidth;
            $('.carousel-inner').animate({scrollLeft: scrollPosition},600);
        }
    }); 
}
else{
    $(multipleItemCarousel).addClass('slide');
}

const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');
const item6 = document.getElementById('item6');
const item7 = document.getElementById('item7');
const item8 = document.getElementById('item8');
const item9 = document.getElementById('item9');
const item10 = document.getElementById('item10');
const item11 = document.getElementById('item11');
const item12 = document.getElementById('item12');
const item13 = document.getElementById('item13');
const item14 = document.getElementById('item14');
const modal = document.querySelector('.modal');
const modalTitle = modal.querySelector('.modal-title');
const modalImage = modal.querySelector('.modal-pokemon');
const modalHeader = modal.querySelector('.modal-header');
const tabTable = document.getElementById('myTable');

var string;


item1.addEventListener('click', () => {
    const name = item1.getAttribute('data-name');
    pokemonApi(name);

    modalTitle.textContent = name;
    modalImage.setAttribute('src', "https://www.professorlotus.com/Sprites/"+name+".gif");

    modal.style.display = 'block';
});

item2.addEventListener('click', () => {
    const name = item2.getAttribute('data-name');
    pokemonApi(name);

    modalTitle.textContent = name;
    modalImage.setAttribute('src', "https://www.professorlotus.com/Sprites/"+name+".gif");
    
    modal.style.display = 'block';
});

item3.addEventListener('click', () => {
    const name = item3.getAttribute('data-name');
    pokemonApi(name);

    modalTitle.textContent = name;
    modalImage.setAttribute('src', "https://www.professorlotus.com/Sprites/"+name+".gif");

    modal.style.display = 'block';
});

item4.addEventListener('click', () => {
    const name = item4.getAttribute('data-name');
    pokemonApi(name);

    modalTitle.textContent = name;
    modalImage.setAttribute('src', "https://www.professorlotus.com/Sprites/"+name+".gif");

    modal.style.display = 'block';
});

item5.addEventListener('click', () => {
    const name = item5.getAttribute('data-name');
    pokemonApi(name);

    modalTitle.textContent = name;
    modalImage.setAttribute('src', "https://www.professorlotus.com/Sprites/"+name+".gif");

    modal.style.display = 'block';
});

item6.addEventListener('click', () => {
    const name = item6.getAttribute('data-name');
    pokemonApi(name);

    modalTitle.textContent = name;
    modalImage.setAttribute('src', "https://www.professorlotus.com/Sprites/"+name+".gif");

    modal.style.display = 'block';
});

item7.addEventListener('click', () => {
    const name = item7.getAttribute('data-name');
    pokemonApi(name);

    modalTitle.textContent = name;
    modalImage.setAttribute('src', "https://www.professorlotus.com/Sprites/"+name+".gif");

    modal.style.display = 'block';
});

item8.addEventListener('click', () => {
    const name = item8.getAttribute('data-name');
    pokemonApi(name);

    modalTitle.textContent = name;
    modalImage.setAttribute('src', "https://www.professorlotus.com/Sprites/"+name+".gif");

    modal.style.display = 'block';
});

item9.addEventListener('click', () => {
    const name = item9.getAttribute('data-name');
    pokemonApi(name);

    modalTitle.textContent = name;
    modalImage.setAttribute('src', "https://www.professorlotus.com/Sprites/"+name+".gif");

    modal.style.display = 'block';
});

item10.addEventListener('click', () => {
    const name = item10.getAttribute('data-name');
    pokemonApi(name);

    modalTitle.textContent = name;
    modalImage.setAttribute('src', "https://www.professorlotus.com/Sprites/"+name+".gif");

    modal.style.display = 'block';
});

item11.addEventListener('click', () => {
    const name = item11.getAttribute('data-name');
    pokemonApi(name);

    modalTitle.textContent = name;
    modalImage.setAttribute('src', "https://www.professorlotus.com/Sprites/"+name+".gif");

    modal.style.display = 'block';
});

item12.addEventListener('click', () => {
    const name = item12.getAttribute('data-name');
    pokemonApi(name);

    modalTitle.textContent = name;
    modalImage.setAttribute('src', "https://www.professorlotus.com/Sprites/"+name+".gif");

    modal.style.display = 'block';
});

item13.addEventListener('click', () => {
    const name = item13.getAttribute('data-name');
    pokemonApi(name);

    modalTitle.textContent = name;
    modalImage.setAttribute('src', "https://www.professorlotus.com/Sprites/"+name+".gif");

    modal.style.display = 'block';
});

item14.addEventListener('click', () => {
    const name = item14.getAttribute('data-name');
    pokemonApi(name);

    modalTitle.textContent = name;
    modalImage.setAttribute('src', "https://www.professorlotus.com/Sprites/"+name+".gif");

    modal.style.display = 'block';
});


function pokemonApi(name)
{

    const pokemonStats = document.getElementById("pokemonStats");

    // Constant URL value for JAAS API
    let RAPIDAPI_API_URL = 'https://pokeapi.co/api/v2/pokemon/'+name.toLowerCase();

    // Making a GET request using an axios instance from a connected library
    axios.get(`${RAPIDAPI_API_URL}`)
    .then(response => {
        // console.log(response.data.stats[0].base_stat);


        // const moves = response.data.moves;

        // const table = document.getElementById("myTable");
        // const tbody = table.getElementsByTagName("tbody")[0];

        
        
        // Clear existing table rows
        // tbody.innerHTML = "";
        
        // Populate table rows with data
        // moves.forEach((item) => {
        //     const row = document.createElement("tr");

        //     const titleCell = document.createElement("td");
        //     titleCell.textContent = item.move.name;
        //     row.appendChild(titleCell);

            // moveDescription(item.move.url)

            // axios.get(`${item.move.url}`)
            // .then(response => {
            //     console.log(response.data.flavor_text_entries[0].flavor_text);


                // const quantityCell = document.createElement("td");
                // quantityCell.textContent = item.move.url;
                // row.appendChild(quantityCell);

                // if(quantityCell != undefined || quantityCell == null)
                // {   
                    // tbody.appendChild(row);
            //     }
            // })

        // });

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
                max:100,
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
          
        pokemonFlavorText(name.toLowerCase());

        var ctx = document.getElementById("pokemonStatscanvas").getContext("2d");
        new Chart(ctx, {
            type: 'radar',
            data: dataRadarChart,
            options: options
        });
        pokemonStats.innerHTML = '<h6>HP</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+HP+'%" aria-valuenow="'+HP+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>ATTACK</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+ATTACK+'%" aria-valuenow="'+ATTACK+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>DEFENSE</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+DEFENSE+'%" aria-valuenow="'+DEFENSE+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPECIAL ATTACK</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPECIAL_ATTACK+'%" aria-valuenow="'+SPECIAL_ATTACK+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPECIAL DEFENSE</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPECIAL_DEFENSE+'%" aria-valuenow="'+SPECIAL_DEFENSE+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPEED</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPEED+'%" aria-valuenow="'+SPEED+'%" aria-valuemin="0" aria-valuemax="100"></div></div>';
        // existingChart.innerHTML = '<h6>HP</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+HP+'%" aria-valuenow="'+HP+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>ATTACK</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+ATTACK+'%" aria-valuenow="'+ATTACK+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>DEFENSE</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+DEFENSE+'%" aria-valuenow="'+DEFENSE+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPECIAL ATTACK</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPECIAL_ATTACK+'%" aria-valuenow="'+SPECIAL_ATTACK+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPECIAL DEFENSE</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPECIAL_DEFENSE+'%" aria-valuenow="'+SPECIAL_DEFENSE+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPEED</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPEED+'%" aria-valuenow="'+SPEED+'%" aria-valuemin="0" aria-valuemax="100"></div></div>';
    })
    .catch(error => console.error('On get student error', error))

    
    // tabTable.style.height = "300px";

    // tabTable.setAttribute('style', "height:200px; overflow:auto;");
}

function moveDescription(moveUrl)
{
    let RAPIDAPI_API_URL = moveUrl;

    // Making a GET request using an axios instance from a connected library
    axios.get(`${RAPIDAPI_API_URL}`)
    .then(response => {
        // console.log(response.data.flavor_text_entries[0].flavor_text);

        return response.data.flavor_text_entries[0].flavor_text.replace(/[^a-zA-Z0-9 ]/g, " ");
    })
    .catch(error => console.error('moveDescription', error))
}

function chainEvolution(url)
{
    const pokemonEvolutionImages = document.getElementById("pokemonEvolutionImages");

    let RAPIDAPI_API_URL = url;


    // Making a GET request using an axios instance from a connected library
    axios.get(`${RAPIDAPI_API_URL}`)
    .then(response => {
        // console.log(response.data.chain.species.name);
        // console.log(response.data.chain.evolves_to[0].species.name);
        // console.log(response.data.chain.evolves_to[0].evolves_to[0].species.name);

        let img1 = response.data.chain.species.name;
        let img2 = response.data.chain.evolves_to[0].species.name;
        let img3 = response.data.chain.evolves_to[0].evolves_to[0].species.name;

        // pokemonEvolutionImages.innerHTML = '<div id="carouselExampleControls" class="carousel" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img src="https://www.professorlotus.com/Sprites/'+img1+'.gif" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="https://www.professorlotus.com/Sprites/'+img2+'.gif" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="https://www.professorlotus.com/Sprites/'+img3+'.gif" class="d-block w-100" alt="..."></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div>';
        pokemonEvolutionImages.innerHTML = '<img class="modal-pokemon" src="https://www.professorlotus.com/Sprites/'+img1+'.gif" style="width:15%; height:30%;"><img class="modal-pokemon" src="https://www.professorlotus.com/Sprites/'+img2+'.gif" style="width:25%; height:40%;"><img class="modal-pokemon" src="https://www.professorlotus.com/Sprites/'+img3+'.gif" style="width:40%; height:80%;">';

    })
    .catch(error => console.error('chainEvolution', error))
}

function pokemonFlavorText(name)
{
    const pokemonDescription = document.getElementById("pokemonDescription");
    pokemonDescription.innerHTML = "";

    let RAPIDAPI_API_URL = 'https://pokeapi.co/api/v2/pokemon-species/'+name;

    // Making a GET request using an axios instance from a connected library
    axios.get(`${RAPIDAPI_API_URL}`)
    .then(response => {
        // console.log(response.data.flavor_text_entries[0]);

        // const cleanedString = myString.replace(/[^a-zA-Z0-9 ]/g, "");

        modalDescription(response.data.flavor_text_entries[0].flavor_text.replace(/[^a-zA-Z0-9 ]/g, " "));

        // pokemonDescription.textContent = response.data.flavor_text_entries[0].flavor_text.replace(/[^a-zA-Z0-9 ]/g, " ");

        chainEvolution(response.data.evolution_chain.url);
    })
    .catch(error => console.error('pokemonFlavorText', error))
}


var table = null;

function tableInit() 
{
    table = new DataTable('#myTable', {
        searching:false,
        scrollY: 200,
        paging:false
    });
}


function clearTableData()
{
    let i;
    let x = document.getElementsByClassName("card-body tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById('tabattributes').classList.remove('active');
    document.getElementById('tabevolution').classList.remove('active');
    document.getElementById('tabdescription').classList.add('active');
    document.getElementById('description').style.display = "block";


    // table.destroy();
}

function openTab(tabname) 
{
    let i;
    let x = document.getElementsByClassName("card-body tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById('tabdescription').classList.remove('active');
    document.getElementById('tabattributes').classList.remove('active');
    // document.getElementById('tabmoves').classList.remove('active');
    document.getElementById('tabevolution').classList.remove('active');

    let newActivTab = "tab"+tabname;

    document.getElementById(tabname).style.display = "block";
    document.getElementById(newActivTab).classList.add('active');

}

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function modalDescription(descriptionString)
{
    const elementType = document.getElementById('pokemonDescription');

    new Typed(elementType, {
        strings: [descriptionString+'.'],
        typeSpeed: 10,
        showCursor: false,
    });
}

var targetsection;
var spinner;
var targetbutton;
var customAttributeValue;

function getpokemon(pokemonStart, pokemonEnd, targetElement, spinnerId, button)
{
    targetsection = document.getElementById(targetElement);
    spinner = document.getElementById(spinnerId);
    targetbutton = document.getElementById(button);
    customAttributeValue = targetbutton.getAttribute("customattribute");

    // console.log(customAttributeValue);

    // let toggle = buttontoggle;


    if(customAttributeValue == 0){


        spinner.style.display = 'block';


        targetbutton.setAttribute("customattribute", "1");
        
        let RAPIDAPI_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit='+pokemonEnd+'&offset='+pokemonStart;
        targetsection.innerHTML = '';

        // axios.interceptors.request.use(config => {
        //     spinner.innerHTML = '<div class="spinner-border text-white" role="status"></div>';
        //     return config;
        // }, error => {
        //     console.error(error);
        // });

        // Making a GET request using an axios instance from a connected library
        axios.get(`${RAPIDAPI_API_URL}`)
        .then(response => {

            const pokemonNames = response.data.results;
            var newElement = document.createElement('div');
            newElement.classList.add('row');


            pokemonNames.forEach((pokemon) => {
                // newElement.innerHTML += '<div class="col-1"><img src="https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/1x/'+pokemon.name+'.png" style="width:200%;" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="'+pokemon.name+'" title="'+pokemon.name+'"></div>';
                newElement.innerHTML += '<div href="https://img.pokemondb.net/sprites/home/normal/'+pokemon.name+'.png" class="col-1 venobox" data-gall="mypokemon2dgallery" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Hello! Im '+pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)+'!"><img id="'+pokemon.name+'png" class="img2dpokemon" src="https://img.pokemondb.net/sprites/home/normal/'+pokemon.name+'.png" style="width:200%;"></div>';
            });

            targetsection.appendChild(newElement);
            spinner.style.display = 'none';


        })
        .catch(error => console.error('On get pokemon error', error))
        .then(() => { 
            $(function () {
                $("[data-bs-toggle='tooltip']").tooltip();
            });

            new VenoBox({
                selector: ".venobox"
            });
        }) 
    }
    else{
        targetbutton.setAttribute("customattribute", "0");
    }

}

function pokemontwoDApi(pokemons) 
{
    // console.log(pokemons);
    const targetsection = document.getElementById('pokemontwoDApi');
    const targetsection2 = document.getElementById('pokemontwoDApitwo');
    // const tooltips = document.getElementById('tooltips');
    let pokemonsname2d = 0;


    for(let i=0; i<21; i++)
    {
        targetsection.innerHTML += '<div class="row" id="pokemontwoDApiRow'+i+'">';
        var targetsectionrow = document.getElementById('pokemontwoDApiRow'+i);

        for(let j=0; j<12; j++){
            if(pokemonsname2d<151){
                targetsectionrow.innerHTML += '<div class="col-1"><img src="https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/1x/'+pokemons[pokemonsname2d].name+'.png" style="width:250%;" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="'+pokemons[pokemonsname2d].name+'" title="'+pokemons[pokemonsname2d].name+'"></div>';
                pokemonsname2d++;
            }
        }

        if(pokemonsname2d>=151){
            targetsection2.innerHTML += '<div class="row" id="pokemontwoDApiRowtwo'+i+'">';
            var targetsectionrow2 = document.getElementById('pokemontwoDApiRowtwo'+i);
        }

        

        for(let j=0; j<12; j++){
            if(pokemonsname2d>=151){
                if(pokemons[pokemonsname2d].name == 'unown'){
                    targetsectionrow2.innerHTML += '<div class="col-1"><img src="https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/1x/'+pokemons[pokemonsname2d].name+'-s.png" style="width:250%;"></div>';
                }else{
                    targetsectionrow2.innerHTML += '<div class="col-1"><img src="https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/1x/'+pokemons[pokemonsname2d].name+'.png" style="width:250%;"></div>';
                }
                pokemonsname2d++;
            }
        }

    }
}






