import './style.css'

import * as THREE from "three";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

const canvas = document.querySelector("canvas.webgl")!;


/**
 * Scene
 */
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Axes Helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Grid Helper
const gridHelper = new THREE.GridHelper();
scene.add(gridHelper);
gridHelper.position.y = -1;

/**
 * Camera
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2;
// camera.position.y = 1;
// camera.position.x = 1.5;
camera.lookAt(new THREE.Vector3());
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.render(scene, camera);

/**
 * Controls
 * {@link https://threejs.org/docs/#examples/en/controls/MapControls MapControls}
 * {@link https://threejs.org/docs/#examples/en/controls/FlyControls FlyControls}
 * {@link https://threejs.org/docs/#examples/en/controls/FirstPersonControls FirstPersonControls}
 * {@link https://threejs.org/docs/#examples/en/controls/PointerLockControls PointerLockControls}
 * {@link https://threejs.org/docs/#examples/en/controls/OrbitControls OrbitControls}
 * {@link https://threejs.org/docs/#examples/en/controls/TrackballControls TrackballControls}
 * {@link https://threejs.org/docs/#examples/en/controls/TransformControls DragControls}
 */
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.autoRotate = true;
// controls.target

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Animation with GSAP
 */
// gsap.to(cube.position, {
//   duration: 5,
//   delay: 1,
//   x: 3,
// })
// .then(() => {
//   gsap.to(cube.position, {
//     duration: 5,
//     delay: 1,
//     x: -3,
//   })
//   .then(() => {
//     gsap.to(cube.position, {
//       duration: 5,
//       delay: 1,
//       x: 0,
//     })
//   })
// });


/**
 * Animate
 */
// let time = Date.now();

// const clock = new THREE.Clock();

const tick = () => {
  // Render
  renderer.render(scene, camera);

  // cube.position.x += 0.01;
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  // cube.rotation.z += 0.01;

  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;

  // cube.rotation.y += 0.001 * deltaTime;

  // const elapsedTime = clock.getElapsedTime();

  // cube.rotation.y = elapsedTime;
  // cube.position.x = Math.cos(elapsedTime);
  // cube.position.y = Math.sin(elapsedTime);

  // camera.position.x = Math.cos(elapsedTime);
  // camera.position.y = Math.sin(elapsedTime);

  // Update Controls
  // controls.update();

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
}

tick();