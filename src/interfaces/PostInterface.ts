export interface PostInterface {
  body: string;
  comments: number;
  created_at: string;
  title: string;
  html_url: string;
  number: number;

  user: {
    login: string;
  };
}
