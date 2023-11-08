import LinksList from "./LinksList";

const columns = [
  {
    title: "Services",
    links: [
      { name: "Branding", slug: "branding" },
      { name: "Design", slug: "design" },
      { name: "Marketing", slug: "marketing" },
      { name: "Advertisement", slug: "advertisement" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", slug: "about-us" },
      { name: "Contacts", slug: "contacts" },
      { name: "Jobs", slug: "jobs" },
      { name: "Press Kit", slug: "press-kit" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Use", slug: "Terms of Use" },
      { name: "Privicy Policy", slug: "Privicy Policy" },
      { name: "Cookie Policy", slug: "Cookie Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral p-10 text-neutral-content">
      <h2 className="sr-only">Footer</h2>
      <div className="footer mx-auto max-w-7xl">
        {columns.map((column) => (
          <LinksList
            key={`column-${column.title}`}
            title={column.title}
            links={column.links}
          />
        ))}
      </div>
    </footer>
  );
}
