export interface GithubProfileInterface {
  login: string;
  id: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string | null;
  blog: string;
  bio: string;
  followers: number;
  following: number;
}
