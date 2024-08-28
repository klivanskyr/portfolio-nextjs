import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
    const tabs = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <div className="navbar">
            <div className="w-full flex justify-around">
                {tabs.map((tab) => <Link key={tab.name} href={tab.path}>{tab.name}</Link>)}
            </div>
            <ThemeSwitcher />
        </div>
    )
}