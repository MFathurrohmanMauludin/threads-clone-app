import { revalidatePath } from "next/cache";
import Thread from "../models/thread.model";
import { connectToDB } from "../mongoose";
import User from "../models/user.model";

interface Params {
    text: string,
    author: string,
    communityId: string | null,
    path: string,
}

export async function createThread({ text, author, communityId, path }: Params) {
    connectToDB();

    // Thread ini adalah mongoose mongodb model
    const createThread = await Thread.create({
        text,
        author,
        community: null,
    });

    // Update user model
    await User.findByIdAndUpdate(author, {
        $push: { threads: createThread._id }
    })

    // allows you to purge cached data on-demand for a specific path
    revalidatePath(path);
}
