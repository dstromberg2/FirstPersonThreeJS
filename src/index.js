import Renderer from '@/scene/renderer'
import User from '@/controls/user'
import Scene from '@/scene/scene'
import Entities from '@/scene/entities'

let time = performance.now()
let delta = 0;

(function run() {
    requestAnimationFrame(() => run())
    const newtime = performance.now()
    delta = ((newtime - time) / 1000)
    Scene.run(delta)
    time = newtime;
    Renderer.render(Scene, User.Camera);
}())
