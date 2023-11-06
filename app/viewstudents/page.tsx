import React from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import ViewStudents from '../components/dashboard/ViewStudents'

const page = () => {
  return (
   <>
    <Dashboard active='viewStudents'>
        <ViewStudents/>
    </Dashboard>
   </>
  )
}

export default page