import CreatableSelect from 'react-select/creatable';
import makeAnimated from "react-select/animated"

const animatedComponents = makeAnimated();

function SelectionBar({ optionCategorie }) {
    const options = [
        { value: 'estudos', label: 'Estudo' },
        { value: 'lazer', label: 'Lazer' },
        { value: 'trabalho', label: 'Trabalho' },
        { value: 'desafio', label: 'Desafio' },
        { value: 'família', label: 'Família' },
        { value: 'relacionamento', label: 'Relacionamento' },
        { value: 'amigos', label: 'Amigos' },
        { value: 'metas', label: 'Metas' },
        { value: 'rotina', label: 'Rotina' }
    ]

    return(
        <div style={{ marginTop: 15, width: 350 }}>
            <CreatableSelect
                closeMenuOnSelect={true}
                onChange={optionCategorie}
                styles={{
                    placeholder: (baseStyles) => ({
                        ...baseStyles,
                        fontSize: 13,
                    }),
                    menuList: (baseStyles) => ({
                        ...baseStyles,
                        fontSize: 14,
                        backgroundColor: "var(--java-50)"
                    })
                }}
                placeholder={'Selecione ou escreva uma categoria'}
                components={animatedComponents}
                noOptionsMessage={() => 'Não há esta opção'}
                options={options} />
        </div>
    )
}

export default SelectionBar