import { ButtonHTMLAttributes } from 'react';

type PostProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Post({ ...props }: PostProps) {
  return (
    <button
      {...props}
      className="bg-base-post p-8 rounded-[10px] text-left border-2 border-transparent hover:border-2 hover:border-base-label hover:ease-linear duration-150"
    >
      <div className="flex mb-5">
        <strong className="text-base-title text-xl leading-8 max-w-[283px]">
          JavaScript data types and data structures
        </strong>
        <span className="text-base-span text-sm whitespace-nowrap">
          Há 1 dia
        </span>
      </div>
      <p className="text-base-text line-clamp-4">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </p>
    </button>
  );
}
