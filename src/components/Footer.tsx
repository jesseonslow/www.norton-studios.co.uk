import { Container } from "../components/Container"

export const Footer = () => {
  return (
    <footer className="py-6 border-t-2 border-t-slate-200">
      <Container>
        <p className="text-center md:text-right">&copy; {new Date().getFullYear()} Norton Studios</p>
      </Container>
    </footer>
  );
};
