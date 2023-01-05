import { useState } from "react";
import ThreeReactPoint from "../../../components/ThreeReactPoint";
import ColdSprayForm from "../../../components/SimulationForms/PointCloudForm";
import { AttachmentIcon } from "@chakra-ui/icons";
import { Box, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { useDropzone } from "react-dropzone";
import { Divider } from "@chakra-ui/layout";

function PointCloud() {
  const [URL, setURL] = useState("");

  const handleChangeFile = (file) => {
    let fileData = new FileReader();
    console.log(typeof file);
    fileData.onloadend = (e) => {
      console.log(fileData.result);
      setURL(fileData.result as string);
    };
    fileData.readAsDataURL(file);
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    noKeyboard: true,
    noClick: true,
    accept: { "text/stl": [".stl"] },
    onDrop: (files) => {
      handleChangeFile(files[0]);
    },
  });

  return (
    <Box>
      {!URL && (
        <Box
          {...getRootProps()}
          rounded="lg"
          boxShadow="xl"
          borderWidth={1}
          width={"100%"}
          padding={2}
          paddingX={5}
        >
          <Center>
            <VStack>
              <Text fontWeight="bold" size="lg">
                Submit STL
              </Text>
              <Divider width={"75%"} />
              <Button
                onClick={() => {
                  open();
                }}
                variant="outline"
                color="black"
                leftIcon={<AttachmentIcon />}
              >
                Upload
              </Button>
            </VStack>
          </Center>
        </Box>
      )}
      {URL && (
        <VStack>
          <Box style={{ width: "100vh" }}>
            <ThreeReactPoint URL={URL}> </ThreeReactPoint>
          </Box>
          <ColdSprayForm />
        </VStack>
      )}
    </Box>
  );
}

export default PointCloud;
