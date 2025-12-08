import React from 'react'
import SubscriptionsStats from './SubscriptionsStats'
import SubscriptionPlans from './SubscriptionPlans'
import Subscriber from './Subscriber'
import AdminHeader from '@/components/shared/AdminHeader'

const Subscriptions = () => {
  return (
    <div className='space-y-5'>
      <AdminHeader title='Subscriber Management' description='Manage the entire Subscriber Management'></AdminHeader>
      <SubscriptionsStats></SubscriptionsStats>
      <SubscriptionPlans></SubscriptionPlans>
      <Subscriber></Subscriber>
    </div>
  )
}

export default Subscriptions
