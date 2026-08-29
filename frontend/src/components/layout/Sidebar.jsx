import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <p className="sidebar-label">Quick access</p>
            <Link to="/modules/synopsys">Synopsys resources</Link>
            <Link to="/modules/cadence">Cadence resources</Link>
            <Link to="/modules/siemens">Siemens resources</Link>
            <Link to="/modules/ansys">Ansys resources</Link>
        </aside>
    );
}
