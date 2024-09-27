import { Container, Button } from "react-bootstrap";

export default function DetalhesCandidato(props) {
    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            {props.candidato ? (
                <div>
                    <h2>{props.candidato.nome}</h2>
                    <p>Email: {props.candidato.email}</p>
                    <p>Curtidas: {props.candidato.curtidas}</p>
                    <p>Descurtidas: {props.candidato.descurtidas}</p>
                    <p>Propostas: {props.candidato.propostas}</p>
                </div>
            ) : (
                <h1>Carregando...</h1>
            )}
            <Button variant='danger' style={{ borderColor: 'white' }} onClick={() => {
                        props.detalharCandidato(false)
                    }}>Voltar</Button>
        </Container>
    );
}
