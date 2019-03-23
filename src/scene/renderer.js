const THREE = require('three')

const Renderer = new THREE.WebGLRenderer()
Renderer.setClearColor(0xffffff)
Renderer.setPixelRatio(window.devicePixelRatio)
Renderer.setSize(window.innerWidth, window.innerHeight)

const onResize = function() {
    Renderer.setSize(window.innerWidth, window.innerHeight)
}
window.addEventListener('resize', () => onResize(), false);
document.body.appendChild(Renderer.domElement)

export default Renderer
