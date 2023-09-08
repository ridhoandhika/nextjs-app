import { useRouter } from "next/router"
import Navbar from "../Navbar"

type AppShellProps = {
    children: React.ReactNode
}

// untuk exclude navbar
const disableNavbar = ["/auth/login", "/auth/register","/404"]
const AppShell = (props: AppShellProps) => {
    const { children } = props
    const { pathname } = useRouter()// ambil path dari routing

    return (
        <main>
            {/* kondisi untuk exclude navbar */}
            {!disableNavbar.includes(pathname) && <Navbar />} 
            {children}
        </main>
    )
}

export default AppShell