import { z } from "zod";

const apiHost = "http://localhost:3000";

export const coffeeSchema = z.object({
  id: z.string(),
  name: z.string(),
  tasteNotes: z.array(z.string()),
  origin: z.string(),
  region: z.string(),
  farm: z.string(),
  process: z.string(),
  altitude: z.string(),
});

export type Coffee = z.infer<typeof coffeeSchema>;

const listCoffeeSchema = z.array(coffeeSchema);

export const listCoffee = async () => {
  const response = await fetch(`${apiHost}/coffee`);
  const data = await response.json();
  return listCoffeeSchema.parse(data);
};

export const addCoffee = async (coffee: Coffee) => {
  const response = await fetch(`${apiHost}/coffee`, {
    method: "POST",
    body: JSON.stringify(coffee),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return coffeeSchema.parse(data);
};

export const updateCoffee = async (coffee: Coffee) => {
  const response = await fetch(`${apiHost}/coffee/${coffee.id}`, {
    method: "PUT",
    body: JSON.stringify(coffee),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return coffeeSchema.parse(data);
};

export const getCoffee = async (id: string) => {
  const response = await fetch(`${apiHost}/coffee/${id}`);
  const data = await response.json();
  return coffeeSchema.parse(data);
};
