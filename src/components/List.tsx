interface Venn {
  url: string;
  navn: string;
  bilde: string;
}

interface ListProps {
  items: Venn[];
}

function List({ items }: ListProps) {
  return (
    <div className=" text-center">
      <ul className="flex flex-row justify-center gap-8">
        {items.map((venn, index) => (
          <li key={index}>
            <a className="font-mono hover:text-pink-600 mb-10" href={venn.url}>
              {venn.navn}
              <img
                className="h-64 rounded-lg transition-transform transform hover:scale-105"
                src={venn.bilde}
                alt={`Bilde av ${venn.navn}`}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
