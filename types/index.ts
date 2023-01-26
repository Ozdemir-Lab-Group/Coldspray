import { AlertStatus } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";

export type Coordinate = {
  x: number;
  y: number;
  z: number;
};

export type ControlProps = {
  cube: CubeProps;
  setCube: Dispatch<SetStateAction<CubeProps>>;
};

export type CubeProps = {
  xPosition: number;
  yPosition: number;
  zPosition: number;
  xRotation: number;
  yRotation: number;
  zRotation: number;
  xScale: number;
  yScale: number;
  zScale: number;
};

export type ColdSprayFormProps = {
  X: number;
  Y: string;
  Z: string;
  velocityLong: string;
  velocityStep: string;
  scanLength: string;
  scanWidth: string;
  nozzleLift: string;
  layers: string;
  linesPerLayer: string;
  N: string;
};

export type ScrollInputProps = {
  group: string;
  handleFunction: (value: number) => void;
  label?: string;
  state: number;
};
export type STLProps = {
  URL: string;
};

export type SimpleUser = {
  name?: string;
  email: string;
  password: string;
};

export type LogInProps = {
  user?: User;
  error?: string;
};

export type AlertProps = {
  status: AlertStatus;
  description: string;
  onClose?: () => void;
};

export type ContextUser = {
  user: User;
  signUp: ({ email, password }: SimpleUser) => Promise<LogInProps>;
  logInWithEmailAndPassword: (user: SimpleUser) => Promise<LogInProps>;
  signInWithGoogle: () => Promise<LogInProps>;
  sendPasswordReset: (email: string) => Promise<void>;
  logout: () => void;
};
