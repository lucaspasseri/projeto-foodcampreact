import Opcao from '../Opcao/Opcao';
import "./Secao.css";

export default function Secao(props){
    const {id, apresentacao, tipo, produtos,
        selecionarProduto, alterarContador} = props;
    return(
        <div className="secao">
            <div className="titulo">{apresentacao}</div>
            <div className={"opcoes "+tipo}>      
                {produtos.map((item, i) => <Opcao
                                                key={i}
                                                id0={id}
                                                id={i}
                                                produto={item.produto} 
                                                imagem={item.imagem} 
                                                titulo={item.titulo}
                                                descricao={item.descricao}
                                                preco={item.preco}
                                                selecionado={item.selecionado}
                                                selecionarProduto={selecionarProduto}
                                                alterarContador={alterarContador}
                                            />)
                }
            </div>
        </div>
    );
}