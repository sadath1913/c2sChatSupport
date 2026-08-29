import { NavLink } from "react-router-dom";

const links = [
    ["/", "Home"],
    ["/chipin-centre", "ChipIn Centre"],
    ["/support", "Support Centre"],
    ["/eda-tools", "EDA checklists"],
];

export default function Navbar() {
    return (
        <nav className="site-nav" aria-label="Primary navigation">
            {links.map(([to, label]) => (
                <NavLink key={to} to={to} end={to === "/"}>
                    {label}
                </NavLink>
            ))}
        </nav>
    );
}
