import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PostInterface } from '../interfaces/PostInterface';

export function PostInfo(data: { data: PostInterface | undefined }) {
  return (
    <div className="p-8 bg-base-profile w-max-[864] -mt-20 rounded-[10px]">
      <div className="flex justify-between mb-5">
        <a
          href="/"
          className="flex gap-2 text-blue items-center text-xs font-bold border-b border-transparent hover:border-b hover:border-blue "
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </a>
        <a
          href={data.data?.html_url}
          className="flex gap-2 text-blue items-center text-xs font-bold border-b border-transparent hover:border-b hover:border-blue"
        >
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
      <strong className="text-base-title text-2xl">{data.data?.title}</strong>
      <div className="flex gap-8 mt-2">
        <a
          href={data.data?.html_url}
          className="flex items-center gap-2 text-base-span"
        >
          <FontAwesomeIcon icon={faGithub} />
          {data.data?.user.login}
        </a>
        <span className="flex items-center gap-2 text-base-span">
          <FontAwesomeIcon icon={faCalendarDay} />
          {data.data?.created_at &&
            formatDistanceToNow(new Date(data.data?.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
        </span>
        <span className="flex items-center gap-2 text-base-span">
          <FontAwesomeIcon icon={faComment} />
          {data.data?.comments} comentários
        </span>
      </div>
    </div>
  );
}
