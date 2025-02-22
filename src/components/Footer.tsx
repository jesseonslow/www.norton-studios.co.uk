import { Container } from "../components/Container"

export const Footer = () => {
  return (
    <footer className="py-6 border-t-2 border-t-teal-500">
      <Container>
        <p className="text-center md:text-right">&copy; {new Date().getFullYear()} Norton Studios</p>
      </Container>
    </footer>
  );
};
