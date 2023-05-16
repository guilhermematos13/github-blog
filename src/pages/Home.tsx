import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Post } from '../components/Post';
import { Profile } from '../components/Profile';

export function Home() {
  return (
    <div className="max-w-[1440px] mx-auto bg-base-background">
      <Header />
      <div className="px-[288px] flex flex-col">
        <Profile />
        <div className="flex justify-between mt-[4.5rem] mb-3">
          <strong className="text-lg text-base-text">Publicações</strong>
          <span className="text-sm text-base-span">6 publicações</span>
        </div>
        <Input />
        <div className="grid grid-cols-2 gap-8 pb-[234 px]">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}
