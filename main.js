import {
  AmbientLight,
  DirectionalLight,
  OrthographicCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { addLayer } from "./utils";
import { boxSize, speed } from "./constants";
import "./style.css";

export let camera, scene, renderer;
export const boxes = [];

const windWidth = window.innerWidth;
const windHeight = window.innerHeight;
const aspectRatio = windWidth / windHeight;
let isGameStarted = false;
const camWidth = 10;
const camHeigth = camWidth * aspectRatio;
const camPosition = 4;

scene = new Scene();
addLayer(0, 0, boxSize, boxSize);
addLayer(-15, 0, boxSize, boxSize, "x");

const ambientLight = new AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(10, 20, 0);
scene.add(directionalLight);

camera = new OrthographicCamera(
  camWidth / -2,
  camWidth / 2,
  camHeigth / 2,
  camHeigth / -2,
  0,
  200
);
camera.position.set(camPosition, camPosition, camPosition);
camera.lookAt(0, 0, 0);

renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(windWidth, windHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  const { mesh, direction } = boxes[boxes.length - 1];
  mesh.position[direction] += speed;
  if (camera.position.y + speed < camPosition + boxes.length * boxSize) {
    camera.position.y += speed;
  }
  renderer.render(scene, camera);
}

animate();

window.addEventListener("click", () => {
  if (!isGameStarted) {
    renderer.setAnimationLoop(animate);
    isGameStarted = true;
  } else {
    const { width, depth, direction } = boxes[boxes.length - 1];
    const newDirection = direction === "x" ? "z" : "x";
    const x = direction === "x" ? 0 : -10;
    const z = direction === "z" ? 0 : -10;
    addLayer(x, z, width, depth, newDirection);
  }
});
