import { FunctionComponent } from "react";
import { listCoffee } from "../api";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const ListCoffee: FunctionComponent = () => {
  const listCoffeeQuery = useQuery({
    queryKey: ["coffee"],
    queryFn: listCoffee,
  });

  if (listCoffeeQuery.isLoading) return <div>Loading...</div>;
  if (!listCoffeeQuery.isSuccess)
    return (
      <details>
        <summary>Something went wrong</summary>
        {listCoffeeQuery.error?.message}
      </details>
    );

  return (
    <div>
      <h2 className="mb-8 border-b text-lg font-semibold text-gray-900">
        List of coffees
      </h2>
      <ul className="list-inside list-disc">
        {listCoffeeQuery.data.map((coffee) => (
          <li key={coffee.id}>
            <Link
              to={`/coffee/${coffee.id}/edit`}
              className="underline transition-colors hover:text-blue-700"
            >
              {coffee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCoffee;
