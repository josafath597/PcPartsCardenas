import { onAuthStateChanged } from 'firebase/auth'
import { useContext, useEffect } from 'react'
import { AuthContext } from './Context/AuthContext'
import { FirebaseAuth } from './firebase/config'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'
import { UiLayout } from './ui/layout/UiLayout'


export const PcPartsApp = () => {

  const { setUser, setAuth } = useContext(AuthContext)

  useEffect(() => {
    
    onAuthStateChanged( FirebaseAuth , ( user ) =>{
      if(user){
        setUser(user)
        setAuth(true)
      }
    });
  }, [])
  


  return (
    <AppTheme>
      <UiLayout>
        <AppRouter/>
      </UiLayout>
    </AppTheme>
  )
}
