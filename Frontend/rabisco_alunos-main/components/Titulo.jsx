export default function Titulo(props) {
    return (
        <h1 className='display-5 text fw-normal text-center my-5 border border-black p-3 mb-2  border-opacity-50 bg-warning  {props.}'>
            {props.texto}
        </h1>
    )
}