import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './style'
interface TransactionProps {
  id: number
  title: string
  type: string
  amount: string
  category: string
  createdAt: Date
}
export function Transaction() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])
  useEffect(() => {
    getTransactions()
  }, [])

  async function getTransactions() {
    const { data } = await api.get('transactions')
    setTransactions(data.transactions)
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>titulo</th>
            <th>valor</th>
            <th>categoria</th>
            <th>data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transactions) => {
            return (
              <tr key={transactions.id}>
                <td>{transactions.title}</td>
                <td className={transactions.type}>{transactions.amount}</td>
                <td>{transactions.category}</td>
                <td>{transactions.createdAt}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}
