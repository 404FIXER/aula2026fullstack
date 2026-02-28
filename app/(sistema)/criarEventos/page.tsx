export default function criarEventos(){
    return(
        <>
        <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header da Página */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl font-black tracking-tight text-zinc-900">Criar Novo Evento</h1>
        <p className="text-zinc-500 mt-2">Rápido, prático e sem complicação!</p>
      </div>

      <form className="space-y-8">
        
        {/* SEÇÃO 1: O EVENTO */}
        <section className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-zinc-100 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <h2 className="font-bold text-zinc-800">Detalhes do Evento</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Nome do Evento*</label>
              <input type="text" placeholder="Ex: Festival de Verão 2026" className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 outline-none transition-all" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Descrição do Evento*</label>
              <textarea rows={4} placeholder="Conte mais sobre o que vai acontecer..." className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 outline-none transition-all"></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Data e Hora de Início*</label>
              <input type="datetime-local" className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 outline-none transition-all" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Data e Hora de Término*</label>
              <input type="datetime-local" className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 outline-none transition-all" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Local e Endereço*</label>
              <input type="text" placeholder="Rua, Número, Cidade, UF ou Link do Maps" className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 outline-none transition-all" />
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: INGRESSOS E MÍDIA */}
        <section className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-zinc-100 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><path d="M20.91 8.18L8.5 20.59a2.38 2.38 0 0 1-3.37 0L2.41 17.87a2.38 2.38 0 0 1 0-3.37L14.82 2.09a2.38 2.38 0 0 1 3.37 0l2.72 2.72a2.38 2.38 0 0 1 0 3.37z"></path><line x1="15" y1="9" x2="9" y2="15"></line></svg>
            <h2 className="font-bold text-zinc-800">Ingressos e Identidade Visual</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Tipo de ingresso e Valor*</label>
              <input type="text" placeholder="Ex: Ticket VIP - R$ 150,00" className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 outline-none transition-all" />
              <p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider">Dica: Ticket Plateia - CHF 20 | Ticket VIP - CHF 50</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Foto / Logo / Flyer do Evento*</label>
              <div className="border-2 border-dashed border-zinc-200 rounded-xl p-8 text-center hover:border-zinc-400 transition-colors cursor-pointer bg-zinc-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-zinc-400 mb-2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                <p className="text-sm text-zinc-500">Clique para fazer upload ou arraste o arquivo</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: FINANCEIRO E ORGANIZADOR */}
        <section className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-zinc-100 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            <h2 className="font-bold text-zinc-800">Dados do Organizador e Repasse</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Nome Completo do Organizador*</label>
              <input type="text" className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">E-mail de Contato*</label>
              <input type="email" className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 outline-none transition-all" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Conta Bancária para Repasse (Nome Titular / IBAN / SWIFT)*</label>
              <textarea placeholder="Banco, Agência, Conta, Tipo e códigos internacionais se necessário" className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 outline-none transition-all"></textarea>
            </div>
          </div>
        </section>

        {/* BOTÕES DE AÇÃO */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
          <button type="button" className="px-8 py-3 text-zinc-500 font-semibold hover:text-zinc-800 transition-colors">Cancelar</button>
          <button type="submit" className="px-10 py-3 bg-zinc-900 text-white font-bold rounded-xl hover:bg-zinc-800 shadow-lg shadow-zinc-200 transition-all active:scale-95">
            Publicar Evento
          </button>
        </div>
      </form>
    </div>
    </>
    );
}