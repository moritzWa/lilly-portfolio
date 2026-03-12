import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export const metadata = {
  title: "Work - Lilly Wallawitsch",
  description: "UX/UI Design work by Lilly Wallawitsch",
};

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

// Group projects by category
const categories = projects.reduce<Record<string, typeof projects>>(
  (acc, project) => {
    const cat = project.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(project);
    return acc;
  },
  {}
);

export default function WorkPage() {
  return (
    <main>
      <div className={styles.layout}>
        <nav aria-label="breadcrumb">
          <ol className={styles.breadcrumb}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <ChevronSeparator />
            <li>
              <span aria-current="page">Work</span>
            </li>
          </ol>
        </nav>

        <div className={styles.content}>
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} className={styles.category}>
              <h2 className={styles.categoryTitle}>{category}</h2>
              <div className={styles.eyebrow} />
              <div className={styles.grid}>
                {items.map((project) => (
                  <Link
                    key={project.slug}
                    className={styles.entry}
                    href={`/work/${project.slug}`}
                  >
                    <div className={styles.thumbnail}>
                      {(project as any).thumbnail ||
                      project.sections.find((s) => s.type === "image")?.src ? (
                        <Image
                          src={
                            ((project as any).thumbnail as string) ||
                            project.sections.find((s) => s.type === "image")!
                              .src!
                          }
                          alt={project.title}
                          fill
                          style={{ objectFit: "contain" }}
                          sizes="(max-width: 800px) 100vw, 33vw"
                        />
                      ) : (
                        <div className={styles.thumbnailPlaceholder}>
                          {project.title.split(" - ")[0]}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
