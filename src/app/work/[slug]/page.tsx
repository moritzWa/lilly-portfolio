import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, type ProjectSection } from "@/data/projects";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Not Found" };
    return {
      title: `${project.title} - Lilly Wallawitsch`,
      description: `${project.category} project by Lilly Wallawitsch`,
    };
  });
}

function ChevronSeparator() {
  return (
    <span className={styles.separator} aria-hidden="true">
      <svg
        width="14"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

function renderSection(section: ProjectSection, index: number) {
  switch (section.type) {
    case "heading": {
      const level = section.level || 2;
      if (level === 1) return <h1 key={index}>{section.content}</h1>;
      if (level === 3) return <h3 key={index}>{section.content}</h3>;
      return <h2 key={index}>{section.content}</h2>;
    }
    case "text":
      return <p key={index}>{section.content}</p>;
    case "hr":
      return <hr key={index} />;
    case "image":
      return (
        <Image
          key={index}
          src={section.src!}
          alt={section.alt || ""}
          width={1200}
          height={800}
          style={{ width: "100%", height: "auto" }}
        />
      );
    case "image-grid":
      return (
        <div key={index} className={styles.imageGrid}>
          {section.images?.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          ))}
        </div>
      );
    case "image-row":
      return (
        <div key={index} className={styles.imageRow}>
          {section.images?.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          ))}
        </div>
      );
    case "details":
      return (
        <details key={index} className={styles.details}>
          <summary>{section.summary}</summary>
          <div className={styles.detailsContent}>
            {section.children?.map((child, i) => renderSection(child, i))}
          </div>
        </details>
      );
    case "pdf-link":
      return (
        <p key={index}>
          <a href={section.href} target="_blank" rel="noopener noreferrer">
            {section.content || "View PDF"}
          </a>
        </p>
      );
    default:
      return null;
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <div className={styles.article}>
        <nav aria-label="breadcrumb">
          <ol className={styles.breadcrumb}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <ChevronSeparator />
            <li>
              <Link href="/work">Work</Link>
            </li>
            <ChevronSeparator />
            <li>
              <span aria-current="page">{project.title.split(" - ")[0]}</span>
            </li>
          </ol>
        </nav>

        <header className={styles.header}>
          <h1>{project.title}</h1>
        </header>

        {project.link && (
          <a
            className={styles.externalLink}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit project
          </a>
        )}

        <div className={styles.content}>
          {project.sections.map((section, i) => renderSection(section, i))}
        </div>

        <Link href="/" className={styles.backLink}>
          Back to home
        </Link>
      </div>
    </main>
  );
}
