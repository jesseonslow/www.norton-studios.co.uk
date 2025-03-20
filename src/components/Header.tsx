import Image from "next/image";
import Link from "next/link";
import { Container } from "../components/Container";

export const Header = () => {
  const linkClasses = "flex uppercase hover:underline hover:underline-offset-4 md:px-4 ml-2 md:ml-6 font-bold"
  const mobileLinkClasses = "px-2 py-4 hover:underline hover:underline-offset-4"

  const menuItems = [
    {label: "Home", url: "/home"},
    {label: "About", url: "/about"},
    {label: "Blog", url: "/blog"},
    {label: "Sign Up", url: "/sign-up"}
  ]

  return (
      <header className="pb-1 md:pb-2">
        <Container className="flex justify-between align-middle items-center relative">
          <Link href="/home">
            <Image
              className="dark:invert w-[122px] h-[36px] md:w-[183px] md:h-[54px] rounded-none shadow-none"
              src="/logo.png"
              alt="SizeByte Logo"
              width={245}
              height={72}
              priority
            />
          </Link>

          <details className="md:hidden">
              <summary className="list-none text-xl cursor-pointer">
                <svg width="38" height="38" aria-hidden="true" viewBox="0 0 24 24">
                  <path fill="#2B10A5" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"></path>
                </svg>
                <span className="sr-only">Menu</span>
              </summary>
              <nav className="absolute flex flex-col z-10 px-8 py-1 left-0 right-0 top-[54px] w-auto bg-slate-300">
                {menuItems.map((item) => {
                  return <Link key={item.url} href={item.url} className={mobileLinkClasses}>{item.label}</Link>
                })}
              </nav>
          </details>

          <nav className="hidden md:flex max-md:mt-6 max-md:py-6 max-md:border-t-2 max-md:border-t-slate-200 items-center">
            {menuItems.map((item) => {
              return <Link key={item.url} href={item.url} className={linkClasses}>{item.label}</Link>
            })}
          </nav>
        </Container>
      </header>
  );
};
