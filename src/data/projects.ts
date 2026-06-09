export interface ProjectSection {
  type:
    | "text"
    | "heading"
    | "image"
    | "image-grid"
    | "image-row"
    | "details"
    | "pdf-link"
    | "pdf-embed"
    | "video"
    | "hr"
    | "link-card"
    | "list"
    | "html";
  content?: string;
  src?: string;
  alt?: string;
  poster?: string;
  small?: boolean;
  images?: { src: string; alt: string }[];
  items?: string[];
  ordered?: boolean;
  level?: 1 | 2 | 3;
  href?: string;
  summary?: string;
  children?: ProjectSection[];
  title?: string;
  description?: string;
  url?: string;
  iconSrc?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  link?: string;
  thumbnail?: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "gls",
    title: "GLS - App Design, UI/UX, Web Design",
    category: "Product Design",
    tags: ["App Design", "ID", "UI/UX", "Web design", "research"],
    link: "https://www.glsnxt.com/",
    thumbnail: "/images/work/gls/hero.png",
    sections: [
      {
        type: "image",
        src: "/images/work/gls/hero.png",
        alt: "GLS Map",
      },
      {
        type: "video",
        src: "/images/work/gls/screen-recording.mov",
      },
      { type: "heading", content: "Project Overview", level: 3 },
      { type: "hr" },
      {
        type: "text",
        content:
          "As part of GLS/NXT's mission to deliver a seamless and delightful parcel experience, I led the redesign and migration of the OOH Location Map from a fragmented legacy Joomla implementation to a unified, native GLS web module. This new map serves as the single source of truth for all OOH locations (ParcelShops and Lockers), aligning web and mobile experiences and enabling faster iteration, consistent branding, and improved usability.",
      },
      { type: "heading", content: "My Role & Process", level: 3 },
      { type: "hr" },
      {
        type: "text",
        content:
          "User Research & Problem Framing: Collaborated with product, engineering, and support teams to understand pain points, user journeys, and business needs. Synthesized findings into actionable insights and design principles.",
      },
      {
        type: "text",
        content:
          "Design System Integration: Leveraged and contributed to the GLS/NXT design system, ensuring reusable components, accessibility, and a single source of truth for UI patterns. Worked closely with developers to align Figma components and Storybook implementations, reducing duplication and improving maintainability.",
      },
      {
        type: "text",
        content:
          "UX/UI Design: Designed an interactive map module featuring OOH pins with distinct icons for ParcelShops and Lockers, map controls (zoom, recenter, user location with permission fallback), search functionality, combined map + list results panel, filter panel with persistent state, and a rich location detail view with opening hours, directions, and a report-a-problem entry point.",
      },
      {
        type: "text",
        content:
          "Collaboration & Handover: Maintained close communication with developers, using Figma overview screens and Storybook as living documentation. Ensured all edge cases and states were documented for smooth implementation and QA.",
      },
      {
        type: "text",
        content:
          "Analytics & Validation: Defined tracking hooks for search, filter, location detail, and directions actions to measure success and inform future iterations.",
      },
      {
        type: "image",
        src: "/images/work/gls/desktop-overview.png",
        alt: "GLS Map desktop overview",
      },
      {
        type: "image-row",
        images: [
          { src: "/images/work/gls/map-default.png", alt: "Map default state" },
          { src: "/images/work/gls/list-expanded.png", alt: "Parcelshop and locker list" },
          { src: "/images/work/gls/locker-info.png", alt: "Locker detail with capacity" },
        ],
      },
      { type: "heading", content: "Prototype", level: 3 },
      { type: "hr" },
      {
        type: "video",
        src: "/images/work/gls/prototype.mov",
        alt: "GLS Map prototype recording",
      },
      {
        type: "video",
        src: "/images/work/gls/prototype-2.mov",
        alt: "GLS Map screen recording",
        small: true,
      },
      { type: "heading", content: "The Design", level: 3 },
      { type: "hr" },
      {
        type: "link-card",
        title: "GLS Map on Figma",
        description: "View the full design in Figma",
        url: "https://www.figma.com/design/D54vUmK2bO4lUF6VD0N14y/Map?node-id=1056-55193&t=rQPRwy28xot8SKLK-1",
        iconSrc: "/globe.svg",
      },
    ],
  },
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
      { type: "heading", content: "Figma", level: 3 },
      { type: "hr" },
      {
        type: "pdf-embed",
        src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FkRtqdrgFKvIzqByNachMMv%2FDashboard-Project%3Fnode-id%3D3-2%26t%3D2MZeJ2KFR3Ovtyj4-1",
        alt: "Buena dashboard Figma file",
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
      {
        type: "video",
        src: "/Screen_Recording_2025-02-18_at_14.20.26.mov",
        alt: "Owners Meeting (ETV) flow screen recording",
      },
      {
        type: "pdf-embed",
        src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FKxXvimZYiIgMVAiQtEl4Yy%2FSnail-Mail%3Fnode-id%3D1-5106%26t%3DH2eIB0vkVP7jvTxx-1",
        alt: "Snail Mail Figma file",
      },
      {
        type: "pdf-embed",
        src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Fkikg6MnsrhbYAUm2xxiSUv%2FETV%3Fnode-id%3D1739-8263%26t%3DnDwvQxUWGs23jbhD-1",
        alt: "ETV Figma file",
      },
      { type: "heading", content: "Graphic Design", level: 3 },
      { type: "hr" },
      {
        type: "pdf-embed",
        src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Ftvwj9Eg2sIIZtOPjgjySni%2FLogo--Brand-Assests%3Fnode-id%3D554-2%26p%3Df%26t%3DLp6L8UPDxAXkXZhQ-0",
        alt: "Logo & Brand Assets Figma file",
      },
    ],
  },
  {
    slug: "wondernest",
    title: "Wondernest - Web Development, Animation, Branding",
    category: "Brand & Development",
    tags: ["Brand", "Marketing", "Brand Book", "Logo Animation"],
    link: "https://wondernest.net/",
    sections: [
      {
        type: "image",
        src: "/images/work/wondernest/hero.png",
        alt: "Wondernest website",
      },
      { type: "heading", content: "Logo Animation", level: 3 },
      { type: "hr" },
      {
        type: "video",
        src: "/Wondernest_Logo.mp4",
        poster: "/images/work/wondernest/hero.png",
        alt: "",
      },
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
      {
        type: "pdf-embed",
        src: "https://wondernest-express.onrender.com/",
        alt: "Wondernest live website",
      },
      {
        type: "link-card",
        title: "Wondernest",
        description:
          "Host, organize, and attend small in-person events, which focus on genuine connections, enhancing social lives in big cities",
        url: "https://wondernest-express.onrender.com/",
        iconSrc: "/globe.svg",
      },
      { type: "heading", content: "Brand Book", level: 3 },
      { type: "hr" },
      {
        type: "pdf-embed",
        src: "https://www.canva.com/design/DAGD6NH4CFU/HoRAWwIsxg-x17QGnuCaUg/view?embed",
        alt: "Wondernest Brand Book - Lilly Wallawitsch",
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
        src: "/Cerasyn.png",
        alt: "CeraSync landing page overview",
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
    slug: "ubuntu-groove",
    title: "Ubuntu Groove - App Design",
    category: "App Design",
    tags: ["App Design", "Brand", "UI/UX"],
    link: "https://www.figma.com/design/BzVMb2C9XwcF8BXVaa96Qn/Design-History?node-id=13-8499&t=Rlu1b9BBOm0pZluO-1",
    thumbnail: "/images/work/ubuntu-groove/hero.png",
    sections: [
      {
        type: "image",
        src: "/images/work/ubuntu-groove/hero.png",
        alt: "Ubuntu Groove hero",
      },
      { type: "heading", content: "Ubuntu Groove", level: 3 },
      { type: "hr" },
      {
        type: "text",
        content:
          "Ubuntu Groove reimagines Apple Music as a vibrant, community-focused platform. Afrofuturist colors, bold typography, and integrated social features transform music discovery into a collaborative, culturally rich experience, shifting from individualism to collective creativity and celebration.",
      },
      { type: "heading", content: "App Design", level: 3 },
      { type: "hr" },
      {
        type: "image-row",
        images: [
          { src: "/images/work/ubuntu-groove/explore.png", alt: "Explore screen" },
          { src: "/images/work/ubuntu-groove/remix.png", alt: "Remix screen" },
        ],
      },
      { type: "heading", content: "Figma", level: 3 },
      { type: "hr" },
      {
        type: "link-card",
        title: "Ubuntu Groove on Figma",
        description: "View the full design in Figma",
        url: "https://www.figma.com/design/BzVMb2C9XwcF8BXVaa96Qn/Design-History?node-id=13-8499&t=Rlu1b9BBOm0pZluO-1",
        iconSrc: "/globe.svg",
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
        src: "/Meet wireframing.png",
        alt: "Meet app wireframing screens",
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
        type: "pdf-embed",
        src: "/Meet.Lilly_Wallawitsch.pdf",
        alt: "Meet – Competitor Research and Process",
      },
      { type: "heading", content: "Consumer Psychology adapted on Meet", level: 3 },
      { type: "hr" },
      {
        type: "pdf-embed",
        src: "/PM_11 Cosumer Psychology-Lilly Wallawitsch.pdf",
        alt: "Consumer Psychology adapted on Meet - PDF",
      },
    ],
  },
  {
    slug: "pickup",
    title: "Pick Up - App Design",
    category: "App Design",
    tags: ["UI/UX", "Icon design", "Brand", "Marketing"],
    thumbnail: "/Pick Up - App Design 0.png",
    sections: [
      {
        type: "image",
        src: "/Pick Up - App Design 0.png",
        alt: "Pick Up app overview",
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
          { src: "/pick up logo black logo.png", alt: "Pick Up black logo" },
          { src: "/pick up logo black arrow.png", alt: "Pick Up black arrow icon" },
        ],
      },
      {
        type: "image-row",
        images: [
          { src: "/pick up logo purple logo.png", alt: "Pick Up purple logo" },
          { src: "/pick up logo purple arrow.png", alt: "Pick Up purple arrow icon" },
        ],
      },
      { type: "heading", content: "The Process", level: 3 },
      { type: "hr" },
      {
        type: "text",
        content:
          "The designs were done in the timespan of one week. I moved fast and neglected componizing as well as auto layout to create the first draft.",
      },
      {
        type: "pdf-embed",
        src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FDCVMfUCvkRXZTkfGiBYcmO%2FPick-Up%3Fnode-id%3D0-1%26p%3Df%26t%3DblWO4auB6BApRX8P-0",
        alt: "Pick Up Figma file",
      },
    ],
  },
  {
    slug: "art",
    title: "Art",
    category: "Art & Illustration",
    tags: ["Linolprint", "Acryl", "Watercolour"],
    link: "https://www.instagram.com/yllilpaintings/",
    thumbnail: "/artworks.surrender.png",
    sections: [
      {
        type: "image",
        src: "/artworks.surrender.png",
        alt: "Artworks – Surrender painting",
      },
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
  {
    slug: "design-ai",
    title: "Design + AI",
    category: "Blog",
    tags: ["AI", "Design Systems", "Design Engineering"],
    thumbnail: "/images/work/design-ai/hero.png",
    sections: [
      { type: "image", src: "/images/work/design-ai/hero.png", alt: "Design + AI" },
      { type: "heading", level: 1, content: "Pair-Designing With AI: How I Actually Work as a Design Engineer" },
      { type: "text", content: `I'm a designer maintaining a design system at scale. Over the past few months I've shifted most of my workflow to be AI-collaborative, not "AI generates designs for me," but a deeper, more architectural partnership.` },

      { type: "heading", level: 2, content: "The shift" },
      { type: "hr" },
      { type: "text", content: "Design systems are mostly NOT about pixels. They're about consistency at scale: thousands of bindings, hundreds of components, dozens of token decisions that need to stay aligned. The kind of work that, done by hand, would take weeks and still have leaks." },
      { type: "text", content: `Claude isn't great at creating new components or designs from scratch, and that's not the point. It's great at querying every component in seconds, spotting inconsistencies, executing bulk rebinds, and migrating tokens with precision. So instead of asking it to "design a button," I ask it to do the work I'd never have the patience to do manually.` },

      { type: "heading", level: 2, content: "My actual workflow" },
      { type: "hr" },
      { type: "html", content: `<p><strong>1. I notice something feels off.</strong> "Surface/action-subtle is invisible on white." "Why does the icon look darker than the text?"</p>` },
      { type: "html", content: `<p><strong>2. I describe the issue in plain language.</strong> No pre-diagnosis. I describe what I'm seeing; Claude reverse-engineers the technical cause.</p>` },
      { type: "html", content: `<p><strong>3. Claude inspects first, then proposes.</strong> Before changing anything, it queries contrast ratios, bindings, usage counts, then lays out 2–4 options with trade-offs.</p>` },
      { type: "html", content: `<p><strong>4. I pick a direction.</strong> The decision stays mine. Claude is execution-rich; I know what the product needs.</p>` },
      { type: "html", content: `<p><strong>5. Claude executes, and I verify.</strong> Bulk rebinds, mass renames, file-wide audits. Then I look at the actual file. Always.</p>` },

      { type: "heading", level: 2, content: "Things I've learned" },
      { type: "hr" },
      { type: "html", content: `<p><strong>Ask before deleting.</strong> Standing instruction: "ask me before you delete or change something always." One rule, dozens of disasters prevented.</p>` },
      { type: "html", content: `<p><strong>Be honest about the boundary.</strong> Claude can't load every font or click in the UI. We split the work: Claude preps (12 style shells with correct names + bindings); I do the manual flip.</p>` },
      { type: "html", content: `<p><strong>Audit first.</strong> How many uses? What's the contrast ratio? What's the cascading effect? I used to change typography by feel; now I do it with usage data.</p>` },

      { type: "heading", level: 2, content: `What "design engineering" means to me now` },
      { type: "hr" },
      { type: "html", content: `<ul><li>I work at the <strong>variable layer</strong>, every text node binds to a variable, one collection, no pile of hex codes</li><li>Claude generates <strong>Code Connect mappings</strong>, <code>.figma.tsx</code> files ready for the uikit repo</li><li>Tokens Studio exports JSON; the build pipeline picks it up, handoff is almost trivial</li><li>My <strong>Storybook for <code>@gls-nxt/uikit</code> is synced with Claude Code</strong>, so the same model that audits my Figma file also knows what the live React components look like, how they're named, what props they expose. When I rename or restructure something in design, Claude can flag the code-side implications without me cross-referencing manually.</li><li>Documentation lives in the file: Changelog, descriptions, Typography showcase, Claude writes the changelog from each session</li></ul>` },
      { type: "image", src: "/images/work/design-ai/vibe-coded-storybook.png", alt: "Vibe coded Storybook synced with Claude" },
      { type: "html", content: `<p>The bottleneck isn't translating designs to code anymore. It's <strong>making good design decisions</strong>. The Figma file, the uikit repo, and the Storybook are all readable by the same AI, and the AI keeps them aligned. Naming drift, prop drift, and "designed-but-never-implemented" stop being separate problems to chase down.</p>` },

      { type: "heading", level: 2, content: "Honest about the limits" },
      { type: "hr" },
      { type: "html", content: `<p><strong>Claude can't:</strong> aesthetic judgment, product intuition, stakeholder negotiation, final QA in the product.</p>` },
      { type: "html", content: `<p><strong>Claude does (and I won't do by hand again):</strong> file-wide audits (5,879 text nodes in seconds), bulk token migrations (12,000+ bindings), cross-file consistency checks, changelog writing, usage stats before pruning.</p>` },

      { type: "heading", level: 2, content: "The mental model" },
      { type: "hr" },
      { type: "text", content: `Treat the AI like a very fast, very literal coworker who has your facts but not your taste, asks great questions if trained to, and should NOT be trusted with strategy. The unlock: "I don't know, let me ask Claude to inspect before I change it."` },

      { type: "heading", level: 2, content: "Example: swapping our entire icon library" },
      { type: "hr" },
      { type: "html", content: `<p>~160 custom icons, inconsistent strokes and naming, engineers building a parallel set in code. I wanted Lucide, 1,500+ icons, consistent 2px strokes, importable via <code>lucide-react</code>. Weeks of work if anyone had found the time.</p>` },
      { type: "html", content: `<ol><li><strong>Inventory</strong>, usage map in a minute: what's used, what's dead, what's duplicated</li><li><strong>Mapping table</strong>, Claude proposed Lucide equivalents (~75% correct first pass); I called the ambiguous ones</li><li><strong>Import</strong>, 1,460 Lucide icons, namespaced under <code>Lucide/</code>, one pass</li><li><strong>Mass swap</strong>, ~1,500 instance swaps across buttons, alerts, nav, forms</li><li><strong>Keep GLS-specific icons</strong>, parcelLocker, Last-Mile, brand logos, separate <code>GLS/</code> namespace</li><li><strong>Update icon-wrapper preferred values</strong>, usable icons in the dropdown, not 1,500 to scroll through</li><li><strong>Code Connect</strong>, Figma icons map to real <code>lucide-react</code> imports in Dev Mode</li></ol>` },
      { type: "text", content: "One afternoon. By morning: 1,460 production-ready icons, code-importable, clean namespace separation. Three weeks by hand; one session with Claude." },

      { type: "heading", level: 2, content: "Closing the loop: automating the broadcast" },
      { type: "hr" },
      { type: "text", content: "The work is one half. The other half is telling the team what changed." },
      { type: "text", content: "For a long time that was the part that broke. I'd finish a token migration on a Wednesday afternoon and forget to write the changelog, or write it three days later when half the context had evaporated. Engineers using the DS would learn about a breaking token rename by hitting the broken build, not by reading a message." },
      { type: "text", content: "This week I closed the loop. Now the same Claude session that does the work also publishes it:" },
      { type: "html", content: `<ol><li>I say <code>publish DS update</code></li><li>Claude reads the session's task list, every audit, rebind, deletion, addition we did</li><li>It drafts a Slack message in the team's voice, headline, bulleted changes, who's affected, link to the Figma file</li><li>It drafts a row for the Figma Changelog page using the existing table format</li><li>I review both drafts in one turn</li><li>On "yes", Slack message posts to <code>#design-system-sync</code>, and the Changelog row appends to the Figma file</li></ol>` },
      { type: "image-row", images: [
        { src: "/images/work/design-ai/changelog.png", alt: "Figma Changelog" },
        { src: "/images/work/design-ai/slack.png", alt: "Slack message" },
      ]},
      { type: "text", content: `The whole "publish" step takes 90 seconds. Before, it would either not happen at all, or take 20 minutes of context-switching to write up half a day later when I no longer remembered the details.` },
      { type: "text", content: `What this unlocked: I stopped batching announcements. Now every session that touches the DS publishes itself. The team's mental model of "what's in the system today" stays current because the broadcast cost dropped to near-zero.` },
      { type: "text", content: `This is the meta-move I'm most excited about. The first level of automation was getting Claude to do my bulk work. The second level is getting it to handle the workflow around the bulk work, the boring administrative bookkeeping that exists between "thing is done" and "team knows about it."` },
      { type: "text", content: "If you're a designer maintaining a system, this is the layer to automate next. The work isn't done until people know it's done." },

      { type: "heading", level: 2, content: "Closing thought" },
      { type: "hr" },
      { type: "text", content: "I still draw, pixel-push, and argue about CSS. But the rote migration work, changelog writing, and typography audits are done by the time I've finished my coffee." },
      { type: "text", content: `If you're a designer thinking "I'd love to do that audit but it'd take three weeks", that's the work to bring to AI first. You'll get it done by Tuesday.` },
    ],
  },
  {
    slug: "xdesign-hackathon",
    title: "XDesign Hackathon",
    category: "Hackathon",
    tags: ["UX/UI", "Hackathon"],
    thumbnail: "/images/work/xdesign-hackathon/hero.png",
    sections: [
      {
        type: "image",
        src: "/images/work/xdesign-hackathon/hero.png",
        alt: "XDesign Hackathon",
      },
    ],
  },
  {
    slug: "aurea-hacker-house",
    title: "Aurea Hacker House",
    category: "Hackathon",
    tags: ["UX/UI", "Hackathon"],
    thumbnail: "/images/work/aurea-hacker-house/hero.png",
    sections: [
      {
        type: "image",
        src: "/images/work/aurea-hacker-house/hero.png",
        alt: "Aurea Hacker House",
      },
    ],
  },
];
