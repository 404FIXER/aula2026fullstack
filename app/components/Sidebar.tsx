import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="sticky top-0 h-screen w-64 bg-slate-900 text-slate-50 flex flex-col border-r border-slate-800 shrink-0">

            {/* Logo */}
            <div className="p-6 text-2xl font-bold border-b border-slate-800">
                TicketFlow<span className="text-blue-500">.</span>
            </div>

            {/* Navegação */}
            <nav className="flex-1 p-4 space-y-2">

                {/* Home */}
                <Link
                    href="/home"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-200 text-slate-300 hover:text-white group"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-slate-400 group-hover:text-white transition"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M3 10l9-7 9 7v10a2 2 0 01-2 2h-4a2 2 0 01-2-2V12H9v8a2 2 0 01-2 2H3z" />
                    </svg>

                    <span className="font-medium">Home</span>
                </Link>


                {/* Usuários */}
                <Link
                    href="/usuarios"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-200 text-slate-300 hover:text-white group"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-slate-400 group-hover:text-white transition"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M17 20h5v-2a4 4 0 00-4-4h-1" />
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M9 20H4v-2a4 4 0 014-4h1" />
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                    </svg>

                    <span className="font-medium">Usuários</span>
                </Link>

            </nav>
        </aside>
    );
}