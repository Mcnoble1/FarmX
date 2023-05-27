import config from "@config/config.json";
import dateFormat from "@lib/utils/dateFormat";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts, className }) => {
  const { summary_length } = config.settings;
  return (
    <div className={`row ${className}`}>
      {posts.map((post) => (
        <div
          className="col-12 sm:col-6"
        >
          {post.frontmatter.image && (
            <Image
              className="rounded-lg"
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              width={445}
              height={230}
            />
          )}
          <ul className="mt-4 mb-4 flex flex-wrap items-center space-x-3 text-text">
            <li>{dateFormat(post.frontmatter.date)}</li>
          </ul>
          <h3 className="mb-2">
            <Link href={`/${post.slug}`} className="block hover:text-primary">
              {post.frontmatter.title}
            </Link>
          </h3>
          <p className="text-text">
            {post.content && post.content.slice(0, Number(summary_length))}...
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
