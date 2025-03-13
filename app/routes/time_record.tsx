import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Parcial Web - Detalle registro tiempo' }]
}

export default function TimeRecord({ params }: Route.ComponentProps) {
  const id = params.id
  return <>Hola equipo {id}</>
}
