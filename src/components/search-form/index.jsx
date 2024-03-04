import { useState } from "react"

export function SearchForm() {

    const [] = useState()

    return (
        <form>
            <input type="search" name="" id="" placeholder="Localizar tarefa" />
            <label htmlFor="novatarefa">Adicionar tarefa:</label>
            <input type="search" name="novatarefa" id="" placeholder="Escreva uma nova tarefa"/>
            <div>
                <input type="button" value="Marcar como prioridade" />
            </div>
        </form>
    )



}