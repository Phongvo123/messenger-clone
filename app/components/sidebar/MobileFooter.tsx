'use client'

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
    const routes = useRoutes()
    const { isOpen } = useConversation()

    if(isOpen) {
        return null
    }

    return ( 
        <div
        className="
        fixed
        justify-between
        bottom-0
        w-full
        z-40
        flex
        items-center
        bg-orange-500
        border-t-[1px]
        lg:hidden
        "
        >
            {routes.map((item) => (
                <MobileItem
                key={item.label}
                href={item.href}
                icon={item.icon}
                onClick={item.onClick}
                active={item.active}
                />
            ))}
        </div>
     );
}
 
export default MobileFooter;