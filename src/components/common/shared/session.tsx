import { auth } from "../../../../auth/auth";

export default async function Session() {
    const session:any= await auth()
   
    if (!session.user) return null
   
    return (
      <div>
        <p>{session?.user?.name}</p>
      </div>
    )
  }