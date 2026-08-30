import "./List.css";

interface List {
  url?: string;
  navn?: string;
  bilde: string;
}

interface ListProps {
  items: List[];
  imgClassName?: string;
}

function List({ items, imgClassName }: ListProps) {
  return (
    <div className="list">
      <ul className="list-items">
        {items.map((item, index) => (
          <li key={index}>
            <a className="list-link" href={item.url}>
              {item.navn}
              <img
                className={`list-img ${imgClassName ?? "list-img-default"}`}
                src={item.bilde}
                alt={`Bilde av ${item.navn}`}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
