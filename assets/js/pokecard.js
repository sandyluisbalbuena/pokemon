var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
});

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        // Call your function here
        pokemonCardApi();
    }
}

var videoherolarge = document.getElementById("myVideo");

videoherolarge.addEventListener("ended", function() {
//   video.style.display = "none"; // Change display property to "none" when video ends
  document.getElementById("heroimglg").style.display = "none"; // Change display property to "none" when video ends
});

$(document).ready(function(){
    pokemonCardApi();
})



function pokemonCardApi()
{
    $('#myTable').DataTable().destroy();

    const name = document.getElementById('pokemonName');

   

    const table = document.getElementById("myTable");
    const tbody = table.getElementsByTagName("tbody")[0];
        
    tbody.innerHTML = "";

    // Constant URL value for JAAS API

    if(name.value == undefined){
        var RAPIDAPI_API_URL = 'https://api.pokemontcg.io/v1/cards?name=pikachu';
    }
    else{
        var RAPIDAPI_API_URL = 'https://api.pokemontcg.io/v1/cards?name='+name.value.toLowerCase().trim();
    }

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

        if(cardData != 0 || cardData == null){

            cardData.forEach((item) => {
                const row = document.createElement("tr");
                row.setAttribute("data-bs-toggle", "modal");
                row.setAttribute("data-bs-target", "#exampleModal");
                row.setAttribute("onclick", "threeDfunction('"+item.imageUrlHiRes+"')");

                const idCell = document.createElement("th");
                idCell.textContent = item.id;
                row.appendChild(idCell);

                const imageCell = document.createElement("td");
                imageCell.innerHTML = item.imageUrl;
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
            
              
            $(document).ready(function() {

                // const columns = [
                //     { title: '#', data: 'id' },
                //     { title: 'Image', data: 'image', render: function(data, row) {
                //             return `<img src="${data}" alt="${row.name}" height="100">`;
                //         }
                //     },
                //     { title: 'Name', data: 'name' },
                //     { title: 'Hp', data: 'hp' },
                //     { title: 'Evolves from', data: 'evfrom' }
                // ];


                $('#myTable').DataTable({
                    columnDefs: [
                        { targets: 1, render: function(data, type, row) {
                                return '<img src="' + data + '" alt="' + row[2] + '" height="50">';
                            } 
                        }
                    ],
                    searching:false,
                    scrollY: '500px', // Set the desired height
                    scrollCollapse: true,
                });

            });

        }
        else
        {
            tbody.innerHTML = '<tr><th class="text-center text-danger">No result...</th><td></td><td></td><td></td><td></td></tr>';
        }

    })
    .catch(error => tbody.innerHTML = '<tr><th colspan="5" class="text-center text-danger">Something went wrong..</th></tr>')

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


$('#myTable').DataTable({
    searching:false,
    paging:false
});

