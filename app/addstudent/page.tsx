import React from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import AddStudent from '../components/dashboard/AddStudent'

const page = () => {
  return (
    <>
        <Dashboard active='addStudent'>
            <AddStudent/>
        </Dashboard>
    </>
  )
}

export default page