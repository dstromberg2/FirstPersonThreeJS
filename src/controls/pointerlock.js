const THREE = require('three')

const blocker = document.getElementById('blocker')
const instructions = document.getElementById('instructions')
const visible = 'flex'
const hidden = 'none'

let enabled = false

const change = function() {
    if (document.pointerLockElement === document.body || document.mozPointerLockElement === document.body || document.webkitPointerLockElement === document.body) {
        enabled = true
        blocker.style.display = hidden
    } else {
        enabled = false
        blocker.style.display = visible
        instructions.style.display = visible
    }
}

const error = function() {
    instructions.style.display = visible
}

const activated = function() {
    instructions.style.display = hidden
    document.body.requestPointerLock = (document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock)
    document.body.requestPointerLock()
}

const isEnabled = function() {
    return enabled
}

instructions.addEventListener('click', () => activated(), false)
document.addEventListener('pointerlockchange', () => change(), false)
document.addEventListener('mozpointerlockchange', () => change(), false)
document.addEventListener('webkitpointerlockchange', () => change(), false)
document.addEventListener('pointerlockerror', () => error(), false)
document.addEventListener('mozpointerlockerror', () => error(), false)
document.addEventListener('webkitpointerlockerror', () => error(), false)

export default {
    isEnabled: isEnabled
}
