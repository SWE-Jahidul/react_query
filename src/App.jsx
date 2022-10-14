import "./App.css";
import { QueryClientProvider,QueryClient } from 'react-query';
import { SuperHerosPage } from "./components/SuperHero.page";
import { RQSuperHerosPage } from "./components/RQSuperHeros.page";
import { HomePage } from "./components/Home.page";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const queryClinet = new QueryClient()
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <nav>
            <ul>
              <li>
                <Link to="home"> Home </Link>
              </li>

              <li>
                <Link to="super-heros"> Traditional Super Heroes </Link>
              </li>

              <li>
                <Link to="rq-super-heroes"> RQ Super Heroes </Link>
              </li>
            </ul>
          </nav>
        </div>
      ),
    },
    {
      path: "home",
      element: <HomePage />,
    },
    {
      path: "super-heros",
      element: <SuperHerosPage />,
    },

    {
      path: "rq-super-heroes",
      element: <RQSuperHerosPage />,
    },
  ]);

  createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClinet}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    
  );
}

export default App;
