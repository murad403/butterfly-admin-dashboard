import React from 'react'
import AreaChart from './dashboard/AreaChart'
import { ChartGenerate } from './dashboard/ChartGenerate'
import UserTable from '@/components/shared/UserTable'
import AdminHeader from '@/components/shared/AdminHeader'

const page = () => {
  return (
    <div className='space-y-5'>
      <AdminHeader title='Admin Dashboard' description='Manage the entire  platform with full control and clarity.'></AdminHeader>
      <div className='text-header space-y-5 flex gap-5'>
        <div className='w-2/3'>
          <AreaChart></AreaChart>
        </div>
        <div className='w-1/3'>
          <ChartGenerate></ChartGenerate>
        </div>
      </div>
      <UserTable></UserTable>
    </div>
  )
}

export default page
