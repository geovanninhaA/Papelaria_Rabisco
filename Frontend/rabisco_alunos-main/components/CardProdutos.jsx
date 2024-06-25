export default function CardProdutos(props) {
    return (
        <div className="card border-secondary">
            <h5 className="card-title bg-black text-white text-center p-2 border-2 ">{props.nome}</h5>
            <img src={`produtos/${props.nome}.png`} className="card-img-top" alt="..." />
            <div className="card-body">
                
                <p className="card-text">{props.descricao}</p>
                <a href="#" className="btn btn-primary bg-black d-grid gap-2 col-6 mx-auto  btn-center border-secondary ">R${props.preco}</a>
            </div>
            <div className="card-footer p-3">
                <p className="card-text text-success text-center">
                    {props.quantidade} Unidades em estoque
                </p>
            </div>
        </div>

    )
}
CardProdutos.defaultProps ={
    nome:'Produto',
    descricao: 'Descrição do produto',
    quantidade: 0,
    preco: 0
}
const ProcurarProdutos{
    
}