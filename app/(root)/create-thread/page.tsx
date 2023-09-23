import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation"; // mengarahkan ke halaman url yang dituju

import PostThread from "@/components/forms/PostThread";

async function Page() {
    const user = await currentUser();

    if (!user) return null;

    const userInfo = await fetchUser(user.id);

    if (!userInfo?.onboarded) redirect('/onboarding');

    return (
        <>
            <h1 className="head-text">Create Thread</h1>
            <h2 className="head-text">{userInfo?.onboarded}</h2>
            <h3 className="text-light-1">{!userInfo?.onboarded ? "false" : "true"}</h3>
            <PostThread userId={userInfo._id} />
        </>
    )
}

export default Page;