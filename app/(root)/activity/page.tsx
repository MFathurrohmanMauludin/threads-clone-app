import ProfileHeader from "@/components/shared/ProfileHeader";
import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation"; // mengarahkan ke halaman url yang dituju


async function Page() {
    const user = await currentUser();

    if (!user) return null;

    const userInfo = await fetchUser(user.id);

    // data diambil dari mongodb 
    if (!userInfo?.onboarded) redirect('/onboarding');

    // getActivity


    return (
        <section>
            <h1 className="head-text mb-10">Activity</h1>
        </section>
    )
}

export default Page;