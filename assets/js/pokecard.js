var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
});


function pokemonCardApi()
{
    const name = document.getElementById('pokemonName');

    const table = document.getElementById("myTable");
    const tbody = table.getElementsByTagName("tbody")[0];
        
    tbody.innerHTML = "";
        

    // Constant URL value for JAAS API
    let RAPIDAPI_API_URL = 'https://api.pokemontcg.io/v1/cards?name='+name.value.toLowerCase().trim();

    // Making a GET request using an axios instance from a connected library

    axios.interceptors.request.use(config => {
        // Modify the request config object
        // config.headers['Authorization'] = 'Bearer myToken';

        tbody.innerHTML = '<tr style="text-align:center;"><td colspan="5"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div></td></tr>';
      
        return config;
    }, error => {
    // Handle request errors
        console.error(error);
    });



    axios.get(`${RAPIDAPI_API_URL}`)
    .then(response => {
        console.log(response.data.cards);

        const cardData = response.data.cards;

        tbody.innerHTML = "";


        cardData.forEach((item) => {
            const row = document.createElement("tr");

            const idCell = document.createElement("td");
            idCell.textContent = item.id;
            row.appendChild(idCell);

            const imageCell = document.createElement("td");
            imageCell.innerHTML = '<img src="'+item.imageUrl+'" width="75px">';
            row.appendChild(imageCell);

            const nameCell = document.createElement("td");
            nameCell.innerHTML = '<h4>'+item.name+'</h4>';
            row.appendChild(nameCell);

            const hpCell = document.createElement("td");
            hpCell.textContent = item.hp;
            row.appendChild(hpCell);

            const efromCell = document.createElement("td");
            efromCell.textContent = item.evolvesFrom;
            row.appendChild(efromCell);
            
            tbody.appendChild(row);
        });

    })
    .catch(error => console.error('On get student error', error))

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


