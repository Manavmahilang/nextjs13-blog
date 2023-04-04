'use client'
import { signIn } from "next-auth/react";
import { useRef, ChangeEvent } from "react";
import styled from "styled-components";

interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const LoginPage = ({ searchParams }: IProps): JSX.Element => {
  const userName = useRef<string>("");
  const pass = useRef<string>("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <Container>
      {searchParams?.message && (
        <ErrorMessage>{searchParams?.message}</ErrorMessage>
      )}
      <LoginForm>
        <LoginLabel>User Name</LoginLabel>
        <LoginInput
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            (userName.current = e.target.value)
          }
        />
        <LoginLabel>Password</LoginLabel>
        <LoginInput
          type="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            (pass.current = e.target.value)
          }
        />
        <SubmitButton onClick={onSubmit}>Login</SubmitButton>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #50c4c4, #4d9de0);
  gap: 1rem;
`;

const ErrorMessage = styled.p`
  padding: 0.5rem;
  color: red;
  background-color: #f5c2c2;
  border-radius: 0.5rem;
`;

const LoginForm = styled.form`
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LoginLabel = styled.label`
  font-weight: bold;
`;

const LoginInput = styled.input`
  padding: 0.5rem;
  border: 1px solid gray;
  border-radius: 0.25rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background-color: #50c4c4;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export default LoginPage;
