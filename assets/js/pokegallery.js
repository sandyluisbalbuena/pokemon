var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
});


$(document).ready(function(){
    getpokemon();
});


function getpokemon()
{
    var $grid = $('.gallery');

    $grid.isotope({
        // options...
    });

    // let RAPIDAPI_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0';
    // let RAPIDAPI_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=251&offset=0';
    let RAPIDAPI_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

    // Making a GET request using an axios instance from a connected library
    axios.get(`${RAPIDAPI_API_URL}`)
    .then(response => {

        console.log(response.data.results);


        const pokemonNames = response.data.results;

        pokemonNames.forEach((item) => {


            axios.get(`https://pokeapi.co/api/v2/pokemon/`+item.name)
            .then(response => {
                // gallery.innerHTML += '<div class="galleryPokemonImg hvr-float hvr-shadow '+response.data.types[0].type.name+'" style="background-image: url(https://www.professorlotus.com/Sprites/'+item.name+'.gif);">';

                // gallery.innerHTML += '<img class="galleryPokemonImg hvr-float hvr-shadow '+response.data.types[0].type.name+'" src="https://www.professorlotus.com/Sprites/'+item.name+'.gif">';
                
                var newElement = document.createElement('div');
                newElement.classList.add('galleryPokemonImg');
                newElement.classList.add(response.data.types[0].type.name);
                newElement.innerHTML = '<img class="galleryPokemonImg '+response.data.types[0].type.name+'" src="https://www.professorlotus.com/Sprites/'+item.name+'.gif" onerror="this.src=`assets/images/missingImage.png`">';

                $grid.isotope( 'insert', newElement );
            })
            .catch(error => console.error('On get pokemon error', error))

        });

       
    })
    .catch(error => console.error('On get pokemon error', error))


    window.addEventListener("load", function(){
        $('.gallery').isotope({
            itemSelector: '.galleryPokemonImg',
            layoutMode: 'fitRows'
        });
    
        $('.filter').click(function(){
            var category = $(this).attr('data-category');
            $('.gallery').isotope({ filter: category });
        });
    });
}

function getpokemondata(pokemonName)
{
    let RAPIDAPI_API_URL = 'https://pokeapi.co/api/v2/pokemon/'+pokemonName;

    // Making a GET request using an axios instance from a connected library
    axios.get(`${RAPIDAPI_API_URL}`)
    .then(response => {

        console.log(response.data.types[0].type.name);

        let pokemonType = response.data.types[0].type.name;

        return pokemonType;
    })
    .catch(error => console.error('On get pokemon error', error))

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


$(document).ready(function(){

    $('.filter').click(function(){
        var category = $(this).attr('data-category');
        $('.gallery').isotope({ filter: category });
    });
});
