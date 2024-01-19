

import React from 'react'

type Props = {
    title: string
    description: string
}


export default function TitlePage({ title, description }: Props) {
    return (
        <>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="mt-2 text-sm text-gray-500">{description}</p>
        </>
    )
}
