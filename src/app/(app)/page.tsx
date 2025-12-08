import React from 'react'
import AreaChart from './dashboard/AreaChart'
import { ChartGenerate } from './dashboard/ChartGenerate'
import UserTable from '@/components/shared/UserTable'

const page = () => {
  return (
    <div>
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
