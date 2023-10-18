import { FunctionComponent } from "react";
import { listCoffee } from "../api";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Disclosure from "../components/Disclosure";
import { buttonClassName } from "../components/Button";

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

      <div className="space-y-4">
        {listCoffeeQuery.data.map((coffee) => (
          <Disclosure
            key={coffee.id}
            className="open:pb-4"
            summary={coffee.name}
          >
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Origin:</span> {coffee.origin}
              </div>
              <div>
                <span className="font-semibold">Taste Notes:</span>{" "}
                {coffee.tasteNotes.join(", ")}
              </div>
              <div>
                <Link
                  className={`${buttonClassName({ size: "xs" })}`}
                  to={`/coffee/${coffee.id}/edit`}
                >
                  Edit coffee
                </Link>
              </div>
            </div>
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default ListCoffee;
