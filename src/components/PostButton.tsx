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
      className="bg-base-post p-8 rounded-[10px] text-left border-2 border-transparent hover:border-2 hover:border-base-label hover:ease-linear duration-150"
    >
      <div className="flex justify-between gap-4 mb-5">
        <strong className="text-base-title text-xl leading-8 min-w-[263px] max-w-[283px]">
          {title}
        </strong>
        <span className="text-base-span text-sm">{created_at}</span>
      </div>
      <div className="text-base-text line-clamp-4">{body}</div>
    </button>
  );
}
