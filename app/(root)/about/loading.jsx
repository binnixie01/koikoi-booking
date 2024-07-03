import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
    return (
        <div className='h-screen mx-auto px-8 flex flex-col  bg-black  pt-14 gap-4'>
            <div className="flex flex-col space-y-3 p-5">
                <Skeleton className="h-[125px] w-[250px] rounded-xl " /></div>
            <Skeleton className="w-full h-[30px] rounded-full" />
            <Skeleton className="w-full h-[30px] rounded-full" />
            <Skeleton className="w-full h-[30px] rounded-full" /></div>
    )
}

export default Loading