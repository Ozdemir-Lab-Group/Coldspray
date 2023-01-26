import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  Tab,
  Table,
  TableContainer,
  TabList,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function Material() {
  return (
    <Card variant="filled" size="lg" width="3xl" align="center">
      <CardHeader>
        <Heading size="lg">Materials </Heading>
      </CardHeader>

      <CardBody>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Substrate</Tab>
            <Tab>Powder</Tab>
            <Tab>Spray Parameters</Tab>
            <Tab>Properties</Tab>
          </TabList>
        </Tabs>
        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr>
                <Th>Chosen Materials</Th>
                <Th></Th>
                <Th>Reported Properties</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Substrate</Td>
                <Td>AI-6061</Td>
                <Td>Porosity</Td>
                <Td>0.5%</Td>
              </Tr>
              <Tr>
                <Td>Powder</Td>
                <Td>AI-6061(Solvus)</Td>
                <Td>Tensil</Td>
                <Td>100 MPa</Td>
              </Tr>

              <Tr>
                <Td></Td>
                <Td></Td>
                <Td>Percent Elongation</Td>
                <Td>0.5%</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td>Adhesion Strength</Td>
                <Td>8 ksi</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td>Fatigue Strength</Td>
                <Td>N/A</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td>Wear Coeficient</Td>
                <Td>N/A</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td>Fatigue Strength</Td>
                <Td>N/A</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
}
