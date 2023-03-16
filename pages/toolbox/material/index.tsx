import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Select,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Material() {
  const [substrates, setSubstrates] = useState([]);
  const [substrate, setSubstrate] = useState("");
  const [powderCombinations, setPowderCombinations] = useState([]);
  const [powder, setPowder] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/substratePowder/substrates/getAll")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setSubstrates(data["data"]);
      });
  }, []);

  useEffect(() => {
    if (substrate) {
      fetch(`http://localhost:8080/substratePowder/${substrate}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          setPowderCombinations(data["data"]);
        });
    }
  }, [substrate]);

  return (
    <Card size="lg" width="6xl" align="center">
      <CardHeader>
        <Heading size="lg">Materials </Heading>
      </CardHeader>

      <CardBody>
        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr>
                <Th>Chosen Materials</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Substrate</Td>
                <Td>
                  <Select
                    variant="flushed"
                    onChange={(event) => {
                      if (event.target.value) {
                        setSubstrate(event.target.value);
                      }
                    }}
                  >
                    {substrates &&
                      substrates.map((substrate) => (
                        <option onClick={() => {}} value={substrate}>
                          {substrate}
                        </option>
                      ))}
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Powder</Td>
                <Td>
                  <Stack spacing={3} direction="row">
                    <Select
                      variant="flushed"
                      onChange={(event) => {
                        if (event.target.value) {
                          setPowder(event.target.value);
                        }
                      }}
                    >
                      {powderCombinations &&
                        powderCombinations.map((combination) => {
                          console.log("id", combination["_id"]);
                          return (
                            <option onClick={() => {}} value={combination["_id"]}>
                              {combination["powderType"]}
                            </option>
                          );
                        })}
                    </Select>
                  </Stack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        {powder &&
          powderCombinations.map((combination) => {
            if (combination["_id"] == powder) {
              console.log(combination);
              return (
                <TableContainer>
                  <Table size="md">
                    <Thead>
                      <Tr>
                        <Th>Reported Properties</Th>
                        <Th> </Th>
                        <Th> </Th>
                        <Th> </Th>
                        <Th> </Th>
                        <Th> </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>Subtrate Supplier</Td>
                        <Td>{combination["substrateSupplier"]}</Td>
                        <Td>Powder Supplier</Td>
                        <Td>{combination["powderSupplier"]}</Td>
                        <Td>Elongation</Td>
                        <Td>{combination["elongation"]}</Td>
                      </Tr>
                      <Tr>
                        <Td>Coldspray Machine</Td>
                        <Td>{combination["csMachine"]}</Td>
                        <Td>Powder Size (10%)</Td>
                        <Td>{combination["powderSize10"]}</Td>
                        <Td>Triple Lug Shear</Td>
                        <Td>{combination["tripleLugShear"]}</Td>
                      </Tr>

                      <Tr>
                        <Td>Nozzle</Td>
                        <Td>{combination["nozzle"]}</Td>
                        <Td>Powder Size (50%)</Td>
                        <Td>{combination["powderSize50"]}</Td>
                        <Td>Bond Bar Test</Td>
                        <Td>{combination["bondBarTest"]}</Td>
                      </Tr>
                      <Tr>
                        <Td>Gas Type</Td>
                        <Td>{combination["gasType"]}</Td>
                        <Td>Powder Size (90%)</Td>
                        <Td>{combination["powderSize90"]}</Td>
                        <Td>Wear</Td>
                        <Td>{combination["wear"]}</Td>
                      </Tr>
                      <Tr>
                        <Td>Gas Pressure</Td>
                        <Td>{combination["gasPressure"]}</Td>
                        <Td>Bond Layer</Td>
                        <Td>{combination["bondLayer"]}</Td>
                        <Td>Thermal Conductivity</Td>
                        <Td>{combination["thermalConductivity"]}</Td>
                      </Tr>
                      <Tr>
                        <Td>Gas Temperature</Td>
                        <Td>{combination["gasTemperature"]}</Td>
                        <Td>Powder Spherecity</Td>
                        <Td>{combination["powderSphericity"]}</Td>
                        <Td>Electrical Conductivity</Td>
                        <Td>{combination["electralConductivity"]}</Td>
                      </Tr>
                      <Tr>
                        <Td>Heat Treated</Td>
                        <Td>{combination["heatTreated"]}</Td>
                        <Td>Tensile Strength</Td>
                        <Td>{combination["tensileStrength"]}</Td>
                        <Td>Corrosion Characteristic</Td>
                        <Td>{combination["corrosionCharacteristic"]}</Td>
                      </Tr>
                      <Tr>
                        <Td>Porosity</Td>
                        <Td>{combination["porosity"]}</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              );
            }
          })}
      </CardBody>
    </Card>
  );
}
