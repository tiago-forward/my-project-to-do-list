// import styled from "styled-components";
import Select from "react-select";
import makeAnimated from "react-select/animated"
// import colors from "react-select";

const animatedComponents = makeAnimated();

function SelectionBar() {

    const options = [
        { value: 'curso', label: 'Curso' },
        { value: 'estudos', label: 'Estudos' },
        { value: 'lazer', label: 'Lazer' },
        { value: 'trabalho', label: 'Trabalho' },
        { value: 'desafio', label: 'Desafio' },
        { value: 'família', label: 'Família' },
        { value: 'relacionamento', label: 'Relacionamento' },
        { value: 'amigos', label: 'Amigos' }
    ]

    return(
        <div style={{ marginTop: 15, width: 350 }}>
            <Select
                styles={{
                    placeholder: (baseStyles, State) => ({
                        ...baseStyles,
                        fontSize: 14,
                    }),
                    menuList: () => ({
                        fontSize: 14,
                        backgroundColor: "var(--java-50)"
                    })
                }}
                placeholder={'Seleciones as categorias'}
                components={animatedComponents}
                isMulti
                noOptionsMessage={() => 'Não há esta opção'}
                options={options} />
        </div>
    )
}

export default SelectionBar