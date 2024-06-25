export default function CardContatos(props) {
    return (
        <div className="card border-secondary">
            <h5 className="card-title bg-black text-white text-center p-2 border-2 ">{props.nome}</h5>
            <img src={props.avatar} className="card-img-top" alt="..." />
            
            <div className="card-body text-center p-3">
                <h6 className="card-title">{props.nome} {props.descricao}</h6> 
                <a href={`mailto:${props.email}`} className="text-success"> {props.email}</a>
                
            </div>
        </div>

    )
}
CardContatos.defaultProps ={
    nome:'Funcionario',
    descricao: 'Descrição do cargo',
    email: '@algumacoisa',
    preco: 0
}