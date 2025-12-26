"use client";

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { 
    Separator
} from '@/components/ui/separator'

import { Plus, Minus } from 'lucide-react'

export default function Counter() {
    const [value, setValue] = useState(0);

    const increase = () => {
        setValue(value + 1);
    }

    const decrease =() => {
        setValue(value - 1);
    }

    useEffect(() => {
        console.log('useEffect()');
    });

    useEffect(() => {
        console.log('useEffect([])');
    }, []);

    useEffect(() => {
        console.log('useEffect([value])');
    }, [value]);

    return (
        <>
            <h3 className='mb-2 text-xl font-extrabold'>Counter</h3>
            <hr className='my-3' />
            
            <div className="flex my-2">
                <b>Value:&nbsp; <span>{value}</span></b>
            </div>

            <div className="flex gap-1">
                <Button onClick={increase} size={"default"} title='Increase' className='bg-violet-700 hover:bg-violet-500'>
                    <Plus className="" strokeWidth={2} size="16px" />
                </Button>

                <Separator orientation='vertical' />

                <Button onClick={decrease} size={"default"} title='Decrease' className='bg-violet-700 hover:bg-violet-500'>
                    <Minus strokeWidth={2} size="16px" />
                </Button>
            </div>

        </>
    )
}
