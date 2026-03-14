'use client'

import Link from "next/link";
import UsuarioForm from "../componente/UsuarioForm";

export default function cadastrarUsuario() {
    return (
        <div className="min-h-screen bg-zinc-50 px-4 py-6 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-3xl">

                {/* Header */}
                <div className="mb-6 flex items-center gap-4">

                    <Link
                        href="/usuarios"
                        className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>

                        Voltar
                    </Link>

                </div>

                {/* Card */}
                <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-6 sm:p-8">

                    <h1 className="text-2xl font-semibold text-zinc-900 mb-6">
                        Cadastro de Novo Usuário
                    </h1>

                    <UsuarioForm />

                </div>

            </div>

        </div>
    );
}