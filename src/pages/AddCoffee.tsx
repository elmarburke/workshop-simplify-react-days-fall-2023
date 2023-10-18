import { FunctionComponent } from "react";
import Field from "../components/Field";
import Input from "../components/Input";

const AddCoffee: FunctionComponent = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2>Add a new coffee to the database</h2>
      <form className="flex max-w-xl flex-col space-y-4">
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
          <Input type="text" required name="origin" placeholder="Kenia" />
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
      </form>
    </div>
  );
};

export default AddCoffee;
