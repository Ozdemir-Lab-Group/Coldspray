import { OrbitControls, Segments, Segment, Bounds, Box as ThreeBox } from "@react-three/drei";
import { Suspense, useState } from "react";
import { useLoader, Canvas } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import DatGui, { DatNumber } from "@tim-soft/react-dat-gui";
import { Vector3 } from "three";
import { Box } from "@chakra-ui/layout";

interface STLProps {
  URL: string;
}

interface Coordinate {
  x: number;
  y: number;
  z: number;
}

const ThreeReact: React.FC<STLProps> = ({ URL }) => {
  const geom = useLoader(STLLoader, URL);
  const [points, setPoints] = useState<Coordinate[]>([]);
  const [cubeCoordinates, setCubeCoordinates] = useState<Coordinate>({
    x: 0,
    y: 0,
    z: 0,
  });

  const Cube = ({ scale = new Vector3(20, 20, 20) }) => (
    <ThreeBox
      args={[1, 1, 1]}
      position={[cubeCoordinates.x, cubeCoordinates.y, cubeCoordinates.z]}
      scale={scale}
    >
      <meshStandardMaterial attach="material" color="red" />
    </ThreeBox>
  );

  return (
    <>
      <Canvas camera={{ position: [0, -10, 80], fov: 50 }} dpr={[1, 2]}>
        <pointLight position={[100, 100, 100]} intensity={0.8} />
        <hemisphereLight
          color="#ffffff"
          groundColor="#b9b9b9"
          position={[-7, 25, 13]}
          intensity={0.85}
        />
        <OrbitControls makeDefault />

        <Suspense fallback={null}>
          <Bounds fit clip margin={1.2}>
            <mesh
              onClick={(e) => {
                const point = e.point as Coordinate;
                console.log(point);
                if (points.length === 4) {
                  setPoints([]);
                } else {
                  setPoints([...points, { x: point.x, y: point.y, z: point.z }]);
                }
              }}
              geometry={geom}
              position={[0, 0, 0]}
              onPointerMove={(e) => e.stopPropagation()}
            >
              <meshMatcapMaterial attach="material" />
            </mesh>
          </Bounds>

          {points.length > 1 && points.length < 5 && (
            <Segments limit={4} lineWidth={1.0}>
              {points.map((point, i) =>
                i + 1 !== points.length ? (
                  <Segment
                    start={[point.x, point.y, point.z]}
                    end={[points[i + 1].x, points[i + 1].y, points[i + 1].z]}
                    color="red"
                  />
                ) : (
                  <Segment
                    start={[point.x, point.y, point.z]}
                    end={[points[0].x, points[0].y, points[0].z]}
                    color="red"
                  />
                )
              )}
            </Segments>
          )}
          <Cube />
        </Suspense>
      </Canvas>
      <DatGui data={cubeCoordinates} onUpdate={setCubeCoordinates}>
        <DatNumber label="x-pos" path="x" min={0} max={100} step={0.1} />
        <DatNumber path="y" min={0} max={100} step={0.1} />
        <DatNumber path="z" min={0} max={100} step={0.1} />
      </DatGui>
    </>
  );
};

export default ThreeReact;
