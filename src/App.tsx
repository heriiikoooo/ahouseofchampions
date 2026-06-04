import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import Mission from "./pages/about/Mission";
import Vision from "./pages/about/Vision";
import CoreValues from "./pages/about/CoreValues";
import WaterBaptism from "./pages/next-steps/WaterBaptism";
import SmallGroups from "./pages/next-steps/SmallGroups";
import Give from "./pages/Give";
import Salvation from "./pages/next-steps/Salvation";
import Outreach from "./pages/next-steps/Outreach";
import Events from "./pages/Events";
import Belief from "./pages/about/Belief";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="mission" element={<Mission />} />
        <Route path="vision" element={<Vision />} />
        <Route path="our-beliefs" element={<Belief />} />
        <Route path="core-values" element={<CoreValues />} />
        <Route path="baptism" element={<WaterBaptism />} />
        <Route path="small-groups" element={<SmallGroups />} />
        <Route path="give" element={<Give />} />
        <Route path="salvation" element={<Salvation />} />
        <Route path="outreach" element={<Outreach />} />
        <Route path="events" element={<Events />} />

        {/* <Route path="jobs" element={<JobsPage/>}/>
        <Route path="add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path="jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path="edit-job/:id" element={<EditJobPage updateJobSubmit={updateJobSubmit}/>} loader={jobLoader}/>
        
        <Route path="*" element={<NotFoundPage/>}/> */}
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
