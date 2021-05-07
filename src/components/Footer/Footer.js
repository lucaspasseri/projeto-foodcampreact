import "./Footer.css";
import React from 'react';

export default function Footer({valor}){
    let estadoBotao = "fazer-pedido";
    if(valor){
        estadoBotao = "fazer-pedido ativo";
    }
    return(
        <div className="footer">
            <a href="#" className={estadoBotao}>
                Selecione os 3 itens<br></br>para fechar o pedido
            </a>
        </div>
    );
}