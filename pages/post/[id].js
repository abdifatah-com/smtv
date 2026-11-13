import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { posts } from '../index';

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find(p => p.id === id) || posts[0];

  return (
    <>
      <Head>
        <title>{post.title} – SMNTV</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} – SMNTV`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <span className="logo-sm">SM</span><span className="logo-ntv">NTV</span>
          </Link>
          <div className="nav-links">
            <Link href="/" className="nav-link">Blog & News</Link>
            <Link href="/about" className="nav-link">About</Link>
            <a href="https://www.tiktok.com/@the___pirate" target="_blank" rel="noopener noreferrer" className="nav-btn">
              @the___pirate
            </a>
          </div>
        </div>
      </nav>

      <main className="container article-container">
        <Link href="/" className="back-link">&larr; Back to all articles</Link>
        <article className="article-content">
          <div className="post-meta">
            <span className="post-category">{post.category}</span>
            <span className="post-date">{post.date}</span>
          </div>
          <h1 className="article-title">{post.title}</h1>
          <div className="author-box">
            <div className="author-avatar">AF</div>
            <div className="author-info">
              <strong>Abdifatah Faisal</strong>
              <span>Digital Marketing Specialist, Tech Enthusiast & TikTok Creator — SMNTV</span>
            </div>
          </div>
          <div className="article-body">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>
            <span className="footer-brand"><span className="logo-sm">SM</span><span className="logo-ntv">NTV</span></span>
            &nbsp;&copy; {new Date().getFullYear()} Abdifatah Faisal. All rights reserved.
          </p>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <a href="https://www.tiktok.com/@the___pirate" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="mailto:abdelfattahmarketing@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}
