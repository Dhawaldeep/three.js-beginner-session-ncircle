import './style.css'

import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvas = document.querySelector("canvas.webgl")!;


/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Geometries
 */
// Box
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const geometry = new THREE.BoxGeometry(2, 2, 2);
// const geometry = new THREE.BoxGeometry(1, 2, 1);
// const geometry = new THREE.BoxGeometry(2, 1, 1);
// const geometry = new THREE.BoxGeometry(1, 1, 2);

// Sphere Geometry
// const geometry = new THREE.SphereGeometry();
const geometry = new THREE.SphereGeometry();
// const geometry = new THREE.SphereGeometry();
// const geometry = new THREE.SphereGeometry();

const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  // wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

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

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

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
 * Animate
 */
const tick = () => {
  // Render
  renderer.render(scene, camera);

  // Update Controls
  controls.update();

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
}

tick();