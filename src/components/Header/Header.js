import "./Header.css";

export default function Header(props){
    return(
        <div className="header">
            <div className="titulo">{props.titulo}</div>
            <div className="subtitulo">{props.subtitulo}</div>
        </div>
    );
}