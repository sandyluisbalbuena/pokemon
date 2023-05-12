const multipleItemCarousel = document.querySelector('#carouselExampleInterval');

if(window.matchMedia("(min-width:576px)").matches){
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



function pokemonApi(name)
{

    const pokemonStats = document.getElementById("pokemonStats");

    // Constant URL value for JAAS API
    let RAPIDAPI_API_URL = 'https://pokeapi.co/api/v2/pokemon/'+name.toLowerCase();

    // Making a GET request using an axios instance from a connected library
    axios.get(`${RAPIDAPI_API_URL}`)
    .then(response => {
        console.log(response.data.stats[0].base_stat);


        const moves = response.data.moves;

        const table = document.getElementById("myTable");
        const tbody = table.getElementsByTagName("tbody")[0];
        
        // Clear existing table rows
        tbody.innerHTML = "";
        
        // Populate table rows with data
        moves.forEach((item) => {
            const row = document.createElement("tr");

            const titleCell = document.createElement("td");
            titleCell.textContent = item.move.name;
            row.appendChild(titleCell);

            // moveDescription(item.move.url)

            const quantityCell = document.createElement("td");
            quantityCell.textContent = item.move.url;
            row.appendChild(quantityCell);
        
            tbody.appendChild(row);

        });

        let HP = response.data.stats[0].base_stat;
        let ATTACK = response.data.stats[1].base_stat;
        let DEFENSE = response.data.stats[2].base_stat;
        let SPECIAL_ATTACK = response.data.stats[3].base_stat;
        let SPECIAL_DEFENSE = response.data.stats[4].base_stat;
        let SPEED = response.data.stats[5].base_stat;

        pokemonFlavorText(name.toLowerCase());
        pokemonStats.innerHTML = '<h6>HP</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+HP+'%" aria-valuenow="'+HP+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>ATTACK</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+ATTACK+'%" aria-valuenow="'+ATTACK+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>DEFENSE</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+DEFENSE+'%" aria-valuenow="'+DEFENSE+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPECIAL ATTACK</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPECIAL_ATTACK+'%" aria-valuenow="'+SPECIAL_ATTACK+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPECIAL DEFENSE</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPECIAL_DEFENSE+'%" aria-valuenow="'+SPECIAL_DEFENSE+'%" aria-valuemin="0" aria-valuemax="100"></div></div><h6>SPEED</h6><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: '+SPEED+'%" aria-valuenow="'+SPEED+'%" aria-valuemin="0" aria-valuemax="100"></div></div>';
        tableInit();
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
        console.log(response.data.flavor_text_entries[0]);
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
        console.log(response.data.chain.species.name);
        console.log(response.data.chain.evolves_to[0].species.name);
        console.log(response.data.chain.evolves_to[0].evolves_to[0].species.name);

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
        console.log(response.data.flavor_text_entries[0]);

        // const cleanedString = myString.replace(/[^a-zA-Z0-9 ]/g, "");

        pokemonDescription.textContent = response.data.flavor_text_entries[0].flavor_text.replace(/[^a-zA-Z0-9 ]/g, " ");

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
    table.destroy();
    // $('#myTable').empty();
    // $('#myTable').DataTable();
}

