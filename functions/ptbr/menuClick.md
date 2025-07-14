# Resumo de Uso: `this.parent.menuClick`

### 1. Navegar por Container e Recurso com Parâmetros de Consulta
```js
this.parent.menuClick({ 
  Container: 'OrdersContainerField',  // Nome do campo do tipo "Container"
  Resource: 'OrderListForm',           // O formulário a ser aberto dentro do container
  QueryParameters: { status: 'pending', page: 2 } 
});
```
- `Container` é o nome do campo do tipo "Container" onde o formulário será renderizado.
- `Resource` representa o formulário a ser aberto.
- Usa `QueryParameters` para filtrar ou customizar a visualização do container (ex.: filtrar pedidos por status e paginar).

---

### 2. Carregar ou Recarregar Formulário pelo FormId com Parâmetros de Consulta
```js
this.parent.menuClick({ 
  FormId: 123, 
  SideForm: false, 
  QueryParameters: { userId: 456, mode: 'edit' } 
});
```
- Carrega o formulário com ID 123.
- Passa `QueryParameters` para influenciar o comportamento do formulário ou preencher dados (ex.: modo edição para um usuário específico).
- Suporta carregar como formulário lateral se `SideForm` for verdadeiro.

---

### Notas:
- `QueryParameters` é um objeto que seu sistema de roteamento adicionará como query strings na URL ou usará internamente.
- Flags adicionais (`Home`, `Workflow`, `ReportId`, `Logoff`, etc.) controlam outros casos de navegação.
- `builderWindowParameterMappings` pode ser passado como segundo argumento para manipulação avançada de parâmetros.
