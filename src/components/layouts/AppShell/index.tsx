import { useRouter } from "next/router"
// import Navbar from "../Navbar"
import { Roboto } from "next/font/google"
import dynamic from "next/dynamic"

const Navbar = dynamic(() => import("../Navbar"))

type AppShellProps = {
    children: React.ReactNode
}

//declare font robot
const roboto = Roboto({
    subsets: ["latin"],
    weight: '400'
})

// untuk exclude navbar
const disableNavbar = ["/auth/login", "/auth/register","/404"]
const AppShell = (props: AppShellProps) => {
    const { children } = props
    const { pathname } = useRouter()// ambil path dari routing

    return (
        //implement semua font dengan roboto
        <main className={roboto.className}>
            {/* kondisi untuk exclude navbar */}
            {!disableNavbar.includes(pathname) && <Navbar />} 
            {children}
        </main>
    )
}

export default AppShell