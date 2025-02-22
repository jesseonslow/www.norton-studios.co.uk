import Image from "next/image";
import {Container} from "../components/Container"

export const Header = () => {
  return (
      <header className="pt-4">
        <Container className="flex justify-between">
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
          <nav className="flex items-center">
            <a
              className="gap-2 hover:underline hover:underline-offset-4"
              href="/case-studies"
            >
            Case Studios
            </a>
            <a
              className="gap-2 hover:underline hover:underline-offset-4"
              href="/about-us"
            >
              About Us
            </a>
          </nav>
        </Container>
      </header>
  );
};
