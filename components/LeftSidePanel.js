import Image from 'next/image'

import {
    DotsHorizontalIcon,
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid"
import LeftSidePanelLinks from './LefiSidePanelLinks';
import {signOut, useSession} from 'next-auth/react'
function LeftSidePanel() {
    const {data: session} = useSession();
    return (
    <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
        <div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
            <Image src="/icon.png" width={50} height={50} alt='logo'/>
        </div>
        <div className='space-y-5.5 mt-4 mb-2.5 xl:ml-24'>
            <LeftSidePanelLinks text='Home' Icon={HomeIcon} active />
            <LeftSidePanelLinks text='Explore' Icon={HashtagIcon} />
            <LeftSidePanelLinks text='Notifications' Icon={BellIcon} />
            <LeftSidePanelLinks text='Messages' Icon={InboxIcon} />
            <LeftSidePanelLinks text='Bookmarks' Icon={BookmarkIcon} />
            <LeftSidePanelLinks text='Lists' Icon={ClipboardIcon} />
            <LeftSidePanelLinks text='Profile' Icon={UserIcon} />
            <LeftSidePanelLinks text='More' Icon={DotsCircleHorizontalIcon} />
        </div>
        <button className='hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]'>Twoot</button>
        <div className='flex items-center justify-center text-[#d9d9d9] mt-auto hoverAnimation xl:ml-auto xl:-mr-5' onClick={signOut}>
         <img src={session.user.image} alt="" className='h-10 w-10 rounded-full xl:mr-2.5' /> 
            <div className='hidden xl:inline leading-5'>
                <h4 className='font-bold text-[black]'>{session.user.name}</h4>
                <p className='text-[#6e767d]'>@{session.user.tag}</p>
            </div>
            <DotsHorizontalIcon className="hidden xl:inline ml-10 h-5 text-black" />
        </div>
    </div>
  )
}

export default LeftSidePanel