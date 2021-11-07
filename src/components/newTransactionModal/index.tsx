import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeIcon from '../../assets/close.svg'
import incomming from '../../assets/income.svg'
import outcomming from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactios'
import { Container, RadioBox, TransactionTypeContainer } from './style'

interface NewTransactionProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionProps) {
  const { createTransaction } = useTransactions()

  const [typeTransaction, setTypeTransaction] = useState('deposit')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    await createTransaction({
      title,
      amount,
      category,
      type: typeTransaction,
    })
    onRequestClose()
    setTitle('')
    setAmount(0)
    setCategory('')
    setTypeTransaction('deposit')
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button className='react-modal-close' type='button'>
        <img src={closeIcon} alt='fechar modal' onClick={onRequestClose} />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder='Título'
        />
        <input
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          placeholder='Valor'
          type='number'
        />
        <TransactionTypeContainer>
          <RadioBox
            isActive={typeTransaction === 'deposit'}
            activeColor='deposit'
            type='button'
            onClick={() => setTypeTransaction('deposit')}
          >
            <img src={incomming} alt='Entrada' />
            <span>entrada</span>
          </RadioBox>
          <RadioBox
            isActive={typeTransaction === 'withdraw'}
            activeColor='withdraw'
            type='button'
            onClick={() => setTypeTransaction('withdraw')}
          >
            <img src={outcomming} alt='Saida' />
            <span>saida</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder='Categoria'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}
