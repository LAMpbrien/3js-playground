import './style.css'

import { animate } from 'motion'
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const orchidTag = document.querySelector("section.orchid")

//loading animations
animate (".left-hand-side .version-history", {
  y: [-40,0],
  opacity: [0, 1]
}, { duration: 0.4, delay: 0.25})

animate (".install-area img", {
  y: [-50,0],
  opacity: [0, 1]
}, { duration: 0.5, delay: 0.25})

animate (".install-area .big-boi", {
  y: [-60,0],
  opacity: [0, 1]
}, { duration: 0.6, delay: 0.3})

animate (".install-area .latest-release", {
  y: [-70,0],
  opacity: [0, 1]
}, { duration: 0.7, delay: 0.6})

animate (".left-hand-side #heading-copy", {
  y: [-100,0],
  opacity: [0, 1]
}, { duration: 0.8, delay: 0.6})


//3js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x000000, 0)
orchidTag.appendChild( renderer.domElement );


//lighting
const ambience = new THREE.AmbientLight( 0x404040 ); // soft white light
camera.add( ambience );

const keyLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
keyLight.position.set(-1,1,3)
camera.add( keyLight );

const fillLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
fillLight.position.set(1,1,3)
camera.add( fillLight );

const backLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
backLight.position.set(-1,3,-1)
camera.add( backLight );

scene.add(camera)

// shape+material

const geometry = new THREE.TorusKnotGeometry( 1, 0.25, 100, 16 )
const material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } )
const torusKnot = new THREE.Mesh( geometry, material )
scene.add( torusKnot )


// Controls
const controls = new OrbitControls (camera, renderer.domElement)
controls.enableZoom = false
controls.enablePan = false
controls.autoRotate = true
controls.autoRotateSpeed = 2
controls.update()


camera.position.z = 5;

function render() {
  controls.update()
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( render );