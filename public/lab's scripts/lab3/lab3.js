let screenWidth = document.body.clientWidth,
    index       = 1,
    isMoving    = false;

// Variables for setup

let 
    container,
    camera,
    renderer,
    scene,
    balloon;

(function init() {
    container = document.querySelector('.scene');

    // Create scene
    scene = new THREE.Scene();

    const 
        fov     = 35, // degrees
        aspect = container.clientWidth / container.clientHeight, // aspect of everything in here
        near    = .1, 
        far     = 500;

    // Camera setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(-5, 0, 14);

    const ambient = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff, 5);
    light.position.set(10, 10, 4);
    scene.add(light);

    //Renderer
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    // Load module
    let loader = new THREE.GLTFLoader();
    loader.load("lab's scripts/lab3/3d/scene.gltf", function(gltf) {
        scene.add(gltf.scene);

        balloon = gltf.scene.children[0];

        animate();
    });
})();

function animate() {

    requestAnimationFrame(animate);

    if (isMoving) {
        balloon.rotation.z =  index/400
    } else {
        balloon.rotation.z += 0.005;
    }

    renderer.render(scene, camera);
}

document.onmousemove = (e) => {
    isMoving = true;
    index = e.pageX;
}

/* function onWindowResize() {
    let canvas = container.children[0];

    canvas.style.width = '100%';

}

window.addEventListener("resize", onWindowResize); */