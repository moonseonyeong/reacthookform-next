import { Container, Text, Input, Line, Title, Form, ErrorText } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// 아이디 : 4자 이상 12자 미만
// 비밀번호 : 숫자+영문 8자 이상 20자 미만

export type SignUpFormType = {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
};

const SingUpschema = yup
  .object({
    id: yup
      .string()
      .required('필수 입력값입니다')
      .test('id', '4자 이상 12자 이하입니다', (val: any) => /^[a-z]+[a-z0-9]{3,11}$/g.test(val)),
    password: yup
      .string()
      .required('필수 입력값입니다')
      .test('pw', '숫자 + 영문자 8자 이상 16자 이하입니다', (val: any) => /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/.test(val)),
    passwordConfirm: yup
      .string()
      .required('필수 입력값입니다')
      .oneOf([yup.ref('password')], '패스워드가 일치하지 않습니다'),
    name: yup.string().required('필수 입력값입니다'),
  })
  .required();

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormType>({ resolver: yupResolver(SingUpschema), mode: 'onChange' });
  const onSubmit = (data: object) => console.log(data);

  const id = watch('id');
  const passwordConfirm = watch('passwordConfirm');
  const name = watch('name');

  const checkErrors = Object.keys(errors).length === 0;
  const idValidation = /^[a-z]+[a-z0-9]{3,11}$/g.test(id);
  const passwordValidation = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/.test(passwordConfirm); /* 숫자와 영문자 조합하여 8~16자 맞는지 test */

  const isDisabled = !passwordValidation || !checkErrors || name.length < 1; // 비밀번호확인에 입력되어있는지 확인, 일치하는지는 yup 라이브러리를 사용

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>회원가입 양식</Title>

        <Line>
          <Text>아이디</Text>
          <Input {...register('id')} />
        </Line>
        {errors.id?.message && <ErrorText>{errors.id?.message}</ErrorText>}
        <Line>
          <Text>비밀번호</Text>
          <Input type="password" {...register('password')} />
        </Line>
        {errors.password?.message && <ErrorText>{errors.password?.message}</ErrorText>}

        <Line>
          <Text>비밀번호 확인</Text>
          <Input type="password" {...register('passwordConfirm')} />
        </Line>
        {errors.passwordConfirm?.message && <ErrorText>{errors.passwordConfirm?.message}</ErrorText>}

        <Line>
          <Text>이름</Text>
          <Input {...register('name')} />
        </Line>
        {errors.name?.message && <ErrorText>{errors.name?.message}</ErrorText>}

        <Input type="submit" color="withe" width="100px" cursor="pointer" disabled={isDisabled} />
      </Form>
    </Container>
  );
};

export default Signup;
