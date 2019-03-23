// todo: use imports for three, only pull needed modules
const THREE = require('three')
import User from '@/controls/user'
import Collision from '@/controls/collision'
import Entities from '@/scene/entities'
import PointerLock from '@/controls/pointerlock'

const Scene = new THREE.Scene()

Scene.add(User)

Entities.all.forEach(function(entity) {
    Scene.add(entity)
})

Scene.run = function(delta) {
    if (!PointerLock.isEnabled()) return
    Collision.run()
    User.run(delta)
}

export default Scene
