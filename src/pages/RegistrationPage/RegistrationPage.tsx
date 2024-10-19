import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { Input } from "../../components/UI/Input/Input";
import { StyledRegistrationPage } from "./RegistrationPage.style";
import { useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IRegistrationForm {
  userName: string;
  userSurname: string;
  userPhone: string;
  userEmail: string;
  userPassword: string;
}

const RegistrationFormScheme = yup.object({
  userName: yup
    .string()
    .required("Обязательное поле")
    .min(1, "Введите своё Имя"),
  userSurname: yup
    .string()
    .required("Обязательное поле")
    .min(1, "Введите свою Фамилию"),
  userPhone: yup
    .string()
    .required("Обязательное поле")
    .matches(/^\d{10}$/, "Введите корректный номер телефона"),
  userEmail: yup
    .string()
    .required("Обязательное поле")
    .email("Введите коректно свою почту")
    .test('unique', 'Пользователь с таким email уже существует', function (value) {
      const storedData = JSON.parse(localStorage.getItem("users") || "[]");
      return !storedData.find((user: { userEmail: string; }) => user.userEmail === value);
    }),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Пароль должен содержать не менее 8 символов"),
});
export const RegistrationPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(RegistrationFormScheme),
    defaultValues: {
      userName: "",
      userSurname: "",
      userPhone: "",
      userEmail: "",
      userPassword: "",
    },
  });

  const onPasswordSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    // Добавляем нового пользователя
    const storedData = JSON.parse(localStorage.getItem("users") || "[]");
    storedData.push(data);
    localStorage.setItem("users", JSON.stringify(storedData));
    navigate("/"); // Перенаправление на страницу входа после регистрации
  };
  
  

  return (
    <Container>
      <StyledRegistrationPage>
        <Heading headingText="Зарегистрироваться" />
        <form onSubmit={handleSubmit(onPasswordSubmit)} action="#">
          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Ваше Имя"
                errorText={errors.userName?.message}
                isError={!!errors.userName}
                {...field}
              />
            )}
          />
          <Controller
            name="userSurname"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Ваша Фамилия"
                errorText={errors.userSurname?.message}
                isError={!!errors.userSurname}
                {...field}
              />
            )}
          />
          <Controller
            name="userPhone"
            control={control}
            render={({ field }) => (
              <Input
                type="tel"
                placeholder="Номер телефона"
                errorText={errors.userPhone?.message}
                isError={!!errors.userPhone}
                {...field}
              />
            )}
          />
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                placeholder="Ваша почта"
                errorText={errors.userEmail?.message}
                isError={!!errors.userEmail}
                {...field}
              />
            )}
          />
          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Пароль"
                errorText={errors.userPassword?.message}
                isError={!!errors.userPassword}
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
