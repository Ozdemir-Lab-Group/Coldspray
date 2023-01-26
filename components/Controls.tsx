import {
  Heading,
  Box,
  Tag,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ControlProps, ScrollInputProps } from "../types";

export const ScrollInput: React.FC<ScrollInputProps> = (ScrollProps) => {
  const { group, handleFunction, label, state } = ScrollProps;
  return (
    <Box className={group} padding={2} paddingBottom={4}>
      <NumberInput
        value={state}
        onChange={(value) => {
          handleFunction(+value);
        }}
        step={1 / 32}
        allowMouseWheel
        size="sm"
      >
        <NumberInputField fontSize={10} minBlockSize="10" minW={20} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
};

const Controls: React.FC<ControlProps> = (controls) => {
  const { cube, setCube } = controls;

  return (
    <Grid templateColumns="repeat(1, 1fr)">
      <Center paddingBottom={2}>
        <Heading fontSize="lg">Bounding Box</Heading>
      </Center>
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem colSpan={1}></GridItem>
        <GridItem colSpan={1}>
          <Center>
            <Tag>x</Tag>
          </Center>
        </GridItem>
        <GridItem colSpan={1}>
          <Center>
            <Tag>y</Tag>
          </Center>
        </GridItem>
        <GridItem colSpan={1}>
          <Center>
            <Tag>y</Tag>
          </Center>
        </GridItem>
      </Grid>
      <GridItem className="controls">
        <Grid templateColumns="repeat(4, 1fr)">
          <Center>
            <Tag>Position</Tag>
          </Center>
          <GridItem colSpan={1}>
            <ScrollInput
              label="X-POS"
              group="control"
              state={cube.xPosition}
              handleFunction={(value: number) => setCube({ ...cube, xPosition: value })}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <ScrollInput
              label="Y-POS"
              group="control"
              state={cube.yPosition}
              handleFunction={(value: number) => setCube({ ...cube, yPosition: value })}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <ScrollInput
              label="Z-POS"
              group="control"
              state={cube.zPosition}
              handleFunction={(value: number) => setCube({ ...cube, zPosition: value })}
            />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem className="controls">
        <Grid templateColumns="repeat(4, 1fr)">
          <Center>
            <Tag>Rotation</Tag>
          </Center>
          <ScrollInput
            label="X-ROT"
            group="control"
            state={cube.xRotation}
            handleFunction={(value: number) => setCube({ ...cube, xRotation: value })}
          />
          <ScrollInput
            label="Y-ROT"
            group="control"
            state={cube.yRotation}
            handleFunction={(value: number) => setCube({ ...cube, yRotation: value })}
          />
          <ScrollInput
            label="Z-ROT"
            group="control"
            state={cube.zRotation}
            handleFunction={(value: number) => setCube({ ...cube, zRotation: value })}
          />
        </Grid>
      </GridItem>
      <GridItem className="controls">
        <Grid templateColumns="repeat(4, 1fr)">
          <Center>
            <Tag>Scale</Tag>
          </Center>
          <ScrollInput
            label="X-SCALE"
            group="control"
            state={cube.xScale}
            handleFunction={(value: number) => setCube({ ...cube, xScale: value })}
          />
          <ScrollInput
            label="Y-SCALE"
            group="control"
            state={cube.yScale}
            handleFunction={(value: number) => setCube({ ...cube, yScale: value })}
          />
          <ScrollInput
            label="Z-SCALE"
            group="control"
            state={cube.zScale}
            handleFunction={(value: number) => setCube({ ...cube, zScale: value })}
          />
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Controls;
