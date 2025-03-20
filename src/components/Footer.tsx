import { Container } from "../components/Container";

export const Footer = () => {
  return (
    <footer className="py-1 border-t-2 border-t-slate-200">    
      <Container className="flex justify-between align-middle items-center">
        <span className="text-center md:text-left">support@sizebyte.com</span>
        <span className="text-center md:text-right">&copy; {new Date().getFullYear()} SizeByte</span>
      </Container>
    </footer>
  );
};
