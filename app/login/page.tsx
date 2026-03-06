"use client";

import React from 'react';
import { useRouter } from "next/navigation"

export default function LoginPage() {
    const router = useRouter();
    /*
  async function handleSubmit(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("senha");
    console.log({ email, password });
  }
    */

  const handleLogin = async (formData:FormData) => {

    const email = formData.get("email");
    const password = formData.get("senha");
    console.log(`Autenticado com o email: ${email}`);

    router.push("/home")


  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4 py-12">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
        
        {/* Cabeçalho com Ícone de Usuário */}
        <div className="flex flex-col items-center">
          <div className="bg-zinc-100 p-3 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Acessar Sistema</h1>
          <p className="mt-1 text-sm text-zinc-500 font-medium">Portal TicketFlow</p>
        </div>

        <form action={handleLogin} className="mt-8 space-y-5">
          {/* Campo E-mail */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-semibold text-zinc-700 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Digite seu e-mail"
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-900 focus:ring-2 focus:ring-zinc-200 focus:border-zinc-900 outline-none transition-all placeholder:text-zinc-400"
            />
          </div>

          {/* Campo Senha */}
          <div className="space-y-1.5">
            <label htmlFor="senha" className="text-sm font-semibold text-zinc-700 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Senha
            </label>
            <input
              id="senha"
              name="senha"
              type="password"
              required
              placeholder="••••••••"
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-900 focus:ring-2 focus:ring-zinc-200 focus:border-zinc-900 outline-none transition-all placeholder:text-zinc-400"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="group relative w-full flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-3 text-sm font-bold text-white hover:bg-zinc-800 transition-all active:scale-[0.99] mt-2"
          >
            Entrar no Sistema
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </form>

        <p className="text-center text-xs text-zinc-400">
          &copy; 2026 Sistema TicketFlow. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}