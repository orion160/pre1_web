import { FormattedMessage } from 'react-intl'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Parcial Web' }]
}

export default function Home() {
  return (
    <>
      <FormattedMessage id="greeting" />
    </>
  )
}
