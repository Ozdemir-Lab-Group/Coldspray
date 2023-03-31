import { useState, Suspense, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Button } from "@chakra-ui/react";
import { OrbitControls, Bounds, Points, Point } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { VStack } from "@chakra-ui/layout";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { STLProps, Coordinate } from "../types";
import circleImg from "../asset/circle.jpg";

type PointProps = {
  coordinates: Coordinate[];
};

type ModelProps = {
  data: string;
};

type PointCloudButtonProp = {
  generate: boolean;
  handlePointCloud: () => Promise<void>;
  handleReset: () => void;
};

const SelectPoints: React.FC<PointProps> = ({ coordinates }) => {
  const CircleImg = useLoader(TextureLoader, circleImg.src);
  return (
    <Points>
      <pointsMaterial
        attach="material"
        map={CircleImg}
        color={"#ee4b2b"}
        size={1.2}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
      {coordinates.map((coordinate) => (
        <Point position={[coordinate.x, coordinate.y, coordinate.z]}></Point>
      ))}
    </Points>
  );
};

const GeneratePointCloud: React.FC<PointCloudButtonProp> = ({
  generate,
  handlePointCloud,
  handleReset,
}) => {
  if (generate) {
    return (
      <Button type="submit" color="black" onClick={handleReset}>
        Reset
      </Button>
    );
  } else {
    return (
      <Button type="submit" color="black" onClick={handlePointCloud}>
        Generate Point Cloud
      </Button>
    );
  }
};

const Lights = () => {
  return (
    <>
      <hemisphereLight
        color="#ffffff"
        groundColor="#b9b9b9"
        position={[-7, 25, 13]}
        intensity={0.85}
      />
      <pointLight position={[20, 20, 20]} intensity={2} />
      <pointLight position={[-20, 20, 20]} intensity={2} />
      <pointLight position={[20, -20, 20]} intensity={2} />
      <pointLight position={[20, 20, -20]} intensity={2} />
      <pointLight position={[-20, -20, 20]} intensity={2} />
      <pointLight position={[20, -20, -20]} intensity={2} />
      <pointLight position={[-20, -20, -20]} intensity={2} />
    </>
  );
};

const Cloud: React.FC<ModelProps> = ({ data }) => {
  const geometry = useLoader(STLLoader, data);
  return (
    <mesh geometry={geometry} position={[0, 0, 0]} onPointerMove={(e) => e.stopPropagation()}>
      <meshMatcapMaterial attach="material" color={"red"} />
    </mesh>
  );
};

const ThreeReactPoint: React.FC<STLProps> = ({ URL }) => {
  const geom = useLoader(STLLoader, URL);
  const [points, setPoints] = useState<Coordinate[]>([]);
  const [pointCloudData, setPointCloudData] = useState("");

  const handlePoints = async () => {
    // const response = await fetch("http://localhost:8080/repairToolbox/saveImage", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     coordinates: points,
    //   }),
    // });

    // try {
    //   const geometry = await response.blob().then((data) => {
    //     let fileData = new FileReader();
    //     fileData.onloadend = (e) => {
    //       setPointCloudData(fileData.result as string);
    //     };
    //     fileData.readAsDataURL(data);
    //   });
    // } catch (error) {
    //   console.log("Error with geometry");
    // }

    handleReset();
  };

  const handleReset = () => {
    setPointCloudData("");
    setPoints([]);
  };

  return (
    <VStack height={"30vh"}>
      <Canvas camera={{ position: [0, -10, 80], fov: 50 }} dpr={[1, 2]}>
        <Lights />
        <OrbitControls makeDefault />
        <Suspense fallback={null}>
          <Bounds fit clip margin={1.2}>
            <mesh
              onClick={(e) => {
                const point = e.point as Coordinate;
                setPoints([...points, point]);
              }}
              geometry={geom}
              position={[0, 0, 0]}
              onPointerMove={(e) => e.stopPropagation()}
            >
              <meshMatcapMaterial attach="material" />
            </mesh>
          </Bounds>
          {pointCloudData && <Cloud data={pointCloudData} />}
          <SelectPoints coordinates={points} />
        </Suspense>
      </Canvas>
      <GeneratePointCloud
        handlePointCloud={handlePoints}
        handleReset={handleReset}
        generate={pointCloudData ? true : false}
      />
    </VStack>
  );
};

export default ThreeReactPoint;
