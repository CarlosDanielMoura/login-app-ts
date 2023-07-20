import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 30px;
`;
export const InputCustom = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 12px;
  background: transparent;
  padding: 10px;

  margin-top: 15px;
  border: 1px solid #ff6f9c;

  &:focus {
    outline: none;
  }
  &::placeholder {
    padding: 10px;
    margin-left: 10px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 10px;
`;
