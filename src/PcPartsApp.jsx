import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'
import { NavBar } from './ui/NavBar'

export const PcPartsApp = () => {
  return (
    <AppTheme>
      <NavBar />
      <AppRouter/>
    </AppTheme>
  )
}
