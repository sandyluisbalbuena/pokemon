var scene = null;
var renderer = null;
var camera = null;
var cardGroup = null;
var cardGeometry = null;
var requestId;



// Create a scene
function destroythreeDfunction()
{
    // Remove all objects from the scene
    while (scene.children.length > 0) {
        const object = scene.children[0];
        scene.remove(object);
    
        // Clean up resources for the removed object
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
        // Dispose materials array if it's an array of materials
            if (Array.isArray(object.material)) {
                object.material.forEach((material) => material.dispose());
            } else {
                object.material.dispose();
            }
        }
    }
  
    renderer.dispose(); 
   
    const canvas = document.querySelector('canvas');
    const parentElement = canvas.parentNode;

    parentElement.removeChild(canvas);
    stopAnimation();
}


function stopAnimation() {
    if (requestId) {
        cancelAnimationFrame(requestId);
        requestId = undefined;
    }
}

function threeDfunction(image){

    scene = new THREE.Scene();

    // Create a camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // const container = document.getElementById('container');
    // Create a renderer
    renderer = new THREE.WebGLRenderer({alpha:true});
    // renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(500, 500);
    const canvasContainer = document.getElementById("canvas-container");
    canvasContainer.appendChild(renderer.domElement);

    // Create a group to hold the card
    cardGroup = new THREE.Group();
    scene.add(cardGroup);

    const textureLoader = new THREE.TextureLoader();

    // Load the front and back images from URLs
    const frontImageUrl = image;
    const backImageUrl = 'https://images.pokemontcg.io';

    // Load front and back textures asynchronously
    const frontTexture = textureLoader.load(frontImageUrl);
    const backTexture = textureLoader.load(backImageUrl);


    const frontMaterial = new THREE.MeshBasicMaterial({ map: frontTexture });
    const backMaterial = new THREE.MeshBasicMaterial({ map: backTexture });


    // Create front and back geometries
    const cardWidth = 4;
    const cardHeight = 4;

    
    cardGeometry = new THREE.PlaneGeometry(cardWidth, cardHeight);

    // Create front and back meshes
    const frontMesh = new THREE.Mesh(cardGeometry, frontMaterial);
    const backMesh = new THREE.Mesh(cardGeometry, backMaterial);
    backMesh.rotation.y = Math.PI; // Rotate the back side to face opposite direction

    // Add front and back meshes to the card group
    cardGroup.add(frontMesh);
    cardGroup.add(backMesh);

    function animate(time) {

        time *= 0.003;  // seconds


        // mesh.rotation.x = time * 0.5;
        // mesh.rotation.y = time * 1;


        requestId = requestAnimationFrame(animate);
        cardGroup.rotation.y = time * 1;
        // cardGroup.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
}


function rotateCard()
{
    animate(0.01);

    renderer.render(scene, camera);
}