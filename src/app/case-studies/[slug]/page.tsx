import * as fs from "node:fs";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const { default: Post } = await import(`@/content/${slug}.mdx`)

  return <Post />
}

export function generateStaticParams() {
  return fs.readdirSync('src/content/case-studies')
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''))
    .map((slug) => ({ slug }));
}

export const dynamicParams = false