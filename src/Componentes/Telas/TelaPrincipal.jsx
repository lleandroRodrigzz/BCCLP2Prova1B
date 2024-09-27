import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import { listaCandidatos as initialListaCandidatos } from "../../dados/candidatos";

export default function TelaPrincipal(props) {
    const [detalharCandidato, setDetalharCandidato] = useState(false);
    const [listaCandidatos, setListaCandidatos] = useState(initialListaCandidatos);
    const [candidatoSelecionado, setCandidatoSelecionado] = useState(false);

    const updateListaCandidatos = (updatedList) => {
        setListaCandidatos(updatedList);
    };

    const handleDetalharCandidato = (candidato) => {
        setCandidatoSelecionado(candidato);
        setDetalharCandidato(true);
    };

    return (
        <Pagina>
            {
                detalharCandidato ?
                (
                    <DetalhesCandidato
                        detalharCandidato={setDetalharCandidato}
                        candidato={candidatoSelecionado} // Passando o candidato selecionado
                    />
                )
                :
                (
                    <GridCandidatos
                        listaCandidatos={listaCandidatos}
                        updateListaCandidatos={updateListaCandidatos}
                        detalharCandidato={handleDetalharCandidato} // Passando a função aqui
                    />
                )
            }
        </Pagina>
    );
}
