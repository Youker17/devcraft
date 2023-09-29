import { InputProps } from '@/types';

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  className,
  icon,
  label,
  onChange,
  inputContainerStyle=""
}) => {
  return (
    <div className={inputContainerStyle} >
      <label className="text-[0.9rem] md:text-[20px]  font-semibold leading-[144.5%] tracking-[0.3px] text-white   ">{label}</label>
      <div className=" relative text-gray-400 focus-within:text-gray-600 w-full pt-1 md:pt-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-full">
          {icon}
        </div>
        <input
          type={type}
          autoComplete="off"
          placeholder={placeholder}
          className={className}
          name={name}
          onChange={onChange}
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default Input;