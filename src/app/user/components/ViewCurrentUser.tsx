'use client'

import { useQuery } from "@tanstack/react-query"
import { Auth, CognitoUser } from "@aws-amplify/auth"

const ViewCurrentUser = () => {

  const query = useQuery({
    queryKey: ['cu2'],
    async queryFn () {
      const user = await Auth.currentAuthenticatedUser()
      if (!user) throw Error("NoUser")
      if (!(user instanceof CognitoUser)) throw Error('NotAuthorized')
      return user
    }
  })

  return (
    <div>
      <div className="text-4xl">ViewCurrentUser</div>
      {query.isError && <div className="p-2 bg-red-50">{JSON.stringify(query.error)}</div>}
      {query.isSuccess && (
        <pre>{JSON.stringify(query.data, null, 2)}</pre>
      )}
    </div>
  )
}

export default ViewCurrentUser
