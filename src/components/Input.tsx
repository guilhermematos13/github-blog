import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
  return (
    <input
      type="text"
      className="px-4 py-3 mb-12 rounded-md border-base-border border outline-none bg-base-input text-base-text placeholder:text-base-label focus:border focus:border-blue"
      {...props}
      placeholder="Buscar conteúdo"
    ></input>
  );
}
