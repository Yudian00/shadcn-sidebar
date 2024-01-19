import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeContext, ThemeProps } from "./Provider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import * as Icon from 'react-feather';
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useContext } from "react";





const UserAction = () => {
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


    return <div id="navbar-dark" className="hs-collapse sm:block overflow-hidden transition-all duration-300 basis-full grow">
        <div className="flex flex-col gap-5 mt-5 ml-10 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <DarkModeSwitch
                className='mr-2 text-white'
                checked={theme?.theme === 'dark'}
                onChange={onDarkModeToggle}
                size={20} />

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
    </div>;
}

export default UserAction;
