import { AppProvider } from '@/app/AppProvider'
import { AppRouter } from '@/app/router'

export function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

