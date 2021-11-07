import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './style'
import closeIcon from '../../assets/close.svg'
import incomming from '../../assets/income.svg'
import outcomming from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

interface NewTransactionProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionProps) {
  const [typeTransaction, setTypeTransaction] = useState('deposit')
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    const data = {
      title,
      value,
      category,
      type: typeTransaction,
    }
    api.post('/transactions', data)
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
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
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
            isActive={typeTransaction === 'whitdraw'}
            activeColor='whitdraw'
            type='button'
            onClick={() => setTypeTransaction('whitdraw')}
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
