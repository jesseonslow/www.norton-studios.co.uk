import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {Container} from "../components/Container";

export const Header = () => {
  const linkClasses = "flex uppercase hover:underline hover:underline-offset-4 p-2 md:px-4 md:py-3 bg-teal-300 font-bold hover:bg-teal-200"
  const mobileLinkClasses = "px-2 py-4 hover:underline hover:underline-offset-4"

  return (
      <header className="py-4 border-b-2 border-b-teal-300">
        <Container className="flex justify-between align-middle items-center relative">
          <div>
            {/* <Image
              className="dark:invert"
              src="/logo.png"
              alt="Norton Studios Logo"
              width={180}
              height={38}
              priority
            /> */}
            <Image
              className="dark:invert"
              src="/logo2.png"
              alt="Norton Studios Logo"
              width={180}
              height={84}
              priority
            />
            {/* <Image
              className="dark:invert"
              src="/logo3.svg"
              alt="Norton Studios Logo"
              width={180}
              height={84}
              priority
            /> */}
          </div>

          <details className="md:hidden">
              <summary className="list-none text-xl">
                <svg width="38" height="38" aria-hidden="true" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"></path>
                </svg>
                <span className="sr-only">Menu</span>
              </summary>
              <nav className="absolute flex flex-col z-10 px-8 py-4 left-0 right-0 top-[86px] w-auto bg-slate-200">
                <a
                  href="/case-studies"
                  className={mobileLinkClasses}
                >
                  Case Studios
                </a>
                <a
                  href="/about-us"
                  className={mobileLinkClasses}
                >
                  About Us
                </a>
              </nav>
          </details>

          <nav className="hidden md:flex max-md:mt-6 max-md:py-6 max-md:border-t-2 max-md:border-t-teal-300 items-center">
            <a
              className={twMerge(linkClasses, 'mr-2 md:mr-6')}
              href="/case-studies"
            >
            Case Studios
            </a>
            <a
              className={linkClasses}
              href="/about-us"
            >
              About Us
            </a>
          </nav>
        </Container>
      </header>
  );
};
