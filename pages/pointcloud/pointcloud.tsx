import { useState } from "react";
import ThreeReactPoint from "../../components/ThreeReactPoint";
import ColdSprayForm from "../../components/Forms";
import { AttachmentIcon } from "@chakra-ui/icons";
import { Box, HStack, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { Text, Grid, GridItem } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { useDropzone } from "react-dropzone";
import { Divider } from "@chakra-ui/layout";

function App() {
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
        <Center>
          <Box {...getRootProps()} rounded="lg" boxShadow="lg" borderWidth={1} width={"30%"}>
            <Center>
              <VStack>
                <Text fontWeight="bold" size="lg">
                  Submit STL
                </Text>
                <Divider width={"75%"} />
                <HStack>
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
                </HStack>
                <input {...getInputProps} />
              </VStack>
            </Center>
          </Box>
        </Center>
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

export default App;
