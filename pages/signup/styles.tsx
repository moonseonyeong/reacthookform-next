import styled from '@emotion/styled';

const TitleColor = '#00473e';
const TextColor = '#475d5b';
const Flex = `display: flex;
  justify-content: center;
  align-items: center;`;

export const Container = styled.div`
  ${Flex}
  min-height: 100vh;
  background-color: #f2f7f5;
`;

export const Form = styled.form`
  ${Flex}
  flex-direction: column;
  gap: 20px;
  background-color: #acb7b392;
  padding: 40px;
  border-radius: 10px;
`;

export const Text = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  color: ${TextColor};
  font-weight: 500;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 24px;
  color: ${TitleColor};
`;

export const Input = styled.input`
  ${Flex}
  height: 30px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.color || '#faae2b'};
  color: ${TextColor};
  width: ${(props) => props.width};
  cursor: ${(props: any) => props.cursor};
`;
export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ErrorText = styled.div`
  align-self: end;
  font-size: 14px;
  color: #ff0000;
`;
