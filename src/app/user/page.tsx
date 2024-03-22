import ViewCurrentUser from "./components/ViewCurrentUser"

import { getAuthorized } from "@/services/auth/server"

export default async function UserPage() {
  const authorized = await getAuthorized()
  if (!authorized) throw new Error('Unauthorized')
  return <ViewCurrentUser />
}
