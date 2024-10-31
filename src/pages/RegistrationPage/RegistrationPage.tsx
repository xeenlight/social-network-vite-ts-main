import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { Input } from "../../components/UI/Input/Input";
import { StyledRegistrationPage } from "./RegistrationPage.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRegisterUserMutation } from "../../Store/Api/authApi";

interface IRegistrationForm {
  username: string;
  userphone: string;
  useremail: string;
  userpassword: string;
  usercity: string;
}

const RegistrationFormScheme = yup.object({
  username: yup
    .string()
    .required("Обязательное поле")
    .min(1, "Введите своё Имя"),
  userphone: yup
    .string()
    .required("Обязательное поле")
    .matches(/^\d{10}$/, "Введите корректный номер телефона"),
  useremail: yup
    .string()
    .required("Обязательное поле")
    .email("Введите коректно свою почту"),
  userpassword: yup
    .string()
    .required("Обязательное поле")
    .min(6, "Пароль должен содержать не менее 6 символов"),
    usercity: yup
    .string()
    .required("Обязательное поле")
    .min(1, "Введите ваш город"),
});
export const RegistrationPage = () => {
  const [registrationUser, { data: newData }] = useRegisterUserMutation();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(RegistrationFormScheme),
    defaultValues: {
      username: "",
      userphone: "",
      useremail: "",
      userpassword: "",
      usercity: "",
    },
  });

  const onRegisterSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    registrationUser({name:data.username, email:data.useremail, phone_number:data.userphone, password:data.userpassword, user_city:data.usercity})
  };

  
  return (
    <Container>
      <StyledRegistrationPage>
        <Heading headingText="Зарегистрироваться" />
        <form onSubmit={handleSubmit(onRegisterSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Ваше Имя"
                errorText={errors.username?.message}
                isError={!!errors.username}
                {...field}
              />
            )}
          />
          <Controller
            name="userphone"
            control={control}
            render={({ field }) => (
              <Input
                type="tel"
                placeholder="Номер телефона"
                errorText={errors.userphone?.message}
                isError={!!errors.userphone}
                {...field}
              />
            )}
          />
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                placeholder="Ваша почта"
                errorText={errors.useremail?.message}
                isError={!!errors.useremail}
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Пароль"
                errorText={errors.userpassword?.message}
                isError={!!errors.userpassword}
                {...field}
              />
            )}
          />
          <Controller
            name="usercity"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Ваш город"
                errorText={errors.usercity?.message}
                isError={!!errors.usercity}
                {...field}
              />
            )}
          />
          <Button isPrimary={isValid} buttonText="Создать аккаунт" />
        </form>
      </StyledRegistrationPage>
    </Container>
  );
};
