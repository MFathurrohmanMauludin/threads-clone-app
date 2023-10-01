import ProfileHeader from "@/components/shared/ProfileHeader";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation"; // mengarahkan ke halaman url yang dituju

import { profile } from "console";
import Image from "next/image";
import { profileTabs } from "@/constants";
import ThreadsTab from "@/components/shared/ThreadsTab";


async function Page() {
    const user = await currentUser();

    if (!user) return null;

    const userInfo = await fetchUser(user.id);

    // data diambil dari mongodb 
    if (!userInfo?.onboarded) redirect('/onboarding');

    // fetch all users




    return (
        <section>
            <h1 className="head-text mb-10">Search</h1>
        </section>
    )
}

export default Page;