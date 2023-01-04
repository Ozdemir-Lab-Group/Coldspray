import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { useField } from "formik";
import _ from "lodash";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  placeHolder?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeHolder = "",
  type = "text",
  required = false,
  size = _,
  ...props
}) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} id={field.name} required placeholder={placeHolder} type={type} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputField;
