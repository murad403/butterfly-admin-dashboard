import React from 'react'

const SubscriptionPlans = () => {
    return (
        <div className='bg-common border border-border-color p-5 rounded-xl '>
            <h2 className='mb-5 font-bold text-2xl text-header'>Subscription Plans</h2>
            <div className='grid grid-cols-2 gap-5'>
                <div className='border border-border-color p-5 rounded-xl flex justify-between items-center'>
                    <div>
                        <h3 className='text-header font-semibold text-[22px]'> Single Tool Access</h3>
                        <p className='text-title text-[16px] font-medium'> £6.99/month</p>
                    </div>
                    <h3 className='bg-border-color py-3 px-5 text-[16px] rounded-xl text-header'>1,545 subscribers</h3>
                </div>
                <div className='border border-border-color p-5 rounded-xl flex justify-between items-center'>
                    <div>
                        <h3 className='text-header font-semibold text-[22px]'>Trio Pack</h3>
                        <p className='text-title text-[16px] font-medium'>£16.99/month</p>
                    </div>
                    <h3 className='bg-border-color py-3 px-5 text-[16px] rounded-xl text-header'>1,545 subscribers</h3>
                </div>
                <div className='border border-border-color p-5 rounded-xl flex justify-between items-center'>
                    <div>
                        <h3 className='text-header font-semibold text-[22px]'>Complete Access</h3>
                        <p className='text-title text-[16px] font-medium'>£59.99/month</p>
                    </div>
                    <h3 className='bg-border-color py-3 px-5 text-[16px] rounded-xl text-header'>1,545 subscribers</h3>
                </div>
                <div className='border border-border-color p-5 rounded-xl flex justify-between items-center'>
                    <div>
                        <h3 className='text-header font-semibold text-[22px]'>Founder Circle</h3>
                        <p className='text-title text-[16px] font-medium'>£1000/month</p>
                    </div>
                    <h3 className='bg-border-color py-3 px-5 text-[16px] rounded-xl text-header'>1,545 subscribers</h3>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionPlans
