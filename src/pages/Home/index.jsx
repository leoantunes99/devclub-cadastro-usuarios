import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { Title, Container, Form, ContainerInputs, InputLabel, Input } from './styles'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'

function Home() { // Componente React SEMPRE com letra maiúscula
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    await api.post('/usuarios', {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: parseInt(inputAge.current.value)
    })

    navigate('/lista-de-usuarios')
  }

  // antes do return vem código JavaScript
  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastro de Usuários</Title>

        <ContainerInputs>
          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type='text' placeholder='Nome do usuário' ref={inputName}/>
          </div>
          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type='number' placeholder='Idade do usuário' ref={inputAge}/>
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>E-mail<span> *</span></InputLabel>
          <Input type='email' placeholder='E-mail do usuário' ref={inputEmail}/>
        </div>

        <Button type='button' onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
      </Form>

      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Ver Lista de Usuários</Button>
    </Container>
  )
}

export default Home

/*

Exportar "Padrão" (uma coisa só por página)
export default App

Apenas Exportar
export App

*/