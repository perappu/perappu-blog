import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
    // get all your mdx files
    const filenames: string[] = fs.readdirSync(path.join('./posts'));

    // let's use the filenames without `.mdx` extension as our slugs
    const posts = filenames.map((filename) => {
        return {
            slug: filename.replace(/\.mdx$/, ""),
        };
    });

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

function getPost({slug} : {slug : string}){
    const markdownFile = fs.readFileSync(path.join('posts',slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}

export default async function Page({ params }: { params: { slug: string } }) {
    const props = getPost(params);

    return (
        <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto'>
            <h2>{props.frontMatter.title}</h2>
            <MDXRemote source={props.content}/>
        </article>
    )
}