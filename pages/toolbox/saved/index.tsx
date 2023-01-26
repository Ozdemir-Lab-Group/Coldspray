import { Button } from "@chakra-ui/button";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

interface RegisterProps {}

const cards = [
  {
    title: "Gas Dynamic ToolBox",
    date: new Date(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Residual Stress Toolbox",
    date: new Date(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Repair Toolbox",
    date: new Date(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Training Toolbox",
    date: new Date(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Training Toolbox",
    date: new Date(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

const savedRuns: React.FC<RegisterProps> = ({}) => {
  return (
    <SimpleGrid columns={3} spacing={10} width={"150%"}>
      {cards.map((run) => (
        <Card size="sm" variant="outline">
          <CardHeader>
            <Heading size="lg">{run.title}</Heading>
            <Heading size="sm">{run.date.toDateString()}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{run.content}</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default savedRuns;
