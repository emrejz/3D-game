import {
  AmbientLight,
  BoxGeometry,
  DirectionalLight,
  Mesh,
  MeshLambertMaterial,
  OrthographicCamera,
  Scene,
  WebGLRenderer,
} from "three";

import "./style.css";
import { generateBox } from "./utils/generateBox";

let camera, scene, renderer;
const width = 10;
const heigth = width * (window.innerWidth / window.innerHeight);

scene = new Scene();

const box = generateBox(0, 0, 0);
scene.add(box);

const ambientLight = new AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(10, 20, 0);
scene.add(directionalLight);

camera = new OrthographicCamera(
  width / -2,
  width / 2,
  heigth / 2,
  heigth / -2,
  1,
  100
);
camera.position.set(4, 4, 4);
camera.lookAt(0, 0, 0);

renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
