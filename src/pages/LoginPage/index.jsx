import { useState } from "react";
import { useLogin } from "@/hooks";
import { Link } from "react-router-dom";
import {
  LoginContainer,
  LoginForm,
  Input,
  Button,
  ErrorMessage,
  Divider,
  SocialButtons,
} from "./style";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, loginWithEmail, loginWithSocial } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginWithEmail(email, password);
  };

  return (
    <LoginContainer>
      <h1>로그인</h1>
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit" disabled={loading}>
          {loading ? "..." : "로그인"}
        </Button>
      </LoginForm>

      <Divider>또는</Divider>

      <SocialButtons>
        <Button
          type="button"
          onClick={() => loginWithSocial("google")}
          className="social google"
        >
          Google로 로그인
        </Button>
        <Button
          type="button"
          onClick={() => loginWithSocial("github")}
          className="social github"
        >
          GitHub로 로그인
        </Button>
      </SocialButtons>

      <p>
        계정이 없으신가요? <Link to="/signup">회원가입</Link>
      </p>
    </LoginContainer>
  );
};

export default LoginPage;
