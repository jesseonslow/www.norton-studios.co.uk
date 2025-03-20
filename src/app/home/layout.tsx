import { Pricing } from "../../components/Pricing"

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section>
        {children}
      </section>
      <Pricing/>
    </>

  )
}


