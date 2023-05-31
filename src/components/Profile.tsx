import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { GithubProfileInterface } from '../interfaces/GithubProfileInterface';

export function Profile({ data }: { data: GithubProfileInterface }) {
  return (
    <div className="flex bg-base-profile rounded-[10px] -mt-20 xs:gap-2 xs:w-full xs:p-4 md:gap-8 md:p-8 md:w-full lg:max-w-[864px]">
      <img
        src={data.avatar_url}
        className="xs:w-14 xs:h-14 xs:rounded-sm md:w-36 md:h-36 md:rounded-[10px]"
      />
      <div className="flex flex-col w-full">
        <div className="flex w-full justify-between xs:gap-1">
          <strong className="text-base-title xs:text-sm md:text-2xl">
            {data.name}
          </strong>
          <a
            href={data.html_url}
            className="flex h-4 justify-center text-xs text-blue font-bold hover:border-b-2 hover:border-blue xs:gap-1 md:gap-2"
          >
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p className="text-base-text mt-2 mb-6 xs:text-xs md:text-base">
          {data.bio}
        </p>
        <div className="flex gap-6 xs:gap-2 xs:flex-col md:flex-row">
          <a
            href={data.html_url}
            className="flex items-center gap-2 text-base-text xs:text-sm md:text-base"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-base-label xs:text-sm"
            />
            {data.login}
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-base-text cursor-default xs:text-sm md:text-base"
          >
            <FontAwesomeIcon
              icon={faBuilding}
              className="text-base-label xs:text-sm md:text-base"
            />
            {data.company === null ? 'Sem Empresa' : data.company}
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-base-text cursor-default xs:text-sm md:text-base"
          >
            <FontAwesomeIcon
              icon={faUserGroup}
              className="text-base-label xs:text-sm md:text-base"
            />
            {data.followers} seguidores
          </a>
        </div>
      </div>
    </div>
  );
}
