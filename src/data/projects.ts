export interface ProjectSection {
  type: "text" | "heading" | "image" | "image-grid" | "image-row" | "details" | "pdf-link" | "hr";
  content?: string;
  src?: string;
  alt?: string;
  images?: { src: string; alt: string }[];
  level?: 1 | 2 | 3;
  href?: string;
  summary?: string;
  children?: ProjectSection[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  link?: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "plymouth",
    title: "Plymouth - UX/UI Design",
    category: "Product Design",
    tags: ["UI/UX", "Brand", "ID", "Graphic design"],
    link: "https://www.plymouthstreet.com/",
    sections: [
      {
        type: "image",
        src: "/images/work/plymouth/hero.png",
        alt: "Plymouth card design",
      },
      {
        type: "text",
        content:
          "Plymouth is transforming the immigration process for top STEM talent by making it faster, more transparent, and user-friendly.",
      },
      {
        type: "text",
        content:
          "At Plymouth, I led the redesign and rethinking of the web application, focusing on improving the user experience for individuals uploading visa-required information and tracking their case status. My work included designing intuitive workflows, creating a process tracker, and ensuring seamless document uploads.",
      },
      {
        type: "text",
        content:
          "Additionally, I contributed to branding and marketing design, crafting visuals and materials that aligned with Plymouth's mission of revolutionizing the immigration experience.",
      },
      { type: "heading", content: "UX/UI Designs", level: 2 },
      { type: "hr" },
      { type: "heading", content: "Visa Application Portal Redesign", level: 3 },
      {
        type: "details",
        summary: "Process Journal",
        children: [
          {
            type: "text",
            content:
              'The original design required users to complete a rigid, 100-step wizard, clicking "Next" or "Skip for now" at each stage. This linear flow was time-consuming and exhausting, leading to high drop-off rates and incomplete applications - directly impacting company revenue.',
          },
          {
            type: "image",
            src: "/images/work/plymouth/prev-design.png",
            alt: "Previous design",
          },
          { type: "heading", content: "Investigation & Insights", level: 3 },
          {
            type: "text",
            content:
              "By shadowing customer calls and analyzing transcripts, I identified key pain points: Users wanted flexibility to navigate the process and return to sections as needed. There was no clear overview of progress or uploaded information, causing confusion. Lack of visual cues and motivation led to user fatigue and abandonment.",
          },
          { type: "heading", content: "Design Solution & Rationale", level: 3 },
          {
            type: "text",
            content:
              'Introduced a folder structure, allowing users to freely access and update any section. Added visual progress indicators (bars, icons) to clarify status and completed steps. Gamified the experience with motivating comments and clear visuals to encourage completion. Simplified navigation by removing "Next, skip for now" and enabling auto-save for user input.',
          },
          {
            type: "text",
            content:
              "This project taught me how important it is to give users control and clarity, especially in long or complex processes. Thoughtful design can make a real difference - not just for users, but for the business as well.",
          },
        ],
      },
      {
        type: "image",
        src: "/images/work/plymouth/visa-portal.png",
        alt: "Visa application portal redesign",
      },
      { type: "hr" },
      { type: "heading", content: "The Visa Portal (Petitioner View)", level: 3 },
      {
        type: "details",
        summary: "Process Journal",
        children: [
          {
            type: "text",
            content:
              "Petitioners struggled to keep track of their progress and missing documents in the visa process. The lack of a clear overview led to confusion and incomplete applications.",
          },
          {
            type: "text",
            content:
              "I designed a dashboard that gives users a personal overview of their application status, pending information, and direct access to their case team. Visual progress indicators and actionable buttons help users see exactly where they are and what's left to do.",
          },
        ],
      },
      {
        type: "image",
        src: "/images/work/plymouth/petitioner.png",
        alt: "Customer facing tracker",
      },
      { type: "hr" },
      { type: "heading", content: "Employer Case Tracker Table", level: 3 },
      {
        type: "details",
        summary: "Process Journal",
        children: [
          {
            type: "text",
            content:
              "Employers had no easy way to monitor the status of multiple employee visa cases. Tracking progress and outstanding tasks for each petitioner was time-consuming and error-prone.",
          },
          {
            type: "text",
            content:
              "I created a case tracker table that allows employers to view all ongoing cases at a glance, including visa type, country, task status, and direct links to employee actions.",
          },
        ],
      },
      {
        type: "image",
        src: "/images/work/plymouth/case-tracker.png",
        alt: "Employer case tracker",
      },
      { type: "hr" },
      { type: "heading", content: "Off-boarding Process (Visa Approved)", level: 3 },
      {
        type: "details",
        summary: "Process Journal",
        children: [
          {
            type: "text",
            content:
              "Once a visa was approved, petitioners often felt lost about their next steps. I designed an offboarding screen that congratulates users and provides a checklist of key information, next steps, and resources for maintaining their visa status.",
          },
        ],
      },
      {
        type: "image",
        src: "/images/work/plymouth/offboarding.png",
        alt: "Offboarding screen",
      },
      { type: "hr" },
      { type: "heading", content: "The Process Tracker", level: 3 },
      {
        type: "image",
        src: "/images/work/plymouth/process-tracker.png",
        alt: "Process tracker",
      },
      { type: "hr" },
      { type: "heading", content: "Graphic Designs", level: 3 },
      {
        type: "image-row",
        images: [
          { src: "/images/work/plymouth/email-banner.png", alt: "Email banner" },
        ],
      },
      {
        type: "image",
        src: "/images/work/plymouth/banner.png",
        alt: "Plymouth banner",
      },
      {
        type: "image",
        src: "/images/work/plymouth/linkedin-header.png",
        alt: "LinkedIn header",
      },
    ],
  },
  {
    slug: "buena",
    title: "Buena - UX/UI Design",
    category: "Product Design",
    tags: ["UI/UX", "Graphic design", "Research", "User Interviews"],
    link: "https://www.buena.com/en",
    sections: [
      {
        type: "image",
        src: "/images/work/buena/hero.png",
        alt: "Buena hero",
      },
      {
        type: "text",
        content:
          "Buena is revolutionising property management, backed by $58M Series A funding, simplifying communication, maintenance, and operations for property managers and owners.",
      },
      {
        type: "text",
        content:
          "As a UX/UI Design Intern, I redesigned the main property and unit view to improve usability and led the design of the owners' meeting process, streamlining how users handle this workflow.",
      },
      {
        type: "text",
        content:
          "I conducted user interviews, research, and testing, driving insights to inform my designs, and led the design process to deliver user-centered solutions that aligned with Buena's mission of modernising property management.",
      },
      { type: "heading", content: "Buena Dashboard Redesign (Unit & Property View)", level: 2 },
      { type: "hr" },
      {
        type: "details",
        summary: "Process Journal",
        children: [
          {
            type: "heading",
            content: "Problem Statement",
            level: 3,
          },
          {
            type: "text",
            content:
              "User interviews revealed that property managers and owners struggled with Buena's dashboard. Navigation was slow and confusing due to too many tabs and scattered information. Essential data, like tenant payments or unit counts, required multiple clicks and was hard to find.",
          },
          {
            type: "image-row",
            images: [
              { src: "/images/work/buena/prev-unit.png", alt: "Previous unit design" },
              { src: "/images/work/buena/prev-property.png", alt: "Previous property design" },
            ],
          },
          { type: "heading", content: "Research & Insights", level: 3 },
          {
            type: "text",
            content:
              "Property managers took three times longer to complete tasks compared to their old software. Frequently accessed data was buried several steps deep. The tab line was overly long and disorganized.",
          },
          { type: "heading", content: "Design Solution", level: 3 },
          {
            type: "text",
            content:
              'Introduced an "Overview" tab for both Units and Properties, surfacing key information at a glance. Shortened and grouped the tab line to simplify navigation. Added actionable cards for quick access to important data. Implemented inline editing directly within tables.',
          },
          { type: "heading", content: "Impact", level: 3 },
          {
            type: "text",
            content:
              "Users complete tasks faster and find information more easily. The dashboard is more intuitive, reducing onboarding time for new users. The redesign supports Buena's goal to onboard more property managers with minimal changes for maximum value.",
          },
        ],
      },
      {
        type: "image",
        src: "/images/work/buena/redesign.png",
        alt: "Buena redesign",
      },
      {
        type: "details",
        summary: "Dark Mode",
        children: [
          {
            type: "image",
            src: "/images/work/buena/dark-mode.png",
            alt: "Buena dark mode",
          },
        ],
      },
      { type: "heading", content: "Owners Meeting (ETV)", level: 3 },
      { type: "hr" },
      {
        type: "details",
        summary: "Process Journal",
        children: [
          {
            type: "text",
            content:
              "Property owners and managers needed a reliable, legally compliant way to organize and conduct owners meetings - both digitally and in person.",
          },
          {
            type: "text",
            content:
              "I conducted user interviews, shadowed customer workflows, distributed surveys, and tracked activity within the web application. I also worked closely with legal experts to ensure every step met regulatory standards.",
          },
          {
            type: "text",
            content:
              "Designed a seamless process for sending meeting invitations via mail and email. Developed digital and in-person meeting modules. Created a secure, transparent voting feature. Started with paper sketches and simple wireframes, iterated through multiple mockups.",
          },
        ],
      },
    ],
  },
  {
    slug: "wondernest",
    title: "Wondernest - Web Development, Animation, Branding",
    category: "Brand & Development",
    tags: ["Brand", "Marketing", "Brand Book", "Logo Animation"],
    link: "https://wondernest-express.onrender.com/",
    sections: [
      {
        type: "image",
        src: "/images/work/wondernest/hero.png",
        alt: "Wondernest website",
      },
      { type: "heading", content: "Logo Animation", level: 3 },
      { type: "hr" },
      {
        type: "text",
        content: "Logo animation with Adobe After Effects.",
      },
      {
        type: "details",
        summary: "Storyboard",
        children: [
          {
            type: "image",
            src: "/images/work/wondernest/storyboard.png",
            alt: "Wondernest storyboard",
          },
        ],
      },
      { type: "heading", content: "Website", level: 3 },
      { type: "hr" },
      {
        type: "text",
        content:
          "I developed the Wondernest webpage entirely from scratch, using JavaScript, Node.js, and MongoDB as the database. Without relying on frameworks, I built and deployed the site on onrender.com, ensuring a fully custom, hard-coded solution adapted to the platform's needs. This approach allowed me to have complete control over the functionality and design, showcasing my ability to create robust web applications independently.",
      },
    ],
  },
  {
    slug: "cerasync",
    title: "CeraSync - Research, Management, Web Design",
    category: "Product Design",
    tags: ["Marketing", "Editorial Design", "Logo design", "Web design", "UI/UX"],
    link: "https://www.figma.com/file/xCAn6yOSjna3VIGE62C7sJ/CeraSync-Design-Process",
    sections: [
      { type: "heading", content: "Web Design", level: 1 },
      {
        type: "image",
        src: "/images/work/cerasync/web-1.png",
        alt: "CeraSync web design 1",
      },
      {
        type: "image",
        src: "/images/work/cerasync/web-2.png",
        alt: "CeraSync web design 2",
      },
      {
        type: "image",
        src: "/images/work/cerasync/web-3.png",
        alt: "CeraSync web design 3",
      },
      {
        type: "image",
        src: "/images/work/cerasync/web-4.png",
        alt: "CeraSync web design 4",
      },
      {
        type: "image",
        src: "/images/work/cerasync/web-5.png",
        alt: "CeraSync web design 5",
      },
      { type: "heading", content: "About CeraSync", level: 2 },
      { type: "hr" },
      {
        type: "text",
        content:
          "CeraSync is an Event Creation platform for Ceramic and Pottery Enthusiasts. The web-based event guide for the ceramic community to discover and engage with ceramic-related happenings.",
      },
      {
        type: "text",
        content:
          "Users, including artists and studios, can contribute by adding their events to the platform. Features include customizable events, notifications, artist profiles, and a seasonal newsletter.",
      },
      { type: "heading", content: "Market Analysis", level: 3 },
      { type: "hr" },
      {
        type: "text",
        content:
          "Pottery ceramics have a long history in human culture, combining artistry with functionality. Growing appreciation for handmade and unique pottery items and the rise of pottery as a hobby and therapeutic activity are driving factors for the market. The market is expected to continue growing due to the demand for unique, handmade products, the therapeutic benefits of pottery, sustainability, and technological advancements.",
      },
      { type: "heading", content: "Investigation Process Posters", level: 1 },
      { type: "hr" },
      {
        type: "image",
        src: "/images/work/cerasync/poster-1.jpg",
        alt: "CeraSync poster 1",
      },
      {
        type: "image",
        src: "/images/work/cerasync/poster-2.jpg",
        alt: "CeraSync poster 2",
      },
      {
        type: "image",
        src: "/images/work/cerasync/poster-3.jpg",
        alt: "CeraSync poster 3",
      },
      {
        type: "image",
        src: "/images/work/cerasync/poster-4.jpg",
        alt: "CeraSync poster 4",
      },
      {
        type: "image",
        src: "/images/work/cerasync/poster-5.jpg",
        alt: "CeraSync poster 5",
      },
      {
        type: "image",
        src: "/images/work/cerasync/poster-6.jpg",
        alt: "CeraSync poster 6",
      },
    ],
  },
  {
    slug: "meet",
    title: "Meet - Investigation, App Design",
    category: "App Design",
    tags: ["Brand", "Graphic design", "Icon design"],
    sections: [
      { type: "heading", content: "The Idea", level: 3 },
      { type: "hr" },
      {
        type: "image",
        src: "/images/work/meet/hero.png",
        alt: "Meet app concept",
      },
      {
        type: "text",
        content:
          "Introducing Meet: The social networking app where friendships and connections are made in groups.",
      },
      {
        type: "text",
        content:
          "Join with your friends to create a team profile showcasing your personality, interests, and music tastes. Browse other friend groups and match as two groups based on mutual interests. Once matched, engage in group chats and schedule meetups using calendar availability, with the app suggesting activities and locations based on everyone's preferences.",
      },
      {
        type: "text",
        content:
          "Say goodbye to awkward one-on-one dates and hello to a more natural and safer way to build up connections with Meet.",
      },
      { type: "heading", content: "Competitor Research and Process", level: 3 },
      { type: "hr" },
      {
        type: "text",
        content: "The full research and competitor analysis is available as a PDF document.",
      },
      { type: "heading", content: "Consumer Psychology adapted on Meet", level: 3 },
      { type: "hr" },
      {
        type: "text",
        content: "Consumer psychology research adapted for the Meet app is available as a PDF document.",
      },
    ],
  },
  {
    slug: "pickup",
    title: "Pick Up - App Design",
    category: "App Design",
    tags: ["UI/UX", "Icon design", "Brand", "Marketing"],
    sections: [
      {
        type: "image",
        src: "/images/work/pickup/hero.png",
        alt: "Pick Up hero",
      },
      { type: "heading", content: "App Design", level: 2 },
      { type: "hr" },
      {
        type: "image-grid",
        images: [
          { src: "/images/work/pickup/app-1.png", alt: "Pick Up app screen 1" },
          { src: "/images/work/pickup/app-2.png", alt: "Pick Up app screen 2" },
          { src: "/images/work/pickup/app-3.png", alt: "Pick Up app screen 3" },
          { src: "/images/work/pickup/app-4.png", alt: "Pick Up app screen 4" },
        ],
      },
      { type: "heading", content: "Logo Design", level: 2 },
      { type: "hr" },
      {
        type: "image-row",
        images: [
          { src: "/images/work/pickup/logo-1.png", alt: "Pick Up logo 1" },
          { src: "/images/work/pickup/logo-2.png", alt: "Pick Up logo 2" },
        ],
      },
      {
        type: "image-row",
        images: [
          { src: "/images/work/pickup/logo-3.png", alt: "Pick Up logo 3" },
          { src: "/images/work/pickup/logo-4.png", alt: "Pick Up logo 4" },
        ],
      },
      { type: "heading", content: "The Process", level: 3 },
      { type: "hr" },
      {
        type: "text",
        content:
          "The designs were done in the timespan of one week. I moved fast and neglected componizing as well as auto layout to create the first draft.",
      },
    ],
  },
  {
    slug: "art",
    title: "Art",
    category: "Art & Illustration",
    tags: ["Linolprint", "Acryl", "Watercolour"],
    link: "https://www.instagram.com/yllilpaintings/",
    sections: [
      {
        type: "text",
        content: "A few of my artworks.",
      },
      { type: "hr" },
      {
        type: "image-grid",
        images: [
          { src: "/images/work/art/acryl-canvas.png", alt: "Acryl on canvas" },
          { src: "/images/work/art/pen-drawing.png", alt: "Pen drawing" },
          { src: "/images/work/art/pen.jpg", alt: "Pen" },
          { src: "/images/work/art/watercolour.png", alt: "Watercolour" },
          { src: "/images/work/art/oil-canvas.jpg", alt: "Oil on canvas" },
          { src: "/images/work/art/linolprint.jpg", alt: "Linolprint" },
          { src: "/images/work/art/watercolour-pen.png", alt: "Watercolour and pen" },
          { src: "/images/work/art/acryl.png", alt: "Acryl" },
        ],
      },
    ],
  },
];
