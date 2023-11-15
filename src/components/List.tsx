interface List {
  url?: string;
  navn: string;
  bilde: string;
}

interface ListProps {
  items: List[];
}

function List({ items }: ListProps) {
  return (
    <div className="font-quicksand text-center">
      <ul className="flex flex-row flex-wrap justify-center gap-8">
        {items.map((item, index) => (
          <li key={index}>
            <a className="hover:text-pink-600 " href={item.url}>
              {item.navn}
              <img
                className="h-96 w-72 rounded-lg object-cover"
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
