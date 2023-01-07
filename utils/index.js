import { BoxGeometry, Color, Mesh, MeshLambertMaterial } from "three";

export const generateBox = (x, y, z) => {
  const geometry = new BoxGeometry(3, 1, 3);
  const color = new Color(`hsl(30, 100%, 50%)`);
  const material = new MeshLambertMaterial({ color });
  const mesh = new Mesh(geometry, material);
  mesh.position.set(x, y, z);
  return mesh;
};
