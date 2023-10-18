import { FunctionComponent } from "react";
import Field from "../components/Field";
import Input from "../components/Input";
import { Coffee, coffeeSchema, getCoffee, updateCoffee } from "../api";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

const EditCoffee: FunctionComponent = () => {
  const { coffeeId } = useParams();
  if (!coffeeId) throw new Error("Missing coffeeId");

  const navigate = useNavigate();

  const coffeeQuery = useQuery({
    queryKey: ["coffee", coffeeId],
    queryFn: () => getCoffee(coffeeId),
  });

  const updateMutation = useMutation({
    mutationKey: ["coffee", coffeeId],
    mutationFn: (coffee: Coffee) => updateCoffee(coffee),
    onSuccess: () => {
      console.log("navigate away");
      navigate("/");
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      id: coffeeId,
      name: formData.get("name"),
      tasteNotes: formData
        .get("tasteNotes")
        ?.toString()
        .split(",")
        .map((tasteNote) => tasteNote.trim()),
      origin: formData.get("origin"),
      region: formData.get("region"),
      farm: formData.get("farm"),
      process: formData.get("process"),
      altitude: formData.get("altitude"),
    };

    console.log(data);

    try {
      const validData = coffeeSchema.parse(data);
      updateMutation.mutate(validData);
    } catch (error) {
      alert(`Error: ${error ?? "Unknown error"}`);
    }
  };

  if (coffeeQuery.isLoading) return <div>Loading...</div>;
  if (!coffeeQuery.isSuccess)
    return (
      <details>
        <summary>Something went wrong</summary>
        {coffeeQuery.error?.message}
      </details>
    );

  if (updateMutation.isError)
    return (
      <div>
        <details>
          <summary>Something went wrong</summary>
          {updateMutation.error?.message}
        </details>
        <Button
          onClick={() => {
            updateMutation.reset();
          }}
        >
          Go back
        </Button>
      </div>
    );

  return (
    <div className="mx-auto max-w-xl">
      <h2 className="mb-8 border-b text-lg font-semibold text-gray-900">
        Add a new coffee to the database
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Field label="Name">
          <Input
            type="text"
            required
            name="name"
            placeholder="Kenya KII"
            defaultValue={coffeeQuery.data.name}
          />
        </Field>

        <Field label="Taste Notes">
          <Input
            type="text"
            required
            name="tasteNotes"
            placeholder="blueberry, honey, floral"
            defaultValue={coffeeQuery.data.tasteNotes.join(", ")}
          />
        </Field>

        <Field label="Origin">
          <Input
            type="text"
            required
            name="origin"
            placeholder="Kenia"
            defaultValue={coffeeQuery.data.origin}
          />
        </Field>

        <Field label="Region">
          <Input
            type="text"
            required
            name="region"
            placeholder="Kirinyaga County"
            defaultValue={coffeeQuery.data.region}
          />
        </Field>

        <Field label="Farm">
          <Input
            type="text"
            required
            name="farm"
            placeholder="Rung'eto Cooperative Society"
            defaultValue={coffeeQuery.data.farm}
          />
        </Field>

        <Field label="Process">
          <Input
            type="text"
            required
            name="process"
            placeholder="washed"
            defaultValue={coffeeQuery.data.process}
          />
        </Field>

        <Field label="Altitude in metre">
          <Input
            type="text"
            required
            name="altitude"
            placeholder="1700"
            defaultValue={coffeeQuery.data.altitude}
          />
        </Field>

        <Button type="submit" disabled={updateMutation.isPending}>
          Update coffee
        </Button>
      </form>
    </div>
  );
};

export default EditCoffee;
