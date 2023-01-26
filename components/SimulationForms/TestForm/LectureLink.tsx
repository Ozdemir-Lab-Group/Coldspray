import { Grid, GridItem } from "@chakra-ui/layout";
import { Button, ButtonProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import ReactPlayer from "react-player/youtube";

const LectureVideo: React.FC<{}> = () => {
  return (
    <Box paddingY={"10%"}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=0H2miBK_gAk"
        controls={true}
        pad
      ></ReactPlayer>
    </Box>
  );
};

const LectureButton: React.FC<ButtonProps> = ({ children }) => {
  return <Button width={"300px"}>{children}</Button>;
};

const LectureLink: React.FC<{}> = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" columnGap={10} rowGap={"20%"} paddingY={"5"}>
        <GridItem>
          <LectureButton>Fundamentals of CS Technology</LectureButton>
        </GridItem>
        <GridItem>
          <LectureButton>Fundamentals of AM by CS</LectureButton>
        </GridItem>
        <GridItem>
          <LectureButton>Fundamentals of CS Operations</LectureButton>
        </GridItem>
        <GridItem>
          <LectureButton>Testing and Verification</LectureButton>
        </GridItem>

        <GridItem>
          <LectureButton>Fundamentals of Repair by CS</LectureButton>
        </GridItem>
        <GridItem>
          <LectureButton>Robot Path Programming</LectureButton>
        </GridItem>
      </Grid>
      <LectureVideo />
    </Box>
  );
};

export default LectureLink;
