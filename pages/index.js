import Head from 'next/head';
import Link from 'next/link';
import MainLayout, { siteTitle } from '../components/Layouts/MainLayout';
import utilStyles from '../styles/utils.module.scss';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <MainLayout home>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>This is a sample website - you’ll be building a site like this on </p>
        <Link href="/posts/first-post">
          <a>Go to first post</a>
        </Link>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </MainLayout>
  );
}
