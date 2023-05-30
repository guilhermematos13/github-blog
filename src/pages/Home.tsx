import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Post } from '../components/Post';
import { Profile } from '../components/Profile';
import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { GithubProfileInterface } from '../interfaces/GithubProfileInterface';

export function Home() {
  const [githubData, setGithubData] = useState<GithubProfileInterface>();

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
          <span className="text-sm text-base-span">6 publicações</span>
        </div>
        <Input />
        <div className="grid grid-cols-2 gap-8 pb-[234px]">
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
