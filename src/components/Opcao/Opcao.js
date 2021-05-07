import React from 'react';
import "./Opcao.css";

export default function Opcao(props){
    const {id0, id,
            produto, imagem, titulo, descricao, preco,
            selecionado, selecionarProduto, alterarContador} = props;
    
    const [unidadesContador, setUnidadesContador] = React.useState(1);
    
    
    return(
        <div className={selecionado?"opcao "+produto+" selecionado":"opcao "+produto}>
            <img onClick={()=>{
                selecionarProduto(id0, id);
                alterarContador("reset", unidadesContador, setUnidadesContador);
                } } 
                src={"img/"+imagem+".png"} 
            />
            <div className="titulo">{titulo}</div>
            <div className="descricao">{descricao}</div>
            <div className="valores">
                <div className="preco">{preco}</div>
                <div className={selecionado?"contador":"contador escondido"}>
                    <div>
                        <span onClick={()=>alterarContador("subtracao", unidadesContador, setUnidadesContador)} className="subtrair-unidades">-</span>
                        <span>{unidadesContador}</span>
                        <span onClick={()=>alterarContador("adicao", unidadesContador, setUnidadesContador)}className="adicionar-unidades">+</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* 
    const [estadoProduto, setEstadoProduto] = React.useState(produtoInativo);
    const [estadoContador, setEstadoContador] = React.useState("contador escondido");
    const [estadoUnidades, setEstadoUnidades] = React.useState(1); 

    function selecionarProduto(){
        if(estadoProduto === produtoInativo){
            setEstadoProduto(produtoAtivo);
            setEstadoContador("contador");
            alteraEstadoCategoria(id0, id, estadoCategoria, setEstadoCategoria);
        } else {
            deselecionarProduto();
        }
    }
    function deselecionarProduto(){
        setEstadoProduto(produtoInativo);
        setEstadoContador("contador escondido");
        setEstadoUnidades(1);
        alteraEstadoCategoria(id0, id, estadoCategoria, setEstadoCategoria);
    }

    function adicionarUnidade(){
        setEstadoUnidades(estadoUnidades+1);
    }
    function subtrairUnidade(){
        if(estadoUnidades>1){
            setEstadoUnidades(estadoUnidades-1);
        } 
        else {
            deselecionarProduto();
        }      
    }   */ 