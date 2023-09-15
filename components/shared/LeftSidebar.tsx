import { sidebarLinks } from "@/constants";

function LeftSidebar() {
    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {/* tanda {} disebut dengan dynamic block */}
                {
                    sidebarLinks.map((link) => (
                        <div className="">
                            Link
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default LeftSidebar;