'use client'

import { FC, PropsWithChildren } from "react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { Amplify } from "aws-amplify"

import config from '@/aws-exports'

Amplify.configure(config)

const client = new QueryClient()

const Providers:FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}

export default Providers
