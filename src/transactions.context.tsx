import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface Transactions {
  id: number
  title: string
  type: string
  amount: number
  category: string
  createdAt: string
}
interface ContextProps {
  transactions: Transactions[]
  createTransaction: (transaction: CreateTransactionProps) => Promise<void>
}
interface TransactionProviderProps {
  children: ReactNode
}
type CreateTransactionProps = Omit<Transactions, 'id' | 'createdAt'>

export const TransactionsContext = createContext({} as ContextProps)
export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  useEffect(() => {
    getTransactions()
  }, [])

  async function getTransactions() {
    const { data } = await api.get('transactions')
    setTransactions(data.transactions)
  }

  async function createTransaction(transactionInput: CreateTransactionProps) {
    console.log(transactionInput)
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transactions: transaction } = response.data
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
