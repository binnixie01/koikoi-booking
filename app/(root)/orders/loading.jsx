import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
    return (
        <div className='h-screen mx-auto px-8 flex flex-col gap-6 bg-black py-14'>
            <Skeleton className="w-full h-[30px] rounded-full" />
            <Skeleton className="w-full h-[30px] rounded-full" />
            <Skeleton className="w-full h-[30px] rounded-full" />
            <Skeleton className="w-full h-[30px] rounded-full" />
            <Skeleton className="w-full h-[30px] rounded-full" />
        </div>
    )
}

export default loading