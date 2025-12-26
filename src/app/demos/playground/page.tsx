"use client";

import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Playground() {
    return (
        <>
            <h3 className='mb-3 text-xl font-extrabold'>Playground</h3>
            <Separator className='my-3' />
            <h4 className="mb-3 text-lg font-extrabold">Buttons</h4>
            <Button>Click Me</Button>
            <Separator className="my-3" />
        </>
    )
}
