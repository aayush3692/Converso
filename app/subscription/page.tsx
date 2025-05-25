import React from 'react'
import { PricingTable } from '@clerk/nextjs'

const Subscription = () => {
    return (
        <main>
            <h1 className='flex justify-center items-center'>Subscription Pricing</h1>
            <PricingTable newSubscriptionRedirectUrl='/subscription'/>
        </main>
    )
}

export default Subscription
