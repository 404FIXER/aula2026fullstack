'use client'
import { Usuario } from "@/app/context/AuthContext";
import { UsuarioMock } from "@/app/mock/usuario";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      const dados = await UsuarioMock.listarTodos();
      setUsuarios(dados);
    } catch (error) {
      console.error(error);
    }
  };

  const handlerAlerarStatus = async (usuario: Usuario) => {
    try {
      setUsuarios((usuariosAtuais) =>
        usuariosAtuais.map((u) =>
          u.codigo === usuario.codigo
            ? new Usuario(u.codigo, u.name, u.cpf, !u.ativa)
            : u
        )
      );
    } catch (error) {
      alert("Erro ao alterar status do usuario!");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                Gestão de usuários
              </h1>
              <p className="mt-1 text-sm text-zinc-500">
                Gerencie os usuários cadastrados de forma simples e organizada.
              </p>
            </div>

            <Link
              href="/usuarios/novo"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            >
              + Novo usuário
            </Link>
          </div>
        </div>

        <div className="mt-6">
          {/* Mobile: cards */}
          <div className="grid gap-4 md:hidden">
            {usuarios.map((usuario) => (
              <div
                key={usuario.codigo}
                className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                      Código
                    </p>
                    <p className="text-sm font-semibold text-zinc-900">
                      #{usuario.codigo}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      usuario.ativa
                        ? "bg-zinc-100 text-zinc-700"
                        : "bg-zinc-200 text-zinc-600"
                    }`}
                  >
                    {usuario.ativa ? "Ativo" : "Inativo"}
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                      Nome
                    </p>
                    <p className="text-sm text-zinc-800">{usuario.name}</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                      CPF
                    </p>
                    <p className="text-sm text-zinc-800">{usuario.cpf}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <Link
                    href={`/usuarios/${usuario.codigo}/editar`}
                    className="inline-flex w-full items-center justify-center rounded-xl border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
                  >
                    Editar
                  </Link>

                  <button
                    onClick={() => handlerAlerarStatus(usuario)}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
                  >
                    {usuario.ativa ? "Inativar" : "Ativar"}
                  </button>
                </div>
              </div>
            ))}

            {usuarios.length === 0 && (
              <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-6 text-center text-sm text-zinc-500 shadow-sm">
                Nenhum usuário encontrado!
              </div>
            )}
          </div>

          {/* Desktop: tabela */}
          <div className="hidden overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm md:block">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200">
                <thead className="bg-zinc-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Código
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Nome
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      CPF
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Ações
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-zinc-100">
                  {usuarios.map((usuario) => (
                    <tr key={usuario.codigo} className="hover:bg-zinc-50">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-zinc-900">
                        #{usuario.codigo}
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-700">
                        {usuario.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-700">
                        {usuario.cpf}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            usuario.ativa
                              ? "bg-zinc-100 text-zinc-700"
                              : "bg-zinc-200 text-zinc-600"
                          }`}
                        >
                          {usuario.ativa ? "Ativo" : "Inativo"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <Link
                            href={`/usuarios/${usuario.codigo}/editar`}
                            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
                          >
                            Editar
                          </Link>

                          <button
                            onClick={() => handlerAlerarStatus(usuario)}
                            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
                          >
                            {usuario.ativa ? "Inativar" : "Ativar"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {usuarios.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-6 py-10 text-center text-sm text-zinc-500"
                      >
                        Nenhum usuário encontrado!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}