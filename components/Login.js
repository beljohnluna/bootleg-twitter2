import React from 'react'
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login({providers}) {
  return (
    <div className="flex flex-col items-center space-y-20 pt-40"> 
        <p className='font-bold text-5xl pb-10 text-[#1d9bf0]'>Welcome to Twotter</p>
        <Image src="/icon.png" width={120} height={120} objectFit="contain"/>
        <div>
            {Object.values(providers).map(provider => (
            <div key={provider.name}>
                <button className="relative px-6 py-3 font-bold text-black group" onClick={() => signIn(provider.id, {callbackURL: '/'})}>
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#1d9bf0] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                    <span className="relative">{provider.name} Sign In</span>
                </button>
            </div>))}
        </div>
    </div>
  )
}

export default Login