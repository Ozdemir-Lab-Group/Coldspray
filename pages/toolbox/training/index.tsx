import { Box, VStack } from "@chakra-ui/layout";
import { Button, ButtonGroup, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import LectureLink from "../../../components/SimulationForms/TestForm/LectureLink";
function Training() {
  return (
    <Box>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Cold Spray AM</Tab>
          <Tab>Cold Training Courses</Tab>
          <Tab>CS-AR Toolbox</Tab>
          <Tab>CS-VR Toolbox</Tab>
        </TabList>
      </Tabs>

      <LectureLink />
    </Box>
  );
}

export default Training;
