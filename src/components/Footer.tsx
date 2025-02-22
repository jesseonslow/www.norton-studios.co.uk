import { Container } from "../components/Container"

export const Footer = () => {
  return (
    <footer className="py-20">
      <Container>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/case-studies"
        >
          Case Studios
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about-us"
        >
          About Us
        </a>
        <p>&copy; {new Date().getFullYear()} Norton Studios</p>
      </Container>
    </footer>
  );
};
