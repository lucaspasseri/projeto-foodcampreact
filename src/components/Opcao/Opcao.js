import React from 'react';
import "./Opcao.css";

export default function Opcao(props){
    const {id0, id,
            produto, imagem, titulo, descricao, preco, selecionado, quantidade,
            selecionarProduto, alterarContador} = props;
    
    const [unidadesContador, setUnidadesContador] = React.useState(0);
    
    
    return(
        <div className={selecionado?"opcao "+produto+" selecionado":"opcao "+produto}>
            <img onClick={()=>{
                selecionarProduto(id0, id);
                alterarContador("resetESet", unidadesContador, setUnidadesContador, id0, id);
                } } 
                src={"img/"+imagem+".png"} 
            />
            <div className="titulo">{titulo}</div>
            <div className="descricao">{descricao}</div>
            <div className="valores">
                <div className="preco">{"R$ "+preco.toFixed(2)}</div>
                <div className={selecionado?"contador":"contador escondido"}>
                    <div>
                        <span onClick={()=>alterarContador("subtracao", unidadesContador, setUnidadesContador, id0, id)} className="subtrair-unidades">-</span>
                        <span>{unidadesContador}</span>
                        <span onClick={()=>alterarContador("adicao", unidadesContador, setUnidadesContador, id0, id)}className="adicionar-unidades">+</span>
                    </div>
                </div>
            </div>
        </div>
    );
}