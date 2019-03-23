/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: WebGLMultisampleRenderTarget, WebGLRenderTargetCube, WebGLRenderTarget, WebGLRenderer, ShaderLib, UniformsLib, UniformsUtils, ShaderChunk, FogExp2, Fog, Scene, Sprite, LOD, SkinnedMesh, Skeleton, Bone, Mesh, LineSegments, LineLoop, Line, Points, Group, VideoTexture, DataTexture, DataTexture3D, CompressedTexture, CubeTexture, CanvasTexture, DepthTexture, Texture, AnimationLoader, CompressedTextureLoader, DataTextureLoader, CubeTextureLoader, TextureLoader, ObjectLoader, MaterialLoader, BufferGeometryLoader, DefaultLoadingManager, LoadingManager, ImageLoader, ImageBitmapLoader, FontLoader, FileLoader, Loader, LoaderUtils, Cache, AudioLoader, SpotLightShadow, SpotLight, PointLight, RectAreaLight, HemisphereLight, DirectionalLightShadow, DirectionalLight, AmbientLight, LightShadow, Light, StereoCamera, PerspectiveCamera, OrthographicCamera, CubeCamera, ArrayCamera, Camera, AudioListener, PositionalAudio, AudioContext, AudioAnalyser, Audio, VectorKeyframeTrack, StringKeyframeTrack, QuaternionKeyframeTrack, NumberKeyframeTrack, ColorKeyframeTrack, BooleanKeyframeTrack, PropertyMixer, PropertyBinding, KeyframeTrack, AnimationUtils, AnimationObjectGroup, AnimationMixer, AnimationClip, Uniform, InstancedBufferGeometry, BufferGeometry, Geometry, InterleavedBufferAttribute, InstancedInterleavedBuffer, InterleavedBuffer, InstancedBufferAttribute, Face3, Object3D, Raycaster, Layers, EventDispatcher, Clock, QuaternionLinearInterpolant, LinearInterpolant, DiscreteInterpolant, CubicInterpolant, Interpolant, Triangle, Math, Spherical, Cylindrical, Plane, Frustum, Sphere, Ray, Matrix4, Matrix3, Box3, Box2, Line3, Euler, Vector4, Vector3, Vector2, Quaternion, Color, ImmediateRenderObject, VertexNormalsHelper, SpotLightHelper, SkeletonHelper, PointLightHelper, RectAreaLightHelper, HemisphereLightHelper, GridHelper, PolarGridHelper, PositionalAudioHelper, FaceNormalsHelper, DirectionalLightHelper, CameraHelper, BoxHelper, Box3Helper, PlaneHelper, ArrowHelper, AxesHelper, Shape, Path, ShapePath, Font, CurvePath, Curve, ImageUtils, ShapeUtils, WebGLUtils, WireframeGeometry, ParametricGeometry, ParametricBufferGeometry, TetrahedronGeometry, TetrahedronBufferGeometry, OctahedronGeometry, OctahedronBufferGeometry, IcosahedronGeometry, IcosahedronBufferGeometry, DodecahedronGeometry, DodecahedronBufferGeometry, PolyhedronGeometry, PolyhedronBufferGeometry, TubeGeometry, TubeBufferGeometry, TorusKnotGeometry, TorusKnotBufferGeometry, TorusGeometry, TorusBufferGeometry, TextGeometry, TextBufferGeometry, SphereGeometry, SphereBufferGeometry, RingGeometry, RingBufferGeometry, PlaneGeometry, PlaneBufferGeometry, LatheGeometry, LatheBufferGeometry, ShapeGeometry, ShapeBufferGeometry, ExtrudeGeometry, ExtrudeBufferGeometry, EdgesGeometry, ConeGeometry, ConeBufferGeometry, CylinderGeometry, CylinderBufferGeometry, CircleGeometry, CircleBufferGeometry, BoxGeometry, CubeGeometry, BoxBufferGeometry, ShadowMaterial, SpriteMaterial, RawShaderMaterial, ShaderMaterial, PointsMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshPhongMaterial, MeshToonMaterial, MeshNormalMaterial, MeshLambertMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshBasicMaterial, MeshMatcapMaterial, LineDashedMaterial, LineBasicMaterial, Material, Float64BufferAttribute, Float32BufferAttribute, Uint32BufferAttribute, Int32BufferAttribute, Uint16BufferAttribute, Int16BufferAttribute, Uint8ClampedBufferAttribute, Uint8BufferAttribute, Int8BufferAttribute, BufferAttribute, ArcCurve, CatmullRomCurve3, CubicBezierCurve, CubicBezierCurve3, EllipseCurve, LineCurve, LineCurve3, QuadraticBezierCurve, QuadraticBezierCurve3, SplineCurve, REVISION, MOUSE, CullFaceNone, CullFaceBack, CullFaceFront, CullFaceFrontBack, FrontFaceDirectionCW, FrontFaceDirectionCCW, BasicShadowMap, PCFShadowMap, PCFSoftShadowMap, FrontSide, BackSide, DoubleSide, FlatShading, SmoothShading, NoColors, FaceColors, VertexColors, NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending, AddEquation, SubtractEquation, ReverseSubtractEquation, MinEquation, MaxEquation, ZeroFactor, OneFactor, SrcColorFactor, OneMinusSrcColorFactor, SrcAlphaFactor, OneMinusSrcAlphaFactor, DstAlphaFactor, OneMinusDstAlphaFactor, DstColorFactor, OneMinusDstColorFactor, SrcAlphaSaturateFactor, NeverDepth, AlwaysDepth, LessDepth, LessEqualDepth, EqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth, MultiplyOperation, MixOperation, AddOperation, NoToneMapping, LinearToneMapping, ReinhardToneMapping, Uncharted2ToneMapping, CineonToneMapping, ACESFilmicToneMapping, UVMapping, CubeReflectionMapping, CubeRefractionMapping, EquirectangularReflectionMapping, EquirectangularRefractionMapping, SphericalReflectionMapping, CubeUVReflectionMapping, CubeUVRefractionMapping, RepeatWrapping, ClampToEdgeWrapping, MirroredRepeatWrapping, NearestFilter, NearestMipMapNearestFilter, NearestMipMapLinearFilter, LinearFilter, LinearMipMapNearestFilter, LinearMipMapLinearFilter, UnsignedByteType, ByteType, ShortType, UnsignedShortType, IntType, UnsignedIntType, FloatType, HalfFloatType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedInt248Type, AlphaFormat, RGBFormat, RGBAFormat, LuminanceFormat, LuminanceAlphaFormat, RGBEFormat, DepthFormat, DepthStencilFormat, RedFormat, RGB_S3TC_DXT1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_PVRTC_4BPPV1_Format, RGB_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_PVRTC_2BPPV1_Format, RGB_ETC1_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_10x10_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, LoopOnce, LoopRepeat, LoopPingPong, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, ZeroCurvatureEnding, ZeroSlopeEnding, WrapAroundEnding, TrianglesDrawMode, TriangleStripDrawMode, TriangleFanDrawMode, LinearEncoding, sRGBEncoding, GammaEncoding, RGBEEncoding, LogLuvEncoding, RGBM7Encoding, RGBM16Encoding, RGBDEncoding, BasicDepthPacking, RGBADepthPacking, TangentSpaceNormalMap, ObjectSpaceNormalMap, Face4, LineStrip, LinePieces, MeshFaceMaterial, MultiMaterial, PointCloud, Particle, ParticleSystem, PointCloudMaterial, ParticleBasicMaterial, ParticleSystemMaterial, Vertex, DynamicBufferAttribute, Int8Attribute, Uint8Attribute, Uint8ClampedAttribute, Int16Attribute, Uint16Attribute, Int32Attribute, Uint32Attribute, Float32Attribute, Float64Attribute, ClosedSplineCurve3, SplineCurve3, Spline, AxisHelper, BoundingBoxHelper, EdgesHelper, WireframeHelper, XHRLoader, BinaryTextureLoader, GeometryUtils, Projector, CanvasRenderer, JSONLoader, SceneUtils, LensFlare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/controls/collision.js":
/*!***********************************!*\
  !*** ./src/controls/collision.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/controls/user.js\");\n/* harmony import */ var _scene_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scene/entities */ \"./src/scene/entities.js\");\n// todo: check casting on Groups, especially for steps to apply height changes\n// todo: find a better way to cast against objects than storing as an array?\nvar THREE = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\nvar down = new THREE.Vector3(0, -1, 0);\nvar caster = new THREE.Raycaster();\nvar quat = new THREE.Quaternion();\n\nvar runSteps = function runSteps() {\n  var pos = _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPosition();\n  var dir = _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDirection();\n  caster.set(pos, down);\n  var steps = caster.intersectObjects(_scene_entities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].steps);\n\n  if (steps.length > 0) {\n    // todo: limit height change, act as blocking if too high\n    var desiredHeight = steps[0].object.position.y + steps[0].object.geometry.parameters.height + 30;\n    _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Request.y = desiredHeight;\n  } else if (pos.y !== 30) {\n    _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Request.y = 30;\n  }\n};\n\nvar runBlocking = function runBlocking() {\n  var pos = _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPosition();\n  var dir = _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDirection(); // Make sure we look from the user's feet, not their eye level height\n\n  pos.y -= 30;\n  dir.y = 0;\n  var viewdir = dir.clone();\n  var collisions = [];\n\n  if (_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Request.z === -1) {\n    viewdir = dir.clone();\n    caster.set(pos, dir);\n    collisions = caster.intersectObjects(_scene_entities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blocking);\n\n    if (collisions.length > 0 && collisions[0].distance <= 10) {\n      _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Request.z = 0;\n    }\n  }\n\n  if (_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Request.z === 1) {\n    viewdir = dir.clone(); // make sure we apply the direction we wish to cast based on\n    // the current view direction, not from origin\n\n    quat.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);\n    viewdir.applyQuaternion(quat);\n    caster.set(pos, viewdir);\n    collisions = caster.intersectObjects(_scene_entities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blocking);\n\n    if (collisions.length > 0 && collisions[0].distance <= 10) {\n      _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Request.z = 0;\n    }\n  }\n\n  if (_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Request.x === 1) {\n    viewdir = dir.clone();\n    quat.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -(Math.PI / 2));\n    viewdir.applyQuaternion(quat);\n    caster.set(pos, viewdir);\n    collisions = caster.intersectObjects(_scene_entities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blocking);\n\n    if (collisions.length > 0 && collisions[0].distance <= 10) {\n      _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Request.x = 0;\n    }\n  }\n\n  if (_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Request.x === -1) {\n    viewdir = dir.clone();\n    quat.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);\n    viewdir.applyQuaternion(quat);\n    caster.set(pos, viewdir);\n    collisions = caster.intersectObjects(_scene_entities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blocking);\n\n    if (collisions.length > 0 && collisions[0].distance <= 10) {\n      _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Request.x = 0;\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  run: function run() {\n    runSteps();\n    runBlocking();\n  }\n});\n\n//# sourceURL=webpack:///./src/controls/collision.js?");

/***/ }),

/***/ "./src/controls/pointerlock.js":
/*!*************************************!*\
  !*** ./src/controls/pointerlock.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar THREE = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar blocker = document.getElementById('blocker');\nvar instructions = document.getElementById('instructions');\nvar visible = 'flex';\nvar hidden = 'none';\nvar enabled = false;\n\nvar change = function change() {\n  if (document.pointerLockElement === document.body || document.mozPointerLockElement === document.body || document.webkitPointerLockElement === document.body) {\n    enabled = true;\n    blocker.style.display = hidden;\n  } else {\n    enabled = false;\n    blocker.style.display = visible;\n    instructions.style.display = visible;\n  }\n};\n\nvar error = function error() {\n  instructions.style.display = visible;\n};\n\nvar activated = function activated() {\n  instructions.style.display = hidden;\n  document.body.requestPointerLock = document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock;\n  document.body.requestPointerLock();\n};\n\nvar isEnabled = function isEnabled() {\n  return enabled;\n};\n\ninstructions.addEventListener('click', function () {\n  return activated();\n}, false);\ndocument.addEventListener('pointerlockchange', function () {\n  return change();\n}, false);\ndocument.addEventListener('mozpointerlockchange', function () {\n  return change();\n}, false);\ndocument.addEventListener('webkitpointerlockchange', function () {\n  return change();\n}, false);\ndocument.addEventListener('pointerlockerror', function () {\n  return error();\n}, false);\ndocument.addEventListener('mozpointerlockerror', function () {\n  return error();\n}, false);\ndocument.addEventListener('webkitpointerlockerror', function () {\n  return error();\n}, false);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  isEnabled: isEnabled\n});\n\n//# sourceURL=webpack:///./src/controls/pointerlock.js?");

/***/ }),

/***/ "./src/controls/user.js":
/*!******************************!*\
  !*** ./src/controls/user.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pointerlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointerlock */ \"./src/controls/pointerlock.js\");\nvar THREE = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nvar pitch = new THREE.Object3D();\nvar User = new THREE.Object3D();\nUser.Camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);\nUser.Velocity = new THREE.Vector3(0, 0, 0);\nUser.Request = new THREE.Vector3(0, 30, 0);\nUser.Camera.rotation.set(0, 0, 0);\npitch.add(User.Camera);\nUser.position.y = 30;\nUser.add(pitch);\n\nvar onResize = function onResize() {\n  User.Camera.aspect = window.innerWidth / window.innerHeight;\n  User.Camera.updateProjectionMatrix();\n};\n\nvar mouseMove = function mouseMove(event) {\n  if (!_pointerlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isEnabled()) return;\n  var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;\n  var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;\n  User.rotation.y -= movementX * 0.002;\n  pitch.rotation.x -= movementY * 0.002;\n  pitch.rotation.x = Math.max(-(Math.PI / 2), Math.min(Math.PI / 2, pitch.rotation.x));\n};\n\nUser.getPosition = function () {\n  return User.position.clone();\n}; // The direction the user is actually looking is a calculation of\n// several properties in the 3D space\n\n\nUser.getDirection = function () {\n  var direction = new THREE.Vector3(0, 0, -1);\n  var rotation = new THREE.Euler(0, 0, 0, \"YXZ\");\n  var v = User.getPosition();\n  rotation.set(pitch.rotation.x, User.rotation.y, 0);\n  v.copy(direction).applyEuler(rotation);\n  return v.clone();\n};\n\nvar onKeyDown = function onKeyDown(event) {\n  switch (event.keyCode) {\n    case 38: // up\n\n    case 87:\n      // w\n      User.Request.z = -1;\n      break;\n\n    case 37: // left\n\n    case 65:\n      // a\n      User.Request.x = -1;\n      break;\n\n    case 40: // down\n\n    case 83:\n      // s\n      User.Request.z = 1;\n      break;\n\n    case 39: // right\n\n    case 68:\n      // d\n      User.Request.x = 1;\n      break;\n  }\n};\n\nvar onKeyUp = function onKeyUp(event) {\n  switch (event.keyCode) {\n    case 38: // up\n\n    case 87:\n      // w\n      User.Request.z = 0;\n      break;\n\n    case 37: // left\n\n    case 65:\n      // a\n      User.Request.x = 0;\n      break;\n\n    case 40: // down\n\n    case 83:\n      // s\n      User.Request.z = 0;\n      break;\n\n    case 39: // right\n\n    case 68:\n      // d\n      User.Request.x = 0;\n      break;\n\n    case 72:\n      // h\n      User.position.x = 0;\n      User.position.z = 0;\n      User.position.y = 30;\n      break;\n  }\n};\n\nUser.run = function (delta) {\n  // Round off and apply some leeway to the position difference,\n  // otherwise we end up bouncing back and forth due to inexact\n  // delta changes.\n  var achievedHeight = Math.round(User.position.y) - User.Request.y;\n\n  if (achievedHeight < -2) {\n    User.Velocity.y = 8000 * delta;\n  } else if (achievedHeight > 2) {\n    User.Velocity.y = -8000 * delta;\n  } else {\n    // If they are 'close enough', put them in the desired position\n    User.Velocity.y = 0;\n    User.position.y = User.Request.y;\n  } // Degrade the velocity to prevent abrupt changes\n\n\n  User.Velocity.x -= User.Velocity.x * 10.0 * delta;\n  User.Velocity.z -= User.Velocity.z * 10.0 * delta; // Apply the selected movement\n\n  User.Velocity.x += 1000.0 * delta * User.Request.x;\n  User.Velocity.z += 1000.0 * delta * User.Request.z;\n  User.translateX(User.Velocity.x * delta);\n  User.translateZ(User.Velocity.z * delta);\n  User.translateY(User.Velocity.y * delta);\n};\n\nwindow.addEventListener('resize', function () {\n  return onResize();\n}, false);\ndocument.addEventListener('mousemove', function () {\n  return mouseMove(event);\n}, false);\ndocument.addEventListener('keydown', function () {\n  return onKeyDown(event);\n}, false);\ndocument.addEventListener('keyup', function () {\n  return onKeyUp(event);\n}, false);\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./src/controls/user.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scene_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene/renderer */ \"./src/scene/renderer.js\");\n/* harmony import */ var _controls_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/user */ \"./src/controls/user.js\");\n/* harmony import */ var _scene_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene/scene */ \"./src/scene/scene.js\");\n/* harmony import */ var _scene_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene/entities */ \"./src/scene/entities.js\");\n\n\n\n\nvar time = performance.now();\nvar delta = 0;\n\n(function run() {\n  requestAnimationFrame(function () {\n    return run();\n  });\n  var newtime = performance.now();\n  delta = (newtime - time) / 1000;\n  _scene_scene__WEBPACK_IMPORTED_MODULE_2__[\"default\"].run(delta);\n  time = newtime;\n  _scene_renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(_scene_scene__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _controls_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Camera);\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scene/entities.js":
/*!*******************************!*\
  !*** ./src/scene/entities.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _world_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../world/world */ \"./src/world/world.js\");\n // Additional property groupings can be added here to expand interactions\n// with the raycaster or others. Undefined properties will initialize a\n// new array if one does not exist, but it is safer to declare in advance\n\nvar Entities = {\n  all: [],\n  blocking: [],\n  steps: []\n};\n_world_world__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(function (def) {\n  Entities.all.push(def);\n\n  if (typeof def.props !== 'undefined') {\n    for (var prop in def.props) {\n      if (def.props.hasOwnProperty(prop) && def.props[prop] === true) {\n        if (typeof Entities[prop] === 'undefined') {\n          Entities[prop] = [];\n        }\n\n        Entities[prop].push(def);\n      }\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entities);\n\n//# sourceURL=webpack:///./src/scene/entities.js?");

/***/ }),

/***/ "./src/scene/renderer.js":
/*!*******************************!*\
  !*** ./src/scene/renderer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar THREE = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar Renderer = new THREE.WebGLRenderer();\nRenderer.setClearColor(0xffffff);\nRenderer.setPixelRatio(window.devicePixelRatio);\nRenderer.setSize(window.innerWidth, window.innerHeight);\n\nvar onResize = function onResize() {\n  Renderer.setSize(window.innerWidth, window.innerHeight);\n};\n\nwindow.addEventListener('resize', function () {\n  return onResize();\n}, false);\ndocument.body.appendChild(Renderer.domElement);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Renderer);\n\n//# sourceURL=webpack:///./src/scene/renderer.js?");

/***/ }),

/***/ "./src/scene/scene.js":
/*!****************************!*\
  !*** ./src/scene/scene.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controls_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controls/user */ \"./src/controls/user.js\");\n/* harmony import */ var _controls_collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/collision */ \"./src/controls/collision.js\");\n/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities */ \"./src/scene/entities.js\");\n/* harmony import */ var _controls_pointerlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controls/pointerlock */ \"./src/controls/pointerlock.js\");\n// todo: use imports for three, only pull needed modules\nvar THREE = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\n\n\nvar Scene = new THREE.Scene();\nScene.add(_controls_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n_entities__WEBPACK_IMPORTED_MODULE_2__[\"default\"].all.forEach(function (entity) {\n  Scene.add(entity);\n});\n\nScene.run = function (delta) {\n  if (!_controls_pointerlock__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isEnabled()) return;\n  _controls_collision__WEBPACK_IMPORTED_MODULE_1__[\"default\"].run();\n  _controls_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].run(delta);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n//# sourceURL=webpack:///./src/scene/scene.js?");

/***/ }),

/***/ "./src/world/world.js":
/*!****************************!*\
  !*** ./src/world/world.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Import modules here to define the objects in your world\n//\n// import Stuff from '@/world/stuff'\nvar World = []; // Load up the objects in to this world\n//\n// World = World.concat(Stuff)\n// If you want your objects to interact with the raycaster as a blocking\n// entity or a stepping entity, add 'props' to the object before exporting\n// e.g. obj.props = {blocking: true}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (World);\n\n//# sourceURL=webpack:///./src/world/world.js?");

/***/ })

/******/ });