import { Header } from './Components/Header';
import { Profile } from './Components/Profile';
import './styles/input.css';

export function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-base-background w-screen h-screen">
      <Header />
      <div className="px-[288px] flex flex-col">
        <Profile />
      </div>
    </div>
  );
}
