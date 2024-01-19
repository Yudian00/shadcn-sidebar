'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../components/Provider'
import TitlePage from '../components/TitlePage'

function DashboardPage() {
    const theme = useContext(ThemeContext);

    return (
        <>
            <TitlePage title="Home" description="Discover a new songs from various muscian" />
            <Card className='mt-10 border-dashed'>
                <CardContent>
                    <center>
                        <Image
                            className='m-10'
                            width={300}
                            height={300}
                            priority
                            src={theme?.theme === 'dark' ? "/team_engineering_white.svg" : "/team_engineering.svg"}
                            alt="illustration.svg"
                        />
                        <CardHeader>
                            <CardTitle className='font-bold'>{`That's It`}</CardTitle>
                            <CardDescription className='text-slate-300'>Replace this with your content</CardDescription>
                        </CardHeader>

                        <Button asChild>
                            <a href="https://ui.shadcn.com/">Shadcn UI</a>
                        </Button>

                    </center>
                </CardContent>
            </Card>

        </>
    )
}

export default DashboardPage
