import CardContatos from "./CardContatos"

export default function CardListFunc(props){
    const {funcionarios} = props
    return (
        <div className="container">
            <div className="row">
                {/* Estrutura de repetição map */}
                {funcionarios.map(function(funcionario, index){
                    return(
                        <div 
                        className="col-12 col-sm-6 col-md-4 col-lg-3 my-3"
                         key = {index}>
                            <CardContatos
                                nome={funcionario.first_name}
                                descricao={funcionario.last_name}
                                email={funcionario.email}
                                avatar={funcionario.avatar}
                            />
                        </div> 
                    )
                    
                })}

            </div>
        </div>
    )
}
