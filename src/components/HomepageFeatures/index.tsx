import styles from './styles.module.css'

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <img
          className={styles.logo}
          src="/img/chorus-logo-black.png"
          alt="CHORUS logo"
        />
        <h2 className={styles.header}>USER DOCUMENTATION</h2>
        <div className={styles.content}>
          <p>
            Everything you need to:
          </p>
          <ul className={styles.contentList}>
            <li>Understand CHORUS concepts and technical foundations</li>
            <li>Work safely with sensitive research data</li>
            <li>Access tools for research and AI development</li>
            <li>Collaborate across projects and institutions</li>
            <li>Navigate governance and compliance settings</li>
          </ul>
          <div className={styles.buttons}>
            <a className={styles.button} href="/docs">Documentation</a>
            <a className={styles.button} href="/community/about">Community</a>
          </div>
        </div>
      </div>
    </section>
  )
}
