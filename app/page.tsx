import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'
import React, { Suspense } from 'react'
import { trpc } from '@/trpc/server'
import { Client } from './client'

const Page = async () => {
  const queryClient = new QueryClient()
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({ text: 'world' }))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  )
}

export default Page
