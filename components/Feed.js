import { SparklesIcon } from '@heroicons/react/outline'
import React from 'react'
import Input from './Input'
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


function Feed() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className='text-black flex-grow border-l border-r max-w-2xl sm:ml-[73px] xl:ml-[370px]'>
        <div className="text-black flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-white border-b">
            <h2 className='text-lg sm:text-xl font-bold'>Home</h2>
            <div className='hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0'>  
                <SparklesIcon className='h-5 text-black'/>
            </div>
        </div>
        <Input/>
        <div className='pb-72'>
          {posts.map(post => (
            <Post key={post.id} id={post.id} post={post.data()} className={'font-black'}/>
          ))}
        </div>
    </div>
  )
}

export default Feed