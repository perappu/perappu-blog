import matter from "gray-matter";
import { Metadata } from "next";
import * as fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: "perappu - Posts",
  description: "blog posts of perappu's blog",
};

function parseFrontMatter(filename: string) {
  const file = fs.readFileSync(filename, 'utf8');
  const data = matter(file).data;
  return data;
}

type Meta = {
  slug: string,
  title: string,
  description: string,
  date: Date,
  tags: string[]
};

type Post = {
  slug: string,
  meta: Meta
}

async function getResources() : Promise<Post[]> {
  const filenames: string[] = fs.readdirSync(path.join('./posts'));
  const metadata = filenames.map((filename) => {
    const meta = (parseFrontMatter(path.join('./posts', filename)) as Meta);
    meta.slug = filename.replace(/\.mdx$/, "");
    // remove the `.mdx` extension to only keep the slug
    return {
      slug : meta.slug,
      meta : meta
    }
  });

  return metadata;
}

function buildPostUrl(slug: string): string {
  return "/post/" + slug
}

const PostCard: React.FC<Meta> = ({ title, description, date, tags, slug }) => {
  const url = buildPostUrl(slug)
  return (
    <article className="prose !max-w-none prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert !mt-5">
      <a href={url}>
        <h3>{title}</h3></a>
      {description}
    </article>
  )
}

export default async function Home() {
  const resources = await getResources();
  return (<>
    <ul>
      {resources.map((post) => (<>
        <PostCard key={post.slug} {...post.meta} />
        <hr className="m-5" />
        </>
      )
      )}</ul></>
  );
}
