import { BoxGeometry, Color, Mesh, MeshLambertMaterial } from "three";
import { boxSize } from "../constants";
import { scene, boxes } from "../main";

export const generateBox = (x, y, z, width, depth, boxesLength) => {
  const geometry = new BoxGeometry(width, boxSize, depth);
  const color = new Color(`hsl(${30 + boxesLength * 5}, 100%, 50%)`);
  const material = new MeshLambertMaterial({ color });
  const mesh = new Mesh(geometry, material);
  mesh.position.set(x, y, z);
  scene.add(mesh);
  return { mesh, width, depth };
};

export const addLayer = (x, z, width, depth, direction) => {
  const boxesLength = boxes.length;
  const y = boxes.length * boxSize;
  const boxItem = generateBox(x, y, z, width, depth, boxesLength);
  boxes.push({ ...boxItem, direction });
};
