import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Abdifatah Faisal – SMNTV Official Profile</title>
        <meta name="description" content="Official profile of Abdifatah Faisal on SMNTV: 7+ years digital marketing specialist, 5+ years tech enthusiast, 2x hackathon winner, and 6+ years TikTok content creator (@the___pirate)." />
        <meta property="og:title" content="About Abdifatah Faisal – SMNTV" />
        <meta property="og:description" content="Digital Marketing Specialist, Tech Enthusiast, Hackathon Champion & TikTok Creator @the___pirate." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://smntv.vercel.app/about" />
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <span className="logo-sm">SM</span><span className="logo-ntv">NTV</span>
          </Link>
          <div className="nav-links">
            <Link href="/" className="nav-link">Blog & News</Link>
            <Link href="/about" className="nav-link active">About</Link>
            <a href="https://www.tiktok.com/@the___pirate" target="_blank" rel="noopener noreferrer" className="nav-btn">
              @the___pirate
            </a>
          </div>
        </div>
      </nav>

      <main className="container about-page">
        <header className="about-header">
          <div className="profile-badge">✔ Verified Official Profile — SMNTV</div>
          <h1>Abdifatah Faisal</h1>
          <p className="headline">Digital Marketing Specialist &bull; Tech Enthusiast &bull; TikTok Content Creator</p>
        </header>

        <section className="about-grid">
          <div className="about-card main-bio">
            <h2>About Me</h2>
            <p>
              Hi! I'm <strong>Abdifatah Faisal</strong>, and this is my official media hub — <strong>SMNTV</strong>. I am a <strong>Digital Marketing Specialist</strong> with over <strong>7 years</strong> of experience scaling campaigns, optimizing conversion funnels, and building powerful online presences for brands and organizations worldwide.
            </p>
            <p>
              I am also a passionate <strong>tech enthusiast</strong> with more than <strong>5 years</strong> of hands-on development experience. In 2025, my team and I won <strong>two prestigious hackathons</strong>:
            </p>
            <ul className="achievements-list">
              <li>
                <strong>🏆 National-Level Hackathon Champion (2025):</strong> Awarded first place in a nationwide competition competing against top engineering talent across the country.
              </li>
              <li>
                <strong>🥇 Tech Hackathon Winner (2025):</strong> Won first prize for innovating and shipping rapid technical solutions under intense time pressure.
              </li>
            </ul>
            <p>
              I am also a dedicated <strong>content creator</strong> with <strong>6 years</strong> of continuous experience producing engaging videos across social media — especially on <strong>TikTok</strong> under the handle <a href="https://www.tiktok.com/@the___pirate" target="_blank" rel="noopener noreferrer"><strong>@the___pirate</strong></a>, where I have built a strong and loyal community.
            </p>
          </div>

          <div className="about-card sidebar-card">
            <h2>Contact</h2>
            <div className="contact-list">
              <div className="contact-item">
                <span className="label">📧 Email</span>
                <a href="mailto:abdelfattahmarketing@gmail.com">abdelfattahmarketing@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="label">📞 Phone</span>
                <a href="tel:+252636472317">+252 636 4723 17</a>
              </div>
            </div>

            <h2 style={{ marginTop: '2rem' }}>Official Channels</h2>
            <div className="social-links-vertical">
              <a href="https://www.tiktok.com/@the___pirate" target="_blank" rel="noopener noreferrer" className="social-pill tiktok-pill">
                🎵 TikTok: @the___pirate (Official)
              </a>
              <a href="mailto:abdelfattahmarketing@gmail.com" className="social-pill email-pill">
                ✉️ Partnerships & Inquiries
              </a>
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
