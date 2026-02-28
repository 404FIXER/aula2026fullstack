import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      
      {/* NAVEGAÇÃO SUPERIOR */}
      <nav className="border-b border-zinc-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-zinc-900">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span className="text-xl font-bold tracking-tighter uppercase">TicketFlow</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Recursos</a>
            <a href="#dashboard" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Dashboard</a>
            <button className="px-5 py-2.5 bg-zinc-900 text-white text-sm font-semibold rounded-full hover:bg-zinc-800 transition-all active:scale-95">
              Criar Evento
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold mb-6 tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
            </span>
            Nova Versão 2.0 Disponível
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 mb-8 leading-[1.1]">
            Transforme seus eventos em <span className="text-zinc-400">experiências lucrativas.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            A plataforma completa para organizadores gerenciarem lotes, vendas e recebíveis em tempo real. Simples, neutro e eficiente.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
    href="/login" 
    className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-bold rounded-xl hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-zinc-200 text-center"
  >
    Começar Agora
  </Link>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-xl hover:bg-zinc-50 transition-all">
              Ver Demonstração
            </button>
          </div>
        </div>
      </header>

      {/* FEATURES GRID */}
      <section id="features" className="py-24 bg-zinc-50 border-y border-zinc-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Card 1: Gestão de Lotes */}
          <div className="space-y-4 group">
            <div className="w-12 h-12 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:border-zinc-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <h3 className="text-xl font-bold">Gestão de Lotes</h3>
            <p className="text-zinc-500 leading-relaxed">Controle automático de estoque. O sistema subtrai a quantidade disponível a cada venda realizada.</p>
          </div>

          {/* Card 2: Dashboard Financeiro */}
          <div className="space-y-4 group">
            <div className="w-12 h-12 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:border-zinc-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 className="text-xl font-bold">Painel Financeiro</h3>
            <p className="text-zinc-500 leading-relaxed">Visualize o valor total arrecadado e o desempenho de cada lote em um painel limpo e intuitivo.</p>
          </div>

          {/* Card 3: Comprovante por E-mail */}
          <div className="space-y-4 group">
            <div className="w-12 h-12 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:border-zinc-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <h3 className="text-xl font-bold">Automação de E-mail</h3>
            <p className="text-zinc-500 leading-relaxed">Após a compra, o sistema envia automaticamente o comprovante para o e-mail do comprador.</p>
          </div>

        </div>
      </section>

      {/* FOOTER (O seu componente personalizado) */}
      <footer className="w-full bg-white border-t border-zinc-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-zinc-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div className="flex flex-col">
                <p className="text-sm text-zinc-600 font-medium">
                  &copy; {currentYear} <span className="text-zinc-900 font-bold tracking-tight">TicketFlow.</span>
                </p>
                <p className="text-[11px] text-zinc-400 uppercase tracking-widest">Tecnologia para Eventos</p>
              </div>
            </div>

            <nav className="flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-all relative group">
                Suporte
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-all relative group">
                Termos
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
