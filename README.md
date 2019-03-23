First Person in three.js
========

Some basic examples of setting up a first person environment in [three.js](https://github.com/mrdoob/three.js/).

This code is heavily based upon the examples and demos from that project, and very much in debt to the work of the many contributors over there.

### Installation ###

Run `npm install` to retrieve the necessary libraries, then `npm run dev` to compile the assets. Load up `index.html` in your browser and you're good to go.

Note that in the code's current state, you won't see much of anything, because there are no 3D objects defined in your scene. To create and add some objects to the scene, open `src/world/world.js` and follow the instructions there.

### Dev Notes ###

The examples in this project are intentionally vague about goals, as it is more of an exercise in understanding the library and applying to personal uses than it is intended as a package for general use. It is also not a great example of the best way to structure such an application, heavily abuses a few patterns like singletons, and hardcodes numerous assumptions. But if you're looking for help understanding some of the official demos, and how to use three.js in conjuction with ES6, hopefully this project can help.

Some of the example features that are included:
- Camera movement bound to mouse control with pointer lock
- Directional movement with WASD controls
- Some general helpers for loading objects in to the scene (which should probably be wholly rewritten)
- Raycasting for interactions in the scene to provide objects that block movement, and objects that act as steps
