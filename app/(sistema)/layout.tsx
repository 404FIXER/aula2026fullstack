import Footer from "../components/Footer";
import Header from "../components/Header";

export default function SistemaLayout({children}:{children:React.ReactNode}){

    return(
        <div className="flex min-h-screen">
                  
                  {/* Sidebar - Fixa ou ao lado */}
                  {/* <Sidebar /> */}
        
                  {/* Área de Conteúdo: Cresce para empurrar o footer e organiza em coluna */}
                  <div className="flex flex-col flex-1">
                    
                    <Header />
        
                    {/* Main: O flex-1 faz este container crescer e ocupar o espaço restante */}
                    <main className="flex-1 p-4 md:p-8">
                      <div className="max-w-7xl mx-auto w-full">
                        {children}
                      </div>
                    </main>
        
                    <Footer />
                  </div>
        
                </div>
    );

}
    