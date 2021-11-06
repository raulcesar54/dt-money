import { Dashboard } from './components/dashboard'
import { Header } from './components/header'
import { Transaction } from './components/transactionsTable'
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { useState } from 'react'

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Transaction />
      <GlobalStyle />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    </>
  )
}
