import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useState} from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="CHORUS-TRE is a secure Trusted Research Environment developed by the BDSC, NeuroDigital and DSI teams of the University Hospital of Lausanne, Switzerland.">
      <main>
        <div className="container">
          <div className={styles.columns}>
            <div className={styles.leftColumn}>
              <HomepageFeatures />
            </div>
            <div className={styles.rightColumn}>
              <div className={`${styles.videoContainer} ${isPlaying ? styles.playing : ''}`}>
                <video
                  className={styles.video}
                  src="/video/Chorus_190525_ENG.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                >
                  Your browser does not support the video tag.
                </video>
                <div className={styles.videoOverlay}>
                  <div className={styles.videoTitle}>
                    Discover how CHORUS can empower your research
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
