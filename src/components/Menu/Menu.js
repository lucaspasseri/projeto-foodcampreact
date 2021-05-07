import Secao from '../Secao/Secao';
import "./Menu.css";

export default function Menu({dados, selecionarProduto, alterarContador}){

    return(
        <div className="menu">
            {dados.map((item, i) => <Secao
                                        key = {i}
                                        id ={i}
                                        apresentacao={item.apresentacao}
                                        tipo={item.tipo}
                                        produtos={item.produtos}
                                        selecionarProduto={selecionarProduto}
                                        alterarContador={alterarContador}
                                    />
            )}
        </div>
    );
}