import { V6Client, V6ClientSSRCookies } from '@aws-amplify/api-graphql'

export type ApiClient = V6Client<never> | V6ClientSSRCookies<never>
