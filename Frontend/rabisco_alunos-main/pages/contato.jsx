import Titulo from '@/components/Titulo'
import Headerb from '../components/Headerb'
// Importamos os Hooks do React, useState e useEffect
import { useState, useEffect } from 'react'
// Importamos a função getProdutos de nosso arquivo apiRabisco
import { getFuncionarios } from '@/services/apiReqRes'
import CardListFunc from '@/components/CardListFunc'


export default function contato() {
    // Criamos um estado chamado 'produtos' para armazenar a lista de produtos. 
    const [funcionarios, setFuncionarios] = useState([])

    // Função assíncrona que busca os produtos da API.
    async function buscaFuncionarios() {
        try {
            // Chamamos a função 'getProdutos' para obter os dados dos produtos.
            const data = await getFuncionarios()
            // Atualizamos o estado 'produtos' com os dados recebidos.
            setFuncionarios(data)
        } catch (error) {
            // Se houver algum erro, exibimos no console. 
            console.error('Erro ao buscar produtos:', error)
        }
    }

    // useEffect é usado para realizar efeitos colaterais, como chamadas de API. 
    useEffect(() => {
        // Chamamos a função 'buscaProdutos' assim que o componente é montado. 
        buscaFuncionarios()
        // Configuramos um intervalo para chamar 'buscaProdutos' a cada 5 segundos. 
        const atualiza = setInterval(buscaFuncionarios, 5000)
        // Retornamos uma função de limpeza que cancela o intervalo quando o componente é desmontado. 
        return function () {
            clearInterval(atualiza)
        }
    }, []) // O array vazio significa que este efeito só é executado uma vez após a montagem.



  return (
    <>
      <Headerb />
      <Titulo texto="Entre em contato conosco!" />
      <CardListFunc funcionarios={funcionarios}/>
    </>
  )
}
