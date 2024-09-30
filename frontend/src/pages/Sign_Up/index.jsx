import { FormInput } from "../../components/Input"
import { PageContainer, LogoContainer, LoginCard, Card, Button, Hexagon } from './styles'


export function SignUp() {
  return (
    <PageContainer>
      <LogoContainer>
        <Hexagon /> {/* Você pode adicionar um SVG ou imagem aqui */}
        <h1>food explorer</h1>
      </LogoContainer>
      <LoginCard>
        <Card>
          <h2>Crie sua conta</h2>
            <FormInput label="Seu nome" type="text" id="name" placeholder="Exemplo: Maria da Silva" />
            <FormInput label="Email" type="email" id="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
            <FormInput label="Senha" type="password" id="password" placeholder="No mínimo 6 caracteres" />
          
          <Button>Entrar</Button>
          <p>Já tenho uma conta</p>
        </Card>
      </LoginCard>
    </PageContainer>
    
  )
}