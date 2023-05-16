import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from '../assets/avatar.png';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function Profile() {
  return (
    <div className="flex gap-8 bg-base-profile p-8 rounded-[10px] -mt-20">
      <img src={avatar} />
      <div className="flex flex-col w-full">
        <div className="flex w-full justify-between">
          <strong className="text-2xl text-base-title">
            Cameron Williamson
          </strong>
          <a
            href="#"
            className="flex h-4 justify-center gap-2 text-xs text-blue font-bold hover:border-b-2 hover:border-blue"
          >
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p className="text-base-text mt-2 mb-6">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="flex gap-6">
          <a href="#" className="flex items-center gap-2 text-base-text">
            <FontAwesomeIcon icon={faGithub} className="text-base-label" />
            cameronwll
          </a>
          <a href="#" className="flex items-center gap-2 text-base-text">
            <FontAwesomeIcon icon={faBuilding} className="text-base-label" />
            Rockeseat
          </a>
          <a href="#" className="flex items-center gap-2 text-base-text">
            <FontAwesomeIcon icon={faUserGroup} className="text-base-label" />
            32 seguidores
          </a>
        </div>
      </div>
    </div>
  );
}
