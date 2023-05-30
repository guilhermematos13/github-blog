import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function PostInfo() {
  return (
    <div className="p-8 bg-base-profile w-max-[864] -mt-20 rounded-[10px]">
      <div className="flex justify-between mb-5">
        <a
          href="#"
          className="flex gap-2 text-blue items-center text-xs font-bold border-b border-transparent hover:border-b hover:border-blue "
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </a>
        <a
          href="#"
          className="flex gap-2 text-blue items-center text-xs font-bold border-b border-transparent hover:border-b hover:border-blue"
        >
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
      <strong className="text-base-title text-2xl">
        JavaScript data types and data structures
      </strong>
      <div className="flex gap-8 mt-2">
        <a href="#" className="flex items-center gap-2 text-base-span">
          <FontAwesomeIcon icon={faGithub} />
          cameronwll
        </a>
        <span className="flex items-center gap-2 text-base-span">
          <FontAwesomeIcon icon={faCalendarDay} />
          Há 1 dia
        </span>
        <span className="flex items-center gap-2 text-base-span">
          <FontAwesomeIcon icon={faComment} />5 comentários
        </span>
      </div>
    </div>
  );
}
