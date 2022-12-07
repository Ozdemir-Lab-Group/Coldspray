import { Html, useProgress } from "@react-three/drei";

interface LoaderProps {}

const Loader: LoaderProps = ({}) => {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};

export default Loader;
