# Projeto Angular de Estudo

![Badge em Desenvolvimento](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)

## Descrição do Projeto

Este projeto foi criado com o objetivo de estudar e explorar o framework Angular. Durante o desenvolvimento, foram aplicados conceitos como Angular Forms, Rotas (incluindo rotas aninhadas), integração com PrimeNG para componentes UI e Tailwind CSS para estilização. O projeto está em andamento e novas funcionalidades estão sendo adicionadas continuamente.

## Funcionalidades Implementadas

- Formulários reativos com validação
- Sistema de rotas com rotas aninhadas
- Componentes de interface utilizando PrimeNG
- Estilização customizada com Tailwind CSS

## Tecnologias Utilizadas

- [Angular](https://angular.io/)
- [PrimeNG](https://primeng.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Rotas no Projeto

O sistema de rotas foi configurado para permitir navegação fluida dentro do aplicativo. Além das rotas principais, também foram implementadas **rotas aninhadas**, permitindo melhor organização e modularização da aplicação.

### Configuração de Rotas do Projeto

```typescript
export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent, // Aplica o layout à home
        children: [
          { path: '', component: HomeComponent },
          { path: 'turmas', component: TurmasComponent},
          { path: 'alunos', component: AlunosComponent},
          { path: 'perfil', component: ProfileComponent},
          { path: 'turmas/:id/cadastrar-alunos', component: CadastrarAlunoComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
```

### Descrição das Rotas

- `/` → Exibe o `LayoutComponent` e a `HomeComponent` como página principal.
- `/turmas` → Página de listagem de turmas.
- `/alunos` → Página para gerenciamento de alunos.
- `/perfil` → Página de perfil do usuário.
- `/turmas/:id/cadastrar-alunos` → Permite cadastrar alunos dentro de uma turma específica.
- `/login` → Página de login.
- `/register` → Página de registro de novos usuários.


## Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/BrenerCantuaria/Angular-Projects.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd Angular-Projects/projeto-001
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   ng serve
   ```

5. **Acesse a aplicação:**

   Abra o navegador e vá para `http://localhost:4200/`.

## Estrutura de Pastas

A estrutura principal do projeto é a seguinte:

```
projeto-001/
├── src/
│   ├── app/
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/           # Páginas/Rotas da aplicação
│   │   ├── services/        # Serviços e lógica de negócios
│   │   ├── app-routing.module.ts  # Configuração de rotas
│   │   └── app.module.ts    # Módulo principal
│   ├── assets/              # Arquivos estáticos (imagens, fontes, etc.)
│   ├── styles.css           # Estilos globais
│   └── index.html           # Página principal
├── angular.json             # Configurações do Angular CLI
├── package.json             # Dependências e scripts do projeto
└── README.md                # Documentação do projeto
```

## Próximos Passos

- Implementar autenticação de usuários
- Comunicação com back-end
- Adicionar integração com API externa
- Melhorar a responsividade do layout
- Adicionar responsividade para dispositivos móveis

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.

---

*Nota: Este projeto está em desenvolvimento ativo e pode sofrer alterações significativas.*