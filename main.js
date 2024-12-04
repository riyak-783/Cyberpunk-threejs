import './style.css';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import gsap from 'gsap';

const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 3.5;

let model
//hdri
const rgbeLoader = new RGBELoader();
rgbeLoader.load(
  "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/pond_bridge_night_1k.hdr",
  function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
    
  }
);

//gltf model loader
const loader = new GLTFLoader();
loader.load('./DamagedHelmet.gltf', (gltf) => {
  model = gltf.scene;
  scene.add(model);
},
  undefined,
  (error) => {
    console.error('An error happened while loading the gltf model:', error);
  });


window.addEventListener('mousemove', (e) => {
  if (model) {
    const rotationX = (e.clientX / window.innerWidth - 0.5) * (Math.PI * 0.3) ;
    const rotationY = (e.clientY / window.innerHeight - 0.5) * (Math.PI * 0.3) ;
    gsap.to(model.rotation, {
      y: rotationX,
      x: rotationY,
      duration: 0.9,
      ease: "power2.out"
    });
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});
//renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#draw"),
  antialias: true,
  alpha: true,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();



// Post processing
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const rgbShiftPass = new ShaderPass(RGBShiftShader);
rgbShiftPass.uniforms['amount'].value = 0.0030;
composer.addPass(rgbShiftPass);

function animate() {
  window.requestAnimationFrame(animate);
  composer.render();
}
animate();