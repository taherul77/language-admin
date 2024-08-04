import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Profile = ({ img }) => {
  return (
    <Link href={"/"}>
      <button className="hover:bg-black/20  transition-all rounded-md p-[.5rem]">
        <Image
          loading="lazy"
          title="Profile"
          height="100"
          width="100"
          className="h-10 w-10 object-cover rounded-full"
          src={img}
          alt="avatar"
        />
      </button>
    </Link>
  )
}

export default Profile