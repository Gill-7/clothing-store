import { Group, Input, FormInputLabel } from "./FormInput.styles.js";

const FormInput = ({ label, ...otherprops }) => {
  return (
    <Group>
      <Input {...otherprops} />
      {label && (
        <FormInputLabel
          shrink={otherprops.value.length}
          // className={`${
          //   otherprops.value.length ? "shrink" : ""
          // } form-input-label`}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
