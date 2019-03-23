const THREE = require('three')
import PointerLock from '@/controls/pointerlock'

const pitch = new THREE.Object3D()
const User = new THREE.Object3D()
User.Camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
User.Velocity = new THREE.Vector3(0, 0, 0)
User.Request = new THREE.Vector3(0, 30, 0)

User.Camera.rotation.set(0, 0, 0)
pitch.add(User.Camera)
User.position.y = 30
User.add(pitch)

const onResize = function() {
    User.Camera.aspect = window.innerWidth / window.innerHeight;
    User.Camera.updateProjectionMatrix();
}

const mouseMove = function(event) {
    if (!PointerLock.isEnabled()) return;
    const movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0
    const movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0
    User.rotation.y -= movementX * 0.002
    pitch.rotation.x -= movementY * 0.002
    pitch.rotation.x = Math.max(-(Math.PI / 2), Math.min((Math.PI / 2), pitch.rotation.x))
}

User.getPosition = function() {
    return User.position.clone()
}

// The direction the user is actually looking is a calculation of
// several properties in the 3D space
User.getDirection = function() {
    const direction = new THREE.Vector3(0, 0, - 1)
    const rotation = new THREE.Euler(0, 0, 0, "YXZ")
    let v = User.getPosition()
    rotation.set(pitch.rotation.x, User.rotation.y, 0)
    v.copy(direction).applyEuler(rotation)
    return v.clone()
}

const onKeyDown = function(event) {
    switch (event.keyCode) {
        case 38: // up
        case 87: // w
            User.Request.z = -1
            break
        case 37: // left
        case 65: // a
            User.Request.x = -1
            break
        case 40: // down
        case 83: // s
            User.Request.z = 1
            break
        case 39: // right
        case 68: // d
            User.Request.x = 1
            break
    }
}

const onKeyUp = function(event) {
    switch (event.keyCode) {
        case 38: // up
        case 87: // w
            User.Request.z = 0
            break
        case 37: // left
        case 65: // a
            User.Request.x = 0
            break
        case 40: // down
        case 83: // s
            User.Request.z = 0
            break
        case 39: // right
        case 68: // d
            User.Request.x = 0
            break
        case 72: // h
            User.position.x = 0
            User.position.z = 0
            User.position.y = 30
            break
    }
}

User.run = function(delta) {
    // Round off and apply some leeway to the position difference,
    // otherwise we end up bouncing back and forth due to inexact
    // delta changes.
    const achievedHeight = Math.round(User.position.y) - User.Request.y
    if (achievedHeight < -2) {
        User.Velocity.y = 8000 * delta
    } else if (achievedHeight > 2) {
        User.Velocity.y = -8000 * delta
    } else {
        // If they are 'close enough', put them in the desired position
        User.Velocity.y = 0
        User.position.y = User.Request.y
    }

    // Degrade the velocity to prevent abrupt changes
    User.Velocity.x -= User.Velocity.x * 10.0 * delta
    User.Velocity.z -= User.Velocity.z * 10.0 * delta
    // Apply the selected movement
    User.Velocity.x += 1000.0 * delta * User.Request.x
    User.Velocity.z += 1000.0 * delta * User.Request.z

    User.translateX(User.Velocity.x * delta)
    User.translateZ(User.Velocity.z * delta)
    User.translateY(User.Velocity.y * delta)
}

window.addEventListener('resize', () => onResize(), false)
document.addEventListener('mousemove', () => mouseMove(event), false)
document.addEventListener('keydown', () => onKeyDown(event), false)
document.addEventListener('keyup', () => onKeyUp(event), false)

export default User
