export default function Header(props){
    return(
        <div class="header">
            <div class="titulo">{props.titulo}</div>
            <div class="subtitulo">{props.subtitulo}</div>
        </div>
    );
}