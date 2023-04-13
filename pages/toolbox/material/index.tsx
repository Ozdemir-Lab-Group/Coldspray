import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Select,
  Spacer,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const TestTable = ({ combination }) => {
  return (
    <Card align="left" width={"2xl"}>
      <CardHeader>
        <Heading size="md">Test</Heading>
      </CardHeader>
      <TableContainer>
        <Table size="sm" variant={"unstyled"}>
          <Tbody>
            <Tr>
              <Td>
                <b>Porosity (%)</b>
              </Td>
              <Td>{combination["porosity"]}</Td>
              <Td>
                <b>Tensile strength (MPa)</b>
              </Td>
              <Td>{combination["tensileStrength"]}</Td>
              <Td>
                <b>Wear Test Method</b>
              </Td>
              <Td>{combination["wearTestMethod"]}</Td>
            </Tr>

            <Tr>
              <Td>
                <b>Bond Strength (MPa)</b>
              </Td>
              <Td>{combination["bondStrength"]}</Td>
              <Td>
                <b>Tensile Test Method</b>
              </Td>
              <Td>{combination["tensileTestMethod"]}</Td>
              <Td>
                <b>Wear Rate</b>
              </Td>
              <Td>{combination["wearRate"]}</Td>
            </Tr>
            <Tr>
              <Td>
                <b>Bond Failure Type</b>
              </Td>
              <Td>{combination["bondFailureType"]}</Td>
              <Td>
                <b>Shear Strength</b>
              </Td>
              <Td>{combination["shearStrength"]}</Td>
              <Td>
                <b>Corrosion characteristics</b>
              </Td>
              <Td>{combination["corossionCharacteristics"]}</Td>
            </Tr>
            <Tr>
              <Td>
                <b>Bond Test Method</b>
              </Td>
              <Td>{combination["bondTestMethod"]}</Td>
              <Td>
                <b>Shear Test Method</b>
              </Td>
              <Td>{combination["shearTestMethod"]}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

const GastTable = ({ combination }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">ColdSpray Machine</Heading>
      </CardHeader>
      <TableContainer>
        <Table size="sm" variant={"unstyled"}>
          <Tbody>
            <Tr>
              <Td></Td>
              <Td>
                <b>CS Machine</b>
              </Td>
              <Td>{combination["csMachine"]}</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>
                <b>Gas Type</b>
              </Td>
              <Td>{combination["gasType"]}</Td>
              <Td>
                <b>Powder Feed Rate (g/min)</b>
              </Td>
              <Td>{combination["powderFeedRate"]}</Td>
            </Tr>
            <Tr>
              <Td>
                <b>Gas-pressure (MPa)</b>
              </Td>
              <Td>{combination["gasPressure"]}</Td>
              <Td>
                <b>Powder Feeder RPM</b>
              </Td>
              <Td>{combination["powderFeeder"]}</Td>
            </Tr>
            <Tr>
              <Td>
                <b>Gas-temperature (C)</b>
              </Td>
              <Td>{combination["gasTemperature"]}</Td>
              <Td>
                <b>Pre-Injection Powder Heating Temp (C)</b>
              </Td>
              <Td>{combination["preInjectHeatingTemp"]}</Td>
            </Tr>
            <Tr>
              <Td>
                <b>Cold Gas Flow (SLM)</b>
              </Td>
              <Td>{combination["coldGasFlow"]}</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

const NozzleTable = ({ combination }) => {
  return (
    <Card align="left" variant="outline">
      <CardHeader>
        <Heading size="md">Nozzle</Heading>
      </CardHeader>
      <TableContainer>
        <Table size="sm" variant={"unstyled"}>
          <Tbody>
            <Tr>
              <Td>
                <b>Nozzle no.</b>
              </Td>
              <Td>{combination["nozzle"]}</Td>
              <Td>
                <b>Nozzle Angle (deg.)</b>
              </Td>
              <Td>{combination["nozzleAngle"]}</Td>
            </Tr>
            <Tr>
              <Td>
                <b>Nozzle Traverse Speed (mm/s)</b>
              </Td>
              <Td>{combination["nozzleTraverseSpeed"]}</Td>

              <Td>
                <b>Preheat Layer(s)</b>
              </Td>
              <Td>{combination["preheatLayer"]}</Td>
            </Tr>
            <Tr>
              <Td>
                <b>Nozzle Standoff (mm)</b>
              </Td>
              <Td>{combination["nozzleStandoff"]}</Td>
              <Td>
                <b>Post-Spray Heat Treatment</b>
              </Td>
              <Td>{combination["postSprayHeatTreatment"]}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

const PowderTable = ({ combination }) => {
  return (
    <Card variant="outline">
      <CardHeader>
        <Heading size="md">Powder</Heading>
      </CardHeader>
      <TableContainer>
        <Table size="sm" variant={"unstyled"}>
          <Tbody>
            <Tr>
              <Td>
                <b>Powder Material Type</b>
              </Td>
              <Td>{combination["powderMaterialType"]}</Td>
              <Td>
                <b>Powder Size Range (um)</b>
              </Td>
              <Td>{combination["nozzleAngle"]}</Td>
            </Tr>
            <Tr>
              <Td>
                <b>Powder Material</b>
              </Td>
              <Td>{combination["powderMaterial"]}</Td>

              <Td>
                <b>Powder Size (10%, um)</b>
              </Td>
              <Td>{combination["powderSizeTen"]}</Td>
            </Tr>
            <Tr>
              <Td>
                <b>Powder Heat Treatment</b>
              </Td>
              <Td>{combination["powderHeatTreatment"]}</Td>
              <Td>
                <b>Powder Size (50%, um)</b>
              </Td>
              <Td>{combination["powderSizeFifty"]}</Td>
            </Tr>
            <Tr>
              <Td>
                <b>Powder Size (90%, um)</b>
              </Td>
              <Td>{combination["powderSizeNinety"]}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default function Material() {
  const [powders, setPowders] = useState([]);
  const [powder, setPowder] = useState("");
  const [powderCombinations, setPowderCombinations] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/substratePowder/substrates/getAll")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setPowders(data["data"]);
        console.log(data["data"]);
      });
  }, []);

  useEffect(() => {
    if (powder) {
      fetch(`http://localhost:8080/substratePowder/${powder}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          setPowderCombinations(data["data"]);
          setSelected(data["data"][0]["_id"]);
        });
    }
  }, [powder]);

  return (
    <Grid
      templateAreas={`"nav main"
                  "nav footer"`}
      gridTemplateRows={"50px 1fr"}
      gridTemplateColumns={"180px 1fr"}
      gap="1"
      color="blackAlpha.700"
    >
      <GridItem pl="2" area={"nav"} colSpan={1}>
        <Card size="sm">
          <CardHeader textAlign={"left"}>
            <Heading size="sm">Select Material </Heading>
          </CardHeader>

          <CardBody>
            <VStack>
              <HStack>
                <Text>Powder</Text>

                <Select
                  variant="flushed"
                  onChange={(event) => {
                    if (event.target.value) {
                      setPowder(event.target.value);
                    }
                  }}
                >
                  {powders &&
                    powders.map((powder) => (
                      <option onClick={() => {}} value={powder}>
                        {powder}
                      </option>
                    ))}
                </Select>
              </HStack>
              <HStack>
                <Text>Substrate</Text>

                <Stack spacing={3} direction="row">
                  <Select
                    variant="flushed"
                    onChange={(event) => {
                      if (event.target.value) {
                        setSelected(event.target.value);
                        console.log("Combinations", powderCombinations);
                      }
                    }}
                  >
                    {powderCombinations &&
                      powderCombinations.map((combination) => {
                        console.log("id", combination["_id"]);

                        return (
                          <option value={combination["_id"]}>
                            {combination["substrateMaterialType"]}
                          </option>
                        );
                      })}
                  </Select>
                </Stack>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      </GridItem>
      {selected && (
        <GridItem pl="5" area={"main"} rowSpan={3}>
          <Flex padding={2}>
            <PowderTable
              combination={powderCombinations
                .filter((combo) => {
                  return combo["_id"] == Number(selected);
                })
                .at(0)}
            />
            <Spacer padding={2} />
            <NozzleTable
              combination={powderCombinations
                .filter((combo) => {
                  return combo["_id"] == Number(selected);
                })
                .at(0)}
            />
          </Flex>
          <Center>
            <Flex padding={2}>
              <GastTable
                combination={powderCombinations
                  .filter((combo) => {
                    return combo["_id"] == Number(selected);
                  })
                  .at(0)}
              />
            </Flex>
          </Center>
          <Center>
            <Flex padding={2}>
              <TestTable
                combination={powderCombinations
                  .filter((combo) => {
                    return combo["_id"] == Number(selected);
                  })
                  .at(0)}
              />
            </Flex>
          </Center>
        </GridItem>
      )}
    </Grid>
  );
}
