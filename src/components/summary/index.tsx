import { Container } from './style'
import incomming from '../../assets/income.svg'
import outcomming from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { useContext } from 'react'
import { TransactionsContext } from '../../transactions.context'
export function Sumary() {
  const { transactions } = useContext(TransactionsContext)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomming} alt='entradas' />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomming} alt='saidas' />
        </header>
        <strong>R$ 500,00</strong>
      </div>
      <div className='higthlight-background'>
        <header>
          <p>Total</p>
          <img src={total} alt='total' />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}
