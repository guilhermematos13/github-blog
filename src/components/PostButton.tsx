import { ButtonHTMLAttributes, ReactNode } from 'react';

interface PostProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  body: ReactNode;
  created_at: string;
  title: string;
  number: number;
}

export function PostButton({ body, created_at, title, ...props }: PostProps) {
  return (
    <button
      {...props}
      className="bg-base-post rounded-[10px] text-left border-2 border-transparent hover:border-2 hover:border-base-label hover:ease-linear duration-150 xs:p-4 md:p-8"
    >
      <div className="flex justify-between gap-4 mb-5">
        <strong className="text-base-title leading-8 max-w-[283px] xs:text-base md:text-xl">
          {title}
        </strong>
        <span className="text-base-span xs:text-xs md:text-sm">
          {created_at}
        </span>
      </div>
      <div className="text-base-text xs:text-sm md:text-base xs:line-clamp-3 md:line-clamp-4">
        {body}
      </div>
    </button>
  );
}
