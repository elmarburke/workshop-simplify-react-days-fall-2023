import { FunctionComponent } from "react";
import ListCoffee from "./pages/ListCoffee";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditCoffee from "./pages/EditCoffee";
import AppLayout from "./components/AppLayout";
import AddCoffee from "./pages/AddCoffee";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ListCoffee />,
      },
      {
        path: "/coffee/:coffeeId/edit",
        element: <EditCoffee />,
      },
      {
        path: "/coffee/add",
        element: <AddCoffee />,
      },
    ],
  },
]);

const App: FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
