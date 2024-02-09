
import {IconType} from "react-icons";

interface ActionBtnProps{
    icon: IconType;
    onClick : (e: React.MouseEvent<HTMLButtonElement>) => void;
    disavled?: boolean
}
const ActionBtn:React.FC<ActionBtnProps> = ({icon:icon, onClick, disabled}) => {
    return(<button 
        onClick={onClick}
        disabled={disabled}
         className="flex items-center justify-center rounded cursor-pointer w-[40px] h-[30px] text-slate-700 border border-slate-400 ${disabled && 'opacity-50 corsor-not-allowed'}"
         )
        

export default ActionBtn;