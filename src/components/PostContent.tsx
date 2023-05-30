import { PostInterface } from '../interfaces/PostInterface';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export function PostContent(data: { data: PostInterface | undefined }) {
  return (
    <div className="px-8 py-10">
      <div className="text-base-text">
        {data.data?.body && <ReactMarkdown children={data.data?.body} />}
      </div>
    </div>
  );
}
