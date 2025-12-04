import React from 'react';
import styles from './styles.module.css';

interface AppCardProps {
  logo?: string;
  name: string;
  version?: string;
  description: string;
  link?: string;
}

export default function AppCard({ logo, name, version, description, link }: AppCardProps): JSX.Element {
  return (
    <div className={styles.appCardContainer}>
      <div className={styles.appCard}>
        {logo ? (
          <img src={logo} alt={`${name} logo`} className={styles.appLogo} />
        ) : (
          <div className={styles.appLogoPlaceholder}>{name.charAt(0)}</div>
        )}
        <div className={styles.appInfo}>
          {link ? (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.appNameLink}
            >
              <h3 className={styles.appName}>{name}</h3>
            </a>
          ) : (
            <h3 className={styles.appName}>{name}</h3>
          )}
          {version && <span className={styles.appVersion}>{version}</span>}
        </div>
      </div>
      <div className={styles.appDescription}>
        <p>{description}</p>
      </div>
    </div>
  );
}
