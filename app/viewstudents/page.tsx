import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import ViewStudents from '../components/Dashboard/ViewStudents/ViewStudents'

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