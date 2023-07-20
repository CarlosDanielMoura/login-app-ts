import { ButtonCustom, Container } from "./style";
import { IButton } from "./type";

const Button = ({ label, isValid }: IButton) => {
  return (
    <Container>
      <ButtonCustom disabled={isValid === true ? false : true}>
        {label}
      </ButtonCustom>
    </Container>
  );
};

export default Button;
