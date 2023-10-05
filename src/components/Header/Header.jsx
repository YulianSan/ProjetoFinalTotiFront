import { Link } from "react-router-dom";
import { LinkHeader } from "./LinkHeader";

export function Header() {
    return (
        <header
            className="bg-[#f80132] w-full flex md:flex-row justify-between 
                px-8 items-center flex-col mb-16 shadow-lg">
            <h1 className="title">
                <Link to="/">
                    <img className="max-h-32" src="/logo.webp" alt="logo da empresa" />
                </Link>
            </h1>
            <nav>
                <ul className="flex h-24 gap-x-4 items-center">
                    <li>
                        <LinkHeader to='#'>Nossa historia</LinkHeader>
                    </li>
                    <li>
                        <LinkHeader to='#'>Nossas lojas</LinkHeader>
                    </li>
                    <li>
                        <LinkHeader to='#'>Serviços</LinkHeader>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
