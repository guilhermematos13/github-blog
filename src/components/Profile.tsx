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
    <div className="flex gap-8 bg-base-profile p-8 -mt-20">
      <img src={data.avatar_url} className="w-36 h-36 rounded-[10px]" />
      <div className="flex flex-col w-full">
        <div className="flex w-full justify-between">
          <strong className="text-2xl text-base-title">{data.name}</strong>
          <a
            href={data.html_url}
            className="flex h-4 justify-center gap-2 text-xs text-blue font-bold hover:border-b-2 hover:border-blue"
          >
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p className="text-base-text mt-2 mb-6">{data.bio}</p>
        <div className="flex gap-6">
          <a
            href={data.html_url}
            className="flex items-center gap-2 text-base-text"
          >
            <FontAwesomeIcon icon={faGithub} className="text-base-label" />
            {data.login}
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-base-text cursor-default"
          >
            <FontAwesomeIcon icon={faBuilding} className="text-base-label" />
            {data.company === null ? 'Sem Empresa' : data.company}
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-base-text cursor-default"
          >
            <FontAwesomeIcon icon={faUserGroup} className="text-base-label" />
            {data.followers} seguidores
          </a>
        </div>
      </div>
    </div>
  );
}
