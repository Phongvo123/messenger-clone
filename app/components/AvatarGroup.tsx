"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarGroupProps {
  users?: User[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ users = [] }) => {
  const sliceUsers = users.slice(0, 2);

  const positionMap = {
    0: "top-0 left-[12px]",
    1: "bottom-0 right-[12px]",
  };
  return (
    <div
      className="
        relative
        h-11
        w-11
        "
    >
      {sliceUsers.map((user, index) => (
        <div
          key={user.id}
          className={`
                absolute
                inline-block
                rounded-full
                overflow-hidden
                h-[30px]
                w-[30px]
                ${positionMap[index as keyof typeof positionMap]}
            `}
        >
          <Image alt="Avatar" fill src={user?.image || "/images/profile.png"} />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
