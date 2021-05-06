import React from 'react';

export default function Opcao(props){
    //const [ produto, imagem, titulo, descricao, preco] = props;

    const produtoInativo = "opcao "+props.produto;
    const produtoAtivo = "opcao "+props.produto+" selecionado";
    const [estadoProduto, setEstadoProduto] = React.useState(produtoInativo);
    const [estadoContador, setEstadoContador] = React.useState("contador escondido");
    const [estadoUnidades, setEstadoUnidades] = React.useState(1); 

    function selecionarProduto(){
        if(estadoProduto === produtoInativo){
            setEstadoProduto(produtoAtivo);
            setEstadoContador("contador");
            /* if(props.produto.split("frango").length>1){
                const array = [...props.estadoSecao];
                array[0]=true;
                props.setEstadoSecao(array);    
            } else if(props.produto.split("carne").length>1){
                const array = [...props.estadoSecao];
                array[1]= true;
                props.setEstadoSecao(array);
            } else if(props.produto.split("peixe").length>1){
                const array = [...props.estadoSecao];
                array[2]= true;
                props.setEstadoSecao(array);
            }
            console.log(estadoProduto, props.estadoSecao); */
        } else {
            deselecionarProduto();
        }
    }
    function deselecionarProduto(){
        setEstadoProduto(produtoInativo);
        setEstadoContador("contador escondido");
        setEstadoUnidades(1);
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
    }   
    
    return(
        <div class={estadoProduto}>
            <img onClick={() => selecionarProduto()} src={"img/"+props.imagem+".png"} />
            <div onClick={() => selecionarProduto()} class="titulo">{props.titulo}</div>
            <div onClick={() => selecionarProduto()} class="descricao">{props.descricao}</div>
            <div class="valores">
                <div onClick={() => selecionarProduto()} class="preco">{props.preco}</div>
                <div class={estadoContador}>
                    <div class="contador">
                        <span onClick={subtrairUnidade} class="subtrair-unidades">-</span>
                        <span> {estadoUnidades} </span>
                        <span onClick={adicionarUnidade} class="adicionar-unidades">+</span>
                    </div>
                </div>
            </div>
        </div>
    );
}