import { NavLink } from "react-router";
import { UserIcon } from "./UserIcon";

export const Header = () => {
    return (
        <header className="flex items-center justify-between py-4">
            <h1 className="font-extrabold">
                <NavLink to="/" className="cursor-pointer" end>Social Readers </NavLink>
            </h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <NavLink className="px-4 py-2 flex rounded-3xl bg-gray-200
                        hover:bg-gray-700 hover:text-white cursor-pointer
                        transition duration-70" to="/profile" end>
                            <UserIcon/>
                        </NavLink>
                    </li>
                    <li>
                        <input className="rounded-3xl bg-gray-200 px-4 py-2" placeholder="Search" type="text"/>
                    </li>
                </ul>
            </nav>
        </header>
    );
}