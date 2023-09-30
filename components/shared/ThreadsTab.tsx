import { fecthUserProfile } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

interface Props {
    currentUserId: string;
    accountId: string;
    accountType: string;
}

const ThreadsTab = async ({ currentUserId, accountId, accountType }: Props) => {
    // TODO: Fecth profile threads
    let result = await fecthUserProfile(accountId);

    if (!result) redirect('/');

    return (
        <section>
            ThreadsTab
        </section>
    )
}

export default ThreadsTab;