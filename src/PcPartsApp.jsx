import { useContext } from 'react'

import { AppTheme } from './theme'

import { AuthContext } from './Context/AuthContext'
import { AppRouter } from './router/AppRouter'
import { UiLayout } from './ui/layout/UiLayout'
import { useCheckingAuth } from './hooks/useCheckingAuth'


export const PcPartsApp = () => {

  const { setUser, setIsAuthenticated } = useContext(AuthContext)

  useCheckingAuth(setIsAuthenticated, setUser);
  


  return (
    <AppTheme>
      <UiLayout>
        <AppRouter/>
      </UiLayout>
    </AppTheme>
  )
}
