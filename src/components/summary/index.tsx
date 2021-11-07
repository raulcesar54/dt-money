import { Container } from './style'
import incomming from '../../assets/income.svg'
import outcomming from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { useContext } from 'react'
import { TransactionsContext } from '../../transactions.context'
export function Sumary() {
  const { transactions } = useContext(TransactionsContext)
  const sumary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type == 'deposit') {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.whitdraws += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    { deposits: 0, whitdraws: 0, total: 0 }
  )
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomming} alt='entradas' />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sumary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomming} alt='saidas' />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sumary.whitdraws)}
        </strong>
      </div>
      <div className='higthlight-background'>
        <header>
          <p>Total</p>
          <img src={total} alt='total' />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sumary.total)}
        </strong>
      </div>
    </Container>
  )
}
