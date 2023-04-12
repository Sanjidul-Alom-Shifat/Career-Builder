import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Blog from './components/Blog'
import HomePage from './components/HomePage'
import StatisticsPage from './components/StatisticsPage'
import JobDetailsPage from './components/JobDetailsPage'
import AppliedJobs from './components/AppliedJobs'
import JobLoader from './loader/JobDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/statistics',
        element: <StatisticsPage></StatisticsPage>
      },
      {
        path: '/jobs/:id',
        element: <JobDetailsPage></JobDetailsPage>,
        loader: () => fetch('/jobdetails.json'),
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs></AppliedJobs>,
        loader:JobLoader
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
