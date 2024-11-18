import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  img: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Makes research safer',
    img: require('@site/static/img/dowhat.png').default,
    description: (
      <>
        Personal health data is accessed in a secure and privacy-preserving way
      </>
    ),
  },
  {
    title: 'Helps make research efficient and collaborative',
    img: require('@site/static/img/dowhat.png').default,
    description: (
      <>
        Researchers can find rich data and generate deep insights to improve healthcare and patients' lives

      </>
    ),
  },
  {
    title: 'One-stop shops for data and analytical tools',
    img: require('@site/static/img/dowhat.png').default,
    description: (
      <>
        The data and analytical tools are all in one place
      </>
    ),
  },
]

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <div className={styles.header}>
        <h2>CHORUS-TRE is a secure Trusted Research Environment developed by the <a href="https://www.chuv.ch/fr/bdsc/" target="_blank">BDSC</a>, <a href="https://www.chuv.ch/fr/neurosciences/dnc-home/recherche/centre-de-recherche-en-neurosciences/neurotech/research-labs/neurodigitalneurotech" target="_blank">NeuroDigital</a> and <a href="https://www.chuv.ch/fr/fiches/direction-des-systemes-dinformation" target="_blank">DSI</a> teams of the University Hospital of Lausanne <a href="https://www.chuv.ch/" target="_blank">(CHUV)</a>, Switzerland.</h2>
      </div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
