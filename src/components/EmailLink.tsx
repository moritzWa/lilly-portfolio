"use client";

const u = "lilly.wallawitsch";
const d = "code.berlin";

export default function EmailLink() {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${u}@${d}`;
      }}
    >
      Email
    </a>
  );
}
