export interface PostInterface {
  body: string;
  comments: number;
  created_at: string;
  title: string;
  html_url: string;

  user: {
    login: string;
  };
}
