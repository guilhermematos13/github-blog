import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import ptBR from 'date-fns/locale/pt-BR';
import { toast } from 'react-hot-toast';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Post } from '../components/Post';
import { Profile } from '../components/Profile';

import { GithubProfileInterface } from '../interfaces/GithubProfileInterface';
import { PostInterface } from '../interfaces/PostInterface';

export function Home() {
  const [githubData, setGithubData] = useState<GithubProfileInterface>();
  const [post, setPost] = useState<PostInterface[]>([]);

  useEffect(() => {
    const fetchIssues = async () => {
      axios
        .get(
          'https://api.github.com/search/issues?q=%20repo:guilhermematos13/github-blog'
        )
        .then((response) => {
          setPost(response.data.items);
        });
    };

    fetchIssues();
  }, []);

  useEffect(() => {
    const fetchGithub = async () => {
      axios
        .get('https://api.github.com/users/guilhermematos13')
        .then((response: AxiosResponse<GithubProfileInterface>) => {
          response && setGithubData(response.data);
        })
        .catch(() => {
          toast.error('Algo deu errado');
        });
    };

    fetchGithub();
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto bg-base-background">
      <Header />
      <div className="px-[288px] flex flex-col">
        {githubData && <Profile data={githubData} />}
        <div className="flex justify-between mt-[4.5rem] mb-3">
          <strong className="text-lg text-base-text">Publicações</strong>
          <span className="text-sm text-base-span">
            {post.length} publicações
          </span>
        </div>
        <Input />
        <div className="grid grid-cols-2 gap-8 pb-[234px]">
          {post.map((post: PostInterface) => {
            return (
              <Post
                body={<ReactMarkdown children={post.body} />}
                title={post.title}
                created_at={formatDistanceToNow(new Date(post.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
