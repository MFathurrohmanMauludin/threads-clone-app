import ProfileHeader from "@/components/shared/ProfileHeader";
import { fetchUser, getActivity } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation"; // mengarahkan ke halaman url yang dituju


async function Page() {
    const user = await currentUser();

    if (!user) return null;

    const userInfo = await fetchUser(user.id);

    // data diambil dari mongodb 
    if (!userInfo?.onboarded) redirect('/onboarding');
    console.log(userInfo?.onboarded);

    // getActivity
    const activity = await getActivity(userInfo._id);

    return (
        <section>
            <h1 className="head-text mb-10">Activity</h1>
            <section className="mt-10 flex flex-col gap-5">
                {activity.length > 0 ? (
                    <>
                        {activity.map((activity) => (
                            <Link key={activity._id} href={`/thread/${activity.parentId}`}>
                                <article className="activity-card">
                                    <Image
                                        src={activity.author.image}
                                        alt="Profile Picture"
                                        width={20}
                                        height={20}
                                        className="object-cover object-top max-w-[20px] max-h-[20px] rounded-full"
                                    />
                                    <p className="!text-small-regular text-light-1 pt-[2px]">
                                        <span className="mr-1 text-primary-500">
                                            {activity.author.name}
                                        </span>{" "}
                                        replied to your thread
                                    </p>
                                </article>

                            </Link>
                        ))}
                    </>
                ) : <p className="!text-base-regualar text-light-3">No activity yet</p>}
            </section>
        </section>
    )
}

export default Page;