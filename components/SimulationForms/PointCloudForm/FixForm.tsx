import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { useState } from "react";
import { ColdSprayFormProps } from "../../../types";

interface FixFormProps {
  displayName?: string;
  name: string;
  onChange?: Function;
  placeholder?: string;
  required?: boolean;
  value: string | number;
}

const FixForm: React.FC<FixFormProps> = ({
  displayName = "",
  placeholder = "",
  required = false,
  ...props
}) => {
  return (
    <Input
      id={props.name}
      onChange={(e) => props.onChange(e)}
      placeholder={placeholder}
      type="number"
      value={props.value}
    />
  );
};

export default FixForm;
