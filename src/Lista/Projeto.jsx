import React from "react"
import './Projeto.css'

const Task = (value) => {
    return (
        <li className="list-item">{value}</li>
    )
}

function Lista() {
    const listTask = ['Acordar','Escovar Dente','Tomar Banho','Tomar Café','Atrasar pro trabalho','Bate ponto errado','Xingar aluno comendo','Pertubar a Laísa','Sentar no lugar da Letícia'] 
    return (
        <main className="main">
            <h2 className="title">Lista de Tarefas</h2>
            <ul className="list">{listTask.map((element) => Task(element))}</ul>
        </main>
    )
}

export default Lista