import Heading from "./Heading"

export const Pricing = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <section className="min-w-prose lg:max-w-[30%] text-center">
        <Heading level="h3" className="underline">Basic</Heading>
        <p>Suitable for most 👍</p>
        <p><strong>RM 250</strong>/month:</p>
        <ul className="mx-auto text-left">
          <li>📄 5 customisable pages</li>
          <li>🛠️ Unlimited changes</li>
          <li>💬 Unlimited support</li>
          <li>🚀 SEO optimisation</li>
          <li>☁️ Secure cloud hosting</li>
          <li>🌐 Domain registration & renewal</li>
          <li>📊 GDPR-compliant analytics</li>
        </ul>
        <button>Sign up</button>
      </section>
      <section className="min-w-prose lg:max-w-[30%] text-center">
        <Heading level="h3" className="underline">Blog</Heading>
        <p>For those with a creative streak ✨</p>
        <p><strong>RM 500</strong>/month:</p>
        <ul className="mx-auto text-left">
          <li>✍️ User-friendly blog</li>
          <li>🛠️ Unlimited changes</li>
          <li>💬 Unlimited support</li>
          <li>🚀 SEO optimisation</li>
          <li>☁️ Secure cloud hosting</li>
          <li>🌐 Domain registration & renewal</li>
          <li>📊 GDPR-compliant analytics</li>
        </ul>
        <button>Sign up</button>
      </section>
      <section className="min-w-prose lg:max-w-[30%] text-center">
        <Heading level="h3" className="underline">Enterprise</Heading>
        <p>For those with big ideas 💡</p>
        <p><strong>RM 1,000</strong>/month:</p>
        <ul className="mx-auto text-left">
          <li>🏗️ Custom-built for your needs</li>
          <li>🛠️ Unlimited changes</li>
          <li>💬 Unlimited support</li>
          <li>🚀 SEO optimisation</li>
          <li>☁️ Secure cloud hosting</li>
          <li>🌐 Domain registration & renewal</li>
          <li>📊 GDPR-compliant analytics</li>
        </ul>
        <button>Sign up</button>
      </section>
    </div>  
  )
    
}