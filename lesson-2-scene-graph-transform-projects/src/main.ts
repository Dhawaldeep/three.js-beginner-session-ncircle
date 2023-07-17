import './style.css'

import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl")!;
// Scene
const scene = new THREE.Scene();

// Box Group
// const boxGroup = new THREE.Group();
// scene.add(boxGroup);
// boxGroup.position.y = 1;

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
	color: 0xff0000,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
// cube.position.x = 2;
// boxGroup.add(cube);

// Green Cuboid
// const cuboidMaterial = new THREE.MeshBasicMaterial({
// 	color: 0x00ff00,
// });
// const cuboid = new THREE.Mesh(geometry, cuboidMaterial);
// cuboid.scale.x = 2;
// cuboid.scale.y = 1;
// cuboid.scale.z = 1;
// scene.add(cuboid);
// boxGroup.add(cuboid);

// Yellow Cube
// const yellowCubeMaterial = new THREE.MeshBasicMaterial({
// 	color: 0xffff00,
// });
// const yellowCube = new THREE.Mesh(geometry, yellowCubeMaterial);
// yellowCube.position.x = -2;
// boxGroup.add(yellowCube);

// Axes Helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Grid Helper
const gridHelper = new THREE.GridHelper();
scene.add(gridHelper);
gridHelper.position.y = -1;

// Camera
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

// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.render(scene, camera);

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

	// Call tick again on the next frame
	window.requestAnimationFrame(tick);
}

tick();