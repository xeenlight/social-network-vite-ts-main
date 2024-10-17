import { StyleInut } from "./Input.style"

export const Input = ({type, placeholder, onChange,maxLength, onKeyUp, ...props}: React.InputHTMLAttributes<HTMLInputElement>) =>{
    return <StyleInut type={type} placeholder={placeholder} onChange={onChange} {...props}/>
}