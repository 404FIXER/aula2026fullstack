'use client'

import { UsuarioMock } from "@/app/mock/usuario";
import { Usuario } from "../../../context/AuthContext";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface UsuarioFormProps {
    usuarioExistente?: Usuario
}
export default function UsuarioForm({usuarioExistente}: UsuarioFormProps) {
    const [usuario, setUsuario] = useState<Usuario>(
        usuarioExistente||new Usuario(0, '', '', true)
    );

    const router = useRouter();

    const isEdicao = !!usuarioExistente;

    const handleChange = (campo: 'nome' | 'cpf', valor: string) => {
        setUsuario((prev) =>
            new Usuario(
                prev.codigo,
                campo === 'nome' ? valor : prev.name,
                campo === 'cpf' ? valor : prev.cpf,
                prev.ativa
            )
        );
    };

    const handleSalvar = async (formData: FormData) => {
        
       

        try {
            await UsuarioMock.salvar(usuario);
            alert("Usuário salvo com sucesso!");
            router.push("/usuarios");
        } catch (error) {
            console.error(error);
            alert("Erro ao salvar usuário!");
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50 px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
                    <div className="mb-6">
                        <h1 className="text-2xl font-semibold text-zinc-900">
                            Novo usuário
                        </h1>
                        <p className="mt-1 text-sm text-zinc-500">
                            Preencha os dados para cadastrar um novo usuário.
                        </p>
                    </div>

                    <form action={handleSalvar} className="space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-zinc-700">
                                Nome completo
                            </label>
                            <input
                                required
                                value={usuario.name}
                                onChange={(e) => handleChange('nome', e.target.value)}
                                placeholder="Gabriel Firmino"
                                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-zinc-700">
                                CPF
                            </label>
                            <input
                                required
                                value={usuario.cpf}
                                onChange={(e) => handleChange('cpf', e.target.value)}
                                placeholder="000.000.000-00"
                                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
                            />
                        </div>

                        <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                            <Link
                                href="/usuarios"
                                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
                            >
                                Cancelar
                            </Link>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                            >
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}