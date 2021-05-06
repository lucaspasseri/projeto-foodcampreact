import Opcao from './Opcao';
import React from 'react';

export default function Secao(props){
    //const [apresentacao, tipo, produtos]  =  props;

    //const [estadoSecao, setEstadoSecao] = React.useState([false,false,false]);

    return(
        <div class="secao">
            <div class="titulo">{props.apresentacao}</div>
            <div class={"opcoes "+props.tipo}>      
                {props.produtos.map(item => <Opcao
                                                //estadoSecao={estadoSecao}
                                                //setEstadoSecao={setEstadoSecao}
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