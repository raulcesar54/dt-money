import { Dashboard } from './components/dashboard'
import { Header } from './components/header'
import { Transaction } from './components/transactionsTable'
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { useState } from 'react'
import { NewTransactionModal } from './components/newTransactionModal'

Modal.setAppElement('#root')

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
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  )
}
