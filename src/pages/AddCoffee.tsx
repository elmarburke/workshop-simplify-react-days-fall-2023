import { FunctionComponent, useId } from "react";
import Field from "../components/Field";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { Coffee, addCoffee, coffeeSchema } from "../api";
import { useMutation } from "@tanstack/react-query";
import Button from "../components/Button";

const AddCoffee: FunctionComponent = () => {
  const navigate = useNavigate();
  const addCoffeeMutation = useMutation({
    mutationKey: ["coffee"],
    mutationFn: (coffee: Coffee) => addCoffee(coffee),
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      ...Object.fromEntries(formData.entries()),
      tasteNotes: formData
        .get("tasteNotes")
        ?.toString()
        .split(",")
        .map((tasteNote) => tasteNote.trim()),
    };

    const value = coffeeSchema.safeParse(data);

    if (!value.success) {
      alert(`Error: ${value.error ?? "Unknown error"}`);
      return;
    }

    addCoffeeMutation.mutate(value.data);
  };

  const formId = useId();
  const originId = `${formId}-origin`;

  return (
    <div>
      <h2>Add a new coffee to the database</h2>
      <form className="max-w-xl space-y-8" onSubmit={handleSubmit}>
        <Field label="Id">
          <Input type="text" required name="id" placeholder="kenya-kii" />
        </Field>

        <Field label="Name">
          <Input type="text" required name="name" placeholder="Kenya KII" />
        </Field>

        <Field label="Taste Notes">
          <Input
            type="text"
            required
            name="tasteNotes"
            placeholder="blueberry, honey, floral"
          />
        </Field>

        <Field label="Origin">
          <Input
            list={originId}
            type="text"
            required
            name="origin"
            placeholder="Kenia"
          />

          <datalist id={originId}>
            <option value="Kenia" />
            <option value="Ethiopia" />
            <option value="Colombia" />
            <option value="Costa Rica" />
            <option value="Berlin" />
          </datalist>
        </Field>

        <Field label="Region">
          <Input
            type="text"
            required
            name="region"
            placeholder="Kirinyaga County"
          />
        </Field>

        <Field label="Farm">
          <Input
            type="text"
            required
            name="farm"
            placeholder="Rung'eto Cooperative Society"
          />
        </Field>

        <Field label="Process">
          <Input type="text" required name="process" placeholder="washed" />
        </Field>

        <Field label="Altitude in metre">
          <Input type="text" required name="altitude" placeholder="1700" />
        </Field>

        <div className="flex space-x-4">
          <Button type="submit">Add coffee</Button>
          <Button variant="secondary" type="reset">
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
