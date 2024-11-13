import Modal from "react-modal";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IPost, useAddNewPostMutation } from "../../Store/Api/postApi";
import { SPostForm, SPostButtonContainer } from "./PostPage.style";
import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import { useUserId } from "../../hooks/useUserId";

// Стиль для модального окна
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
  },
};

// Схема валидации с помощью yup
const AddNewPostScheme = yup.object({
  mainText: yup.string().required("Введите содержание поста"),
});

// Интерфейс для свойств компонента
interface IAddPostProps {
  openModal: boolean;
  onCloseModal: () => void;
  post?: IPost;
}

// Интерфейс для данных формы
interface IAddPostSubmit {
  mainText: string;
}

export const AddNewPost = ({ openModal, onCloseModal }: IAddPostProps) => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(AddNewPostScheme),
    defaultValues: {
      mainText: "",
    },
  });


  const userId = useUserId();
  console.log(userId);
  const [fetchTrigger, { data, isSuccess, isLoading }] =
    useAddNewPostMutation();
  const addNewPostSubmit: SubmitHandler<{ mainText: string }> = (data) => {
    if (data) {
      const payload = {
        user_id: Number(userId),
        main_text: data.mainText,
      };
      fetchTrigger(payload);
      onCloseModal();
    }
    if (isSuccess) {
    onCloseModal();
  }
  }
  
  
  return (
    <Modal
      isOpen={openModal}
      style={customStyles}
      appElement={document.getElementById("root") || document.body} // Указываем главный элемент
    >
      <SPostForm onSubmit={handleSubmit(addNewPostSubmit)}>
        <h3>Ваш пост</h3>
        <Controller
          name="mainText"
          control={control}
          render={({ field }) => (
            <Input
              isError={Boolean(errors.mainText)}
              type="text"
              placeholder="Введите текст поста"
              errorText={errors.mainText?.message}
              {...field}
            />
          )}
        />

        <SPostButtonContainer>
          <Button
            disabled={isLoading}
            buttonText="Сохранить"
            isPrimary
            type="submit"
          />
          <Button
            disabled={isLoading}
            buttonText="Отменить"
            isPrimary={false}
            onClick={() => {
              onCloseModal?.(); // Закрытие модала при нажатии на кнопку
            }}
          />
        </SPostButtonContainer>
      </SPostForm>
    </Modal>
  );
};