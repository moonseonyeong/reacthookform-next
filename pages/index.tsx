import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';

const Button = styled.button`
  background-image: linear-gradient(to right, #b993d6 0%, #8ca6db 51%, #b993d6 100%);
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  border: none;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Span = styled.span`
  color: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Container>
      <Button
        onClick={() => {
          router.push('signup');
        }}
      >
        <Span>회원가입 하러가기 ⇒ </Span>
      </Button>
    </Container>
  );
};

export default Home;
