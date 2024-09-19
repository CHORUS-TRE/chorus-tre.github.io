import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'
// import dowhat from '@site/static/img/dowhat.png';

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
      <div className="text--center">
        <img src={img} alt="dowhat" className={styles.featureImg}/>
      </div>
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
        <h2>Accelerating access to data and research collaborations through trusted research environments (TREs)</h2>
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
