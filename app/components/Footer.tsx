export default function Footer(){
    const currentYear = new Date().getFullYear();

  return (<footer className="w-full bg-white border-t border-zinc-200 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright Section com Ícone */}
          <div className="flex items-center gap-3">
            {/* Ícone de Escudo/Segurança SVG */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="w-5 h-5 text-zinc-400" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>

            <div className="flex flex-col items-start gap-0.5">
              <p className="text-sm text-zinc-600 font-medium leading-none">
                &copy; {currentYear} <span className="text-zinc-900 font-bold tracking-tight">TicketFlow.</span>
              </p>
              <p className="text-[11px] text-zinc-400 uppercase tracking-wider">
                Todos os direitos reservados.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <nav className="flex items-center gap-8">
            <a 
              href="#" 
              className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-all duration-300 relative group"
            >
              Suporte
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <a 
              href="#" 
              className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-all duration-300 relative group"
            >
              Termos de Uso
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

        </div>
      </div>
    </footer>
  );
}