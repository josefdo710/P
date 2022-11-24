function load3Dselected() {
    location.href = "./views/pagina-2.html"; 
}
function mySelecyPlayer() {
    initScene();
    animate();
}
function initScene() {
    initBasicElements(); // Scene, Camera and Render
    createFistModel("./images/humanoide/","humanoide.mtl","humanoide.obj");
}

