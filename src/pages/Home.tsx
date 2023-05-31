import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import ptBR from 'date-fns/locale/pt-BR';
import { toast } from 'react-hot-toast';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { PostButton } from '../components/PostButton';
import { Profile } from '../components/Profile';

import { GithubProfileInterface } from '../interfaces/GithubProfileInterface';
import { PostInterface } from '../interfaces/PostInterface';
import { useNavigate } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';

export function Home() {
  const navigate = useNavigate();
  const [githubData, setGithubData] = useState<GithubProfileInterface>();
  const [search, setSearch] = useState<string>();
  const [post, setPost] = useState<PostInterface[]>([]);
  const [postSearch, setPostSearch] = useState<PostInterface[]>([]);

  const debouncedSearch = useDebounce(search, 1000);

  function PostNavigation(number: number) {
    navigate(`/post/${number}`);
  }

  useEffect(() => {
    const fetchIssues = async () => {
      axios
        .get(`https://api.github.com/repos/guilhermematos13/github-blog/issues`)
        .then((response) => {
          setPost(response.data);
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

  useEffect(() => {
    const fetchSearch = async () => {
      axios
        .get(`https://api.github.com/search/issues`, {
          params: {
            q: `${debouncedSearch}repo:guilhermematos13/github-blog`,
          },
        })
        .then((response) => {
          setPostSearch(response.data.items);
        })
        .catch(() => {
          toast.error('Github possui um numero de 10 chamadas por minuto');
        });
    };

    fetchSearch();
  }, [debouncedSearch]);

  return (
    <div className="max-w-[1440px] mx-auto bg-base-background">
      <Header />
      <div className="px-[288px] flex flex-col">
        {githubData && <Profile data={githubData} />}
        <div className="flex justify-between mt-[4.5rem] mb-3">
          <strong className="text-lg text-base-text">Publicações</strong>
          <span className="text-sm text-base-span">
            {postSearch.length > 0 ? postSearch.length : post.length}{' '}
            {postSearch.length > 1 ? 'Publicações' : 'Publicação'}
          </span>
        </div>
        <Input
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <div className="grid grid-cols-2 gap-8 pb-[234px]">
          {postSearch.length > 0
            ? postSearch.map((post: PostInterface) => {
                return (
                  <PostButton
                    key={post.number}
                    body={<ReactMarkdown children={post.body} />}
                    title={post.title}
                    number={post.number}
                    created_at={formatDistanceToNow(new Date(post.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                    onClick={() => {
                      PostNavigation(post.number);
                    }}
                  />
                );
              })
            : post.map((post: PostInterface) => {
                return (
                  <PostButton
                    key={post.number}
                    body={<ReactMarkdown children={post.body} />}
                    title={post.title}
                    number={post.number}
                    created_at={formatDistanceToNow(new Date(post.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                    onClick={() => {
                      PostNavigation(post.number);
                    }}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}
