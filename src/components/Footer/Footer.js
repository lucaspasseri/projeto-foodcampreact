import "./Footer.css";
import React from 'react';

export default function Footer({estadoBotao}){
    function finalizarPedido(estadoBotao){


        
        if(estadoBotao){
            const mensagem = "Olá, gostaria de fazer o pedido!";
            const mensagemFormatada = encodeURIComponent(mensagem);
            const url = "https://wa.me/5521986201196?text=" + mensagemFormatada;
            window.open(url);
        }
    }
    return(
        <div className="footer">
            <button onClick={()=>finalizarPedido(estadoBotao)} className={estadoBotao?"fazer-pedido ativo":"fazer-pedido"}>
                Selecione os 3 itens<br></br>para fechar o pedido
            </button>
        </div>
    );
}