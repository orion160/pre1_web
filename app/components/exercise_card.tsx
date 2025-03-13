import { Container } from 'react-bootstrap'

export interface ExerciseCardProps {
  sessionName: string
  ciudad: string
  distance: number
  duration: string
}

export function ExerciseCard(props: ExerciseCardProps) {
  return (
    <Container>
      <span>{props.sessionName}</span>
      <span>Recorrido alrededor de la bahia de {props.ciudad}</span>
      <span>
        {props.distance}k - {props.duration}h
      </span>
    </Container>
  )
}
