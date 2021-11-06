import { Dashboard } from './components/dashboard'
import { Header } from './components/header'
import { Transaction } from './components/transactionsTable'
import { GlobalStyle } from './styles/global'
export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Transaction />
      <GlobalStyle />
    </>
  )
}
