import Link from "next/link";

interface LinksListProps {
  title: string;
  links: {
    name: string;
    slug: string;
  }[];
}

export default function LinksList({ title, links }: LinksListProps) {
  return (
    <ul>
      <li>
        <h3 className="footer-title">{title}</h3>
      </li>
      {links.map((link) => (
        <li
          key={`${title.toLocaleLowerCase()}-${link.name.toLocaleLowerCase()}`}
        >
          <Link href={link.slug} className="link-hover link">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
