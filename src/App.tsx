import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        {/* <Route path="jobs" element={<JobsPage/>}/>
        <Route path="add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path="jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path="edit-job/:id" element={<EditJobPage updateJobSubmit={updateJobSubmit}/>} loader={jobLoader}/>
        
        <Route path="*" element={<NotFoundPage/>}/> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
