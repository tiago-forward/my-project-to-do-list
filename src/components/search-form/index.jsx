import { useState } from "react"

export function SearchForm() {

    return (
        <>
            <input type="search" name="" id="" placeholder="Localizar tarefa" />
            <label htmlFor="novatarefa">Adicionar tarefa:</label>
            <input type="search" name="novatarefa" id="" placeholder="Escreva uma nova tarefa"/>
            <div>
                <input type="button" value="Marcar como prioridade" />
                <select name="">
                    <option value="valor1" selected>Selecionar categoria</option>
                    <option value="valor1">Valor 1</option>
                    <option value="valor2">Valor 2</option>
                    <option value="valor3">Valor 3</option>
                </select>
            </div>
        </>
    )



}