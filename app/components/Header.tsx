'use client';

export default function Header(){
    return(
        <header className="w-full border-b border-zinc-200 bg-zinc-50/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Lado Esquerdo: Perfil do Usuário */}
        <div className="flex items-center gap-3">
          {/* Ícone de Usuário SVG */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-sm">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="w-5 h-5 text-zinc-600"
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-zinc-800 tracking-tight">Gabriel Firmino</span>
            <span className="text-[11px] text-zinc-500 font-medium uppercase tracking-wider hidden sm:inline">Administrador</span>
          </div>
        </div>

        {/* Lado Direito: Botão Sair */}
        <button 
          className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50 rounded-lg transition-all duration-200"
          aria-label="Sair do sistema"
        >
          <span className="hidden sm:block">Sair</span>
          {/* Ícone de Log Out SVG */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </button>

      </div>
    </header>
    );
}