import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'

import type { Route } from './+types/root'
import './app.css'
import { IntlProvider } from 'react-intl'
import { createContext, use } from 'react'

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
]

function getInitialLocale() {
  console.log(navigator.language)
  return navigator.language.startsWith('en') ? 'en' : 'es'
}

async function loadMessages(locale: string): Promise<Record<string, string>> {
  switch (locale) {
    case 'en':
      return (await import('~/locales/en.json')).default
    case 'es':
    default:
      return (await import('~/locales/es.json')).default
  }
}

export const LocaleContext = createContext<[string, Record<string, string>]>([
  'es',
  {},
])

export function Layout({ children }: { children: React.ReactNode }) {
  const locale = getInitialLocale()
  const messages = use(loadMessages(locale))

  return (
    <LocaleContext.Provider value={[locale, messages]}>
      <html lang={locale}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </LocaleContext.Provider>
  )
}

export default function App() {
  const [locale, messages] = use(LocaleContext)
  return (
    <IntlProvider locale={locale} messages={messages}>
      <Outlet />
    </IntlProvider>
  )
}
