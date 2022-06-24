import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'
import { UiLayout } from './ui/layout/UiLayout'

export const PcPartsApp = () => {
  return (
    <AppTheme>
      <UiLayout>
        <AppRouter/>
      </UiLayout>
    </AppTheme>
  )
}
