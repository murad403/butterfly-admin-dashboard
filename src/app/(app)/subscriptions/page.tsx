import React from 'react'
import SubscriptionsStats from './SubscriptionsStats'
import SubscriptionPlans from './SubscriptionPlans'
import Subscriber from './Subscriber'

const Subscriptions = () => {
  return (
    <div className='space-y-5'>
      <SubscriptionsStats></SubscriptionsStats>
      <SubscriptionPlans></SubscriptionPlans>
      <Subscriber></Subscriber>
    </div>
  )
}

export default Subscriptions
