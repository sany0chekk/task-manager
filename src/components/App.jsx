import { Route, Routes } from "react-router-dom";

import Navigation from "./Navigation";
import { lazy, Suspense } from "react";

const TasksPage = lazy(() => import("../pages/TasksPage"));

const App = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col gap-5 min-h-screen md:h-screen">
      <Navigation />

      <div className="bg-neutral-700 rounded-md p-4 h-full md:overflow-y-auto flex-grow">
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<TasksPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
