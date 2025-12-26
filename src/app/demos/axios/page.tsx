"use client";

import React, { useState, useEffect } from 'react'
import { Loader2Icon } from "lucide-react"

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

import { getAsianCountries } from '@/api/countries';

interface ApiItem {
    title: string;
    description: string;
    url: string;
    fetcher?: any;
}

const urls: ApiItem[] = [
    {
        title: 'Asian Country Names',
        description: 'Get a list of all countries in Asia',
        url: 'https://restcountries.com/v3.1/region/asia',
        fetcher: async () => {
            console.log('I am the fetcher');
            let data: any[] = await getAsianCountries();
            console.log('data', data);
        }
    },
    {
        title: 'Get My IP (text version)',
        description: 'Send a request to get users IP address',
        url: 'https://api.emlab.ir/api/myip',
    },
    {
        title: 'Get My IP',
        description: 'Send a request to get users IP address',
        url: 'https://api.emlab.ir/api/myip/full',
    },
];

/*
** Render urls as a list, on clicking each one, a request is made (disabling
** current item until the response is back)
*/

export default function Axios() {
    const [loaders, setLoaders] = useState(Object);

    useEffect(() => {
        console.log('Axios::useEffect([])')
        // urls.map((u) => {
            
        // });
        // console.log(loaders)
    }, []);


    return (
        <>
            <h3 className='mb-3 text-xl font-extrabold'>Axios</h3>
            <Separator className='my-3' />

            <div className="flex justify-between">
                <div className=" api-list p-2">
                    <h3 className="text-xl bold mb-2">API List ({urls.length})</h3>
                    <ScrollArea className="h-[250px] w-[350px] rounded-md pr-4">
                        {urls.map((url: ApiItem) =>
                            <Card key={`api-list-item-${url.url}`} className='mb-3'>
                                <CardHeader className='p-3'>
                                    <CardTitle>{url.title}</CardTitle>
                                    <CardDescription>{url.description}</CardDescription>
                                </CardHeader>
                                <CardContent className='p-3 pt-0'>
                                    <div className='flex justify-end'>
                                        <Button size='sm' className='bg-violet-700 hover:bg-violet-500' onClick={() => {
                                            if (url.fetcher !== undefined) {
                                                const u = url.url;
                                                console.log(loaders);
                                                // console.log(loaders<[u]);
                                                // if (loaders[u] !== true) {
                                                    setLoaders((s: Object) => ({
                                                        ...s,
                                                        [u]: true
                                                    }))
                                                // }
                                                // url.fetcher();
                                            }
                                        }}>
                                            {loaders[url.url] 
                                            ?   <p>Hey</p>
                                            : <></>}
                                            Try
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </ScrollArea>
                </div>

                <div className="grow api-response p-2">
                    <h3 className="text-xl mb-2">API Response</h3>
                </div>
            </div>

            <Separator className="my-3" />
        </>
    )
}
