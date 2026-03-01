import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { projects as projectData } from '@/data/projects';

const thumbnails = [
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
    slug: 'cerasync',
    title: 'CeraSync',
    thumbnail: '/images/work/cerasync/web-1.png',
  },
  {
    slug: 'pickup',
    title: 'Pick Up',
    thumbnail: '/images/work/pickup/hero.png',
  },
  {
    slug: 'meet',
    title: 'Meet',
    thumbnail: '/images/work/meet/hero.png',
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
              Hey I&apos;m Lilly, a UX/UI Designer studying Interaction Design{' '}
              <a
                href="https://code.berlin/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @CODE
              </a>
              . Currently working{' '}
              <a
                href="https://www.glsnxt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                @GLS/NXT
              </a>
              .
            </p>
            <p>
              Female in Tech Scholarship holder{' '}
              <a
                href="https://www.t-mobile.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                @T-Mobile
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
              You can reach out to me on{' '}
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
              , or see more on{' '}
              <a
                href="https://github.com/lillywallawitsch"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
            <div className={styles.links}>
              <a
                href="https://drive.google.com/file/d/1InsBV12tYTRTt2FCFzI9INUCzxS-c0Ri/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
              <a href="mailto:lilly.wallawitsch@code.berlin">Email</a>
            </div>
          </div>
          <div className={styles.profilePicture}>
            <Image
              src="/lilly-picture.jpg"
              alt="Lilly Wallawitsch"
              width={200}
              height={200}
            />
          </div>
        </div>

        <section className={styles.sections} id="work">
          <div className={styles.work}>
            <div className={styles.sectionHeading}>
              <h1>Work</h1>
              <h2>{projectData.length}+</h2>
            </div>
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
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 800px) 100vw, 33vw"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.posts}>
            <div className={styles.postsHeading}>
              <h1>Selected Work</h1>
            </div>
            <div className={styles.container}>
              {projectData.map((item) => (
                <Link
                  key={item.slug}
                  className={styles.row}
                  href={`/work/${item.slug}`}
                >
                  <div className={styles.colA}>
                    <div>
                      <h3 className={styles.rowTitle}>{item.title}</h3>
                    </div>
                  </div>
                  <div className={styles.colB}>{item.category}</div>
                  <div className={styles.colC}>
                    <time>{item.tags[0]}</time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
