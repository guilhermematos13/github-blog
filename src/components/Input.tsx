import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
  return (
    <input
      type="text"
      className="w-full lg:max-w-[864px] px-4 py-3 mb-12 rounded-md border-base-border border outline-none bg-base-input text-base-text placeholder:text-base-label focus:border focus:border-blue xs:text-sm md:text-base"
      {...props}
      placeholder="Buscar conteúdo"
    ></input>
  );
}
