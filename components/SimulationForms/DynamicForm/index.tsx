import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  NumberInput,
  NumberInputField,
  NumberInputFieldProps,
  NumberInputProps,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
import { Form, Formik, useFormik } from "formik";
import { Children, useState } from "react";
import logo from "../../../asset/substrate.jpg";

type MeasuredInputProps = {
  AddOnLabel: string;
  label: string;
} & NumberInputFieldProps;

const MeasuredInput: React.FC<MeasuredInputProps> = ({
  name,
  label,
  onChange,
  value,
  AddOnLabel,
  w = "100%",
}) => {
  return (
    <FormControl onChange={onChange}>
      <FormLabel htmlFor={name}> {label}</FormLabel>
      <NumberInput id={name} name={name} min={0} size="sm" w={w}>
        <InputGroup size={"sm"}>
          <NumberInputField value={value} />
          {AddOnLabel && <InputRightAddon> {AddOnLabel}</InputRightAddon>}
        </InputGroup>
      </NumberInput>
    </FormControl>
  );
};

const DynamicForm: React.FC<{}> = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { handleChange, values, handleSubmit, isSubmitting, setFieldValue, handleReset } =
    useFormik({
      initialValues: {
        title: "",
        material: "",
        pressure: "",
        temperature: 0,
        gasComposition: 50,
        nitrogenUnitCost: 0,
        heliumUnitCost: 0,
        powderInitTemp: 0,
        powderInjectRate: 0,
        powderUnitCost: 0,
        particleSpherecityFactor: 0,
        particleSizeDistributionTen: 0,
        particleSizeDistributionFifty: 0,
        particleSizeDistributionNinety: 0,
        nozzle: "VRC-NZZL0009",
        inletLength: 0,
        standoffDistance: 0,
        substrate: false,
      },
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <Box>
      <Center>
        <Image src={logo.src} w={"50%"} h={"50%"} alt="Logo" align="center"></Image>
      </Center>
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          console.log("Submitting", values);
          return;
        }}
      >
        {
          <>
            <Form onSubmit={handleSubmit} onReset={handleReset}>
              <Flex minWidth="max-content" alignItems="center" gap="5">
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="title">Title:</FormLabel>
                    <Input
                      id="title"
                      name="title"
                      size="sm"
                      onChange={handleChange}
                      value={values.title}
                    ></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="material"> Material: </FormLabel>
                    <Select
                      id="material"
                      name="material"
                      placeholder="Select option"
                      size="sm"
                      onChange={handleChange}
                      value={values.material}
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </FormControl>
                </Box>
                <Spacer />
                <Box>
                  <MeasuredInput
                    name="pressure"
                    label="Pressure"
                    onChange={handleChange}
                    value={values.pressure}
                    AddOnLabel={"bar"}
                    w={"50%"}
                  />
                  <MeasuredInput
                    name="temperature"
                    label="Temperature"
                    onChange={handleChange}
                    value={values.temperature}
                    AddOnLabel={"˚C"}
                    w={"50%"}
                  />
                  <FormControl padding={3}>
                    <FormLabel htmlFor="gasComposition"></FormLabel>
                    <Slider
                      min={0}
                      max={100}
                      name="gasComposition"
                      id="gasComposition"
                      colorScheme={"teal"}
                      flex="1"
                      focusThumbOnChange={false}
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                      value={values.gasComposition}
                      onChange={(val) => setFieldValue("gasComposition", val)}
                    >
                      <SliderMark value={0} mt="4" ml="-2.5" fontSize="sm">
                        N<sub>2</sub>
                      </SliderMark>
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderMark value={100} mt="4" ml="-2.5" fontSize="sm">
                        He
                      </SliderMark>
                      <SliderThumb fontSize="sm" boxSize="16px" />
                      <Tooltip
                        hasArrow
                        bg="teal.500"
                        color="white"
                        placement="top"
                        isOpen={showTooltip}
                        label={`${values.gasComposition}%`}
                      >
                        {" "}
                      </Tooltip>
                    </Slider>
                  </FormControl>
                  <MeasuredInput
                    name="nitrogenUnitCost"
                    label="Nitrogen Unit Cost"
                    onChange={handleChange}
                    value={values.nitrogenUnitCost}
                    AddOnLabel={"$/kg"}
                    w={"50%"}
                  />
                  <MeasuredInput
                    name="heliumUnitCost"
                    label="Helium Unit Cost"
                    onChange={handleChange}
                    value={values.heliumUnitCost}
                    AddOnLabel={"$/kg"}
                    w={"50%"}
                  />
                </Box>
                <Spacer />
                <Box>
                  <MeasuredInput
                    name="powderInitTemp"
                    label="Powder Initial Temperature"
                    onChange={handleChange}
                    value={values.powderInitTemp}
                    AddOnLabel={"˚C"}
                    w={"75%"}
                  />
                  <MeasuredInput
                    name="powderInjectRate"
                    label="Powder Injection Rate"
                    onChange={handleChange}
                    value={values.powderInjectRate}
                    AddOnLabel={"g/min"}
                    w={"75%"}
                  />
                  <MeasuredInput
                    name="powderUnitCost"
                    label="Powder Unit Cost"
                    onChange={handleChange}
                    value={values.powderUnitCost}
                    AddOnLabel={"$/kg"}
                    w={"75%"}
                  />
                </Box>
                <Spacer />
                <Box>
                  <MeasuredInput
                    name="particleSpherecityFactor"
                    label="Particle Spherecity Factor:"
                    onChange={handleChange}
                    value={values.particleSpherecityFactor}
                    AddOnLabel={""}
                    w={"50%"}
                  />
                  <FormControl>
                    <FormLabel>Powder Injection Rate (g/min):</FormLabel>
                    <NumberInput
                      id="particleSizeDistributionTen"
                      name="particleSizeDistributionTen"
                      min={0}
                      size="sm"
                    >
                      <InputGroup size="sm" w={"40%"}>
                        <InputLeftAddon children="10%" />
                        <NumberInputField
                          value={values.particleSizeDistributionTen}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </NumberInput>
                    <NumberInput
                      id="particleSizeDistributionFifty"
                      name="particleSizeDistributionFifty"
                      min={0}
                      size="sm"
                    >
                      <InputGroup size="sm" w={"40%"}>
                        <InputLeftAddon children="50%" />
                        <NumberInputField
                          value={values.particleSizeDistributionFifty}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </NumberInput>
                    <NumberInput
                      id="particleSizeDistributionNinety"
                      name="particleSizeDistributionNinety"
                      min={0}
                      size="sm"
                    >
                      <InputGroup size="sm" w={"40%"}>
                        <InputLeftAddon children="90%" />
                        <NumberInputField
                          value={values.particleSizeDistributionNinety}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </NumberInput>
                  </FormControl>
                </Box>
                <Spacer />
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="nozzle"> Nozzle:</FormLabel>
                    <Select id="nozzle" name="nozzle" placeholder="Select option" size="sm">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </FormControl>
                  <MeasuredInput
                    name="inletLen"
                    label="Inlet Length"
                    onChange={handleChange}
                    value={values.inletLength}
                    AddOnLabel={"mm"}
                  />
                  <MeasuredInput
                    name="standoffDist"
                    label="Standoff Distance"
                    onChange={handleChange}
                    value={values.standoffDistance}
                    AddOnLabel={"mm"}
                  />
                  <FormControl paddingTop={5}>
                    <Checkbox
                      size="md"
                      id="substrate"
                      name="substrate"
                      value={values.substrate}
                      onChange={(val) => setFieldValue("substrate", val.target.checked)}
                    >
                      Substrate
                    </Checkbox>
                  </FormControl>
                </Box>
              </Flex>
              <ButtonGroup spacing={5}>
                <Button mt={4} type="submit" isLoading={isSubmitting} color="black">
                  Submit
                </Button>
                <Button mt={4} type="reset" color="black">
                  Reset
                </Button>
              </ButtonGroup>
            </Form>
          </>
        }
      </Formik>
    </Box>
  );
};

export default DynamicForm;
