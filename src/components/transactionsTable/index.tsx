import { Container } from './style'

export function Transaction() {
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='deposit'>R$12.00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='withdraw'>R$12.00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
