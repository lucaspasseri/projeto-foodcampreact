import "./Footer.css";
import React from 'react';

export default function Footer({estadoBotao, dados}){
        
    function filtrarPedidos(){
        const produtosPedido = dados.map(item=>item.produtos.filter(item => item.selecionado === true));
        return produtosPedido;
    }
    const pedidosFiltrados = filtrarPedidos();

    function finalizarPedido(estadoBotao, pedidosFiltrados){
        const produtosPrato = pedidosFiltrados[0].map(item => [item.produto, item.preco, item.quantidade]);
        const produtosBebida = pedidosFiltrados[1].map(item => [item.produto, item.preco, item.quantidade]);
        const produtosSobremesa = pedidosFiltrados[2].map(item => [item.produto, item.preco, item.quantidade]);

        let valorProdutosPrato = 0;
        produtosPrato.forEach(item => {valorProdutosPrato += item[1]*item[2]});
        let valorProdutosBebida = 0;
        produtosBebida.forEach(item => {valorProdutosBebida += item[1]*item[2]});
        let valorProdutosSobremesa = 0;
        produtosSobremesa.forEach(item => {valorProdutosSobremesa += item[1]*item[2]});

        if(estadoBotao){
            const mensagem = `Olá, gostaria de fazer o pedido:\n
            - Prato: ${produtosPrato} \n
            - Bebida: ${produtosBebida} \n
            - Sobremesa: ${produtosSobremesa} \n
            Total: R$ ${(valorProdutosPrato+valorProdutosBebida+valorProdutosSobremesa).toFixed(2)}`;
            const mensagemFormatada = encodeURIComponent(mensagem);
            const url = "https://wa.me/5521986201196?text=" + mensagemFormatada;
            window.open(url);
        }
    }
    return(
        <div className="footer">
            <button onClick={()=>finalizarPedido(estadoBotao, pedidosFiltrados)} className={estadoBotao?"fazer-pedido ativo":"fazer-pedido"}>
                Selecione os 3 itens<br></br>para fechar o pedido
            </button>
        </div>
    );
}