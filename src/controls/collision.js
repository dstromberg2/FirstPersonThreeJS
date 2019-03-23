// todo: check casting on Groups, especially for steps to apply height changes
// todo: find a better way to cast against objects than storing as an array?
const THREE = require('three')
import User from '@/controls/user'
import Entities from '@/scene/entities'

const down = new THREE.Vector3(0, -1, 0)
let caster = new THREE.Raycaster()
let quat = new THREE.Quaternion()

const runSteps = function() {
    const pos = User.getPosition()
    const dir = User.getDirection()
    caster.set(pos, down)
    const steps = caster.intersectObjects(Entities.steps)
    if (steps.length > 0) {
        // todo: limit height change, act as blocking if too high
        const desiredHeight = steps[0].object.position.y + steps[0].object.geometry.parameters.height + 30
        User.Request.y = desiredHeight
    } else if (pos.y !== 30) {
        User.Request.y = 30
    }
}

const runBlocking = function() {
    const pos = User.getPosition()
    const dir = User.getDirection()
    // Make sure we look from the user's feet, not their eye level height
    pos.y -= 30
    dir.y = 0
    let viewdir = dir.clone()
    let collisions = []

    if (User.Request.z === -1) {
        viewdir = dir.clone()
        caster.set(pos, dir)
        collisions = caster.intersectObjects(Entities.blocking)
        if (collisions.length > 0 && collisions[0].distance <= 10) {
            User.Request.z = 0;
        }
    }
    if (User.Request.z === 1) {
        viewdir = dir.clone();
        // make sure we apply the direction we wish to cast based on
        // the current view direction, not from origin
        quat.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
        viewdir.applyQuaternion(quat);

        caster.set(pos, viewdir);
        collisions = caster.intersectObjects(Entities.blocking);
        if (collisions.length > 0 && collisions[0].distance <= 10) {
            User.Request.z = 0;
        }
    }
    if (User.Request.x === 1) {
        viewdir = dir.clone();
        quat.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -(Math.PI / 2));
        viewdir.applyQuaternion(quat);

        caster.set(pos, viewdir);
        collisions = caster.intersectObjects(Entities.blocking);
        if (collisions.length > 0 && collisions[0].distance <= 10) {
            User.Request.x = 0;
        }
    }
    if (User.Request.x === -1) {
        viewdir = dir.clone();
        quat.setFromAxisAngle(new THREE.Vector3(0, 1, 0), (Math.PI / 2));
        viewdir.applyQuaternion(quat);

        caster.set(pos, viewdir);
        collisions = caster.intersectObjects(Entities.blocking);
        if (collisions.length > 0 && collisions[0].distance <= 10) {
            User.Request.x = 0;
        }
    }
}

export default {
    run: function() {
        runSteps()
        runBlocking()
    }
}
