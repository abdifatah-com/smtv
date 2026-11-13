import Head from 'next/head';
import Link from 'next/link';

export const posts = [
  {
    id: '1',
    title: 'Winning Two Hackathons in 2025: From Idea to Champion',
    date: '2025-12-10',
    category: 'Tech & Innovation',
    excerpt: 'How our team clinched first place at both a prestigious national-level hackathon and an elite tech hackathon last year.',
    content: `Winning back-to-back hackathons in 2025 was a defining milestone in my tech journey. With over 5 years of hands-on technical experience, our team tackled complex real-world challenges under intense 48-hour pressure.

The first was a national-level hackathon where we engineered an innovative platform that stood out among hundreds of competing developers. The second was a specialized tech hackathon focused on scalable architectures and modern problem solving. These victories proved what passion, rapid prototyping, and technical dedication can achieve.`
  },
  {
    id: '2',
    title: 'Digital Marketing Playbook for 2026: Trends & Strategy',
    date: '2026-03-05',
    category: 'Digital Marketing',
    excerpt: 'Key growth insights drawn from 7+ years of building digital marketing campaigns and scaling organic reach.',
    content: `Having worked in digital marketing for more than 7 years, I have seen algorithms, platforms, and consumer behavior shift dramatically.

In 2026, authentic storytelling beats polished corporate advertising every single time. Integrating short-form video content with community-led brand advocacy creates defensible organic growth. Modern digital marketing requires understanding data analytics as deeply as understanding human psychology.`
  },
  {
    id: '3',
    title: '6 Years on TikTok: How to Build Community & Go Viral',
    date: '2026-06-20',
    category: 'Content Creation',
    excerpt: 'Actionable lessons and creator secrets from 6 years of consistent content production across social media.',
    content: `Content creation is not just about catching fleeting trends — it is about providing value, staying consistent, and connecting with your audience on a personal level.

Over the past 6 years, especially on TikTok (@the___pirate), I have tested countless hooks, retention frameworks, and engagement mechanics. Consistency and delivering real value in the first 3 seconds are the fundamental building blocks to sustainable audience growth.`
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>SMNTV – Official Blog, News & Creator Hub</title>
        <meta name="description" content="SMNTV – Official news, blog, and creator hub for Abdifatah Faisal. Digital Marketing Specialist, Tech Enthusiast, Hackathon Champion & TikTok Creator." />
        <meta property="og:title" content="SMNTV – Official Blog & News" />
        <meta property="og:description" content="SMNTV | Abdifatah Faisal – Digital Marketing Specialist (7+ yrs), 2x Hackathon Winner, TikTok Creator @the___pirate (6+ yrs)." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smntv.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SMNTV – Official Blog & News" />
        <meta name="twitter:description" content="SMNTV | Abdifatah Faisal – Digital Marketing, Tech & TikTok @the___pirate." />
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <span className="logo-sm">SM</span><span className="logo-ntv">NTV</span>
          </Link>
          <div className="nav-links">
            <Link href="/" className="nav-link active">Blog & News</Link>
            <Link href="/about" className="nav-link">About</Link>
            <a href="https://www.tiktok.com/@the___pirate" target="_blank" rel="noopener noreferrer" className="nav-btn">
              @the___pirate
            </a>
          </div>
        </div>
      </nav>

      <header className="hero-section">
        <div className="container">
          <span className="badge">Official Creator & Media Hub</span>
          <h1><span className="brand">SMNTV</span> — Insights, Tech & Digital Growth</h1>
          <p className="hero-subtitle">
            The official media hub of <strong>Abdifatah Faisal</strong>. Digital marketing specialist (7+ yrs), 2× hackathon champion, and TikTok content creator (6+ yrs).
          </p>
        </div>
      </header>

      <main className="container main-content">
        <div className="section-header">
          <h2>Latest Articles & News</h2>
          <p>Insights on marketing, technology, and content creation from Abdifatah Faisal.</p>
        </div>

        <section className="posts-grid">
          {posts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-meta">
                <span className="post-category">{post.category}</span>
                <span className="post-date">{post.date}</span>
              </div>
              <h3 className="post-title">
                <Link href={`/post/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <Link href={`/post/${post.id}`} className="read-more-link">
                Read full article &rarr;
              </Link>
            </article>
          ))}
        </section>

        <section className="about-cta">
          <div className="about-cta-content">
            <h3>Want to collaborate or learn more?</h3>
            <p>Explore Abdifatah's background, hackathon wins, and 7+ years of digital marketing expertise.</p>
            <div className="cta-actions">
              <Link href="/about" className="btn-primary">About & Contact</Link>
              <a href="https://www.tiktok.com/@the___pirate" target="_blank" rel="noopener noreferrer" className="btn-secondary">Follow on TikTok</a>
            </div>
          </div>
        </section>
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
