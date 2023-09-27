import { ReactElement } from "react";


export type ContactDataType = {
    icon: () => JSX.Element,
    text:string
}



export type InputProps = {
    className: string;
    type: string;
    placeholder: string;
    name: string;
    onChange: (
      // eslint-disable-next-line no-unused-vars
      e: React.ChangeEvent<HTMLInputElement>
    ) => void;
    icon?: ReactElement<any, any>;
    label?: string;
    inputContainerStyle?: string;
  };
  
  export type TextAreaProps = {
    className: string;
    placeholder: string;
    name: string;
    onChange: (
      // eslint-disable-next-line no-unused-vars
      e: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    label?: string;
    inputContainerStyle?: string;
  };


  export type ContactInfo = {
    name: string;
    email: string;
    msj: string;
  };
  