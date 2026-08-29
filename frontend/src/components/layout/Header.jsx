import { MessageCircle } from "lucide-react";

export default function Header({ onOpenChat }) {
    return (
        <header className="site-header">
            <a className="brand" href="/">
                <span className="brand-mark">CS</span>
                <span>ChipSupport</span>
            </a>
            <button className="header-chat-button" type="button" onClick={onOpenChat}>
                <MessageCircle size={17} />
                Ask support
            </button>
        </header>
    );
}
