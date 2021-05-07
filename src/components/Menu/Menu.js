import React from 'react';
import Secao from '../Secao/Secao';
import "./Menu.css";

export default function Menu({dados, setValor}){
    const [estadoSecao, setEstadoSecao] = React.useState(false);

    if(estadoSecao===true){
        setValor(true);
    }else {
        setValor(false);
    }

    return(
        <div className="menu">
            {dados.map((item, i) => <Secao
                                        key = {i}
                                        id ={i}
                                        estadoSecao={estadoSecao}
                                        setEstadoSecao={setEstadoSecao}
                                        apresentacao={item.apresentacao}
                                        tipo={item.tipo}
                                        produtos={item.produtos}
                                    />
            )}
        </div>
    );
}