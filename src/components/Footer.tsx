import Image from 'next/image';
import { Container } from "../components/Container";

export const Footer = () => {
  return (
    <footer className="py-6 border-t-2 border-t-slate-200">    
      <Container className="flex justify-between align-middle items-center">
        <Image src="/small-logo.svg" width={45} height={45} alt="Small Norton Studios Logo" />
        <p className="text-center md:text-right">&copy; {new Date().getFullYear()} Norton Studios</p>
      </Container>
    </footer>
  );
};
