'use client'
import { Usuario } from "../context/AuthContext";

export class UsuarioMock{
    private static usuarioDB: Usuario[] = [
        new Usuario(1, "Professor Samuel Matos", "000000000000", "", "", true),
        new Usuario(2, "Gabriel Firmino", "1010101010", "", "", true)
    ];

    static async listarTodos(): Promise<Usuario[]> {
        return [...this.usuarioDB]
    }
    static async salvar(usuarios: Usuario) : Promise<void> {
        const indexExistente = this.usuarioDB.findIndex(u => u.codigo === usuarios.codigo);
        if(indexExistente=== -1){
        const novoCodigo = Math.max(...this.usuarioDB.map(u=> u.codigo)) + 1;

        usuarios.codigo = novoCodigo;

        this.usuarioDB.push(usuarios);

        console.log(`Usuario de ID ${novoCodigo} salvo com sucesso!`);
        }
        else{
            this.usuarioDB[indexExistente].name = usuarios.name;
            this.usuarioDB[indexExistente].cpf = usuarios.cpf;
            this.usuarioDB[indexExistente].email = usuarios.email;
            this.usuarioDB[indexExistente].senha = usuarios.senha;

            console.log(`Usuario de ID ${usuarios.codigo} atualizado com sucesso!`);
        }

    }
    static async buscarPorId(codigo:number): Promise<Usuario|undefined> {

        return this.usuarioDB.find(u=> u.codigo === codigo);
    }
}