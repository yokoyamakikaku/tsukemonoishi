import { cookies } from 'next/headers'
import { createServerRunner } from "@aws-amplify/adapter-nextjs"
import * as auth from 'aws-amplify/auth/server'

import config from '@/amplifyconfiguration.json'

const { runWithAmplifyServerContext } = createServerRunner({
  config,
});

const nextServerContext = { cookies }

export async function getAuthorized () {
  return await runWithAmplifyServerContext({
    nextServerContext,
    async operation (contextSpec) {
      try {
        await auth.fetchAuthSession(contextSpec)
        return true
      } catch (error) {
        return false
      }
    }
  })
}
