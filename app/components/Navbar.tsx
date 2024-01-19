'use client'

import { ThemeContext } from '@/app/components/Provider';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import * as Icon from 'react-feather';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { SidebarMenu } from './Sidebar';

export default function NavbarComponent() {
    const router = useRouter();
    const theme = useContext(ThemeContext);
    const { setTheme } = useTheme()

    const onDarkModeToggle = (e: boolean) => {
        setTheme(e ? 'dark' : 'light');
        theme?.setTheme(e ? 'dark' : 'light');
    }

    const logout = () => {
        localStorage.removeItem('user');

        router.replace('/');
        router.refresh();
    }



    return (
        <header className="sticky top-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-primary dark:bg-background dark:text-white text-sm py-4 dark:border-gray-600 border-b border-gray-600">
            <nav className="max-w-full w-full mx-auto px-4 sm:flex sm:items-center sm:justify-start" aria-label="Global">
                <div className="flex items-center justify-start">
                    <div className="sm:hidden">
                        <Sheet>
                            <SheetTrigger className='text-white mt-2'><Menu /></SheetTrigger>
                            <SheetContent side={"left"} className="w-[300px] sm:w-[340px]">
                                <SheetHeader>
                                    <SheetTitle className='text-left text-xl font-bold ml-3'>Brand</SheetTitle>
                                    <SheetDescription>
                                        <SidebarMenu />
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <a className="flex-none text-xl ml-4 font-semibold text-white" href="/dashboard">Brand</a>
                </div>
                <div id="navbar-dark" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="flex flex-col gap-5 mt-5 ml-10 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                        <DarkModeSwitch
                            className='mr-2 text-white'
                            checked={theme?.theme === 'dark'}
                            onChange={onDarkModeToggle}
                            size={20}
                        />

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <a className="font-medium text-white" href="#" aria-current="page">Username</a>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem onClick={() => logout()} className="text-red-400 py-2">
                                    <span><Icon.LogOut size={15} className="mr-2" /></span> Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
            </nav>
        </header>
    );
}
