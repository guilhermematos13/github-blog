import Logo from '../assets/Logo.svg';

export function Header() {
  return (
    <div className="flex justify-center h-[296px] bg-no-repeat bg-cover bg-background-image">
      <img src={Logo} className="mt-16 h-[98px] w-[148px]" />
    </div>
  );
}
