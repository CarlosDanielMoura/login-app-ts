import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Column, Container, LoginContainer, Title, Row } from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { defaultValues, IformLogin } from "./type";

const Login = () => {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um email válido")
        .required("E-email precisa do seu @"),
      password: yup.string().min(3, "Mínimo 3 caracteres").required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IformLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  return (
    <Container>
      <LoginContainer>
        <Row>
          <Title>Login</Title>
        </Row>
        <Column>
          <Input
            placeholder="Email"
            type="text"
            name="email"
            control={control}
            errorMessage={errors.email?.message}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            control={control}
            errorMessage={errors.password?.message}
          />
          <Button label="Entrar" isValid={isValid} />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
