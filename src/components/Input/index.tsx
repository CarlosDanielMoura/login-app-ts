import { Container, InputCustom, ErrorMessage } from "./styles";
import { IInputProps } from "./type";
import { Controller } from "react-hook-form";
const Input = ({ errorMessage, name, control, ...rest }: IInputProps) => {
  return (
    <>
      <Container>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputCustom
              {...rest}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
            />
          )}
        />
      </Container>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </>
  );
};

export default Input;
