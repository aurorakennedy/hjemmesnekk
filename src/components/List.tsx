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
    <div className="px-32 pt-20 text-center">
      <ul className="flex flex-wrap justify-center gap-8">
        {items.map((item, index) => (
          <li key={index} className="mb-10">
            <a
              className=" font-quicksand hover:text-pink-600 mb-10"
              href={item.url}
            >
              {item.navn}
              <img
                className="h-96 w-72 rounded-lg transition-transform transform "
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
