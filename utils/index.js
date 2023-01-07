import { BoxGeometry, Color, Mesh, MeshLambertMaterial } from "three";
import { boxGeometry } from "../constants";

export const generateBox = (x, y, z) => {
  const geometry = new BoxGeometry(
    boxGeometry.width,
    boxGeometry.height,
    boxGeometry.depth
  );
  const color = new Color(`hsl(30, 100%, 50%)`);
  const material = new MeshLambertMaterial({ color });
  const mesh = new Mesh(geometry, material);
  mesh.position.set(x, y, z);
  return mesh;
};
