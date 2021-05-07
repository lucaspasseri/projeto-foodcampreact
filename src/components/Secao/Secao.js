import React from 'react';
import Opcao from '../Opcao/Opcao';
import "./Secao.css";

export default function Secao(props){
    const { id, estadoSecao, setEstadoSecao, apresentacao, tipo, produtos} = props;
    const [estadoCategoria, setEstadoCategoria] = React.useState([false,false,false]);

    const numeroProdutosSelecionados = estadoCategoria.filter(item => item === true).length;

    if(numeroProdutosSelecionados >= 1){
        setEstadoSecao(true);
    } else {
        setEstadoSecao(false);
    }
    return(
        <div className="secao">
            <div className="titulo">{apresentacao}</div>
            <div className={"opcoes "+tipo}>      
                {produtos.map((item, i) => <Opcao
                                                key={i}
                                                id0={id}
                                                id={i}
                                                estadoCategoria={estadoCategoria}
                                                setEstadoCategoria={setEstadoCategoria}
                                                produto={item.produto} 
                                                imagem={item.imagem} 
                                                titulo={item.titulo}
                                                descricao={item.descricao}
                                                preco={item.preco}
                                            />)
                }
            </div>
        </div>
    );
}