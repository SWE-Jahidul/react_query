import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { SuperHerosPage } from "./components/SuperHero.page";
import { RQSuperHerosPage } from "./components/RQSuperHeros.page";
import { HomePage } from "./components/Home.page";
import { ReactQueryDevtools } from "react-query/devtools";

import { RQSuperHeroPage } from "./components/RQSuperHero.page";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { ParallelQueriesQueriesPage } from "./components/ParallelQueries.page";
import { DynamicParallelPage } from "./components/DynamicParallel.page";
import { DependentQueriesPage } from "./components/DependentQuerie.page";
import { PaginatedQueriesPage } from "./components/PaginateQueryPage";
import { InfinateQueriesPage } from "./components/InfiniteQueries";

const queryClinet = new QueryClient();
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
      path: "infinitequeries",
      element: <InfinateQueriesPage />,
    },


    {
      path: "rq-pagination",
      element: <PaginatedQueriesPage />,
    },

    {
      path: "rq-super-heroes",
      element: <RQSuperHerosPage />,
    },

    {
      path: "rq-depedent",
      element: <DependentQueriesPage email="vishwas@example.com" />,
    },

    {
      path: "rq-dynamic-parallel",
      element: <DynamicParallelPage heroId={[1, 3]} />,
    },

    {
      path: "rq-parallel",
      element: <ParallelQueriesQueriesPage />,
    },

    {
      path: "rq-super-heroes/:heroId",
      element: <RQSuperHeroPage />,
    },

    {
      path: "home",
      element: <HomePage />,
    },

    {
      path: "super-heros",
      element: <SuperHerosPage />,
    },
  ]);

  createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClinet}>
      <RouterProvider router={router} />

      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
