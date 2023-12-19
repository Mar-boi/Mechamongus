import Container from "../components/Container";
import FormWarp from "../components/FormWrap";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Container>
      <FormWarp>
        <LoginForm />
      </FormWarp>
    </Container>
  );
};

export default Login;
