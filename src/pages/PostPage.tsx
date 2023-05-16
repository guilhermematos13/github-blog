import { Header } from '../components/Header';
import { PostContent } from '../components/PostContent';
import { PostInfo } from '../components/PostInfo';

export function PostPage() {
  return (
    <div className="max-w-[1440px] mx-auto bg-base-background">
      <Header />
      <div className="px-[288px]">
        <PostInfo />
        <PostContent />
      </div>
    </div>
  );
}
