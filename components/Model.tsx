import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

interface ModelRenderProps {
  path: string;
}

const ModelRender: React.FC<ModelRenderProps> = ({ path }) => {
  const geom = useLoader(STLLoader, path);
  return (
    <mesh
      onClick={(e) => console.log(e.point)}
      geometry={geom}
      position={[0, 0, 0]}
      onPointerMove={(e) => e.stopPropagation()}
    >
      <meshMatcapMaterial attach="material" />
    </mesh>
  );
};

export default ModelRender;
