import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import AddStudent from '../components/Dashboard/AddStudent/AddStudent'

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