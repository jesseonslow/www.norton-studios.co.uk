import { Contact } from "../../components/Contact"

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section>
        {children}
      </section>
      <Contact/>
    </>

  )
}


