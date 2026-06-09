import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { projects as projectData } from '@/data/projects';
import EmailLink from '@/components/EmailLink';

const thumbnails = [
  {
    slug: 'gls',
    title: 'GLS',
    thumbnail: '/images/work/gls/hero.png',
  },
  {
    slug: 'plymouth',
    title: 'Plymouth',
    thumbnail: '/images/work/plymouth/hero.png',
  },
  {
    slug: 'buena',
    title: 'Buena',
    thumbnail: '/images/work/buena/hero.png',
  },
  {
    slug: 'wondernest',
    title: 'Wondernest',
    thumbnail: '/images/work/wondernest/hero.png',
  },
  {
    slug: 'pickup',
    title: 'Pick Up',
    thumbnail: '/images/work/pickup/hero.png',
  },
  {
    slug: 'ubuntu-groove',
    title: 'Ubuntu Groove',
    thumbnail: '/images/work/ubuntu-groove/hero.png',
  },
];

export default function Home() {
  return (
    <main>
      <div className={styles.layout}>
        <div className={styles.header}>
          <div className={styles.about}>
            <h1>Lilly Wallawitsch</h1>
            <p>
              Hey I&apos;m Lilly, a UX/UI Designer studying Interaction Design
              at{' '}
              <a
                href="https://code.berlin/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CODE University
              </a>
              . Currently working at{' '}
              <a
                href="https://www.glsnxt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GLS/NXT
              </a>
              .
            </p>
            <p>
              <a
                href="https://www.linkedin.com/posts/lilly-wallawitsch_we-the-xdesign-club-just-had-one-single-ugcPost-7453097590293716993-RW9r/"
                target="_blank"
                rel="noopener noreferrer"
              >
                XDesign Club
              </a>{' '}
              Co-Founder, Female in Tech Scholarship holder at{' '}
              <a
                href="https://www.t-mobile.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                T-Mobile
              </a>
              . Previously designed for{' '}
              <a
                href="https://www.plymouthstreet.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plymouth
              </a>{' '}
              and{' '}
              <a
                href="https://www.buena.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buena
              </a>
              .
            </p>
            <p>
              Reach me on{' '}
              <a
                href="https://x.com/WallawitschL"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
              ,{' '}
              <a
                href="https://www.linkedin.com/in/lilly-wallawitsch"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              ,{' '}
              <a
                href="https://github.com/lillywallawitsch"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              , or via{' '}
              <EmailLink />
              . Download my{' '}
              <a
                href="https://drive.google.com/file/d/1InsBV12tYTRTt2FCFzI9INUCzxS-c0Ri/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
              .
            </p>
          </div>
          <div className={styles.profilePicture}>
            <Image
              src="/lilly-picture.jpg"
              alt="Lilly Wallawitsch"
              width={600}
              height={600}
            />
          </div>
        </div>

        <section className={styles.sections} id="work">
          <div className={styles.work}>
            <Link href="/work" className={styles.sectionHeading}>
              <h1>Work</h1>
              <h2>{projectData.length}+</h2>
            </Link>
            <div className={styles.eyebrow} />
            <div className={styles.grid}>
              {thumbnails.map((project) => (
                <Link
                  key={project.slug}
                  className={styles.entry}
                  href={`/work/${project.slug}`}
                >
                  <div className={styles.thumbnail}>
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 800px) 100vw, 33vw"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.work}>
            <div className={styles.sectionHeading}>
              <h1>Projects</h1>
            </div>
            <div className={styles.eyebrow} />
            <div className={styles.grid}>
              <a className={styles.entry} href="https://www.linkedin.com/posts/lilly-wallawitsch_we-the-xdesign-club-just-had-one-single-ugcPost-7453097590293716993-RW9r/" target="_blank" rel="noopener noreferrer">
                <div className={styles.thumbnail}>
                  <Image
                    src="/images/work/xdesign-hackathon/hero.png"
                    alt="XDesign Hackathon"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 800px) 100vw, 33vw"
                  />
                </div>
              </a>
              <a className={styles.entry} href="https://joinaurea.com/" target="_blank" rel="noopener noreferrer">
                <div className={styles.thumbnail}>
                  <Image
                    src="/images/work/aurea-hacker-house/hero.png"
                    alt="Aurea Hacker House"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 800px) 100vw, 33vw"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
