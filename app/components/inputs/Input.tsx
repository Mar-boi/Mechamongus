'use client'

import { type } from "os";
import { UseFormRegister , FieldValue , FieldErrors} from "react-hook-form";

interface InputProps{
    id: string;
    label : string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValue>;
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type,
    disabled,
    required,
    register,
    errors,

}) => {
    return( <div className="w-full relative">
        <input 
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, {required})}
        placeholder=""
        type={type}
        className="
        peer
        w-full
        p-4
        pt-6
        outline-none
        by-white
        font-light
        border-2
        rounded-md
        transition
        dissabled: opacity-70
        dissabled: cursor-not-allowed
        ${errors[id] ? 'border-rose-400' : 'border-slate-300'}
        ${errors[id] ? 'focus:border-rose-400' : 'focus:border-slate-300'}
        
        "/>
        <label htmlFor={id}
        className="absolute
        cursor-text
        text-md
        duration-150
        tranform
        -translate-y-3
        top-5
        origin-[0]
        left-4
        peer-placehoder-shown:scale-100
        peer-placehoder-shown:translate-y-0
        peer-focus:scle-75
        peer-focus:translate-y-4
        "
        >{label}</label>
        

    </div> );
}
export default Input;