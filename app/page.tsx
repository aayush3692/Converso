
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companions.actions'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'

const Page = async () => {
  const companions = await getAllCompanions({limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);
  return (
    <main>
      <h1 className='text-2xl'>Popular Companion</h1>

      <section className='home-section'>
        {
          companions.map((companion) =>  (
            <CompanionCard
            key={companion.id} 
            {...companion}
            color={getSubjectColor(companion.subject)}
            />
          ))
        }
        <CompanionCard
          id='123'
          name='Neura the brainy Explorer'
          topic='Neural network of the brain'
          subject='science'
          duration={45}
          color='#ffda6e'
        />
        <CompanionCard
          id='456'
          name='Countsy the Number Wizard'
          topic='Derivatives & Integrals'
          subject='Mathematics'
          duration={30}
          color='#e5d0ff' />
        <CompanionCard
          id='789'
          name='Verba the Vocubulary Builder'
          topic='English Literature'
          subject='Language'
          duration={30}
          color='#bde7ff' />
      </section>

      <section className='home-section'>
        <CompanionsList 
          title='Recently Completed Session'
          companions={recentSessions} //{recentSessionsCompanions}
          classNames='w-2/3 max-lg:w-full'
        />
        <CTA />
      </section>

    </main>
  )
}

export default Page