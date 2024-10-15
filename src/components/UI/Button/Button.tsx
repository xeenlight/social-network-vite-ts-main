import { SButton } from "./Button.style";

type TButton = {
  buttonText: string;
  disabled?: boolean; 
  type?: 'button' | 'submit' | 'reset'; 
}

export const Button = ({ buttonText, disabled, type = 'button' }: TButton) => {
  return (
    <SButton type={type} disabled={disabled}>
      {buttonText}
    </SButton>
  )
}

