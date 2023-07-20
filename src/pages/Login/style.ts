import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff6f9c;
`;

export const LoginContainer = styled.form`
  width: 100%;
  max-width: 400px;
  max-height: 400px;
  background: #fff;
  border-radius: 12px;
  padding: 10px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-family: "Courier New", Courier, monospace;
`;
