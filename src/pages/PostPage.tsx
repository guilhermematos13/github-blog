import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { PostContent } from '../components/PostContent';
import { PostInfo } from '../components/PostInfo';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function PostPage() {
  const [issue, setIssue] = useState();
  const params = useParams();
  const { issueNumber } = params;

  useEffect(() => {
    const fetchIssue = async () => {
      axios
        .get(
          `https://api.github.com/repos/guilhermematos13/github-blog/issues/${issueNumber}`
        )
        .then((response) => {
          setIssue(response.data);
        })
        .catch(() => {
          toast.error('Algo deu errado');
        });
    };

    fetchIssue();
  }, [issueNumber]);

  return (
    <div className="max-w-[1440px] mx-auto bg-base-background">
      <Header />
      <div className="px-[288px]">
        <PostInfo data={issue} />
        <PostContent data={issue} />
      </div>
    </div>
  );
}
