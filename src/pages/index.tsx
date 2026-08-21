import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="CHORUS Documentation"
      description="CHORUS is an open-source Trusted Research Environment for research and AI on sensitive data.">
      <div className={styles.hero}>
        <div className={`${styles.wrap} ${styles.heroInner}`}>
          <div className={styles.eyebrow}>Documentation</div>
          <h1>Find your way around CHORUS</h1>
          <p className={styles.lead}>
            CHORUS is an open-source Trusted Research Environment for research and AI on
            sensitive data. Start with the platform itself, or jump straight to a research
            community.
          </p>
          <div className={styles.ctaRow}>
            <a className={`${styles.btn} ${styles.primary}`} href="/docs/overview/what-is-chorus">
              Explore the platform <span className={styles.arw}>&rarr;</span>
            </a>
            <a className={`${styles.btn} ${styles.ghost}`} href="/hip">
              Go to CHORUS.HIP
            </a>
          </div>
          <p className={styles.heroSubline}>
            New to CHORUS? Start with <a href="/docs/overview/what-is-chorus">What is CHORUS</a>.
          </p>
        </div>
      </div>

      <main className={styles.wrap}>
        <section id="choose" className={styles.section}>
          <div className={styles.secHead}>
            <div>
              <h2>Choose your path</h2>
              <p>The documentation is organized into three areas.</p>
            </div>
          </div>

          <div className={styles.cards}>
            <a className={styles.card} href="/docs/overview/what-is-chorus">
              <span className={styles.k}>Platform</span>
              <h3>
                CHORUS <span className={styles.arw}>&rarr;</span>
              </h3>
              <p>
                The secure platform itself &#8212; core concepts, workspaces, sessions,
                apps, security, and how to deploy your own instance.
              </p>
            </a>

            <a className={styles.card} href="/hip">
              <span className={styles.k}>Community</span>
              <h3>
                CHORUS.HIP <span className={styles.arw}>&rarr;</span>
              </h3>
              <p>
                Intracerebral EEG and neuroimaging research on CHORUS &#8212; onboarding,
                working with iEEG data, the tool catalogue, and tutorials.
              </p>
            </a>

            <a className={styles.card} href="#">
              <span className={styles.k}>Communities</span>
              <h3>
                Community <span className={styles.arw}>&rarr;</span>
              </h3>
              <p>
                Browse the research communities running on CHORUS, and how institutions
                join or deploy their own.
              </p>
            </a>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionTight}`}>
          <div className={styles.xstrip}>
            <div className={styles.ic} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1240FF" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3a15 15 0 0 1 0 18" />
                <path d="M12 3a15 15 0 0 0 0 18" />
              </svg>
            </div>
            <div className={styles.xcopy}>
              <b>Looking for the project itself?</b>
              <p>The CHORUS website has the vision, the team, and the latest news.</p>
            </div>
            <a href="https://www.chorus-tre.ch/en/">Visit chorus-tre.ch &rarr;</a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.foot}`}>
          <div>
            <span className={styles.fbrand}>CHORUS</span>
            <p className={styles.lede}>
              Documentation for CHORUS &#8212; an open-source Trusted Research Environment
              for research and AI on sensitive data.
            </p>
          </div>
          <div>
            <h4>Documentation</h4>
            <a href="/docs/overview/what-is-chorus">CHORUS platform</a>
            <a href="/hip">CHORUS.HIP</a>
            <a href="#">Community</a>
          </div>
          <div>
            <h4>Project</h4>
            <a href="https://www.chorus-tre.ch/en/">chorus-tre.ch &#8599;</a>
            <a href="https://github.com/CHORUS-TRE">GitHub &#8599;</a>
          </div>
        </div>
        <div className={`${styles.wrap} ${styles.eu}`}>
          <span className={styles.flag}>&#127466;&#127482;</span>
          <span>
            Co-funded by the European Union &#183; Developed within EBRAINS 2.0 and the
            Human Brain Project, with the CHUV, Lausanne.
          </span>
        </div>
      </footer>
    </Layout>
  );
}
