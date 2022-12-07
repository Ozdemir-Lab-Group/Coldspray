import { useState, Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { Box, OrbitControls, Segments, Segment, Bounds } from "@react-three/drei";
import { Grid, GridItem } from "@chakra-ui/layout";
import Controls from "./Controls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { STLProps, Coordinate, CubeProps } from "../Types";

const Cube = ({ position, rotation, scale = [1, 1, 1], handleClick }) => (
  <group position={position} rotation={rotation} scale={scale}>
    <Box args={[1, 1, 1]} onClick={handleClick}>
      <meshStandardMaterial attach="material" color="red" />
    </Box>
  </group>
);

const ThreeReact: React.FC<STLProps> = ({ URL }) => {
  const geom = useLoader(STLLoader, URL);
  const [points, setPoints] = useState<Coordinate[]>([]);

  const [cube, setCube] = useState<CubeProps>({
    xPosition: 0,
    yPosition: 0,
    zPosition: 0,
    xRotation: 0,
    yRotation: 0,
    zRotation: 0,
    xScale: 1,
    yScale: 1,
    zScale: 1,
  });

  return (
    <Grid templateColumns="repeat(20, 1fr)">
      <GridItem colSpan={8}>
        <Controls cube={cube} setCube={setCube} />
      </GridItem>
      <GridItem colSpan={12}>
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
                  if (points.length === 5) {
                    setPoints([]);
                  } else {
                    setPoints([...points, { x: point.x, y: point.y, z: point.z }]);
                    if (points.length === 4) {
                      const planeCenterX =
                        (points[0].x + points[1].x + points[2].x + points[3].x) / 4;
                      const planeCenterY =
                        (points[0].y + points[1].y + points[2].y + points[3].y) / 4;
                      const planeCenterZ =
                        (points[0].z + points[1].z + points[2].z + points[3].z) / 4;

                      const midX = (planeCenterX + point.x) / 2;
                      const midY = (planeCenterY + point.y) / 2;
                      const midZ = planeCenterZ;

                      const distance = Math.sqrt(
                        Math.pow(planeCenterX - points[3].x, 2) +
                          Math.pow(planeCenterY - points[3].y, 2) +
                          Math.pow(planeCenterZ - points[3].z, 2)
                      );
                      setCube({
                        ...cube,
                        xPosition: midX,
                        yPosition: midY,
                        zPosition: midZ,
                        xScale: distance,
                        yScale: distance,
                        zScale: distance,
                      });
                    }
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
            {points.length === 5 && (
              <Cube
                handleClick={() => console.log("clicked on the cube")}
                rotation={[
                  cube.xRotation * Math.PI,
                  cube.yRotation * Math.PI,
                  cube.zRotation * Math.PI,
                ]}
                position={[cube.xPosition, cube.yPosition, cube.zPosition]}
                scale={[cube.xScale, cube.yScale, cube.zScale]}
              />
            )}
          </Suspense>
        </Canvas>
      </GridItem>
    </Grid>
  );
};

export default ThreeReact;
