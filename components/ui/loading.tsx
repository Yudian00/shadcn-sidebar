

import React from 'react'

export default function LoadingCircle() {
    return (
        <div
            className="inline-block h-4 w-4 mr-2  text-gray-400 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
        </div>
    )
}
