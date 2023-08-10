import './style.css'

import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'lil-gui';

const canvas = document.querySelector("canvas.webgl")!;


/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Camera
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 6;
camera.position.y = 2;
// camera.position.x = 1.5;
camera.lookAt(new THREE.Vector3());
scene.add(camera);

const updateCameraPosition = (position: THREE.Vector3) => {
  camera.position.set(position.x, position.y, position.z);
}

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);



/**
 * Shape Group
 */
const shapeGroup = new THREE.Group();
scene.add(shapeGroup);


/**
 * Geometries
 */
// Box
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
// const boxGeometry = new THREE.BoxGeometry(1, 2, 1);
// const boxGeometry = new THREE.BoxGeometry(2, 1, 1);
// const boxGeometry = new THREE.BoxGeometry(1, 1, 2);

// Sphere Geometry
const sphereGeometry = new THREE.SphereGeometry();
// const sphereGeometry = new THREE.SphereGeometry(0.5);
// const sphereGeometry = new THREE.SphereGeometry(1, 32, 16);
// const sphereGeometry = new THREE.SphereGeometry(2, 32, 32, 0, Math.PI * 2, 0, Math.PI * 2);


// Cone Geometry
const coneGeometry = new THREE.ConeGeometry();
// const coneGeometry = new THREE.ConeGeometry(0.5);
// const coneGeometry = new THREE.ConeGeometry(1, 2);
// const coneGeometry = new THREE.ConeGeometry(1, 1, 32);
// const coneGeometry = new THREE.ConeGeometry(2, 2, 32, 1);
// const coneGeometry = new THREE.ConeGeometry(2, 2, 32, 1, false);
// const coneGeometry = new THREE.ConeGeometry(2, 2, 32, 1, false, 0, Math.PI * 2);

// const material = new THREE.MeshBasicMaterial({
//   color: 0x0000ff,
//   wireframe: true,
// });
// const material = new THREE.MeshPhongMaterial({
//   color: 0x0000ff,
// });
const material = new THREE.MeshStandardMaterial({
  color: 0x0000ff,
});
// const box = new THREE.Mesh(boxGeometry, material);
// shapeGroup.add(box);

// const sphere = new THREE.Mesh(sphereGeometry, material);
// shapeGroup.add(sphere);
// sphere.position.x = -3;

// const cone = new THREE.Mesh(coneGeometry, material);
// shapeGroup.add(cone);
// cone.position.x = 3;

/**
 * Textures
 */
// const textureLoader = new THREE.TextureLoader()

// const doorColorTexture = textureLoader.load('/textures/door/color.jpg');
// const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg');
// const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg');
// const doorHeightTexture = textureLoader.load('/textures/door/height.jpg');
// const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg');
// const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
// const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg');

// const planeMaterial = new THREE.MeshStandardMaterial({
//   map: doorColorTexture,
// });
// planeMaterial.side = THREE.DoubleSide;
// planeMaterial.transparent = true;
// planeMaterial.alphaMap = doorAlphaTexture;
// planeMaterial.metalness = 0;
// planeMaterial.roughness = 1;
// planeMaterial.metalnessMap = doorMetalnessTexture;
// planeMaterial.roughnessMap = doorRoughnessTexture;
// planeMaterial.aoMap = doorAmbientOcclusionTexture;
// planeMaterial.aoMapIntensity = 1;
// planeMaterial.displacementMap = doorHeightTexture;
// planeMaterial.displacementScale = 0.5;
// planeMaterial.normalMap = doorNormalTexture;
// planeMaterial.normalScale.set(0.5, 0.5);

// const planeGeometry = new THREE.PlaneGeometry();
// const door = new THREE.Mesh(planeGeometry, planeMaterial);
// scene.add(door);
// shapeGroup.visible = false;
// updateCameraPosition(new THREE.Vector3(0, 0, 2));

// Axes Helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
axesHelper.visible = false;

// Grid Helper
const gridHelper = new THREE.GridHelper(20);
scene.add(gridHelper);
// gridHelper.visible = false;
gridHelper.position.y = -1;

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

/**
 * Debug
 */
// const gui = new dat.GUI()

// gui.add(planeMaterial, 'metalness').min(0).max(1).step(0.0001);
// gui.add(planeMaterial, 'roughness').min(0).max(1).step(0.0001);
// gui.add(planeMaterial, 'aoMapIntensity').min(0).max(10).step(0.0001);
// gui.add(planeMaterial, 'displacementScale').min(0).max(1).step(0.0001);
