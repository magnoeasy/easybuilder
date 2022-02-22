<h1>Easy Builder Tutorial em português</h1>
<img src="https://user-images.githubusercontent.com/81401104/114604033-d7747000-9c6e-11eb-8150-05be1f550f81.png">

# Table Content
- [First steps in Easy Builder 🦶](#id-frist)
- [It's time to get hands-on 🖐️](#id-hands)
- [Components 🧱](#id-component)
    - [Textfield 📓](#id-textfield)
    - [TextArea 📄](#id-textarea)
    - [Editor 🎬](#id-Editor)
    - [Hidden 🙈](#id-Hidden)
    - [Integer 🔢](#id-Integer)
    - [Decimal 💲](#id-Decimal)
    - [Date 📆](#id-Date)
    - [DateTime 📆⏲️](#id-DateTime)
    - [Time ⌛](#id-Time)
    - [CheckBox ✅](#id-CheckBox)
    - [ChecklistDB 📁](#id-ChecklistDB)
    - [Radio 🔘](#id-Radio)
    - [DropdownDB 📥](#id-DropdownDB)
    - [AutoComplete 🗄️🧲](#id-AutoComplete)
    - [Label 🔤](#id-Label)
    - [Signature ✒️](#id-Signature)
    - [Static Image 🖼️](#id-Static)
    - [File Upload 📂📩](#id-File)
    - [One-To-Many 📃➡️📃](#id-One-To-Many)
    - [MultiTag 🏷️](#id-MultiTag)
    - [Additional Data ➡️📃](#id-Additional)
    - [Button ⏸️](#id-Button)
    - [HTML Field 🦰](#id-HTML)
    - [Quiz 🧩](#id-Quiz)
    - [Email 📧](#id-Email)
    - [Password *️⃣](#id-Password)
    - [Horizontal Line 📏🪓](#id-Horizontal)
    - [Repeater 🔁](#id-Repeater)
- [Form 📃](#id-form)
    - [Video call Coming Soon](id-Video)
    - [Tab (Form)](#id-Tab)
    - [Dev Properties (Form)](#id-Properties)
    - [Notification (Form)](#id-Notification)
    - [Event type](#id-Event)
    - [Kanban 🎰](#id-Kanban)
    - [Software Replication](#id-Software)
    - [List](#id-list)
    - [How to Add a User](#id-How)
    - [How to Give User Permission](#id-Permission)
- [Tools 🔧](#id-Tools)
    - [🔧 DataSource](#id-DataSource)
    - [🔧 Process](#id-Process)
    - [🔧 Process Job](#id-Job)
    - [🔧 Report](#id-Report)
    - [🔧 Chart](#id-Chart)
    - [🔧 API](#id-API)
    - [🔧 Template](#id-Template)
    - [🔧 Scheduler](#id-Scheduler)
    - [🔧 Notification](#id-2Notification)
- [Project Settings 🧰](#id-ProjectSettings)
    - [🧰 Main](#id-Main)
    - [🧰 Project Configurations](#id-ProjectConfigurations)
    - [🧰 Database Configurations](#id-DatabaseConfigurations)
    - [🧰 Menus](#id-2Menus)
    - [🧰 DataBase Manager](#id-DataBaseManager)
    - [🧰 Editors](#id-Editors)
    - [🧰 Email](#id-2Email)
    - [🧰 Images](#id-2Images)
 - [Builder Apis ☁️](#id-apis)
  - [☁️ Authentication](#id-authentication) 
  - [☁️ Paginate](#id-paginate)
  - [☁️ Get](#id-get)
  - [☁️ Save](#id-save)
  - [☁️ Delete](#id-delete)

<div id='id-frist'/>

## Primeiros passos no Easy Builder 🦶
<p>Em primeiro plano precisamos criar um login no <b>"Easy Builder"(nossa plataforma de criação).<p>
    
- Acessando o link https://builder.easy.rocks/

<img src="https://user-images.githubusercontent.com/81401104/114607455-f248e380-9c72-11eb-9f83-63854f376b2c.png">
    
 Nesta imagem vemos uma tela de login, é nela que você ira se cadastrar, há varias formas de cadastro como Google, Microsoft Teams,Facebook ou com seu email,o recomendado é que utilize o email da Easy (....@easyteam.rocks) o qual você recebeu clicando em <i>"Sign UP".<br>
  
### Agora precisamos confirmar seu email 📧⚠️
Será enviado um link de confirmação para o seu email cadastrado, então acesse-o, e abra o email da Easy Builder que será encontrado na Caixa de Entrada ou no Lixo Eletrônico.

 
<img src="https://user-images.githubusercontent.com/81401104/114757978-d9a00280-9d32-11eb-9a5b-e0e30040c51c.png">

Por fim clique em _Link Here_  para confirmar o email.⤴️

Pronto agora você ja pode logar no <b>"Easy Builder"</b> sem problemas clicando em _Sign In_.⤵️
 
<img src="https://user-images.githubusercontent.com/81401104/114770895-58506c00-9d42-11eb-91b8-d35e97afe7cf.png">

                                                Feito o cadastro Parabens!!🥇🎉

<div id='id-hands'/>
 
## É hora de por a mão na massa 🖐️

Agora iremos aprender a fazer um projeto, menu e formulário básico, para que você já possa experimentar as funcionalidades do Easy Builder.

Apos o login no Builder você irá se deparar com o seguinte contéudo:

<img src="https://user-images.githubusercontent.com/81401104/114769820-107d1500-9d41-11eb-9ae1-29954922a707.png">
    
Na aba “Main” e logo abaixo em “Project title” escreva o título do seu projeto (pode ser “ProjetoTeste”)

e clique no botão _Save & Close_

<img src="https://user-images.githubusercontent.com/81401104/114924580-872f1680-9e04-11eb-921e-9c819dd64965.gif">

(Irá demorar um pouco aqui pois estará sendo criado o banco de dados para o seu projeto)

Agora você estará na sua página inicial com as três abas principais, nesse caso automaticamente será a aba “Project”. 

Então, voltará na tela inicial com as duas abas principais “Form” e “Report” (que significa “Formulário” e “Relatório” respectivamente), agora clique na aba “Form”:
    
![image](https://user-images.githubusercontent.com/81401104/116601837-502b2b80-a901-11eb-8e29-009d8ff21b96.png)
    
E agora clique no botão _New_, automaticamente irá abrir uma nova aba no seu navegador.
<img src="https://user-images.githubusercontent.com/81401104/114773410-694eac80-9d45-11eb-9582-bb667046a328.png">

Nessa nova página, no campo do “Form Title” escreva o título do seu formulário (pode ser “FormulárioTeste”).
<img src="https://user-images.githubusercontent.com/81401104/114773828-e843e500-9d45-11eb-9f24-6412e65cd9dc.png">
Clique no botão _"Save"_ que se encontra no pé da página.
<img src="https://user-images.githubusercontent.com/81401104/114774084-31943480-9d46-11eb-992d-d3c930421db8.png">

Selecione o componente “Textfield” (da aba lateral Tools - Gallery Fields) e arraste para o campo cinza onde está escrito “Drop new field here!”.

Agora clique no componente que você arrastou (“Textfield”), e logo irá abrir uma aba lateral na direita chamada “Properties of Field”.⤵️
<img src="https://user-images.githubusercontent.com/81401104/114777398-0875a300-9d4a-11eb-90be-640d428916b5.gif">

Lá no topo do “Properties of Field”, abaixo de “General”, No campo “Name”  escreva ‘‘Nome’’ e no campo “Label” também escreva “Nome”.
Agora clique no botão  _"Save"_ e depois clique no botão _"Run"_, irá abrir a seguinte página:
<img src="https://user-images.githubusercontent.com/81401104/114778084-c8fb8680-9d4a-11eb-93e7-cdde13db4cca.png">
Aqui estará disponível a visualização dos registros salvos. ⤴️
    
> Clique no botão _"New"_, você será direcionado para a seguinte tela:
<img src="https://user-images.githubusercontent.com/81401104/114778942-dc5b2180-9d4b-11eb-9fd7-5e9e03c4ed8a.gif">
Adicione o nome “Lopes”, e clique no botão _"Save & Close"_ !! <img src="https://user-images.githubusercontent.com/81401104/114939285-9a4ae200-9e16-11eb-9884-5e9c3dbce5e5.gif">
<h3>⚠️Atenção para não confundir _"Save"_ envez _"Save & Close"</h3>
<img src="https://user-images.githubusercontent.com/81401104/114779385-702ced80-9d4c-11eb-8838-8133ec0a3aea.png">

Repita o processo colocando nome diferente.

Você pode fazer o download da lista de registros em formato de  lista do excel clicando no botão _"Export Excel"_ 
    
e então será enviado no seu email o link para download da lista excel.
Um gif curto para te ajudar:

<img src="https://user-images.githubusercontent.com/81401104/114777405-09a6d000-9d4a-11eb-8a04-d538d5b34a76.gif">

### Como Executar a Aplicação 💻

Ao chegar na tela do formulário, preencha o “Form Title”(o titulo do formulário) e insira os componentes “Textfield” e “Email”:
<img src="https://user-images.githubusercontent.com/81401104/114933398-ff023e80-9e0e-11eb-86ad-8811ba803155.gif">

Já podemos executar a aplicação, para isso, clique no botão _"SAVE"_ no pé da página e depois clique no botão _"Run"_ <img src="https://user-images.githubusercontent.com/81401104/114936682-20fdc000-9e13-11eb-93dc-1dcc895356fa.gif"><br>Irá para a seguinte tela
<img src="https://user-images.githubusercontent.com/81401104/114936950-805bd000-9e13-11eb-8877-16341176b8e5.png">

Essa é a tela dos registros após eles terem sido inseridos e salvos.⤴️

Para inserir novos registros, clique no botão _"New"_ no topo desta tela⬇️

<img src="https://user-images.githubusercontent.com/81401104/114939985-8b186400-9e17-11eb-9738-a6de0dd97dc4.png">

Então irá abrir a seguinte tela:

<img src="https://user-images.githubusercontent.com/81401104/115062670-fd914e80-9ec0-11eb-9c75-7956b6bcefce.png">

Essa é a tela de registrar, onde irá inserir as novas informações dentro do sistema.

Após preencher os campos, clique no botão _"Save & Close".

<img src="https://user-images.githubusercontent.com/81401104/115065052-0c2d3500-9ec4-11eb-8b6b-25e0628429fb.gif">

E você estará de volta na tela dos registros, com o formulário salvo e disponível para visualização.
*Caso queira editar o formulário salvo, clique no <img src="https://user-images.githubusercontent.com/81401104/115065229-41d21e00-9ec4-11eb-85f7-9674e8483492.png">
(Embaixo da coluna do “Control”)

## AVISOS⚠️

Na maioria dos componentes, não estará sendo mostrado as seções do “Properties of Field” (General, Values, Behavior, Presentation, Intro, Others) para evitar repetição de conteúdo. 

Logo, para aprender como utilizar essas seções acima mencionadas, acesse o tutorial do componente “Textfield”, pois nele estará sendo explicado com detalhes cada seção.

Entretanto, terá componentes mostrando as seções, pois terão itens e seções diferentes do componente “Textfield”.

Para aprender como usar a seção “Events”, vá até os tutoriais dos componentes “Decimal” e “Button”.

Sempre verifique se há continuação de conteúdo na próxima página, as vezes não coube a imagem na mesma página.

Para realizar os tutoriais de “Static Image”, “Upload Image”, e “File Upload” é necessário ter armazenamento (Blob Container).

Se tiver qualquer dúvida, entre em contato com o suporte da Easy Comtec.

<div id='id-component'/>
 
## COMPONENTES 🧱
São 30 componentes que iremos aprender a utilizar, são eles:
<table>
 <tr>
  <td>Textfield</td>
  <td>TextArea</td>
  <td>Editor</td>
  <td>Hidden</td>
  <td>Integer</td>
  <td>Decimal</td>
  <td>Date</th>
  <td>DateTime</td>
  <td>Time</th>
 </tr>
 <tr>
  <td>Checkbox</td>
  <td>ChecklistDB</td>
  <td>Radio</td>
  <td>Dropdown</td>
  <td>DropdownDB</td>
  <td>AutoComplete</td>
  <td>Label</td>
  <td>Box</td>
  <td>Signature</td>
 </tr>
 <tr>
  <td>Static Image</td>
  <td>Upload Image</td>
  <td>File Upload</td>
  <td>One-To-Many</td>
  <td>Multitag</td>
  <td>Additional Data</td>
  <td>Button</td>
  <td>HTML FIeld</td>
  <td>Quizz</td>
 </tr>
 <tr>
  <td>Email</td>
  <td>Password</td>
  <td>Horizontal Line</td>
 </tr>
</table>

É importante perceber que na seção “Properties of Field”, existem várias seções (“General”, “Behavior”, “Presentation”, “Events”, “Intro”, etc) podendo ter mais ou menos seções, e com mais ou menos itens, dependendo do componente.<br>

O exemplo de “Properties of Field” da imagem abaixo é do componente “Textfield”.

![sq](https://user-images.githubusercontent.com/81401104/119602180-fd8a4580-bdc0-11eb-9dab-3af21b272167.gif)


É importante saber disso para que facilite o processo de localizar as seções, itens, etc.<br>

Outra situação recorrente é a referenciação dentro do tutorial de um componente para outro tutorial dentro deste documento.<br>

É importante também que já tenha realizado os passos dos tutoriais  “Como Criar Seu Primeiro Projeto, Menu e Formulário” e “Como Executar a Aplicação”.

<div id='id-textfield'/>
 
## Textfield 📓

![image](https://user-images.githubusercontent.com/81401104/116603558-6e922680-a903-11eb-8b7f-65c1a9b26f2f.png)

O componente “Textfield” serve para escrever textos, principalmente nomes, mas também pode ser utilizado para gravar números de telefone usando a máscara nas propriedades do campo, veremos como fazer isso em breve.

Selecione o componente “Textfield”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no componente que você acabou de soltar).

🔗Vídeo:https://www.youtube.com/watch?v=ySN4K9JrlwQ&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=11

### Textfield 📓 > GENERAL 🎖️

<img src="https://user-images.githubusercontent.com/81401104/115269185-6f5fd700-a111-11eb-992d-2e9493159141.png"><br>

Nessa aba “Properties of Field”, abaixo de “General”, tem o campo “Name”, este se refere a identificação do campo para a codificação, para possíveis programações posteriores. Geralmente nele você irá repetir o que estará escrito em “Label” que é a identificação do campo para o usuário.

O campo “Column Title” serve para identificar quando for visualizar a lista (para visualizar em formato lista observe o topo da página, selecione “List” ).

O campo “Placeholder” serve como um guia para o que preencher, é interessante que você visualize isso, escreva no campo “Testando”, observe o efeito no campo no formulário.
<img src="https://user-images.githubusercontent.com/81401104/115271003-46404600-a113-11eb-860f-ca5edf37ad4b.png">


### Textfield 📓 > VALUES 1️⃣

<img src="https://user-images.githubusercontent.com/81401104/115285074-d5555a00-a123-11eb-80ae-0092b27958a4.png">


Em “Properties of Field”, abaixo de “Values”, há 4 campos e uma caixa de seleção, que são respectivamente: “Mask”, “Default”, “Minimum Length”, “Maximum Length” e “Enable Barcode Scanner”.

Em “Mask” você pode determinar o padrão específico de preenchimento, ou seja, quantidade e tipo específica de caracteres. Por exemplo, se você quer que o campo aceite números de telefone em um formato específico, você pode preencher esse campo com (99)99999-9999, faça isso agora para testarmos.

Para que fique harmônico, vá em “Name” e “Label” e escreva “Número de Telefone”. Deixe o campo do “Placeholder” em branco.

Execute a aplicação.
<img src="https://user-images.githubusercontent.com/81401104/115287508-bd330a00-a126-11eb-9835-673d0eb26469.png">


Preencha o campo “Número de telefone” com qualquer número, pode ser (45) 98765-4321 
e  então clique no botão ![image63](https://user-images.githubusercontent.com/81401104/126811136-c8402d22-6277-4071-835d-1afcd6c25227.png)


Agora você consegue visualizar seus registros:
<img src="https://user-images.githubusercontent.com/81401104/115287588-d63bbb00-a126-11eb-9a81-29435627ddd9.png"><br>

 e o processo é o mesmo de antes para adicionar novos registros.

“Default” se refere a um preenchimento automático de valor. Insira no campo “Default” do “Número de Telefone” com “(45)99887-6655”.

Execute a aplicação.

<img src="https://user-images.githubusercontent.com/81401104/115288674-1b142180-a128-11eb-82f0-3a930b0e05aa.png">


Observe que já está preenchido com (45)99887-6655, mas é possível alterá-lo.

“Minimum Length” se refere ao número mínimo de caracteres a ser usado no preenchimento do campo. Por exemplo, selecione e arraste mais um componente “Textfield” para dentro do formulário e então edite apenas essa configuração do “Minimum Length” para o valor de 5.

Execute a aplicação. Ao preencher o campo você perceberá que será necessário no mínimo 5 caracteres para que seja possível salvar o registro

“Maximum Length” se refere ao número máximo de caracteres permitido no preenchimento do campo. Por exemplo, você pode selecionar e arrastar mais um “Textfield” para dentro do formulário e então editar apenas essa configuração do “Maximum Length” para o valor de 10.

Execute a aplicação. Ao preencher o campo você perceberá que será permitido no máximo 10 caracteres para que seja possível salvar o registro.

“Enable Barcode Scanner” se refere a permitir scanner de código de barras. Você pode testar essa configuração ao selecionar a caixa de seleção e então execute a aplicação. Na tela de registro, 
clique no <img src="https://user-images.githubusercontent.com/81401104/115289090-9a095a00-a128-11eb-82ee-a03ac0411da2.png"> e então irá acionar a câmera do dispositivo, e fará a leitura do código de barras.

### Textfield 📓 > BEHAVIOR 🎬

<img src="https://user-images.githubusercontent.com/81401104/115289428-ed7ba800-a128-11eb-89a1-a0fd60d1efef.png">

Aqui você encontrará 3 caixas de seleção (Required, Disabled e Visible) e 3 listas suspensas (Visibility Rules, Required Rules e Disabled Rules).

Traduções: 

Required = Obrigatório
Disabled = Desativado
Visible = Visível

Visibility Rules = Regras de Visibilidade 
Required Rules = Regras de Obrigatoriedade 
Disabled Rules = Regras de Desativação

Por padrão, as caixas de seleção “Required” e “Visible” estarão marcadas e a caixa “Disabled” estará desmarcado.

Você pode alterar de obrigatório para opcional, visível para invisível e desativado para ativado, basta marcar ou desmarcar a caixa de seleção.

Referente às regras de visibilidade, obrigatoriedade e desativabilidade, é importante destacar que elas são dependentes de outro campo dentro do formulário.

Vamos testar isso na prática. Selecione e arraste o componente “Integer” para dentro do formulário.

<img src="https://user-images.githubusercontent.com/81401104/115289821-64b13c00-a129-11eb-809d-d6fea45d85de.png">

 no “Properties of Field”, abaixo de “General”, em “Name” e “Label” preencha o campo com “Idade”. 
 
![idade2](https://user-images.githubusercontent.com/81401104/119603354-64a8f980-bdc3-11eb-9045-674b4e939884.gif)


Volte a editar as propriedades do  “Número de Telefone” abaixo de “Behavior” ,clique no ![image](https://user-images.githubusercontent.com/81401104/116604024-00019880-a904-11eb-9089-83baafbf8fa3.png)
do “Visibility Rules”,

irá abrir a seguinte janela:<img src="https://user-images.githubusercontent.com/81401104/115290616-223c2f00-a12a-11eb-902f-4ff56b703292.png">
no “Name” escreva “Regra da Idade”, em “Type” selecione “Integer”, em “Operation” selecione “Greater or Equal”, em “Value” escreva “18”.

Agora clique no botão ![image13](https://user-images.githubusercontent.com/81401104/126811619-a920a2e3-db11-44b0-8eaf-e2fd930e58e1.png)

Agora desmarque a caixa de seleção “Visible”.

![image](https://user-images.githubusercontent.com/81401104/115290773-50217380-a12a-11eb-805e-a2f0cde5d796.png)

Então clique na lista suspensiva do “Visibility Rules” (do campo “Idade”) e selecione “Regra da Idade”:
![image](https://user-images.githubusercontent.com/81401104/115290819-5d3e6280-a12a-11eb-8a12-5ce14ccc26c9.png)

 e então aparecerá mais uma lista embaixo, clique e selecione “Idade”.
(imagem na próxima página)
![image](https://user-images.githubusercontent.com/81401104/115290864-6deed880-a12a-11eb-9c10-250f6e028aa2.png)


Agora execute a aplicação.

Automaticamente se abrirá uma nova página no seu navegador (tela dos registros), clique no botão ![image](https://user-images.githubusercontent.com/81401104/115290892-7810d700-a12a-11eb-8693-bb6fb8a2f6a0.png)

![image](https://user-images.githubusercontent.com/81401104/115290923-8101a880-a12a-11eb-83b8-c57244d444a9.png)

Preencha o campo “Idade” com “18” e observe que o campo “Número de Telefone” surge para ser preenchido.

e se preencher o campo “Idade” com “17”, o campo “Número de Telefone” não irá aparecer.

Você pode aplicar essas regras da mesma forma para a obrigatoriedade e desativação.

### Textfield 📓 > OTHERS 📝
![image](https://user-images.githubusercontent.com/81401104/115293506-cb385900-a12d-11eb-95ab-031c63694490.png)

Aqui na seção “Others” você encontrará essa lista do “Feed Data”, que serve para preencher o campo com dados fictícios para validá-lo.

Com o campo “Número de Telefone” ou “Nome Completo” você pode preenchê-lo com a opção “Phone” ou “People” respectivamente.

Agora execute a aplicação.

Automaticamente se abrirá uma nova página no seu navegador, e você verá registro de números de telefones/nomes fictícios na tela (próxima página), que verificará o campo como válido.
![image](https://user-images.githubusercontent.com/81401104/115293603-ec00ae80-a12d-11eb-9cd5-6b381b83ff9c.png)


### Textfield 📓 > PRESENTATION 📊
![image](https://user-images.githubusercontent.com/81401104/115293763-17839900-a12e-11eb-8100-e65a2bbc0b0b.png)


Nessa seção você consegue editar quanto de espaço o campo irá ocupar nas telas de desktops, tablets, mobiles horizontais e mobiles verticais respectivamente. O espaço ocupado pode variar de 8% até 100%.

Clique no campo “Número de Telefone”  criado antes.
![image](https://user-images.githubusercontent.com/81401104/115293785-1f433d80-a12e-11eb-8835-39fa7699f32a.png)


Se você está usando desktop, clique na primeira lista suspensiva e então escolha a opção col-lg-12:100% e observe como ficou no formulário.

![image](https://user-images.githubusercontent.com/81401104/115293817-2702e200-a12e-11eb-871a-709b8a766f4b.png)

Execute a aplicação.

Você pode voltar na tela de edição do formulário e testar com as outras medidas para visualizar como ficam.

No item “CSS Class”  você pode informar a classe de css customizada para o componente.

### Textfield 📓 > EVENTS 🎞️
![image](https://user-images.githubusercontent.com/81401104/115293973-63364280-a12e-11eb-98a0-b3d95c613664.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “Events” dos componente “Decimal” e “Button”.

### Textfield 📓 > INTRO ℹ️ 

![image](https://user-images.githubusercontent.com/81401104/115294185-a7c1de00-a12e-11eb-9481-9df98b38dfef.png)

A seção “Intro” serve como uma introdução instrutiva, para explicar sobre o preenchimento dos campos ou o que você achar importante.

É importante saber que essa funcionalidade só irá funcionar na primeira vez, se quiser testá-lo novamente será preciso criar um novo formulário.

Vamos testar isso agora, selecione e solte dois componentes “Textfield” dentro do formulário. 
![image](https://user-images.githubusercontent.com/81401104/115294159-9d9fdf80-a12e-11eb-8c99-378be69a4962.png)

No primeiro “Textfield”, em “Position” selecione “Top”, em “Order” digite “1”, em “Message” escreva “Esse é o primeiro” (imagem na próxima página).

![image](https://user-images.githubusercontent.com/81401104/115294205-aee8ec00-a12e-11eb-928f-c37400f1bd77.png)

No segundo “Textfield”, em “Position” selecione “Right”, em “Order” digite “2”, em “Message” escreva “Esse é o segundo” .
![image](https://user-images.githubusercontent.com/81401104/115294376-ea83b600-a12e-11eb-832d-d96e58ea37c2.png)

Agora execute a aplicação.Irá abrir a seguinte página:
![image](https://user-images.githubusercontent.com/81401104/115294454-ff604980-a12e-11eb-9466-6a769bb2cde3.png)

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/115294470-05562a80-a12f-11eb-9dd2-e6adb2664492.png).

Então irá aparecer o efeito do intro na seguinte página:
![image](https://user-images.githubusercontent.com/81401104/115294508-1010bf80-a12f-11eb-8f4e-54cf9a4d30a9.png)
![image](https://user-images.githubusercontent.com/81401104/115908434-8c154b00-a440-11eb-8863-f01b4a55ac84.png)

Essa visualização de destaque do campo com a mensagem ao lado (ou embaixo, etc), é efeito das configurações na seção “Intro”.

Você pode continuar adicionando novos campos e alternando as ordens e as mensagens, mas lembre-se que só funciona da primeira vez, então para testar denovo é necessário criar um novo formulário.

<div id='id-textarea'/>

## TextArea 📄
![image](https://user-images.githubusercontent.com/81401104/115908738-edd5b500-a440-11eb-95f4-8c0d9bba0801.png)

Com o componente  “Textarea” você consegue adicionar valores do tipo letras e números, com uma área maior que uma linha.

Selecione o componente “Textarea”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada

“Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](https://user-images.githubusercontent.com/81401104/115908778-fa5a0d80-a440-11eb-9b57-b6066c60094c.png)

Execute a aplicação

E na tela de registrar, no campo do “Textarea” você pode adicionar valores do tipo letras e números, com 2 linhas ou mais (pode-se adicionar mais linhas na seção “Presentation”, em “Rows”)

![image](https://user-images.githubusercontent.com/81401104/115908849-12ca2800-a441-11eb-95d5-9ce556444aeb.png)

Após salvar:

![image](https://user-images.githubusercontent.com/81401104/115908877-1cec2680-a441-11eb-83b1-07f7ae1cf13a.png)

🔗Vídeo: https://www.youtube.com/watch?v=5M0pQUNpSHc&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=12

### TextArea 📄 > PRESENTATION 📊

![image](https://user-images.githubusercontent.com/81401104/115909214-97b54180-a441-11eb-9ca8-45c8cfff9f75.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “Presentation” do componente “Textfield”.

O item “Rows” se refere a quantas linhas você quer para o seu componente “Textarea”. Por exemplo, se colocar “4”, perceberá que o componente aumentou para 4 linhas.

<div id='id-Editor'/>

## Editor 🎬
![image](https://user-images.githubusercontent.com/81401104/115909368-cdf2c100-a441-11eb-9d97-395d34503e72.png)

É um componente que permite o usuário inserir texto com a formatação desejada.

Selecione o componente “Editor”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](https://user-images.githubusercontent.com/81401104/115909949-933d5880-a442-11eb-9b38-d7781805f113.png)

Execute a aplicação:
![image](https://user-images.githubusercontent.com/81401104/115909971-9c2e2a00-a442-11eb-9d79-740daa7fcc39.png)

E aqui você pode editar o texto com a formatação que quiser (sublinhado, negrito, entre outros), pode adicionar links, emojis e várias outras coisas.

Após adicionar as informações que quiser, clique no botão ![image](https://user-images.githubusercontent.com/81401104/115909993-a8b28280-a442-11eb-90a0-60ada9302880.png).

E irá aparecer da seguinte forma:

![image](https://user-images.githubusercontent.com/81401104/115910982-e532ae00-a443-11eb-8384-8290a56f32fe.png)

Para editar o registro adicionado, clique no botão ![image](https://user-images.githubusercontent.com/81401104/115912062-3e4f1180-a445-11eb-9f37-620b54b1690f.png)
 (embaixo de “Control”).
 
🔗Vídeo: https://www.youtube.com/watch?v=k33nAZRQVLQ&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=13

<div id='id-Hidden'/>

## Hidden 🙈
![image](https://user-images.githubusercontent.com/81401104/115912857-4196cd00-a446-11eb-8bf0-f3a091c444b5.png)

Com este componente você pode calcular valores que são ocultos ao usuário final, e enviar para salvar no banco de dados e consultar posteriormente em relatórios.

Selecione o componente “Hidden”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

Para aprender como usar o componente “Hidden”, acesse o tutorial do componente “Signature”.

### Hidden 🙈 > DATA TYPE 🗃️
![image](https://user-images.githubusercontent.com/81401104/115913172-a3573700-a446-11eb-9742-4f8601e03fb9.png)

Em Type você pode selecionar uma das 5 opções possíveis:
<ol>
 <li>String (para campos de texto)</li>
 <li>Integer (para números inteiros)</li>
 <li>Decimal (para números decimais)</li>
 <li>DateTime (para data e hora)</li>
 <li>Boolean (para verdadeiro ou falso)</li>
</ol>
<br>
Default Value: Valor padrão (o valor será preenchido automaticamente, mas sendo possível alterar caso necessário).

<div id='id-Integer'/>

## Integer 🔢
![image](https://user-images.githubusercontent.com/81401104/115914587-858ad180-a448-11eb-9aba-1acc58ef85e3.png)
<br>
É um componente utilizado para quando se necessita digitar números inteiros para uma aplicação.

Selecione o componente “Integer”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/115914627-93d8ed80-a448-11eb-88da-c2e494da605e.png)

Execute a aplicação.
![image](https://user-images.githubusercontent.com/81401104/115914683-a6ebbd80-a448-11eb-8d68-2b03746f00f7.png)

Perceba que só é possível  inserção de números dentro do campo.

Após salvar, estará disposto da seguinte forma na tela dos registros:
![image](https://user-images.githubusercontent.com/81401104/115914760-c1259b80-a448-11eb-88bf-61d43623e625.png)

🔗Vídeo: https://www.youtube.com/watch?v=hP0mfTJ18Qs&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=14

### Integer 🔢 > VALUES 1️⃣
![image](https://user-images.githubusercontent.com/81401104/115914830-d69ac580-a448-11eb-8680-dde1bf8d8b14.png)

Em  “Values”, existem 3 campos e uma caixa de seleção, que são respectivamente: Default, Minimum Value, Maximum Value e Auto Increment.

Default: se refere a um preenchimento automático de valor, por exemplo, insira no campo “Default” o valor “10”.

Execute a aplicação:
![image](https://user-images.githubusercontent.com/81401104/115914900-eb775900-a448-11eb-8f06-749e07b0e1c0.png)

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/115915188-5fb1fc80-a449-11eb-89e1-57eae620af5d.png). 

Observe que já está preenchido com “10”, mas é possível alterá-lo.

Minimum Value: se refere ao valor mínimo do número a ser usado no preenchimento do campo. Para testar, preencha esse campo com “5”.

Execute a aplicação.

Preencha o campo com “4” e depois com “5” e observe que o valor mínimo a ser inserido é “5”  para ser possível salvar as informações inseridas no campo.

Maximum Value: se refere ao valor máximo do número a ser usado no preenchimento do campo. Para testar, preencha esse campo com “15”.

Execute a aplicação. 

Preencha o campo com “15” e depois com “16” e observe que o valor máximo permitido é “15”  para ser possível salvar as informações inseridas no campo.

Auto Increment: Irá iniciar com o valor 1 e depois continuar com a sequência (2,3,4…) de forma automática. Se tiver um valor inicial definido, por exemplo, “34”, irá continuar a partir dele (35,36,37…), igual nas imagens de exemplo a seguir:
![image](https://user-images.githubusercontent.com/81401104/115915247-73f5f980-a449-11eb-9de3-3542a5336c36.png)
![image](https://user-images.githubusercontent.com/81401104/115915296-86703300-a449-11eb-8bce-144d0ff7cab7.png)

<div id='id-Decimal'/>

## Decimal 💲
![image](https://user-images.githubusercontent.com/81401104/115915315-8d974100-a449-11eb-8ba7-dd634492ea2e.png)

É um componente usado para digitar números decimais para uma aplicação.

Selecione o componente “Decimal”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](https://user-images.githubusercontent.com/81401104/115915538-d5b66380-a449-11eb-8316-c8407cf6c482.png)

Execute a aplicação.

![image](https://user-images.githubusercontent.com/81401104/115915563-dfd86200-a449-11eb-941a-b79f87108c94.png)

Perceba que na tela de registrar a estrutura padrão é de número decimal.

Após adicionado e salvo, estará disposto da seguinte forma na tela dos registros:

![image](https://user-images.githubusercontent.com/81401104/115915596-e9fa6080-a449-11eb-8dcc-099eadcd2201.png)

🔗Vídeo: https://www.youtube.com/watch?v=IS_NL5Txe7A&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=15

### Decimal 💲 > VALUES 1️⃣
![image](https://user-images.githubusercontent.com/81401104/115916759-9be65c80-a44b-11eb-944a-788bd6dcbe1d.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “Values” do componente “Integer”.

Scale: Se refere a quantidade de algarismos após o ponto ou vírgula, por exemplo, adicione o valor “5” no campo do “Scale”. Ao executar a aplicação, ficará parecido com a seguinte imagem:
![image](https://user-images.githubusercontent.com/81401104/115916779-a1dc3d80-a44b-11eb-8f38-110d8c4f9cf3.png)
Perceba que há cinco algarismos após o ponto.

### Decimal 💲 > EVENTS ⚙️
![image](https://user-images.githubusercontent.com/81401104/115916822-b3254a00-a44b-11eb-8feb-bd68d1342eaf.png)

Para testar a seção “Events” vamos apagar os campos criados anteriormente com o componente “Decimal” e deixar vazio o formulário.

Agora, selecione e arraste 3 componentes “Decimal”, um do lado do outro.
Nomeie o primeiro de “Number1”, o segundo de “Number2” e o terceiro de “Total” (Igual na imagem abaixo)
![image](https://user-images.githubusercontent.com/81401104/115918250-b0c3ef80-a44d-11eb-89f5-cc208a92f92e.png)

Iremos realizar a seguinte função: ao preencher o valor do “Number1” e do “Number2” automaticamente será dado o resultado da soma desses dois campos no “Total” 

Clique no botão ![add your script here](https://user-images.githubusercontent.com/81401104/126811989-e7e0e200-8ea7-4f5e-b805-9fff8e28790b.png)

 (se localiza na seção “Events”) do campo “Total”  e automaticamente abrirá essa aba:
![image](https://user-images.githubusercontent.com/81401104/115918367-d18c4500-a44d-11eb-95a9-80bc573cfad9.png)

Nesse campo do “Custom Scripts” copie e cole o seguinte:

                                                    function soma() {
                                    this.entity.Total = this.entity.Number1 + this.entity.Number2;
                                    }

Agora volte para o “Form Design”  do lado de “Dev Properties”, no topo da página. 
(Imagem abaixo)
![image](https://user-images.githubusercontent.com/81401104/115918444-e7016f00-a44d-11eb-98df-a46551bd1200.png)

Clique no campo “Number1”, vá na seção “Events”, em “Name” selecione a opção “onkeyup” e em “On” escreva “soma()” 
e então clique no botão ![image](https://user-images.githubusercontent.com/81401104/115918481-f2549a80-a44d-11eb-88f0-43c93d31576e.png).

![image](https://user-images.githubusercontent.com/81401104/115918534-026c7a00-a44e-11eb-994a-7cba89f79b6d.png)

Após clicar no botão, ficará assim:

![image](https://user-images.githubusercontent.com/81401104/115918646-25972980-a44e-11eb-92d4-722fc2ab5285.png)

Faça a mesma coisa com o campo “Number2”.

Execute a aplicação.
![image](https://user-images.githubusercontent.com/81401104/115918669-2d56ce00-a44e-11eb-8062-aa61ad0cdb77.png)

Então clique no botão ![image](https://user-images.githubusercontent.com/81401104/115918700-3778cc80-a44e-11eb-9a07-4f211134ff73.png).

Abrirá a seguinte página:
![image](https://user-images.githubusercontent.com/81401104/115919016-a524f880-a44e-11eb-8654-73047c48392f.png)

No “Number1” insira o valor “2.55”, e no “Number2” insira o valor “1.32” e automaticamente irá aparecer o valor “3.87” no campo “Total”. Você pode testar com outros valores se quiser.

Após adicionar os valores, clique no botão ![image](https://user-images.githubusercontent.com/81401104/115919054-b3731480-a44e-11eb-9cd3-02fef99ed26b.png)
.

<div id='id-Date'/>

## Date 📆 
![image](https://user-images.githubusercontent.com/81401104/115919138-d0a7e300-a44e-11eb-9376-8aeb6e83f45c.png)

Com o componente “Date” é possível adicionar uma data, data atual, uma data pré-definida ou uma outra data qualquer preenchida pelo usuário.

Selecione o componente “Date”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/115919171-db627800-a44e-11eb-8784-6df95f45ec2f.png)

Execute a aplicação

Na tela de registrar, o campo estará disposto da seguinte maneira:
![image](https://user-images.githubusercontent.com/81401104/115919215-eae1c100-a44e-11eb-8f03-627c920c96d7.png)

Perceba que o formato é de mês/dia/ano. Então é só selecionar a data e depois salvar:
![image](https://user-images.githubusercontent.com/81401104/115919256-f8974680-a44e-11eb-816e-f9438eb08109.png)

🔗Vídeo: https://www.youtube.com/watch?v=ZINKzaGHI-w&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=16

### Date 📆 > VALUES 1️⃣
![image](https://user-images.githubusercontent.com/81401104/115919565-60e62800-a44f-11eb-913a-b0a2256a3b8d.png)

Default (Padrão): O campo será preenchido com uma data pré-determinada, mas é possível alterar, se necessário.

Por padrão o formato está “mm/dd/yyyy” que significa “mês/dia/ano”. 

Current Date (Data atual). Ao selecionar essa caixa, o campo “Date” sempre estará preenchendo automaticamente com a data atual.

<div id='id-DateTime'/>

## DateTime 📆⏲️ 
![image](https://user-images.githubusercontent.com/81401104/116605437-cb8edc00-a905-11eb-9d85-da4e8267a93c.png)

Com este componente você pode adicionar uma data e horário atual, data e horário pré definido ou uma outra data e horário qualquer preenchida pelo usuário

Selecione o componente “DateTime”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/115919736-9f7be280-a44f-11eb-8b8a-d419b75b90d4.png)

Execute a aplicação.

![image](https://user-images.githubusercontent.com/81401104/115919778-aacf0e00-a44f-11eb-9db4-d2b72adada8a.png)

Perceba que a data está no formato mês/dia/ano e o horário está no formato AM/PM.
![image](https://user-images.githubusercontent.com/81401104/115919857-c803dc80-a44f-11eb-854f-cea22d401e9a.png)

Após salvar, estará disposto da seguinte forma na tela dos registros:
![image](https://user-images.githubusercontent.com/81401104/115919887-d18d4480-a44f-11eb-9f07-a3ee4eae8c79.png)

🔗Vídeo: https://www.youtube.com/watch?v=Qw93cdchp-c&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=17

### DateTime 📆⏲️ > VALUES 1️⃣
![image](https://user-images.githubusercontent.com/81401104/115919926-de119d00-a44f-11eb-84e3-f7d7e912f67c.png)

Default (Padrão): O campo será preenchido com uma data e horário pré-determinado, mas é possível alterar, se necessário.

Por padrão o formato está “mm/dd/yyyy” que significa “mês/dia/ano”. 

  “ --:-- --” é o formato padrão de horário da américa do norte, por exemplo, 04:45 AM ou 9:03 PM que no sistema brasileiro seriam 04:45 e 21:03 respectivamente.

Current Date/Time (Data e horário atual): Ao selecionar essa caixa, o campo “DateTime” sempre estará preenchendo automaticamente com a data e horário atual.

<div id='id-Time'/>

## Time ⌛ 
![image](https://user-images.githubusercontent.com/81401104/115920003-faadd500-a44f-11eb-9908-55c0199797e6.png)

Com este componente você pode adicionar um horário atual, horário pré definido ou um outro horário qualquer preenchida pelo usuário.

Selecione o componente “Time”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/115920033-026d7980-a450-11eb-9758-c832bcd2d674.png)

Execute a aplicação.

O componente estará disposto da seguinte maneira na tela de registrar:
![image](https://user-images.githubusercontent.com/81401104/115920056-0bf6e180-a450-11eb-82fc-eac0276ca393.png)

Perceba que está no formato “--:-- --”, isso quer dizer que o horário é em AM/PM (AM para antes do meio dia e PM para depois do meio dia). 

Após salvar o horário, a tela dos registros estará disposta da seguinte maneira:
![image](https://user-images.githubusercontent.com/81401104/115920088-14e7b300-a450-11eb-91e3-6e54e96d6872.png)

Vídeo: https://www.youtube.com/watch?v=9kFXdYT4GAY&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=18

### Time ⌛ > VALUES 1️⃣
![image](https://user-images.githubusercontent.com/81401104/115920106-1c0ec100-a450-11eb-8461-27ea86d57921.png)

Default (Padrão): O campo será preenchido com uma horário pré-determinado, mas é possível alterar, se necessário.

<div id='id-CheckBox'/>

## CheckBox ✅
![image](https://user-images.githubusercontent.com/81401104/115920191-39dc2600-a450-11eb-98bc-b0c17f7c2f6e.png)

O componente  “Checkbox” é uma caixa de seleção que permite o usuário a fazer uma escolha binária, ou seja, uma escolha entre duas opções mutuamente exclusivas..

Selecione o componente “Checkbox”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/115920271-56785e00-a450-11eb-9d7a-63d4658aa8aa.png)

Escreva “Obrigatório” nos campos “Name” e “Label” que se encontram na seção “General” do ”Properties of Field” do checkbox.
 ![image](https://user-images.githubusercontent.com/81401104/115920308-6728d400-a450-11eb-9652-555a054366a3.png)

Agora execute a aplicação.
Na tela de registrar você consegue visualizar o componente:

![image](https://user-images.githubusercontent.com/81401104/115920336-6f810f00-a450-11eb-9fcc-4d291d9eae89.png)

![image](https://user-images.githubusercontent.com/81401104/115920355-760f8680-a450-11eb-994d-e7b640b590f3.png)

Após salvá-los, estará dispostos da seguinte forma na tela de registros:

![image](https://user-images.githubusercontent.com/81401104/115920463-9ccdbd00-a450-11eb-9245-f4f2b18463b1.png)

### CheckBox ✅ > VALUES 1️⃣
![image](https://user-images.githubusercontent.com/81401104/115920485-a48d6180-a450-11eb-8410-2395926bef07.png)

A caixa de seleção “Default Value” se refere ao campo já estar marcado ou não na hora de realizar os registros.

🔗Vídeo: https://www.youtube.com/watch?v=BSVBdBxE4sA&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=19

<div id='id-ChecklistDB'/>

## ChecklistDB 📁
![image](https://user-images.githubusercontent.com/81401104/115920530-b2db7d80-a450-11eb-80a9-2f7f035b7451.png)

Este componente cria uma lista de controle que será conectada a um DataSource. Os registros podem ser inseridos pelo usuário final.

Selecione o componente “ChecklistDB”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

Para visualizar a utilização desse componente, desça até a seção “Source” deste tutorial.

*** Entre em contato com o suporte da easy comtec para utilizar esse componente ****

### ChecklistDB 📁 > PRESENTATION 📊

![image](https://user-images.githubusercontent.com/81401104/115920727-f635ec00-a450-11eb-9b9e-5ce77c810e4c.png)

Para poder visualizar as diferenças de apresentação, é obrigatório que já tenha adicionado valores na seção “Values”.

Para saber mais sobre como usar essa funcionalidade, vá até a seção “Presentation” do componente “Textfield”.

Em “Style” você tem três opções que pode selecionar: “Fixed”, “Fluid” ou “Vertical”. Selecione cada opção e perceba a diferença na disposição visual dos itens.

### ChecklistDB 📁 > SOURCE 🔌
![image](https://user-images.githubusercontent.com/81401104/115920758-01891780-a451-11eb-8678-248b79757f77.png)

Para fazer funcionar o componente “ChecklistDB” é necessário puxar os dados de outro formulário/datasource. 

Logo, é necessário, que tenha criado esse outro formulário/banco de dados, e após atualizar a lista, apenas selecione a “Class” desse outro.
<table>
  <tr>
   <td>Source Field:</td>
   <td>Label Field:</td>
   <td>Picture Field:</td>
 </tr>
</table>

<div id='id-Radio'/>

## Radio 🔘
![image](https://user-images.githubusercontent.com/81401104/115922262-0d75d900-a453-11eb-9b6b-ddc37d5b072d.png)

Com o componente “Radio” você pode fornecer uma lista de opções mas selecionar apenas uma opção como verdadeira.

Selecione o componente “Radio”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/115922283-15357d80-a453-11eb-87fc-674c13781753.png)

Desça até a seção “Values” desse tutorial para aprender como usar esse componente.

Vídeo: https://www.youtube.com/watch?v=RPHA64EMDEE&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=20

### Radio 🔘 > VALUES 1️⃣
![image](https://user-images.githubusercontent.com/81401104/115922505-5cbc0980-a453-11eb-816d-9ec435070fba.png)

Aqui você irá adicionar os valores, por exemplo, criar listas com as opções para selecionar, lembrando que apenas uma opção poderá ser selecionada com esse componente.

Agora clique no botão ![image](https://user-images.githubusercontent.com/81401104/115922523-634a8100-a453-11eb-95a4-2eb6c60f6164.png)
, automaticamente abrirá a janela modal “Enumerations” (imagem na próxima página), em “Name” escreva “Gênero”, em“Type” mantenha a opção “String”.

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/115923580-d30d3b80-a454-11eb-8fd6-3a7feb9d307d.png)
 e adicione “Masculino”, denovo clique ![image](https://user-images.githubusercontent.com/81401104/115923596-d99bb300-a454-11eb-89e1-866c67f5326a.png)
e adicione a opção  “Feminino” e então clique no botão ![image13](https://user-images.githubusercontent.com/81401104/126812104-48efecf4-105b-42d9-8682-ae7d8d2d7fdc.png)
 . (Imagem na próxima página)

Duas coisas importantes de saber sobre a janela “Enumerations”:
Em “Type” você tem duas opções que pode selecionar: “String” ou “Integer”. “String” se refere a palavras, “Integer” se refere a números.
“Max Length” se refere a quantidade máxima de caracteres que cada opção terá.

![image](https://user-images.githubusercontent.com/81401104/115923727-09e35180-a455-11eb-9bd3-4ce96ea55475.png)

Ainda na seção “Values”,  tem o item “Default”, clicando nele irá aparecer as opções “Masculino” e “Feminino”, isso quer dizer que se você selecionar um desses dois agora, na hora de preencher o formulário um deles já estará selecionado, mas ainda será possível mudar caso queira. 

Execute a aplicação.

O componente será visto da seguinte maneira na tela de registrar:
![image](https://user-images.githubusercontent.com/81401104/115923754-19629a80-a455-11eb-9717-635682b4ac28.png)

<div id='id-Dropdown'/>

## Dropdown 🗄️
![image](https://user-images.githubusercontent.com/81401104/115923839-4020d100-a455-11eb-9f00-1e9c4c39a47d.png)

O componente “Dropdown” serve para você fornecer uma lista de opções em formato de menu.

Selecione o componente “Dropdown”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/116135849-fc71d580-a6a7-11eb-924a-962830748a28.png)

Na seção “Values” do “Properties of Field”, clique no botão ![image](https://user-images.githubusercontent.com/81401104/116135875-05fb3d80-a6a8-11eb-90a7-38590cd054c5.png)
, irá aparecer a seguinte janela modal:
![image](https://user-images.githubusercontent.com/81401104/116135980-24f9cf80-a6a8-11eb-8a04-ba06728e76e6.png)

Em “Name” escreva veículo, então clique no ![image](https://user-images.githubusercontent.com/81401104/116136117-4a86d900-a6a8-11eb-994e-083b8e5dba93.png)
. Irá a aparecer o seguinte embaixo do botão:
![image](https://user-images.githubusercontent.com/81401104/116136157-54104100-a6a8-11eb-81a1-be542bbc8014.png)

Edite o “Option A” para “Carro”. Adicione mais duas opções e altere-as para “Moto” e “Caminhão”. 
![image](https://user-images.githubusercontent.com/81401104/116136211-64c0b700-a6a8-11eb-887f-189f0f8d0ab1.png)

Clique no botão![image](https://user-images.githubusercontent.com/81401104/116136235-6db18880-a6a8-11eb-883f-89dd8444852f.png)
 , e após salvo, voltará automaticamente para a tela de design do formulário. 

Execute a aplicação.

Na tela de registrar, o “Dropdown” funcionará da seguinte forma:

![image](https://user-images.githubusercontent.com/81401104/116136274-7904b400-a6a8-11eb-84c7-db352e7116f0.png)

🔗Vídeo: https://www.youtube.com/watch?v=QsfoAgq2EIs&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=21

### Dropdown 🗄️ > VALUES 1️⃣
![image](https://user-images.githubusercontent.com/81401104/116136301-8457df80-a6a8-11eb-9989-de387c22fe47.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “Values” do componente “Radio”.

<div id='id-DropdownDB'/>

## DropdownDB 📥
![image](https://user-images.githubusercontent.com/81401104/116136414-a6e9f880-a6a8-11eb-8374-e4210d16ff89.png)

O componente “DropdownDB” serve para você fornecer uma lista de opções em formato de menu a partir de um DataSource. O usuário final consegue inserir dados nessa lista.

 (Obs: A única diferença entre o “AutoComplete” e o “DropdownDB” é que o “AutoComplete” aparece quando é pesquisado e o “DropdownDB” aparece numa lista)

Selecione o componente “DropdownDB”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

Para aprender como usar esse componente, desça até a seção “Source” deste tutorial.

### DropdownDB 📥 > SOURCE 🔌
![image](https://user-images.githubusercontent.com/81401104/116136661-f8928300-a6a8-11eb-9b64-3fa9774a8237.png)

Nessa seção “Source” serão trazidos o conjunto de valores inseridos em outro campo, que pode ser de outro ou do mesmo formulário, desde que seja sob o mesmo projeto.

Então, vamos começar criando mais um formulário (igual demonstrado no tutorial “Como Criar Seu Primeiro Projeto, Menu e Formulário”).

E nesse novo formulário vamos adicionar o componente “Textfield” para dentro dele.
![image](https://user-images.githubusercontent.com/81401104/116136725-0ea04380-a6a9-11eb-9545-9a94612e11af.png)

Na seção “General”,Nomeie os campos “Name” e “Label”, de “Cor”.
  
![image](https://user-images.githubusercontent.com/81401104/116136757-1d86f600-a6a9-11eb-9060-f0fbcd9a1897.png)

Agora execute a aplicação.

![image](https://user-images.githubusercontent.com/81401104/116137524-0a285a80-a6aa-11eb-88bd-15d2f0ae06ac.png)

Irá abrir a seguinte página:

![image](https://user-images.githubusercontent.com/81401104/116137641-2af0b000-a6aa-11eb-950b-d51d88b82d86.png)

No campo “Cor” escreva “Vermelho”, clique no botão ![image](https://user-images.githubusercontent.com/81401104/116137555-14e2ef80-a6aa-11eb-8ad0-c16e743bb352.png)
.. 
![image](https://user-images.githubusercontent.com/81401104/116137594-20ceb180-a6aa-11eb-999e-663fc3472c10.png)

Repita o processo para adicionar as cores “Verde”, “Amarelo” e “Azul.
![image](https://user-images.githubusercontent.com/81401104/116137728-48257e80-a6aa-11eb-891a-1451d4d93bee.png)

Agora vamos voltar para o outro formulário com o componente “DropdownDB”.
![image](https://user-images.githubusercontent.com/81401104/116137753-54a9d700-a6aa-11eb-9023-18de50099b10.png)

E então em “Properties of Field”, desça até “Source” e em “Class” selecione o formulário que foi criado o campo “Cor” e em “Description Field” selecione o campo “Cor”.

Execute a aplicação.
![image](https://user-images.githubusercontent.com/81401104/116137792-612e2f80-a6aa-11eb-9ecc-22a933eb639c.png)

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/116137809-68553d80-a6aa-11eb-9117-ccec127c6faf.png) e irá abrir a seguinte página:
![image](https://user-images.githubusercontent.com/81401104/116137856-7c993a80-a6aa-11eb-82fd-d635d6053595.png)

Selecione o campo do DropDownDB:
![image](https://user-images.githubusercontent.com/81401104/116137880-8327b200-a6aa-11eb-89ee-a957342df7e7.png)

E você irá visualizar os valores adicionados no campo “Cor” do outro formulário. Selecione uma opção e então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116137914-8cb11a00-a6aa-11eb-9c8e-be336ebe2ba2.png)
![image](https://user-images.githubusercontent.com/81401104/116137958-9a669f80-a6aa-11eb-904d-bd6d856b889f.png)
:
 Você pode realizar o mesmo processo com ambos os campos no mesmo formulário.
Ainda na seção “Source”, em “Additional Data” você pode adicionar outro conjunto de valores de um campo desde que seja do mesmo formulário selecionado no “Class”.

<div id='id-AutoComplete'/>

## AutoComplete 🗄️🧲
![image](https://user-images.githubusercontent.com/81401104/116138049-b8340480-a6aa-11eb-93d7-6b47352f7108.png)

O componente “AutoComplete” serve para fornecer auto-completar a inserção do item a partir de um DataSource. O usuário final consegue inserir dados nessa lista.

A única diferença entre o “AutoComplete” e o “DropdownDB” é que o “AutoComplete” aparece quando é pesquisado e o “DropdownDB” aparece numa lista.

Ou seja, sabendo utilizar o “DropdownDB” você também saberá utilizar o componente “Autocomplete”

Selecione o componente “Dropdown”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](https://user-images.githubusercontent.com/81401104/116138456-37c1d380-a6ab-11eb-9925-e7cb8e33dc66.png)

Na seção “Source”, em “Class”  do “Autocomplete” selecione a opção “Cor” e em “Description Field” também selecione “Cor” 

(O formulário “Cor” e campo “Cor” com os registros de “Vermelho”,”Verde”, “Azul” e “Amarelo” foram criados durante o tutorial do componente “DropdownDB”).

Agora execute a aplicação.

Na tela de registrar, perceberá que ao escrever as letras iniciais, irá aparecer as opções disponíveis:
![image](https://user-images.githubusercontent.com/81401104/116138489-4314ff00-a6ab-11eb-86a2-03fd553ce2f5.png)

E então é só selecionar a opção desejada e prosseguir.

🔗Vídeo: https://www.youtube.com/watch?v=l0tQAqhDfVk&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=24

### AutoComplete 🗄️🧲 > FILTER 📮
![image](https://user-images.githubusercontent.com/81401104/116138542-532cde80-a6ab-11eb-8703-6a7f19e6288a.png)

Filter Name: Filtrar nome.

Filter Value: Filtrar valor.

### AutoComplete 🗄️🧲 >  SOURCE 🗂️
![image](https://user-images.githubusercontent.com/81401104/116138589-62139100-a6ab-11eb-84fd-155de24154fb.png)

Class (classe, nome do formulário ou datasource)
Description Field (Campo de descrição)

Allow add and edit (Permitir adicionar e editar)

Enable barcode scanner (Habilitar scanner de código de barras)

Additional Data (Dados adicionais)

Source From (Fonte de)

To (Para)

<div id='id-Label'/>

## Label 🔤
![image](https://user-images.githubusercontent.com/81401104/116139186-1f9e8400-a6ac-11eb-82d0-6d9d36c4f6f4.png)

Com este componente você pode apresentar valores do tipo letras e números, estes valores não serão gravados no banco de dados.

Selecione o componente “Label”, então arraste-o e solte-o onde está escrito “Drop new field here!”.
![image](https://user-images.githubusercontent.com/81401104/116139264-3644db00-a6ac-11eb-8e9a-09614b63beec.png)

 No campo do “Label”, da seção “General” do “Properties of Field”, clique no botão ![image](https://user-images.githubusercontent.com/81401104/116139313-43fa6080-a6ac-11eb-8ec1-44a4518a202e.png)
 para fazer a importação de um documento de texto do seu computador.
 
![image](https://user-images.githubusercontent.com/81401104/116139356-51afe600-a6ac-11eb-86d4-71bd0fea7901.png)

* O documento de texto tem que ser formato “.txt”.

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/116139413-5e343e80-a6ac-11eb-9ba4-4cd4a1a80ee2.png)
 para fazer o upload do documento.

Para esse tutorial eu criei o seguinte documento:
![image](https://user-images.githubusercontent.com/81401104/116139490-6f7d4b00-a6ac-11eb-9a93-cd86fed9bac8.png)

Perceba que cada item está em uma linha, isso tornará possível criar as opções.
![image](https://user-images.githubusercontent.com/81401104/116139529-7c9a3a00-a6ac-11eb-8b4b-5c178f2b33dd.png)

Selecione a primeira opção, e clique no botão ![image](https://user-images.githubusercontent.com/81401104/116139572-8ae85600-a6ac-11eb-80b8-18d902d1c193.png)

Execute a aplicação.
![image](https://user-images.githubusercontent.com/81401104/116139603-92a7fa80-a6ac-11eb-9271-71a8c276398e.png)

E após salvar, não será salvo no banco de dados, pois esse texto é apenas para orientação dentro do formulário.
![image](https://user-images.githubusercontent.com/81401104/116139634-9cc9f900-a6ac-11eb-987a-c5d85e09a6d1.png)

🔗Vídeo: https://www.youtube.com/watch?v=SM_LHGXmJm0&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=25

<div id='id-Box'/>

## Box 📦
![image](https://user-images.githubusercontent.com/81401104/116139702-afdcc900-a6ac-11eb-8314-3a977ca34b4e.png)

Com este componente você pode criar seções dentro do formulário, para organizar os componentes que estarão dentro dele e realizar funcionalidades conjuntas (das regras de visibilidade, por exemplo).

Isso permitirá economizar tempo na hora de editar as seções do “Properties of Field”, por exemplo, criando regra de visualização para todo o conjunto de componentes dentro do groupbox.

Selecione o componente “Box”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

Essa será a disposição inicial do componente no formulário:
![image](https://user-images.githubusercontent.com/81401104/116139757-bf5c1200-a6ac-11eb-85fb-a1ffd92cf91a.png)

Agora arraste um componente “Textfield” e um “Integer” para dentro do “Groupbox”:
![image](https://user-images.githubusercontent.com/81401104/116139844-dd297700-a6ac-11eb-990f-d359e60b69ea.png)

Nomeie o textfield de “Letra”,  e o “Integer”(Number2) de “Número”:
![image](https://user-images.githubusercontent.com/81401104/116139885-e9adcf80-a6ac-11eb-9309-a9076a4beccd.png)

E agora, selecionando o box você consegue configurar o “Behavior”, “Presentation” e “Intro” de todos os componentes dentro dele de uma vez só. 

Para saber mais sobre como editar e visualizar essas configurações do “Properties of Field”, acesse as seções “General”, “Behavior”, “Presentation” e “Intro” do componente “Textfield”.

Obs: também é possível editar essas propriedades para cada componente individualmente dentro do GroupBox.

Execute a aplicação.
![image](https://user-images.githubusercontent.com/81401104/116139918-f5999180-a6ac-11eb-901b-18c68eb5108c.png)


Adicione os valores nos dois campos e depois clique no botão ![image](https://user-images.githubusercontent.com/81401104/116139938-fc280900-a6ac-11eb-9f51-c7d0873d32e3.png)
.
![image](https://user-images.githubusercontent.com/81401104/116140285-7c4e6e80-a6ad-11eb-9482-8febc12b037d.png)

🔗Vídeo: https://www.youtube.com/watch?v=WQSmUF8h9Co&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=26

### Box 📦 > GENERAL 🎖️
![image](https://user-images.githubusercontent.com/81401104/116140548-dbac7e80-a6ad-11eb-9680-d9d5d23e0364.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “General” do componente “Textfield”.

Ao selecionar caixa do ![image](https://user-images.githubusercontent.com/81401104/116140566-e23af600-a6ad-11eb-8a0c-79dd83cab49f.png), será criado a borda para o componente, e também será possível editar o campo “Label”.

<div id='id-Signature'/>

## Signature ✒️
![image](https://user-images.githubusercontent.com/81401104/116140680-0c8cb380-a6ae-11eb-9d6b-4cbce5e464a6.png)

Com este componente você pode adicionar uma assinatura do usuário no seu formulário.

Selecione o componente “Signature”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

Para total visualização do processo da utilização do componente “Signature” será necessário realizar as etapas dos tutoriais “Como Adicionar Um Usuário” e “Como Dar Permissão Ao Usuário”.
![image](https://user-images.githubusercontent.com/81401104/116140718-1b736600-a6ae-11eb-897c-7476531eaf87.png)


Para fazer funcionar o componente “Signature” será preciso ter mais um componente “DateTime” ou “Date” e dois componentes “Hidden”.

Então, primeiro, vamos adicionar o componente “DateTime” e nomeá-lo de “Data e Hora”, e vamos nomear o componente “Signature” de “Assinatura”.
![image](https://user-images.githubusercontent.com/81401104/116140745-23330a80-a6ae-11eb-96ae-78a7e38011a2.png)


Selecione a caixa de seleção “Current DateTime” da seção “Values” do componente “DateTime”(Data e Hora) para sempre estar pegando a data e horário atual.

Agora selecione e solte os 2 componentes “Hidden” em cima do “Assinatura” e do “Data e Hora”
![image](https://user-images.githubusercontent.com/81401104/116140789-2fb76300-a6ae-11eb-998a-0b9da9737820.png)

Selecione o primeiro “Hidden” que está acima do “Assinatura” e o nomeie de “Hidden da Assinatura”. 
E na seção “Data Type”, em “Type” selecione a opção “String”. (imagem abaixo)

![image](https://user-images.githubusercontent.com/81401104/116140861-4fe72200-a6ae-11eb-85b4-ba85a0922eeb.png)

E no “Hidden” que está acima acima do “DateTime” o nomeie de “Hidden do DateTime”. 
E na seção “Data Type”, no item “Type” selecione a opção “DateTime”. (imagem abaixo)

![image](https://user-images.githubusercontent.com/81401104/116140915-642b1f00-a6ae-11eb-8baf-4c522e0ddbc1.png)

Agora vá até a seção “Signature” do componente “Signature”. No item “Date field” selecione a opção “Data e Hora” e no “Info field” selecione a opção  “Hidden Assinatura”.

![image](https://user-images.githubusercontent.com/81401104/116140947-6ee5b400-a6ae-11eb-8de9-748a987a4ed5.png)

Execute a aplicação.

Então irá abrir a seguinte tela:
![image](https://user-images.githubusercontent.com/81401104/116140966-75742b80-a6ae-11eb-9cd3-0ed8ad6a32e6.png)

Agora copie a URL (Link) desse formulário:

![image](https://user-images.githubusercontent.com/81401104/116141019-83c24780-a6ae-11eb-9fd7-dbb5de4ffbab.png)

E então abra em uma janela anônima:

![image](https://user-images.githubusercontent.com/81401104/116141051-8cb31900-a6ae-11eb-90f5-2a87e50ba625.png)

Entre com seu usuário. 

[Para continuar daqui em diante, é necessário ter realizado os passos dos tutoriais “Como Criar Seu Usuário” e “Como Dar Permissão Ao Seu Usuário”]

Aparecerá a seguinte tela:
![image](https://user-images.githubusercontent.com/81401104/116141142-abb1ab00-a6ae-11eb-9f0b-649dc9fd5d2a.png)

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/116141954-b6207480-a6af-11eb-8b8e-157154509935.png)
 e abrirá a seguinte tela:
![image](https://user-images.githubusercontent.com/81401104/116141979-bf114600-a6af-11eb-8cda-c7385c77f094.png)

Clique na caixa amarela “Click to Sign”, e aparecerá a seguinte janela:
![image](https://user-images.githubusercontent.com/81401104/116142075-da7c5100-a6af-11eb-9f99-a97d33c03da8.png)

Então é só desenhar a assinatura, por exemplo: 
![image](https://user-images.githubusercontent.com/81401104/116142120-e6681300-a6af-11eb-851f-a26f4172ecae.png)

E então clicar no botão ![image](https://user-images.githubusercontent.com/81401104/116142149-eec04e00-a6af-11eb-8865-51292d30aef4.png). Automaticamente voltará para essa página:
![image](https://user-images.githubusercontent.com/81401104/116142184-fa137980-a6af-11eb-943e-663390d51543.png)

Então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116142206-00a1f100-a6b0-11eb-9eec-ac2d4a76f486.png).

Será direcionado para a seguinte página:
![image](https://user-images.githubusercontent.com/81401104/116142262-16171b00-a6b0-11eb-98dc-f67dfb2cce56.png)

E aqui você consegue visualizar os registros.

Para visualizar o formulário preenchido com a assinatura, é só clicar no ![image](https://user-images.githubusercontent.com/81401104/116142292-1fa08300-a6b0-11eb-859f-e8a3af060214.png) (abaixo de “Control”).

### Signature ✒️ > SIGNATURE ✒️🗄️
![image](https://user-images.githubusercontent.com/81401104/116142331-2929eb00-a6b0-11eb-9114-227e4a7a6f04.png)

Date field: Selecionar o campo que contém o componente “Date” ou “DateTime”.

Info field: Selecionar o campo que contém o componente “Hidden” atrelado à assinatura.

<div id='id-Static'/>

## Static Image 🖼️
![image](https://user-images.githubusercontent.com/81401104/116142936-ddc40c80-a6b0-11eb-8c96-d0e9252f2f4d.png)

Com este componente você pode adicionar uma imagem que sempre estará sendo mostrada no formulário e não será salva dentro do banco de dados. 

Sobre as imagens é possível adicionar eventos como abrir outros forms ou hiperlink para outros sites. 

Selecione o componente “Image”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/116142976-e9173800-a6b0-11eb-8773-32c09bd26fee.png)

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/116142992-f0d6dc80-a6b0-11eb-8369-0b59b9806e0b.png), então selecione a imagem. 
![image](https://user-images.githubusercontent.com/81401104/116143196-385d6880-a6b1-11eb-8403-3a432aaaef6d.png)

Agora execute a aplicação.
![image](https://user-images.githubusercontent.com/81401104/116143236-43b09400-a6b1-11eb-9a9c-5fec3787631a.png)

A imagem aparece no formulário, mas não será salva no banco de dados. Ela pode servir como referência instrutiva, logomarca ou hiperlink, entre outros.

🔗Vídeo: https://www.youtube.com/watch?v=-B3EjQvR_UM&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=27

### Static Image 🖼️ > IMAGE 🚞
![image](https://user-images.githubusercontent.com/81401104/116143264-4dd29280-a6b1-11eb-8a11-e98399a84373.png)

Na seção “Image” do componente “Image” você pode dar descrição (“Description”) e um link, para qual será direcionado quando clicar na imagem. Lembre-se de clicar no ![image](https://user-images.githubusercontent.com/81401104/116143294-5a56eb00-a6b1-11eb-84a9-37a064bb07e3.png)
para adicionar o evento de ao clicar na imagem ser direcionado para o link.
![image](https://user-images.githubusercontent.com/81401104/116143334-6773da00-a6b1-11eb-8d29-8f974312f577.png)

<div id='id-Upload'/>

## Upload Image 📸📩
![image](https://user-images.githubusercontent.com/81401104/116143456-8d997a00-a6b1-11eb-9ff1-0436b57b9ad6.png)

Este componente permite você adicionar uma imagem com o formato desejado que ficará visível no registro

Selecione o componente “ImageInput”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/116143496-98eca580-a6b1-11eb-9161-b2ff32ac8d54.png)

Execute a aplicação::
![image](https://user-images.githubusercontent.com/81401104/116143528-a144e080-a6b1-11eb-83fd-3080eaec246b.png)

Clique no quadrado do “ImageInput” onde diz “Drag and drop or click to upload a image”.

Então procure e selecione uma foto do seu computador:![image](https://user-images.githubusercontent.com/81401104/116143599-b7eb3780-a6b1-11eb-9a59-09fc5abc7fd1.png)

e então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116143623-bf124580-a6b1-11eb-9b71-9e7c337b0e4b.png).
![image](https://user-images.githubusercontent.com/81401104/116143651-c9344400-a6b1-11eb-8193-31b85dc80c11.png)


Para visualizar a foto que você acabou de adicionar, clique no botão ![image](https://user-images.githubusercontent.com/81401104/116143693-d3564280-a6b1-11eb-8522-78da4e1fef90.png)(Abaixo de “Control”)

🔗Vìdeo: https://www.youtube.com/watch?v=NR-vrNGcl7E&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=28

<div id='id-File'/>

## File Upload 📂📩
![image](https://user-images.githubusercontent.com/81401104/116143924-1adcce80-a6b2-11eb-8c4d-62e5bd5a86ec.png)

É um componente que permite anexar arquivos em um cadastro.

Selecione o componente “FileUpload”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/116143977-29c38100-a6b2-11eb-8932-1e33c6430892.png)

Execute a aplicação.
![image](https://user-images.githubusercontent.com/81401104/116144037-39db6080-a6b2-11eb-9b89-18c4da8312af.png)

Para fazer o upload do arquivo desejado, clique no botão ![image](https://user-images.githubusercontent.com/81401104/116144079-45c72280-a6b2-11eb-9bb9-265356f3afc3.png)
, então você irá selecionar o arquivo do seu computador, e no campo do “File Upload”  ficará similar com o seguinte:
![image](https://user-images.githubusercontent.com/81401104/116144260-8161ec80-a6b2-11eb-8b70-08aa6c644e41.png)

E então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116144317-93dc2600-a6b2-11eb-8b79-12570ae46c80.png).

Irá para a tela dos registros:
![image](https://user-images.githubusercontent.com/81401104/116144349-9e96bb00-a6b2-11eb-9e8d-5fa5acc0f58b.png)

Caso queira visualizar o registro do “FileUpload”, clique no ![image](https://user-images.githubusercontent.com/81401104/116144386-a8b8b980-a6b2-11eb-9872-e7b158064521.png)(Control).

Então irá para a seguinte tela (próxima página):
![image](https://user-images.githubusercontent.com/81401104/116144593-c25a0100-a6b2-11eb-9a55-7f29f846d8a1.png)

E para fazer o download do arquivo é só clicar no botão ![image](https://user-images.githubusercontent.com/81401104/116144826-dc93df00-a6b2-11eb-8281-b7987cb96718.png).


🔗Vídeo: https://www.youtube.com/watch?v=BXDgIbmrTOM&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=29

### File Upload 📂📩 > UPLOAD 🗂️
![image](https://user-images.githubusercontent.com/81401104/116145890-3f39aa80-a6b4-11eb-8e30-daab08873130.png)

É possível fazer upload de arquivos dos seguintes formatos:
<table>
 <tr>
  <td>Word</td>
  <td>Powerpoint</td>
  <td>Powerpoint</td>
  <td>PDF</td>
  <td>Excel</td>
  <td>TXT</td>
  <td>Imagens</td>
 </tr>
 </table>
 
Se deixar todas as caixas de seleção desmarcadas, será possível fazer o upload de qualquer um dos formatos. Se selecionar apenas um deles, será possível fazer upload de arquivo apenas daquele formato.

### File Upload 📂📩 > OTHERS 🖥️
![image](https://user-images.githubusercontent.com/81401104/116146427-de5ea200-a6b4-11eb-887d-e113a9397c09.png)

Ao selecionar a caixa de seleção “Allow to delete file from storage” será permitido deletar arquivos do storage (onde ficam armazenados os arquivos) .

<div id='id-One-To-Many'/>

## One-To-Many 📃➡️📃
![image](https://user-images.githubusercontent.com/81401104/116146516-f6362600-a6b4-11eb-9153-cb823edc918e.png)

Com este componente você consegue realizar uma relação de um para vários, por exemplo: Sala de aula - quem são os alunos, empresa - quem são os colaboradores.

Selecione o componente “OneToMany”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/116289651-0c9db980-a769-11eb-9df0-988ae6d2e400.png)

Nas propriedades do “OneToMany”, na seção “Source”, adicione a opção “Cor” (Esse formulário “Cor” foi criado durante o tutorial do “DropdownDB”).

É importante que esteja logado na tela de registros do formulário “Cor” para poder visualizar o resultado do processo. No momento, a tela de registro de cores está da seguinte maneira:
![image](https://user-images.githubusercontent.com/81401104/116289742-22ab7a00-a769-11eb-8656-a357837e9301.png)
                            
Volte na tela do One-To-Many e execute a aplicação.
![image](https://user-images.githubusercontent.com/81401104/116289811-322ac300-a769-11eb-9028-279990166b68.png)

No campo “Cor”, preencha com “Laranja”, então clique no botão![image](https://user-images.githubusercontent.com/81401104/116289846-3bb42b00-a769-11eb-9772-eaed741142d9.png).
![image](https://user-images.githubusercontent.com/81401104/116290130-86ce3e00-a769-11eb-8ae5-336dcc0f6b33.png)

Então, clique no botão ![image](https://user-images.githubusercontent.com/81401104/116290167-8f267900-a769-11eb-8ba4-8d735c2edee4.png).

A tela dos registros do One-To-Many estará da seguinte forma:
![image](https://user-images.githubusercontent.com/81401104/116290350-c006ae00-a769-11eb-9828-7d154ea90a29.png)

Agora, abra a tela dos registros das cores e atualize ela 
![image](https://user-images.githubusercontent.com/81401104/116290418-d14fba80-a769-11eb-8c29-1438b8408c17.png)

Perceba que a cor “Laranja” foi adicionada na tela de registro do formulário “Cor”.

### One-To-Many 📃➡️📃 > ONE-TO-MANY
![image](https://user-images.githubusercontent.com/81401104/116290453-d9a7f580-a769-11eb-80e5-d7ee45d896e1.png)

 Open as Modal: Abrir como um modal. Um modal é uma janela em destaque dentro da página (igual aquela quando se cria ou edita um projeto).

Source (Fonte): É da onde os dados serão buscados.

Refresh Source (Atualizar fonte): Ás vezes pode ter sido criado o source recentemente mas a lista não ter sido atualizada, para isso serve o botão.

### One-To-Many 📃➡️📃 > Aggregation Data
![image](https://user-images.githubusercontent.com/81401104/116293240-0ad5f500-a76d-11eb-8e8d-57a1da964cdb.png)

<table>
 <tr>
  <td>Source (Fonte)</td>
  <td>Destination (Destino)</td>
  <td>Operation (Operação)</td>
  <td>Column (Coluna)</td>
  <td>Output (Resultado)</td>
 </tr>
</table>

<div id='id-MultiTag'/>

## MultiTag 🏷️

![image](https://user-images.githubusercontent.com/81401104/116293660-820b8900-a76d-11eb-989d-784ab96c9c0a.png)

É um componente que funciona como um autocomplete para múltiplos valores (relação 1:N).

Selecione o componente “MultiTag”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

Para realizar o tutorial desse componente, desça até a seção “Source”.


### MultiTag 🏷️ > SOURCE 🔌
![image](https://user-images.githubusercontent.com/81401104/116294214-18d84580-a76e-11eb-8bae-155664fc2f1d.png)

Para fazermos uso do componente “MultiTag” teremos que criar 3 formulários. O primeiro para adicionar os nomes, o segundo para conectar os nomes a um componente “DropdownDB”, e então conectar o segundo com o terceiro formulário que será do “MultiTag”.

Primeiro passo, crie um novo formulário com o componente “Textfield”, também nomeando-o de “Membro da Equipe” .
![image](https://user-images.githubusercontent.com/81401104/116294485-66ed4900-a76e-11eb-8306-3449a5e14a23.png)

e adicione os nomes “João”, “Maria”, “Carlos” e “Lucas”.
![image](https://user-images.githubusercontent.com/81401104/116294508-6d7bc080-a76e-11eb-9ccd-7600c3156bb7.png)
![image](https://user-images.githubusercontent.com/81401104/116294542-78365580-a76e-11eb-8acf-cd7267ee2b3f.png)

Segundo passo, crie mais um formulário usando o componente “DropdownDB” e nomeando-o de “reunião da equipe”.
![image](https://user-images.githubusercontent.com/81401104/116294676-9dc35f00-a76e-11eb-9d3f-9bf6f0716d02.png)

Na seção “Source” desse componente, no item “Class” selecione a opção “Membro da Equipe”  e em “Description Field” também selecione “Membro da Equipe”. 
![image](https://user-images.githubusercontent.com/81401104/116294695-a4ea6d00-a76e-11eb-99c3-d933c3f4106c.png)

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/116294723-afa50200-a76e-11eb-9530-bd7de54c0609.png) no pé da página.

Agora vamos criar o terceiro formulário, nomeando-o de “Participantes”.  Adicione o componente “Multitag” para dentro do formulário.
![image](https://user-images.githubusercontent.com/81401104/116294771-bf244b00-a76e-11eb-885b-c27f6e54910a.png)

Agora na seção “Source” do MultiTag, no item “Class” selecione “reuniaodaequipe”, e em “DescriptionField” selecione “reuniaodaequipeId1” - (imagem abaixo).
![image](https://user-images.githubusercontent.com/81401104/116294811-c64b5900-a76e-11eb-8409-8649aa97d828.png)

Execute a aplicação.
![image](https://user-images.githubusercontent.com/81401104/116294887-db27ec80-a76e-11eb-9170-d8bc8c8924c2.png)

Comece a escrever as primeiras letras e logo aparecerá os nomes:
![image](https://user-images.githubusercontent.com/81401104/116294901-e24efa80-a76e-11eb-8817-81eb9446c17e.png)

Selecione “Lucas”, “Maria” e “João”.
![image](https://user-images.githubusercontent.com/81401104/116294942-eb3fcc00-a76e-11eb-8570-deb48375c6d3.png)


E então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116294980-f561ca80-a76e-11eb-9602-277e3c8f8579.png)
.
Irá aparecer da seguinte forma: 
![image](https://user-images.githubusercontent.com/81401104/116295016-feeb3280-a76e-11eb-8561-490f44818321.png)

Para visualizar  e editar esse formulário adicionado, clique no botão ![image](https://user-images.githubusercontent.com/81401104/116295079-14f8f300-a76f-11eb-96e4-6fc8d24d8abc.png)
.

<div id='id-Additional'/>

## Additional Data ➡️📃
![image](https://user-images.githubusercontent.com/81401104/116295496-89cc2d00-a76f-11eb-908d-21fef404e665.png)

Este componente permite apresentar dados extras através de um DataSource.

Selecione o componente “AdditionalData”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

Para visualizar a utilização desse componente, desça até a seção “Additional Data” deste tutorial

### Additional Data➡️📃 > GENERAL 🎖️
![image](https://user-images.githubusercontent.com/81401104/116295959-0828cf00-a770-11eb-87d6-744a17419669.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “General” do componente “Textfield”.

Ao selecionar a caixa de seleção ![image](https://user-images.githubusercontent.com/81401104/116295860-ed565a80-a76f-11eb-84d2-b3f4a8b40d18.png), será criado a borda para o componente, e também será possível editar o campo “Label”.

### Additional Data➡️📃 > ADDITIONAL DATA 
![image](https://user-images.githubusercontent.com/81401104/116296018-1a0a7200-a770-11eb-8f89-adac9ff3dd8a.png)

Em “DataSource” você irá selecionar o DataSource criado antes. Ao lado,![image](https://user-images.githubusercontent.com/81401104/116296065-27276100-a770-11eb-87e6-82d451cce125.png) serve para atualizar a lista, e o ![image](https://user-images.githubusercontent.com/81401104/116296149-3f977b80-a770-11eb-8771-9dfb8c91937a.png) serve para adicionar um DataSource. 

Para saber mais sobre como criar um DataSource, desça até o tutorial “DataSource”.

É importante saber que o DataSource é o nome dado a conexão para um banco de dados a partir do servidor. Ou seja, é necessário você criar esse banco de dados, que pode ser  os registros criados dentro de outro formulário.

Logo, é importante também que tenha criado o outro formulário dentro do mesmo projeto, e que tenha o campo adicionado para “puxar” o banco de dados. 

DataSource Filter: irá realizar um filtro dentro do DataSource selecionado, ou seja, se o DataSource tem 10 fields, você pode selecionar se quer  todos ou apenas um deles. 

Source Field: irá puxar as informações do campo origem.

Show (Mostrar): As opções são:“First”, “Last” e “Max” que significam respectivamente “Primeiro”, “Último” e “Máximo”.
 
Sorted by: Irá ordenar o DataSource pela opção escolhida.

Vamos testar isso criando dois formulários. No primeiro vamos nomeá-lo de “Origem”, nesse vamos usar dois componentes: “Textfield” e “Dropdown”.

Arraste o componente “Textfield” para dentro do formulário e o nomeie de “Nome”, faça o mesmo com o componente “Dropdown” e o nomeie com “Status”. 
![image](https://user-images.githubusercontent.com/81401104/116296241-5c33b380-a770-11eb-98d3-9f11357effa5.png)

(Para aprender mais sobre o componente “Dropdown”, acesse o tutorial dele)

No campo do “Status”, em “Values” clique no botão ![image](https://user-images.githubusercontent.com/81401104/116296368-884f3480-a770-11eb-8470-f88450cd50ff.png) e adicione dois valores “Pendente” e “Aprovado”.
![image](https://user-images.githubusercontent.com/81401104/116296416-9604ba00-a770-11eb-84e7-4d3f96649545.png)

Execute a aplicação:
![image](https://user-images.githubusercontent.com/81401104/116296442-9f8e2200-a770-11eb-8750-5a1165958d44.png)

No campo do “Nome”  escreva “João Carlos” e do “Status” selecione a opção “Aprovado” e então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116296486-addc3e00-a770-11eb-84d8-ddaad8354b06.png)
.

Repita o processo adicionando o nome “Maria Aparecida” com o Status de “Pendente”.

Agora vamos criar outro formulário, e nomeá-lo de “Destino”.

E vamos arrastar o componente “DropdownDB” para dentro dele e nomeá-lo de “Origem”. 
![image](https://user-images.githubusercontent.com/81401104/116296558-c0ef0e00-a770-11eb-99ab-1fddef838c4c.png)

Na seção “Source” dele, em “Class” selecione a opção “Origem”. Em “Description Field” selecione “Nome”.

Agora selecione o componente “Additional Data” e arraste ao lado do campo “Origem”.
![image](https://user-images.githubusercontent.com/81401104/116296848-11666b80-a771-11eb-959c-d36516fff50a.png)

Agora na seção “Additional Data” do componente “Additional Data”, na linha do “DataSource” clique no ![image](https://user-images.githubusercontent.com/81401104/116296897-1f1bf100-a771-11eb-9d41-7de58f56e049.png) e irá abrir a seguinte janela:
![image](https://user-images.githubusercontent.com/81401104/116296950-3064fd80-a771-11eb-8b26-0dc26464b164.png)

Em “Title” escreva “Origem”,  em “Project” selecione o projeto no qual você criou os formulários anteriormente, e em “Class’’ selecione “Origem”. Irá aparecer da seguinte forma:
![image](https://user-images.githubusercontent.com/81401104/116297001-3ce95600-a771-11eb-883d-e40445da76ef.png)

Clique duas vezes nos campos “Nome” e “Status” que se encontram na lateral direita, e logo a tela ficará da seguinte maneira:
![image](https://user-images.githubusercontent.com/81401104/116297054-47a3eb00-a771-11eb-8996-eeb1c198a7ff.png)

Perceba que foram adicionados os campos “Nome” e “Status” dentro do DataSource.

Agora clique no botão ![image](https://user-images.githubusercontent.com/81401104/116297093-5094bc80-a771-11eb-85b0-db2b35a0cb66.png) . E automaticamente voltará para a tela de edição do formulário:
![image](https://user-images.githubusercontent.com/81401104/116297143-5c807e80-a771-11eb-9dda-3d4be6e3870d.png)

Agora na seção “Additional Data”, em “DataSource”, selecione a opção “Origem”, em “DataSource Filter” selecione a opção “OrigemID”, em “Source Field” selecione a opção “OrigemID”, em “Show” selecione “Last”, em “Sorted By” selecione a opção “Nome”.
![image](https://user-images.githubusercontent.com/81401104/116297187-64d8b980-a771-11eb-89e3-f970860b5a1d.png)

Agora selecione e arraste o componente “Label” em cima do “Additional Data”:
![image](https://user-images.githubusercontent.com/81401104/116297222-6c985e00-a771-11eb-99e7-321425182cc7.png)

Nomeie ele de “Status”:
![image](https://user-images.githubusercontent.com/81401104/116297244-7326d580-a771-11eb-90fa-ad5f44c59814.png)

E na seção “Additional Data”, na lista do “DataLink” selecione a opção “Status”:
![image](https://user-images.githubusercontent.com/81401104/116297291-8043c480-a771-11eb-87e2-0ef88e601a8d.png)

E na seção “Others”, na lista do “Text Align” selecione a opção “Center”
![image](https://user-images.githubusercontent.com/81401104/116297327-89cd2c80-a771-11eb-906a-c17fb8dc2d13.png)

Execute a aplicação:
![image](https://user-images.githubusercontent.com/81401104/116297363-93569480-a771-11eb-8c70-2e70c8236691.png)

Selecione o nome “João Carlos” e observe a mensagem ao lado:
![image](https://user-images.githubusercontent.com/81401104/116297403-9c476600-a771-11eb-879d-bff518d372dd.png)

Selecione o nome “Maria Aparecida” e observe a mensagem ao lado:
![image](https://user-images.githubusercontent.com/81401104/116297452-a79a9180-a771-11eb-9f3d-f5c93261eccc.png)

<div id='id-Button'/>

## Button ⏸️
![image](https://user-images.githubusercontent.com/81401104/116297504-b4b78080-a771-11eb-8a78-7491dd87ff6b.png)

Com este componente é possível inserir funções personalizadas de JavaScript.

Selecione o componente “Button”, então arraste-o e solte-o onde está escrito “Drop new field here!”

Para saber mais sobre como usar esse componente, desça até a seção “Events” desse tutorial.

🔗Vídeo: https://www.youtube.com/watch?v=IGGbMFxysPE&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=31

### Button ⏸️ > GENERAL 🎖️
![image](https://user-images.githubusercontent.com/81401104/116297653-de70a780-a771-11eb-8ec2-ddf7bcc2823f.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “General” do componente “Textfield”.

“Text” é o texto de identificação do botão para o usuário.

### Button ⏸️ > EVENTS ⚙️ 
![image](https://user-images.githubusercontent.com/81401104/116297753-fd6f3980-a771-11eb-9b3a-ce10856d2c26.png)

Vamos testar a seção “Events” começando por arrastar um novo componente “Button” dentro do formulário. 

Nesse teste iremos fazer com que ao clicar o botão será mostrado uma mensagem.

Agora, na seção “Events” desse novo botão, iremos clicar no botão .  
![image](https://user-images.githubusercontent.com/81401104/116297841-17108100-a772-11eb-9445-eec11a9ed85c.png)

Então abrirá a seguinte aba: 
![image](https://user-images.githubusercontent.com/81401104/116297876-22fc4300-a772-11eb-85d9-5ce36a4c9f75.png)

Em “Custom Scripts” copie e cole o seguinte script: 

                                    function alerta() {
            alert('Pode ser usado em alertas, redirecionar para outra página executar uma função javascript');
            }

Então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116298561-f4329c80-a772-11eb-9144-cf14ea87e784.png)
para testar se o script é válido, se ele for, irá aparecer no topo direito uma mensagem dizendo:  “Confirmation Custom Script Valid”.

Agora volte na seção “Events”, em “Name” selecione a opção “OnClick”, e em “On” escreva “alerta()”
e então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116298711-27752b80-a773-11eb-9b58-b0e031acccb3.png). 

Então ficará da seguinte maneira:
![image](https://user-images.githubusercontent.com/81401104/116298756-38be3800-a773-11eb-80b5-377dcd0ca9b9.png)

Execute a aplicação:
![image](https://user-images.githubusercontent.com/81401104/116298763-3f4caf80-a773-11eb-9706-6cb3823fecb4.png)

Clique no botão azul ![image](https://user-images.githubusercontent.com/81401104/116298781-45db2700-a773-11eb-9d95-db2991ee2dd1.png) e então irá para a próxima página ⬇️:
![image](https://user-images.githubusercontent.com/81401104/116298880-63a88c00-a773-11eb-9473-d1eb9946b026.png)

Agora clique no ![image](https://user-images.githubusercontent.com/81401104/116298917-702ce480-a773-11eb-88bd-3830605f5c17.png)e você verá o seguinte aviso na tela:
![image](https://user-images.githubusercontent.com/81401104/116298965-7d49d380-a773-11eb-91d1-c0fc8c7437b5.png)

<div id='id-HTML'/>

## HTML Field 🦰
![image](https://user-images.githubusercontent.com/81401104/116299196-c26e0580-a773-11eb-9812-83ce2acc8d91.png)

 É um componente que permite inserir um texto em html no formulário.

Selecione o componente “HTMLField”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/116299220-c8fc7d00-a773-11eb-978e-6a32ae5ef2b3.png)

No campo “HTML” abaixo de “General”  (onde está indicando a flecha), você irá colar o seu código HTML.

Por exemplo, copie e cole o seguinte código: 
![image](https://user-images.githubusercontent.com/81401104/116300074-d5350a00-a774-11eb-80be-e09fd664078b.png)

Logo você irá ver o seguinte:
<p>Osdocumentos s&atilde;o <strong>obrigat&oacute;rios&nbsp;</strong></p>

Perceba que a palavra “obrigatórios” está em negrito, devido ao código html.

Execute a aplicação..
![image](https://user-images.githubusercontent.com/81401104/116300162-f4339c00-a774-11eb-8a26-5e41adbadded.png)

E aqui você consegue visualizar a mensagem com formatação de texto dentro do seu formulário.

🔗Vídeo: https://www.youtube.com/watch?v=izhSKwdUDvg&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=32

### HTML Field 🦰 > GENERAL 🎖️
![image](https://user-images.githubusercontent.com/81401104/116300186-fd246d80-a774-11eb-9bdb-b092cae16ad4.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “General” do componente “Textfield”.

HTML: É onde você irá colar o seu código HTML. 

<div id='id-Quiz'/>

## Quiz 🧩
![image](https://user-images.githubusercontent.com/81401104/116300208-057ca880-a775-11eb-99b5-c148ddf86614.png)

Este componente cria um questionário de perguntas e respostas onde o usuário adiciona alternativas falsas e verdadeiras, colocando a pontuação das resposta verdadeiras no Score.

Selecione o componente “Quiz”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/116300290-1d542c80-a775-11eb-8615-ed2d342a04e8.png)


Clique no campo do “Enter Your Question” e escreva “Quanto é 1 + 1 ?” e clique no botão ![image](https://user-images.githubusercontent.com/81401104/116300346-2cd37580-a775-11eb-8e02-41eabd2abd67.png)
.
![image](https://user-images.githubusercontent.com/81401104/116300437-470d5380-a775-11eb-85bd-0a714bf4b95e.png)

Clique na flecha para adicionar as respostas.
![image](https://user-images.githubusercontent.com/81401104/116300466-4ffe2500-a775-11eb-92f2-eaa272a9bb42.png)


No campo do “Enter Your Answer” escreva “2” 
e marque a caixa de seleção  e então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116300507-58eef680-a775-11eb-8077-ac3545e3c6ab.png)
.

Repita essa última etapa adicionando a resposta “3” sem marcar a caixa de seleção ![image](https://user-images.githubusercontent.com/81401104/116300583-6e642080-a775-11eb-8475-4a253709993f.png)
.

Agora vamos adicionar mais uma questão: “Quanto é 2 + 2 ?”

E adicionar duas respostas: “4” e marcando a caixa de seleção![image](https://user-images.githubusercontent.com/81401104/116300627-7c19a600-a775-11eb-8218-4497a05bc066.png)
, e “5” sem marcar a caixa de seleção.
![image](https://user-images.githubusercontent.com/81401104/116300663-876cd180-a775-11eb-9b35-436c9dc1824d.png)

Agora, para que seja possível mostrar o resultado do quiz, adicione o componente “Integer” no formulário e o nomeie de “Porcentagem de Acerto”
![image](https://user-images.githubusercontent.com/81401104/116300738-9eabbf00-a775-11eb-9b79-12cc42fa1809.png)

Agora clique de volta no Quiz, vá até a seção “Others”, em “Score Field” selecione a opção “Porcentagem de Acerto”.
![image](https://user-images.githubusercontent.com/81401104/116300760-a4a1a000-a775-11eb-9943-ce331e32e35b.png)

Execute a aplicação. Irá abrir essa página:
![image](https://user-images.githubusercontent.com/81401104/116300780-acf9db00-a775-11eb-91b7-13e680c9f867.png)

Selecione as opções e perceberá que o campo “Porcentagem de Acerto” dará a porcentagem de acerto automaticamente.

Após selecionar as opções desejadas, clique no botão ![image](https://user-images.githubusercontent.com/81401104/116300816-b5eaac80-a775-11eb-800d-4ab1214bfe00.png).

Então verá a tela dos registros e caso queira editar o form salvo,
basta clicar no botão ![image](https://user-images.githubusercontent.com/81401104/116300853-bf741480-a775-11eb-894f-42b430729206.png)
.

🔗Vídeo: https://www.youtube.com/watch?v=eVAWxyWRydA&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=33

### Quiz 🧩 > OTHERS 
![image](https://user-images.githubusercontent.com/81401104/116300887-ca2ea980-a775-11eb-9f65-89f4d781a590.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “Others” do componente “Textfield”.

Score Field: Irá selecionar o campo que está dentro do mesmo formulário para mostrar o resultado do quiz. Esse outro campo deve utilizar o componente “Integer” para cumprir sua função.

<div id='id-Email'/>

## Email 📧
![image](https://user-images.githubusercontent.com/81401104/116300945-df0b3d00-a775-11eb-94f1-020c4570ff92.png)

O componente “Email” serve para aceitar somente preenchimento de email.

Selecione o componente “Email”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no componente que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/116301051-fba77500-a775-11eb-86ac-68f9e46c79f3.png)

Após soltar o componente email dentro do formulário, execute a aplicação.

E perceba que na tela de registrar só será permitido salvar o que foi inserido no campo “Email” se o sistema considerar aquilo como email, por exemplo:
![image](https://user-images.githubusercontent.com/81401104/116301098-0cf08180-a776-11eb-9d70-cbcf97856503.png)

Perceba que quando estava escrito apenas “Jesse” não era possível salvar, mas quando foi adicionado ao final “@gmail.com” se tornou possível salvá-lo.

🔗Vídeo: https://www.youtube.com/watch?v=kPtjDcOXSGw&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=34

<div id='id-Password'/>

## Password *️⃣
![image](https://user-images.githubusercontent.com/81401104/116301136-1679e980-a776-11eb-9dc3-a47df9044b6a.png)

O componente “Password” vem com sua submáscara de campo preparada para password (****), ou seja, para tornar discreto o preenchimento de informações sensíveis, por exemplo, de CPF.

Selecione o componente “Password”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no componente que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/116301341-50e38680-a776-11eb-8523-6521d135ed3f.png)

Execute a aplicação
![image](https://user-images.githubusercontent.com/81401104/116301371-580a9480-a776-11eb-8d8e-9b8de2d2c2ae.png)

Ao inserir os caracteres, perceba que ele estará oculto.
![image](https://user-images.githubusercontent.com/81401104/116301389-5d67df00-a776-11eb-9912-7887ff144d83.png)

E após salvar, irá para a tela de registros:
![image](https://user-images.githubusercontent.com/81401104/116301438-6658b080-a776-11eb-8d57-5b9642f39791.png)

E mesmo que acesse o formulário novamente, clicando no ![image](https://user-images.githubusercontent.com/81401104/116301456-6eb0eb80-a776-11eb-9bc3-afd8ee4e4456.png)
(abaixo de “Control”), ainda não será possível visualizar a informação inserida:

🔗Vídeo: https://www.youtube.com/watch?v=GLaBaRqX7V4&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=35

<div id='id-Horizontal'/>

## Horizontal Line 📏🪓
![image](https://user-images.githubusercontent.com/81401104/116301516-7f616180-a776-11eb-8a5e-2ba596712fd3.png)

O “Horizontal Line” faz quebra de linha, com o objetivo principal de organizar a disposição dos componentes.

Selecione o componente “Horizontal Line”, então arraste-o e solte-o onde está escrito “Drop new field here!”. 
![image](https://user-images.githubusercontent.com/81401104/116301545-89836000-a776-11eb-939f-27e7d0fbb75a.png)

Ao colocar o “Horizontal Line” dentro do formulário, você perceberá que ele é só uma linha, com a única função de organizar a disposição dos componentes dentro da tela.

Vamos adicionar dois componentes “Textfield” dentro do formulário, um à esquerda e o outro à direita do “Horizontal Line”.
![image](https://user-images.githubusercontent.com/81401104/116301693-b172c380-a776-11eb-86cb-10f56540a199.png)

Agora, vá nas propriedades do “Horizontal Line”, na seção “Presentation”, na primeira lista (desktop), selecione a opção “Col-lg-12-100%”. A disposição visual estará da seguinte maneira:
![image](https://user-images.githubusercontent.com/81401104/116301717-b899d180-a776-11eb-9c8e-c57364ab9365.png)

Agora execute a aplicação.

Perceberá que na tela de registrar estará organizado da mesma forma:
![image](https://user-images.githubusercontent.com/81401104/116301747-c0597600-a776-11eb-851c-d2cb1b5df620.png)

É isso o que o “Horizontal Line” faz, quebra linhas para organizar a disposição dos componentes.

🔗Vídeo: https://www.youtube.com/watch?v=mdgoTSvefjc&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=36

<div id='id-Repeater'/>

## Repeater 🔁
![image](https://user-images.githubusercontent.com/81401104/116301777-c9e2de00-a776-11eb-8741-38544753cb5d.png)

O repeater é o componente utilizado para apresentação de dados dentro de uma page, com ele é possível reproduzir o conteúdo de um formulário no ambiente de page

Selecione o componente, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no componente que você acabou de soltar).
![image](https://user-images.githubusercontent.com/81401104/116301801-d23b1900-a776-11eb-8804-a91c7c2885f6.png)

Perceba que ao inserir o Repeater não poderá salvar a page até que tenha selecionado um Datasource na aba de propriedades.  
![image](https://user-images.githubusercontent.com/81401104/116301842-dd8e4480-a776-11eb-947a-2b584c4d1a07.png)

Podemos fazer isso facilmente utilizando o builder. Para adicionar a fonte de dados que utilizaremos, devemos procurar a aba “Source”, dentro das propriedades do componente, e clicar no botão “+”. Neste exemplo nosso DataSource conterá três campos: Nome, idade e telefone.

Para exibir os dados no repeater utilizamos outro componente, o label, e adicionamos um Datalink para ele
![image](https://user-images.githubusercontent.com/81401104/116301880-e8e17000-a776-11eb-93ab-12295c0cfeb8.png)

Essa ligação de dados foi definida no Datasource que criamos no passo anterior. Procure em properties pela aba Datalink e selecione o elemento que você deseja exibir.
![image](https://user-images.githubusercontent.com/81401104/116302012-10d0d380-a777-11eb-80b4-27ff612e3271.png)

Perceba que os campos são exibidos automaticamente conforme o que foi definido no Datasource

<div id='id-Video'/>

## Video call Coming Soon 🚧
  Em breve

<div id='id-form'/>

## Tab (Form)
![+Tab2](https://user-images.githubusercontent.com/81401104/117342044-28941000-ae79-11eb-9404-4869e9a5de3d.gif)

Quando você estiver na tela de design do seu formulário, 
no topo irá aparecer esse botão verde ![image](https://user-images.githubusercontent.com/81401104/117339417-1795cf80-ae76-11eb-8072-6d4fc65a7563.png),clique nele.

Irá aparecer a  seguinte nova aba:

![image](https://user-images.githubusercontent.com/81401104/117339555-3eec9c80-ae76-11eb-8dc4-509c62d30dde.png)

Class Name: Nome da classe (é um campo ‘autocomplete’, logo, comece a escrever as primeiras letras da classe do formulário ou banco de dados intencionado e então a opção irá aparecer para ser selecionada).

Tab Name: Nome da Tab.
![image](https://user-images.githubusercontent.com/81401104/117339638-57f54d80-ae76-11eb-9d43-d4fe1b82083a.png)

Relationship (Relacionamento): 
1:1  (Relacionamento de um para um)
1:N  (Relacionamento de um para muitos)

![image](https://user-images.githubusercontent.com/81401104/117339722-72c7c200-ae76-11eb-9547-1e4759878ab0.png)

Nessa aba  está presente o seguinte botão:![image](https://user-images.githubusercontent.com/81401104/117339826-90952700-ae76-11eb-84cc-17807a3e741a.png). 
Ele serve para deletar a tab, ao clicar nele, irá aparecer a seguinte janela modal:
![image](https://user-images.githubusercontent.com/81401104/117351537-3e5b0280-ae84-11eb-8d36-1768dc42c2b2.png)

(Tradução:Você tem certeza que você quer deletar a aba ? Sim, Não)

Para esse tutorial de como usar a ‘Tab’, iremos nos utilizar de dois formulários.

Vamos criar o primeiro formulário, nomeá-lo de “Animais”, e então adicionar um componente textfield e nomeá-lo de “Animais de Grande Porte”.

![image](https://user-images.githubusercontent.com/81401104/117339961-bde1d500-ae76-11eb-83c6-17278f81b1f2.png)

Salve e execute a aplicação.

Agora vamos criar o segundo formulário, e nomeá-lo de “Extra Info do Animal”, e adicionar o componente “Textfield” e nomeá-lo de “Habitat do Animal”.

![image](https://user-images.githubusercontent.com/81401104/117339995-c76b3d00-ae76-11eb-9dea-9bbd595ae36a.png)

Salve e execute a aplicação.

Agora volte para a edição do primeiro formulário (“Animais”).

Agora clique no botão![image](https://user-images.githubusercontent.com/81401104/117344604-ed471080-ae7b-11eb-85ff-5fbbef0a98df.png). 
Irá aparecer a seguinte aba:

![image](https://user-images.githubusercontent.com/81401104/117344752-1f587280-ae7c-11eb-8c39-1e758bec3a9f.png)


Em “Class Name” pesquise por “extrainfodoanimal” e selecione-a.
![image](https://user-images.githubusercontent.com/81401104/117344869-4b73f380-ae7c-11eb-8a82-9fac413210e7.png)


Em “Tab Name” escreva “Tab da Info Extra”. Em “Relationship” selecione a opção “1:N”.

Irá mostrar o seguinte conteúdo:
![image](https://user-images.githubusercontent.com/81401104/117346140-c25dbc00-ae7d-11eb-90c6-3fcb15d25b77.png)


Em “Operation” selecione a opção “Count”.

![image](https://user-images.githubusercontent.com/81401104/117344974-68102b80-ae7c-11eb-8c86-89c29a5bf02a.png)

E então clique no botão ![image](https://user-images.githubusercontent.com/81401104/117345056-7f4f1900-ae7c-11eb-8bf6-1750cfae6008.png)

Irá aparecer da seguinte forma:
![image](https://user-images.githubusercontent.com/81401104/117345227-ad345d80-ae7c-11eb-9f1c-e02d68264424.png)

Salve e execute a aplicação da tab. 
![image](https://user-images.githubusercontent.com/81401104/117346298-f638e180-ae7d-11eb-8b7e-8627eb7f1706.png)

Adicione o registro de “Elefante”.
![image](https://user-images.githubusercontent.com/81401104/117346326-fcc75900-ae7d-11eb-8058-d6011c340685.png)

Agora clique no botão ![image](https://user-images.githubusercontent.com/81401104/117346687-75c6b080-ae7e-11eb-9fa4-2860043b383c.png) (se localiza na coluna do “Control”), 
para editar o formulário.

Selecione a tab “Tab da Info Extra” que está ao lado de “Main”.

Agora clique no botão ![image](https://user-images.githubusercontent.com/81401104/117346550-47e16c00-ae7e-11eb-85aa-878bbc5f97d7.png).

Escreva “Savana” e clique no botão ![image](https://user-images.githubusercontent.com/81401104/117347081-fc7b8d80-ae7e-11eb-9caf-c26e13eefe71.png)
![image](https://user-images.githubusercontent.com/81401104/117347208-2f258600-ae7f-11eb-8069-a9ae1265d6ac.png)

Você pode adicionar mais registros referente ao mesmo animal.

E também é possível salvar mais campos na tab referente ao mesmo animal, basta adicionar mais um campo no formulário ‘Extra Info do Animal’ e então adicionar o campo extra no “Aggregation Fields” durante a edição da tab. E então é só salvar e executar a aplicação.

<div id='id-Properties'/>

## Dev Properties (Form)
![formtesev](https://user-images.githubusercontent.com/81401104/117347868-f2a65a00-ae7f-11eb-92df-85b8c9cea828.gif)
<ul>
 <li>Use AutoSaved Form: Usar formulário salvo automáticamente.</li>
 <li>Use AutoSaved Form: Usar formulário salvo automáticamente.</li>
 <li>Use Data History Change: Usar mudança de histórico dos dados.</li>
 <li>Use Default Columns: Usar colunas padrão.</li>
 <li>Can Receive E-mails: Pode receber e-mails.</li>
 </ul>
 
Synchronize Data (Sincronizar dados)
<ul>
 <li>Inserts at first sync: Insere na primeira sincronização.</li>
 <li>Inserts: Insere.</li>
 <li>Updates: Atualizações.</li>
 <li>Deletions: Deletações.</li>
</ul>

Custom Scripts (Roteiros personalizados):

<ul>
 <li>Custom API Operations (Operações personalizadas da API).</li>
 <li>Get All API (Obter toda API).</li>
 <li>Get by Id API (Obter por Id da API)</li>
 <li>Save API (Salvar API).</li>
 <li>Delete API: (Deletar API).</li>
 <li>Call Custom API After (Chamar API Personalizada após).</li>
 <li>Create (Criar).</li>
 <li>Update (Atualizar).</li>
 <li>Create (Criar).</li>
 <li>Delete (Deletar).</li>
 <li>Create (Criar).</li>
</ul>

e Form Rule (Regra do formulário) - Ao clicar nele, irá abrir o seguinte modal:
![rule2](https://user-images.githubusercontent.com/81401104/117351260-e2907980-ae83-11eb-8218-1aab56a49e29.gif).

<div id='id-Notification'/>

## Notification (Form)
![image](https://user-images.githubusercontent.com/81401104/117351815-8a0dac00-ae84-11eb-97ac-106552f4e3bb.png)

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/117351832-92fe7d80-ae84-11eb-9dbb-0cf81e760ed6.png)(Acima do “No notification found!”). 

Irá abrir o seguinte modal:

![image](https://user-images.githubusercontent.com/81401104/117351893-a4478a00-ae84-11eb-9626-f05ff645b658.png)

<div id='id-Event'/>

### Event type (tipo de evento):

![image](https://user-images.githubusercontent.com/81401104/117352103-eec90680-ae84-11eb-87f9-7cc47b144288.png)

<ol>
 <li>Create: Criar</li>
 <li>Update: Atualizar</li>
 <li>Delete: Deletar</li>
 </ol>

Notification (notificação):

![image](https://user-images.githubusercontent.com/81401104/117352524-76af1080-ae85-11eb-9193-dce786518d22.png)

Nesse ‘Dropdown’ você irá selecionar a notificação criada a partir do ‘Tools’.

Subscribers Type (Tipo de inscrito): 

![image](https://user-images.githubusercontent.com/81401104/117352586-89294a00-ae85-11eb-96f3-372a8ce8743e.png)

User: Usuário

Role: Função

Ao selecionar “User” ou “Role” , irá aparecer um ‘dropdown’ com a lista dos usuários ou funções adicionadas.

![image](https://user-images.githubusercontent.com/81401104/117353039-0b197300-ae86-11eb-808c-56572e834f7e.png)

(Para aprender como adicionar um usuário, acesse o tutorial “Como Adicionar Um Usuário”).

Ao selecionar o usuário e clicar no botão ![image](https://user-images.githubusercontent.com/81401104/117354764-1c637f00-ae88-11eb-912a-f800877ca922.png)

ficará da seguinte forma:
![image](https://user-images.githubusercontent.com/81401104/117354934-52086800-ae88-11eb-92c9-5b71f09f2fcb.png)


Então, é só clicar no botão ![image](https://user-images.githubusercontent.com/81401104/117354955-59c80c80-ae88-11eb-8bed-4d5c93b42426.png).

![image](https://user-images.githubusercontent.com/81401104/117355449-f68aaa00-ae88-11eb-9e6f-17232328d2e1.png)

<div id='id-Kanban'/>

## Kanban 🎰

Para criar um Kanban, é necessário criar um novo form, e então, o cabeçário irá aparecer da seguinte forma: 
![image](https://user-images.githubusercontent.com/81401104/117355489-03a79900-ae89-11eb-8310-c882e6007371.png)

Selecione a opção “Kanban”:
![image](https://user-images.githubusercontent.com/81401104/117355507-0a361080-ae89-11eb-97fb-6360484e2868.png)

Preencha o campo “Form Title”, e depois selecionar o “Project” e “Menu Group”.
![image](https://user-images.githubusercontent.com/81401104/117355514-0f935b00-ae89-11eb-82f6-ea3fa051b143.png)

E então clique no botão ![image](https://user-images.githubusercontent.com/81401104/117355559-1fab3a80-ae89-11eb-95a7-3ed3a17901b0.png)no pé da página.

Para que seja possível o Kanban puxar as tarefas, é necessário criar outro formulário com o registro dessas tarefas.

Então agora vamos criar novo formulário:
![image](https://user-images.githubusercontent.com/81401104/117355713-4d907f00-ae89-11eb-8ba7-58a3f9b709a2.png)

Preencha as informações essenciais: “Form Title” com “Task” e selecione o mesmo projeto e menu do Kanban.
![image](https://user-images.githubusercontent.com/81401104/117355777-5da85e80-ae89-11eb-8539-3e5b57736a37.png)

e então adicione 3 componentes para dentro do formulário: um “Dropdown” e dois “Textfield”:
![image](https://user-images.githubusercontent.com/81401104/117355805-639e3f80-ae89-11eb-9da6-6b330c4fe683.png)

Nomeie o ‘Dropdown’ de “Column Field”, o 1º textfield de “Label” e o 2º textfield de “Description”.
![image](https://user-images.githubusercontent.com/81401104/117355844-6f8a0180-ae89-11eb-9b5f-aeb0a576e9a7.png)

Clique no campo do “Column Field”, nas propriedades do campo, na seção “Values”

clique no botão verde de adição:  

![image](https://user-images.githubusercontent.com/81401104/117355886-7e70b400-ae89-11eb-9a6e-8d44744862fe.png)

Na janela modal do “Enumerations”, coloque o nome de “Status”, Type “String”. 

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/117355963-95afa180-ae89-11eb-86dd-0891fc620005.png)

e adicione as opções “Pendente”, “Aprovado” e “Recusado”.
![image](https://user-images.githubusercontent.com/81401104/117356003-a6f8ae00-ae89-11eb-894e-ffe8b6d0e679.png)

Então clique no botão ![image](https://user-images.githubusercontent.com/81401104/117356027-afe97f80-ae89-11eb-8f54-6361f0cbfa9e.png). Execute a aplicação.

Agora, volte na tela do Kanban e atualize a página (aperte a tecla F5).
Nas propriedades do campo, no dropdown “Form” selecione o formulário que acabamos de criar (“Task”). 

![image](https://user-images.githubusercontent.com/81401104/117356142-ce4f7b00-ae89-11eb-93eb-9bc7da56bcf6.png)

E nos ‘dropdowns’ do ‘Column Field’, ‘Label’ e ‘Description’ selecione os respectivos campos que criamos para eles: “Column Field”, “Label” e “Description”. (igual na imagem abaixo)

![image](https://user-images.githubusercontent.com/81401104/117356172-d7404c80-ae89-11eb-9246-b7c0a71a3135.png)

Agora execute a aplicação do Kanban.
![image](https://user-images.githubusercontent.com/81401104/117356213-e0311e00-ae89-11eb-9402-33f064527765.png)


Aqui você consegue ver o layout do Kanban.

Vamos continuar com o processo, clique no botão ![image](https://user-images.githubusercontent.com/81401104/117356329-f939cf00-ae89-11eb-9af5-369a5fa44655.png).
![image](https://user-images.githubusercontent.com/81401104/117356357-0060dd00-ae8a-11eb-8b0e-decc2e26ffb4.png)

Em “Column Field” selecione a opção ‘‘Pendente’’, em ‘Label’ escreva “Website do Hotel” e em ‘Description’ escreva “Prazo de 1 mês”.
![image](https://user-images.githubusercontent.com/81401104/117356387-0b1b7200-ae8a-11eb-8285-1dd12578453b.png)


Clique no botão ![image](https://user-images.githubusercontent.com/81401104/117356400-0f478f80-ae8a-11eb-9be9-e0496b074cc5.png).

![image](https://user-images.githubusercontent.com/81401104/117356439-1a022480-ae8a-11eb-85e1-295dc2d82773.png)

E agora você pode passar o item “Website do Hotel” para a aba “aprovado” ou “recusado” (basta selecionar, pressionar e arrastar até o outro cartão).
![image](https://user-images.githubusercontent.com/81401104/117356479-271f1380-ae8a-11eb-982a-b193af472914.png)

E esse é o Kanban em funcionamento. Para adicionar mais tasks, é só repetir o processo:
![image](https://user-images.githubusercontent.com/81401104/117356511-30a87b80-ae8a-11eb-8bf8-33d94e12b295.png)

![image](https://user-images.githubusercontent.com/81401104/117356524-356d2f80-ae8a-11eb-8555-4c4420a34297.png)

<div id='id-Software'/>

## Replicação de Software

Entrar em contato com o suporte da Easy Comtec.

<div id='id-list'/>

## List
Para visualizar o formulário em formato de lista, crie um novo formulário e adicione os componentes “Textfield” e “Integer” e nomeie-os de “Nome” e “Idade” respectivamente.

![image](https://user-images.githubusercontent.com/81401104/117356608-50d83a80-ae8a-11eb-8c5d-0cb586b107f7.png)


Clique no botão ![image13](https://user-images.githubusercontent.com/81401104/126831008-669c7782-f252-4d38-8020-6ff676c6455a.png) no pé da página.

Agora selecione a opção “List” no cabeçário. Irá aparecer da seguinte forma:


Ao clicar no botão ![image](https://user-images.githubusercontent.com/81401104/117356874-a14f9800-ae8a-11eb-8fcf-ac2385cfd89b.png), 

irá aparecer a seguinte janela modal:
![image](https://user-images.githubusercontent.com/81401104/117356905-aa406980-ae8a-11eb-9446-cc7d74e01f11.png)

Select fields to be displayed in list: Selecione os campos para aparecer na lista.

Select All: Selecionar todos.

Select none: Selecionar nenhum.

Close: Fechar.

De volta na tela da lista, ao clicar no botão  ![image](https://user-images.githubusercontent.com/81401104/117357136-f12e5f00-ae8a-11eb-8bc7-b6c401199f1f.png)
(nova coluna), o seguinte modal irá aparecer:

![image](https://user-images.githubusercontent.com/81401104/117493345-39ac5200-af49-11eb-8d26-110eccd17aeb.png)

Add Column (adicionar coluna):

Type (tipo):
 _Expression
 
 _Button

Field Title (título do campo):

Format (formato):
<ul>
  <li>String</li>
 <li>Decimal</li>
 <li>Integer</li>
 <li>Date/Days</li>
 <li>Date/Months</li>
 <li>Date/Years</li>
 <li>Date/Hours</li>
 </ul>

Expression (expressão):

Botão ![image](https://user-images.githubusercontent.com/81401104/117493695-b50e0380-af49-11eb-949f-79c2fcd1e4d0.png) serve para avaliar se a expressão é válida ou não.

Caso queira editar as propriedades das colunas, passe o mouse em cima do nome de alguma das colunas e então irá aparecer os seguintes símbolos no canto esquerdo:

![image](https://user-images.githubusercontent.com/81401104/117493776-d111a500-af49-11eb-8f88-46f1d5e89512.png)

clique no símbolo de baixo, então irá mostrar as propriedades para serem editadas:

![image](https://user-images.githubusercontent.com/81401104/117493909-fdc5bc80-af49-11eb-85fd-fd9f57bc722b.png)

E aqui dá para editar o nome da classe, título da coluna, largura da coluna e criar eventos.

Execute essa aplicação (com “Nome” e “Idade”). E então adicione os seguintes registros:

“Joaquim Santos” - “34”
  
“Maria Alice” - “23”
  
“João Carlos” - “21”

![image](https://user-images.githubusercontent.com/81401104/117494677-0e2a6700-af4b-11eb-95cb-8c46e2239be6.png)

Agora volte na edição da lista.
![image](https://user-images.githubusercontent.com/81401104/117494721-197d9280-af4b-11eb-8dbc-632f23d94998.png)

Solte o componente “Integer” onde diz “Drop new filter here!” e o nomeie de “filtro de idade”.

![image](https://user-images.githubusercontent.com/81401104/117494875-4c278b00-af4b-11eb-835b-babf23c015ce.png)

E nas propriedades do “Filtro de Idade”, na seção “Others”, em “Filtered Field” selecione a opção “Idade”.

![image](https://user-images.githubusercontent.com/81401104/117494896-56e22000-af4b-11eb-98d1-c82499a2c4b2.png)

Agora execute a aplicação.

![image](https://user-images.githubusercontent.com/81401104/117494967-6f523a80-af4b-11eb-9938-7b7ff758c1e5.png)

Perceba que ao lado do campo do “Filtro da Idade” tem um símbolo de “ = (igual) “, você pode alterá-lo para outros tipos de símbolos.

![image](https://user-images.githubusercontent.com/81401104/117495247-c1935b80-af4b-11eb-8aa8-aede23006352.png)

Por exemplo, esse símbolo em destaque significa “Igual ou maior”, selecione este.

Agora digite no campo do filtro o número “22” e então clique no botão ![image](https://user-images.githubusercontent.com/81401104/117495272-cb1cc380-af4b-11eb-80a4-1cfbb943095c.png).

E perceba que agora não é mais mostrado o “João Carlos” que tem idade de “21”.

![image](https://user-images.githubusercontent.com/81401104/117495313-d66fef00-af4b-11eb-9776-d1327976c8f6.png)

O botão ![image](https://user-images.githubusercontent.com/81401104/117495817-85142f80-af4c-11eb-913e-74647933fe0a.png) apaga o que estiver escrito dentro do campo do filtro.

<div id='id-How'/>

## Como Adicionar Um Usuário 

Para realizar esse tutorial, é necessário que tenha feito antes os passos no tutorial do 
“End User Access” na seção das configurações do projeto.

Após você ter criado o seu formulário, e clicar no botão ![image13](https://user-images.githubusercontent.com/81401104/126830920-3670bf6e-459e-46ee-8ed4-04c061a1cc97.png) e depois no ![Run](https://user-images.githubusercontent.com/81401104/126830943-bcef2a61-ad8e-4b9f-9de0-71aa6373223d.png), irá abrir a tela dos registros:

![image](https://user-images.githubusercontent.com/81401104/117496064-e0deb880-af4c-11eb-8b49-c002c05f6e9d.png)

No topo desta tela, clique em “Admin”, irá aparecer uma lista de opções, selecione a opção “User”.

![image](https://user-images.githubusercontent.com/81401104/117496105-f0f69800-af4c-11eb-8424-88da419dab10.png)

E então o título da tela irá mudar para “User”, pois iremos registrar usuários, igual na imagem a seguir:

![image](https://user-images.githubusercontent.com/81401104/117496464-7a0dcf00-af4d-11eb-9576-ab1bd51d557f.png)

Clique no botão ![image15](https://user-images.githubusercontent.com/81401104/117496555-96aa0700-af4d-11eb-8756-099fc146e27e.png)

Preencha os campos com as informações correspondentes. Nesse caso eu criei um usuário fictício, apenas para demonstrar.

![image](https://user-images.githubusercontent.com/81401104/117496621-afb2b800-af4d-11eb-8c06-fca41baea985.png)

Então, clique no botão ![image63](https://user-images.githubusercontent.com/81401104/126830855-6bed3f71-fc44-4afb-9982-6550f9c7307d.png).

E irá aparecer a tela de registro de usuário.

![image](https://user-images.githubusercontent.com/81401104/117496853-fa343480-af4d-11eb-8370-35318b17e664.png)

<div id='id-Permission'/>

## Como Dar Permissão Ao Usuário 

Para realizar esse tutorial, é necessário que tenha feito antes os passos no tutorial do 
“Como Adicionar Um Usuário”.

Após ter criar o formulário e executar a aplicação, você irá se deparar com a tela dos registros:

![image](https://user-images.githubusercontent.com/81401104/117496975-2bad0000-af4e-11eb-8bf0-0eaa05261cdd.png)

No topo dessa página, clique no “Admin”, selecione a opção “Role”

![image](https://user-images.githubusercontent.com/81401104/117497065-4f704600-af4e-11eb-929a-bad1a2d9ba6c.png)

E então irá abrir a seguinte tela:
![image](https://user-images.githubusercontent.com/81401104/117497117-66169d00-af4e-11eb-84ef-ca3a5bc8123f.png)


Clique no  botão  ![image15](https://user-images.githubusercontent.com/81401104/117497267-aa09a200-af4e-11eb-97e1-8b37ea971925.png) e então abrirá a seguinte página:

Em “Name” escreva “Usuário” e em “Manager” selecione a opção criada antes. Então selecione todas as opções “View, Insert, Update, Delete”  (dependendo do que você quer, irá selecionar apenas alguns).
![image](https://user-images.githubusercontent.com/81401104/117497319-be4d9f00-af4e-11eb-9c74-74576df35800.png)


Então clique no botão ![image](https://user-images.githubusercontent.com/81401104/117497338-c574ad00-af4e-11eb-9870-9864f5a8303c.png).

Então irá para a seguinte página:
![image](https://user-images.githubusercontent.com/81401104/117497375-cefe1500-af4e-11eb-890e-4b3ac6877436.png)

Clique no botão  ![image](https://user-images.githubusercontent.com/81401104/117497416-d7eee680-af4e-11eb-8776-60c5dc96225f.png) 
para voltar a editar o mesmo formulário:

![image](https://user-images.githubusercontent.com/81401104/117497463-e806c600-af4e-11eb-9dec-e86b8081a948.png)

E agora clique no aba “User Role”, no topo esquerdo essa página:
![image](https://user-images.githubusercontent.com/81401104/117497499-f359f180-af4e-11eb-9400-06e6202c1a8f.png)


Irá para a seguinte tela:

![image](https://user-images.githubusercontent.com/81401104/117497526-fc4ac300-af4e-11eb-9c3d-6a280b7175f5.png)


Clique no botão ![image15](https://user-images.githubusercontent.com/81401104/117497552-04a2fe00-af4f-11eb-8bb6-b8a9de3cfff6.png).

![image](https://user-images.githubusercontent.com/81401104/117497586-11bfed00-af4f-11eb-940d-1cc03ead0bbc.png)

Agora clique no campo do “User ID” e selecione o usuário criado anteriormente:
![image](https://user-images.githubusercontent.com/81401104/117498058-a62a4f80-af4f-11eb-84dd-85f1add2c189.png)


Então clique no botão ![image](https://user-images.githubusercontent.com/81401104/117498098-b4786b80-af4f-11eb-9005-648c8442eeb8.png)

![image](https://user-images.githubusercontent.com/81401104/117498136-c2c68780-af4f-11eb-82e4-e3df9f74a30d.png)


E agora você consegue visualizar os usuários que estão inseridos no “Role”.

<div id='id-Tools'/>

## Tools 🔧 


### 🔧 Formulário X

A criação deste formulário servirá para realizar os tutoriais das seções do “Tools”:

![image](https://user-images.githubusercontent.com/81401104/117498835-b5f66380-af50-11eb-9015-d259556c6480.png)


Dessa forma será mais fácil de prosseguir com as próximas etapas do aprendizado.

Então, crie o seu novo formulário, o nomeie de “Formulário X” e selecione um “Project” e “Menu” criado antes para testar.

![image](https://user-images.githubusercontent.com/81401104/117498862-bf7fcb80-af50-11eb-82a6-aa9210888d5a.png)


Arraste um componente “Textfield” e um “Dropdown” para dentro do formulário:

![image](https://user-images.githubusercontent.com/81401104/117498884-c8709d00-af50-11eb-8d47-c88c15d3374f.png)

Renomeie o “Textfield” para “Nome Completo” e o “DropdownDB” para “Função”, tanto no “Name” quanto no “Label”  na seção “General” do “Properties of Field”.

![image](https://user-images.githubusercontent.com/81401104/117498919-d4f4f580-af50-11eb-8be6-3433989b24cc.png)


Na seção “Values” do campo “Função”, adicione as opções “Programador”, “Suporte” e “Designer”:

![image](https://user-images.githubusercontent.com/81401104/117498935-dde5c700-af50-11eb-9133-08d51e46eb3e.png)


Execute a aplicação:.

![image](https://user-images.githubusercontent.com/81401104/117498964-e6d69880-af50-11eb-99b0-8aa2ad98e4b1.png)


Agora adicione o seguinte conjunto de nomes e funções:
<ol>
 <li>Marcos / Programador</li>
 <li>Lucas / Programador</li>
 <li>Paulo / Suporte</li>
 <li>Bruna / Suporte</li>
 <li>João / Designer</li>
 <li>Carla / Designer</li>
</ol>

Após salvo esse conjunto, estará disposto da seguinte forma na tela de registros:
![image](https://user-images.githubusercontent.com/81401104/117499097-1dacae80-af51-11eb-877c-8564f794eb49.png)


🔗 Vídeo: https://www.youtube.com/watch?v=_fAdsVponmA&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=37

<div id='id-DataSource'/>

### 🔧 DataSource

Para criar um DataSource, é necessário ter um form origem (pode ser o “Formulário X” criado durante o tutorial do mesmo).

Ao logar na sua conta no Builder, você irá se deparar com a seguinte tela:
![image](https://user-images.githubusercontent.com/81401104/117499229-4f257a00-af51-11eb-87bc-beb33ee83f53.png)


Agora clique em Tools, que se localiza na barra cinza, e selecione a opção DataSource:

![image](https://user-images.githubusercontent.com/81401104/117499296-69f7ee80-af51-11eb-8a0c-aac6b3cd0319.png)


Após clicá-lo, irá aparecer a seguinte tela:

![image](https://user-images.githubusercontent.com/81401104/117499322-71b79300-af51-11eb-92c5-dc8c47f0597c.png)

Então clique no botão  ![image15](https://user-images.githubusercontent.com/81401104/117499337-77ad7400-af51-11eb-8d48-bb4059e2e299.png) no topo esquerdo.

![image](https://user-images.githubusercontent.com/81401104/117499374-88f68080-af51-11eb-8b81-bd9c6dca2b5a.png)

Após clicar no botão, irá abrir a seguinte janela modal:

![image](https://user-images.githubusercontent.com/81401104/117499428-9a3f8d00-af51-11eb-8343-01e4a365726b.png)

Em “Title” escreva o título do seu datasource, pode ser “DataSource X”, em “Project” selecione o projeto sob o qual criou o “Formulário X” (Tutorial - “Formulário X”), and in Class it will be “formulariox”.

![image](https://user-images.githubusercontent.com/81401104/117499461-a62b4f00-af51-11eb-96c0-b7a12606c05f.png)


Clique duas vezes nos itens que aparece do lado direito da tela: “Funcao” e “Nome_Completo”.

![image](https://user-images.githubusercontent.com/81401104/117499488-b17e7a80-af51-11eb-88bf-42e58cc815e5.png)


Perceba que foi adicionado para dentro do datasource. Agora clique no botão ![image](https://user-images.githubusercontent.com/81401104/117499529-b9d6b580-af51-11eb-8bd0-4d90679a2564.png).

Seu datasource foi criado:

![image](https://user-images.githubusercontent.com/81401104/117499564-c3f8b400-af51-11eb-8d66-6a1d6709301e.png)

🔗Vídeo: https://www.youtube.com/watch?v=MS_UWKBwO80&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=38

<div id='id-Process'/>

### 🔧 Process

<div id='id-Job'/>

### 🔧 Process Job

<div id='id-Report'/>

### 🔧 Report


Para realizar esse tutorial, é necessário que já tenha realizado os passos do tutorial “Formulário X” e  “Como Criar Um DataSource”.

Na tela inicial, quando logar na conta, se depará com a seguinte tela:

![image](https://user-images.githubusercontent.com/81401104/117499648-e68acd00-af51-11eb-9ede-a7bbe83a7c04.png)


Selecione a aba “Report” e clique no botão ![image15](https://user-images.githubusercontent.com/81401104/117499659-eb4f8100-af51-11eb-8075-0631c0c7d796.png).

Irá abrir a seguinte janela modal:

![image](https://user-images.githubusercontent.com/81401104/117499711-fbfff700-af51-11eb-93cc-c85776bd4528.png)


No “Title”, escreva o título do seu relatório (pode ser “Report X”), em “Project” e “Menu” selecione os mesmos do “DataSource X”:

![image](https://user-images.githubusercontent.com/81401104/117499743-04f0c880-af52-11eb-9f58-6172f7120b14.png)


Clique no botão ![image](https://user-images.githubusercontent.com/81401104/117499759-0a4e1300-af52-11eb-8351-f8822d611d15.png). 

![image](https://user-images.githubusercontent.com/81401104/117499788-13d77b00-af52-11eb-8a9c-c52cfbb2732e.png)


Perceba que agora foi importado os campos “Nome Completo” e “Função” para dentro do relatório.

Clique no botão ![image63](https://user-images.githubusercontent.com/81401104/117499928-51d49f00-af52-11eb-860e-39138a8212f2.png).

Agora vá na aba do “Project”.
![image](https://user-images.githubusercontent.com/81401104/117499953-5d27ca80-af52-11eb-859f-0537b2d324e5.png)


Na linha do seu projeto, o qual você criou o “Relatório X”, clique no botão ![image](https://user-images.githubusercontent.com/81401104/117499977-644ed880-af52-11eb-8c2d-f860cacd36af.png),

irá abrir a seguinte página:

![image](https://user-images.githubusercontent.com/81401104/117500066-7d578980-af52-11eb-8b9e-78a8bd29e404.png)


Clique no “Menu” que você criou anteriormente, irá mostrar uma lista de formulários, relatórios, etc. Selecione o “Relatório X”

![image](https://user-images.githubusercontent.com/81401104/117500104-8c3e3c00-af52-11eb-9b1d-b2139dfa011b.png)


E resultará nisso:

![image](https://user-images.githubusercontent.com/81401104/117500134-95c7a400-af52-11eb-87be-3f2715215787.png)


🔗Vídeo: https://www.youtube.com/watch?v=u3dAaaYlvaw&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=39

<div id='id-Chart'/>

### 🔧 Chart

Para realizar esse tutorial, é necessário que já tenha realizado os passos do tutorial “Formulário X” e  “DataSource”.

Na tela inicial, quando logar na conta, se depará com a seguinte tela:

![image](https://user-images.githubusercontent.com/81401104/117500168-a546ed00-af52-11eb-8f92-f53eb209c406.png)


Clique no “Tools”, na barra cinza no cabeçalho e selecione o “Chart”.

![image](https://user-images.githubusercontent.com/81401104/117500204-aed05500-af52-11eb-8835-8227434d6a60.png)

Será adicionado mais uma aba nessa tela inicial.
 Nessa aba do “Chart” clique no botão ![image15](https://user-images.githubusercontent.com/81401104/117500373-ed660f80-af52-11eb-925a-67afe16e1688.png). 
 
 Irá abrir a seguinte janela modal:

![image](https://user-images.githubusercontent.com/81401104/117500403-f951d180-af52-11eb-8902-ebdb411f7c52.png)

Em “Project” selecione o mesmo projeto que você usou para o tutorial do  “Formulário X” e “Como Criar Um Data Source”.

Em “Chart” selecione a opção “Pie”, em “Style” a opção “Default”. Em “Title” escreva “Porcentagem por Função”. Em “Position” escreva “1”.

Na caixa de seleção “Internal/External” selecione a opção “Internal”. 

Em “DataSource” selecione a opção “DataSource X” (Criado durante o tutorial  “Como Criar Um DataSource”).

Em “Group by” selecione a opção “Função”, em “Value” a opção “Nome_Completo”. Em “Operation” selecione “Count”. (Ficará similar a imagem da próxima página)

![image](https://user-images.githubusercontent.com/81401104/117500450-0a9ade00-af53-11eb-943e-8ff5ac8de953.png)


Então clique no botão ![image](https://user-images.githubusercontent.com/81401104/117500474-11295580-af53-11eb-84f2-aede22facfd8.png):

![image](https://user-images.githubusercontent.com/81401104/117500491-18506380-af53-11eb-98b2-1db015861014.png)


Agora clique no botão ![add](https://user-images.githubusercontent.com/81401104/126830643-f2451501-2481-41c5-9864-b4b1450064ea.png)

![image](https://user-images.githubusercontent.com/81401104/117500518-21d9cb80-af53-11eb-9057-be164a09d6a8.png)


Agora clique na aba do “Project” e execute o projeto sob o qual criou o seu “Chart”.

![image](https://user-images.githubusercontent.com/81401104/117500573-31f1ab00-af53-11eb-884e-9df70220a071.png)


Clique no botão verde ![image](https://user-images.githubusercontent.com/81401104/117500601-3a49e600-af53-11eb-9dc9-27020f89211b.png)(Run Project):

![image](https://user-images.githubusercontent.com/81401104/117500632-4635a800-af53-11eb-853d-cf459742db3e.png)


E aqui você consegue visualizar a porcentagem de funcionários por função em formato de pizza. 

🔗Vídeo: https://www.youtube.com/watch?v=NoAdmVLlnqc&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=40

<div id='id-API'/>


### 🔧 API

Para fazer uso da API, entre em contato com o suporte da Easy Comtec.

<div id='id-Template'/>

### 🔧 Template

Para fazer uso do “Template”, entre em contato com o suporte da Easy Comtec.

<div id='id-Scheduler'/>

### 🔧 Scheduler

Para fazer uso do Scheduler, entrar em contato com o suporte da Easy Comtec.

<div id='id-2Notification'/>

### 🔧 Notification

Para utilizar essa funcionalidade, vá até o menu do “Tools” (se localiza na tela inicial quando se loga na conta) e selecione “Notification”:

![image](https://user-images.githubusercontent.com/81401104/117500707-5f3e5900-af53-11eb-8530-58021dfa3e4e.png)


Ao selecionar, irá abrir a seguinte aba:

![image](https://user-images.githubusercontent.com/81401104/117500735-682f2a80-af53-11eb-93c2-68b2c3000b0b.png)


Clique no botão ![image15](https://user-images.githubusercontent.com/81401104/117500751-711ffc00-af53-11eb-9613-d2057dfa745f.png) button:

![image](https://user-images.githubusercontent.com/81401104/117500779-79783700-af53-11eb-9bf6-9afec7900475.png)


Em “Project” selecione o projeto.

Em “Name” escreva o nome da notificação.

Em “Notify Using” (Notificar usando) tem duas opções: 🔳 Email e  🔳Push, é possível selecionar ambas as opções.

Em “Subject” você irá escrever o assunto.

Em “Content”  você irá escrever o conteúdo da notificação.

Após ter editado os campos, clique no botão ![image](https://user-images.githubusercontent.com/81401104/117500950-be03d280-af53-11eb-9835-0a068f77115b.png):

![image](https://user-images.githubusercontent.com/81401104/117500965-c52ae080-af53-11eb-92bc-b00b064efd6c.png)

Pronto, sua notificação foi criada.

<div id='id-ProjectSettings'/>

## 🔧 Configurações do Projeto

Para acessar as configurações do projeto é necessário realizar os seguintes passos:

Ao logar na sua conta, irá se deparar com as três abas iniciais (Form, Project, Report). Selecione a aba do “Project.

![image](https://user-images.githubusercontent.com/81401104/117501401-6023ba80-af54-11eb-95f5-28b6cc5bc149.png)


A partir daqui é possível editar as configurações do projeto por meio de dois caminhos:

Criando um novo projeto
Editando um projeto existente

Para a primeira opção, basta clicar no botão ![image15](https://user-images.githubusercontent.com/81401104/117501571-9cefb180-af54-11eb-8c4f-f70cbc95056a.png)
(se localiza no topo esquerdo).

Pela segunda opção, é necessário clicar no ![image](https://user-images.githubusercontent.com/81401104/117501498-80ec1000-af54-11eb-9514-ba34653f6604.png)(se localiza na linha do seu projeto, abaixo de “Control”).

Ambos caminhos levarão para a mesma janela modal:

![image](https://user-images.githubusercontent.com/81401104/117501659-bbee4380-af54-11eb-82a5-9b019dd60014.png)

<div id='id-Main'/>

### 🔧 Main
![image](https://user-images.githubusercontent.com/81401104/117502018-4afb5b80-af55-11eb-95b3-b0fcbcc8628c.png)

Nessa aba do “Main” iremos alterar as principais configurações do projeto.

No campo do “Project title” escreva o título do seu projeto (digite o nome do projeto que você deseja criar ou um nome de sistema que identifique o objetivo do sistema, por exemplo: CRM, ERP, etc.).

Ao clicar em “Advanced Settings”, novas configurações aparecerão:

Project configurations (configurações do projeto)
DataBase configurations (configurações do banco de dados)
Email Server Configuration (configuração do servidor de email)
Other configurations (outras configurações)

<div id='id-ProjectConfigurations'/>

#### 🔧 Project Configurations
![image](https://user-images.githubusercontent.com/81401104/117502040-551d5a00-af55-11eb-8235-f2be3fa455ba.png)

Project name: (Nome do projeto) Este campo é para identificar o nome do software.

Original Project: Indica qual projeto será usado como fonte para copiar formulário e dados.

Namespace: Usado para renderização do template.

Data Class: Nome da class que implementa o ORM.

Data Class Namespace: (Nome da classe dos dados) Usado para renderização do template.

Service Reference: (Serviço de referência) Usado para renderização do template.

MvC Project Name:  (Nome do projeto MvC) Usado para renderização do template.

<div id='id-DatabaseConfigurations'/>

#### 🔧 Database Configurations
![image](https://user-images.githubusercontent.com/81401104/117502098-69f9ed80-af55-11eb-9851-b95da28cee2e.png)


Database server: Instância do servidor de banco de dados do SQL Server.

Database name: Cria um banco de dados no servidor sql e preencha este campo com o nome do banco de dados criado.

Database login: Login para acessar o servidor SQL.

Database password: Senha para acessar o servidor SQL.

Blob Container Connection String: Blob Container Connection String deve ser copiado do Azure Portal.

Blob Container Name: Container onde os arquivos estarão armazenados.

Botão “Test Database Connection”: Ao clicar nele, irá testar a conexão do banco de dados.

<div id='id-DatabaseConfigurations'/>

#### 🔧 Email Server Configuration
![image](https://user-images.githubusercontent.com/81401104/117502177-83029e80-af55-11eb-9048-d06a32f263e4.png)


SMTP Configurations: Configurações do SMTP (Simple Mail Transfer Protocol). 

Display name: Use um nome informal que irá ajudar você a identificar o servidor (será melhor usar o provedor de email tal como Gmail or Yahoo).

Server name: Especificação do servidor SMTP. Você pode achá-lo navegando pela página web do seu provedor.

Port: 25 ou 587. 

Email: Conta de email que a aplicação irá usar para enviar email.

User name: Nome de usuário que a aplicação irá usar para enviar email.

Password: Senha para acessar o email escolhido.

🔳 Use SSL: Transferência de email SMTP não fornece criptografia. Então se você quer uma conexão mais segura, será uma boa escolha usar uma extensão SSL/TLS ou STARTTLS, as quais usam uma porta separada para comunicação criptografada.

Test SMTP Email Configuration: Irá testar e validar as configurações de email SMTP

POP Configurations: Configurações do POP (Post Office Protocol). O POP é um protocolo padrão para aplicações de internet usado por clientes de e-mail para recuperar e-mail de um servidor de e-mail.

Os campos de “Display Name”, “Server Name”, “Port”, “Email”, “User name”, “Password” e “Use SSL” do POP Configurations recebem as mesmas instruções dos mesmos campos do SMTP Configurations, explicados acima.


#### 🔧 Other configurations
![image](https://user-images.githubusercontent.com/81401104/117502437-e42a7200-af55-11eb-8f7c-2563c6c8d25c.png)

Azure search key: Habilita uma barra de pesquisa do builder que pesquisa por formulário como também por registros. 

Azure é um serviço de computação na nuvem criado pela Microsoft,  para construir, testar, gerenciar aplicações e serviços através dos centros de processamentos de dados da Microsoft.

Azure search name: Habilita uma barra de pesquisa do builder que pesquisa por formulário como também por registros

Google Analytics ID: É uma string do tipo “UA-000000-2”

🔳Custom Css: Por aqui você consegue editar o CSS, ao selecionar a caixa, o seguinte campo irá aparecer para você colar o seu código css: 

![image](https://user-images.githubusercontent.com/81401104/117502480-f5737e80-af55-11eb-8be1-17afe142f315.png)


 🔳Enable user to give feedback: Ao selecionar a caixa, habilita sua aplicação para pegar feedback dos seus usuários e enviar para a conta de email configurada na aplicação.

Field Format Settings: Configurações de formato dos campo

##### 📅Date:
MM/dd/yyyy = (mês/ dia/ ano)<br> 
dd/MM/yyyy = (dia/ mês/ ano)

##### 📅⏰ DateTime: 
MM/dd/yyyy hh:mm:ss a = [Mês/ dia/ ano  hora (0 a 12 AM/PM) :minuto :segundo]<br> 
MM/dd/yyyy HH:mm:ss = [Mês/ dia/ ano  hora (0 a 23) :minuto: segundo]<br> 
dd/MM/yyyy hh:mm:ss a = [dia/ mês/ ano  hora (0 a 12 AM/PM) :minuto :segundo]<br> 
dd/MM/yyyy HH:mm:ss = [dia/ mês/ ano  hora (0 a 23) :minuto :segundo]

##### ⏰ Time:  
HH:mm:ss = [Horas (0 a 23) :minutos :segundos]<br> 
hh:mm :ss = [Horas (0 a 12) :minutos :segundos]

##### 🔢 Decimal:
. (ponto)<br> 
, (vírgula)

#### 🙎‍♂️ End-User Access

Ao selecionar a aba do “End-User Access”, a seguinte tela irá aparecer:

![image](https://user-images.githubusercontent.com/81401104/117502591-1e940f00-af56-11eb-9a92-f67c1c4e7558.png)

 Aparecerá o item “End-user access type” - que significa “tipo de acesso ao usuário final” - com um dropdown com 3 opções:

<ol>
 <li>Deny</li>
 <li>Anonymous</li>
 <li>Authenticated </li>
</ol>

Ao selecionar a primeira opção (“Deny”), você estará negando acesso ao projeto pelo usuário final.

Ao selecionar a segundo opção (“Anonymous”), os seguintes campos irão aparecer:

![image](https://user-images.githubusercontent.com/81401104/117502636-2a7fd100-af56-11eb-8e9c-a14169e485f9.png)

URL Access: Acesso da URL

Host: Hospedagem

Ao selecionar a 3ª opção (“Authenticated”), os seguintes conjuntos de campos irá aparecer:

![image](https://user-images.githubusercontent.com/81401104/117502732-4f744400-af56-11eb-9909-ae4c6263b23a.png)


URL Access: Acesso da URL

Host: Hospedagem
 
🔳Create default user form (Criar formulário padrão de usuário): Para tornar possível adicionar usuários e administradores, basta selecionar esse checkbox 

e então clicar no botão ![image63](https://user-images.githubusercontent.com/81401104/117502769-5e5af680-af56-11eb-8b5e-5066bfe76c6a.png).


Após fazer isso, vá na aba dos forms e então procure pelos títulos “User”, “Role” e “UserRole”

![image](https://user-images.githubusercontent.com/81401104/117502850-80547900-af56-11eb-8b86-fdb985867b86.png)


Agora é possível adicionar usuários e funções.

User form (Formulário do usuário)

First Name (Primeiro Nome)

Last Name (Último Nome)

Username (Nome de usuário)

Email

Password (Senha)

Email Confirmed (Confirmação de email)

Password Change Required (Necessário trocar senha)

Lockout Enabled (Bloqueio ativado) 

Lockout End Date (Data final do bloqueio)

Access Failed Count (Contagem de falha de acesso)

User Push Notification Token (Token para ‘push notification’)

 🔳Use Sign-up (Usar inscrição) 

 🔳Send Email To New Users:  Enviar email para novos usuários


Ao descer a visão na tela, visualiza-se a seção do “Lockout Settings” (Configurações de bloqueio):

![image](https://user-images.githubusercontent.com/81401104/117502886-906c5880-af56-11eb-9a78-8eecb36f2c12.png)


Max attempts before lockout (Quantidade máxima de tentativas antes de bloquear)

Default lockout time frame (in minutes) [Tempo padrão (em minutos) de bloqueio]

🔳 User lockout enabled by default (Bloqueio de usuário habilitado por padrão)


E logo abaixo tem a seção “Password requirements” (requisitos de senha):

![image](https://user-images.githubusercontent.com/81401104/117502897-96623980-af56-11eb-8d7d-ff54f88df364.png)


Length (Comprimento): quantidade de caracteres.

Digit (Digito).

Lowercase (Letra minúscula).

Non Letter or Digit (Caracteres especiais)

Uppercase (Letra maiúscula)

E abaixo tem “Roles Configurations”:

![image](https://user-images.githubusercontent.com/81401104/117502930-9e21de00-af56-11eb-873a-6fd52398d5e8.png)

Role Form (Formulário da função).

Name (Nome)

Permission (Permissão)

Role Manager (Gerente da função)

Roles x Users Form (Formulário de usuário x funções) 

<div id='id-2Menus'/>

#### 🧰 Menus
![image](https://user-images.githubusercontent.com/81401104/117502994-b72a8f00-af56-11eb-9329-f0927a9e3b98.png)

Name: Nome do menu que o usuário final verá no site.

Position: Posição que o menu irá aparecer dentro do seu grupo.

Por exemplo, no momento tenho esses dois menus:

![image](https://user-images.githubusercontent.com/81401104/117503025-c4477e00-af56-11eb-98dc-013cdfb8c095.png)

Vamos adicionar um menu de nome “Menu Off”, na posição “2”:

![image](https://user-images.githubusercontent.com/81401104/117503038-ca3d5f00-af56-11eb-8793-a8f941a80af7.png)


Clique no botão ![image](https://user-images.githubusercontent.com/81401104/117503057-cf9aa980-af56-11eb-8c63-5b124cf5fc39.png):

![image](https://user-images.githubusercontent.com/81401104/117503085-d9bca800-af56-11eb-8598-f5c64ef87c59.png)

Para editar o nome, posição e/ou relação de pai dos menus, é só clicar no botão  ![image](https://user-images.githubusercontent.com/81401104/117503213-0670bf80-af57-11eb-80fe-c06ff430d3ca.png) ao lado do nome do menu, na seção “Menu Hierarchy”.

Para deletar um menu, é só clicar no ![image](https://user-images.githubusercontent.com/81401104/117503281-1c7e8000-af57-11eb-8576-a0f3a8a72d50.png).

Para visualizar os menus criados, é necessário ir até a tela do “Project” e executar a aplicação:

![image](https://user-images.githubusercontent.com/81401104/117503363-39b34e80-af57-11eb-9e9c-86ad21797cc1.png)

![image](https://user-images.githubusercontent.com/81401104/117503398-49329780-af57-11eb-91f5-7835e8a296d2.png)

Ao clicar em cada um dos menus, irá aparecer a lista de formulários, relatórios e gráficos correspondentes a cada um

Parent: Tornar menu pai para montar sua hierarquia de menu.

Edite o 2º menu (“ParentTest”) ou o qual você já tenha criado:

![image](https://user-images.githubusercontent.com/81401104/117503437-551e5980-af57-11eb-8e29-11005b3b594b.png)


Adicione e salve o “Menu Storage” como “Parent”:

![image](https://user-images.githubusercontent.com/81401104/117503446-5a7ba400-af57-11eb-9231-7c04ca84174f.png)


Agora vamos visualizar dentro da aplicação do projeto como ficará:

![image](https://user-images.githubusercontent.com/81401104/117503478-623b4880-af57-11eb-9906-681d3ebf4c39.png)


Menu Hierarchy (Hierarquia do menu): Onde irá visualizar a ordem e relação de hierarquia entre os menus

![image](https://user-images.githubusercontent.com/81401104/117503496-67989300-af57-11eb-84ad-ed7d23e1504e.png)

<div id='id-DataBaseManager'/>

#### 🖥️ DataBase Manager
![image](https://user-images.githubusercontent.com/81401104/117503595-8b5bd900-af57-11eb-9c82-8ba78fb969d2.png)


Ao clicar no  ![image](https://user-images.githubusercontent.com/81401104/117503609-8f87f680-af57-11eb-92f6-469b50bb54dd.png)(Embaixo de “Tables”), você poderá ver o ID e os campos de cada formulário:

![image](https://user-images.githubusercontent.com/81401104/117503633-96166e00-af57-11eb-8b30-ac3af4c008e7.png)


![image](https://user-images.githubusercontent.com/81401104/117503648-9e6ea900-af57-11eb-8f4c-c4e0e1f0be9b.png): Excluir tables selecionadas.

![image](https://user-images.githubusercontent.com/81401104/117503670-a595b700-af57-11eb-8267-141fb712b572.png) : Limpar os dados das tables selecionadas.

<div id='id-Editors'/>

#### 📝 Editors
![image](https://user-images.githubusercontent.com/81401104/117503687-adedf200-af57-11eb-9aa4-c6f9d3ec0575.png)


Member Users (usuários membros) podem visualizar e editar o seu sistema.

Só podem ser adicionados quem já estiver registrado no sistema.

Ao aparecer o nome/email de quem você quer adicionar, selecione-o e depois clique no botão ![image](https://user-images.githubusercontent.com/81401104/117503708-b6462d00-af57-11eb-83a1-d290782c2d07.png):

![image](https://user-images.githubusercontent.com/81401104/117503722-bc3c0e00-af57-11eb-8ce9-7c9398472951.png)


Então clique no botão ![image](https://user-images.githubusercontent.com/81401104/117503745-c4944900-af57-11eb-98f9-d3ec7ef42cc0.png).

<div id='id-2Email'/>

#### 📧 Email
![image](https://user-images.githubusercontent.com/81401104/117503760-cb22c080-af57-11eb-8d2a-e5bf7f5c7b0b.png)

 🔳Create default email form: Criar formulário de email padrão

Email form: Formulário do email

Sent by: Enviado por

Subject: Assunto

CC: Carbon Copy

Body: Corpo

<div id='id-2Images'/>

#### 🖼️ Images
![image](https://user-images.githubusercontent.com/81401104/117503797-db3aa000-af57-11eb-988b-3cfb2da12c11.png)

Na seção “Icons” é possível realizar o upload das imagens dos ícones, que podem ser das proporções “144x144”, “76x76”, “32x32” e “16x16”.

Exemplo: ![image](https://user-images.githubusercontent.com/81401104/117503818-e4c40800-af57-11eb-946c-acd10e8e1d6b.png)


Na seção “Background”  é possível realizar o upload da imagem de fundo, que será visualizada na tela de login do projeto. Por exemplo:

![image](https://user-images.githubusercontent.com/81401104/117503835-ebeb1600-af57-11eb-9b59-f2e9f3353ffe.png)


Para fazer o upload de qualquer uma imagem, apenas clique no botão ![image](https://user-images.githubusercontent.com/81401104/117503852-f3aaba80-af57-11eb-9cb1-2ab1b9237a0f.png)

<div id="id-apis"/>

## Builder Apis ☁️

Abaixo você vai conhecer algumas apis que você pode usar de forma externa.<br> 
Note que para usa-las você deve obter autenticação.

<div id="id-authentication">
    
### Api para autenticação
    
Endereço:
    https://builder.easy.rocks/Api/Account/Login
    
![image](https://user-images.githubusercontent.com/13450436/153057611-4cca89d9-cb54-42e8-9e8f-5e70a5c10b88.png)
   
Headers:
<div id="projectHash">   
ProjectHash é o código do projeto que você pode obtê-lo pela url, nas requisições você deve incluir 'projectHash' como header: 
    
![image](https://user-images.githubusercontent.com/13450436/153057247-e3295600-336c-4de6-815a-28166809e010.png)
    
![image](https://user-images.githubusercontent.com/13450436/153057640-2f75ca94-6aa4-478c-b077-1a020c5bd430.png)
    
Payload:
    
{"username":"email ou username","password":"senha","grant_type":"password"}
    
![image](https://user-images.githubusercontent.com/13450436/153057860-4c06657f-2506-4bfd-99b8-1f219f77ced6.png)
    
Reponse: 
    
{"userFirstName":"User","userLastName":"Test","passwordChangeRequired":false,"accessToken":"esse token é necessário para que você chame as demais apis"}
    
    
<div id="id-paginate">

### 📃 Paginação
    
    
Para requisitar dados de paginação de um formulário você deve utilizar a seguinte api:
    
Endereço: https://builder.easy.rocks/api/datasource/RunGridQuery/{IdDoDataSource}
    
Você pode obter o Id do DataSource inspecionando a barra network do seu navegador e clicar em refresh no formulário:
    
![image](https://user-images.githubusercontent.com/13450436/153059323-58696431-e7ca-4baf-a139-8455d5a77977.png)

Headers:

[projectHash](#projectHash)
    
authorization: com o código do Bearer + o token obtido com a api de autenticação
    
![image](https://user-images.githubusercontent.com/13450436/153059688-bc3a00a8-7ade-4796-966c-f2afa40a8b14.png)

    
PayLoad:
    
- skip: Quantos registros você quer Pular
- take: Quantos registros você quer Pegar
- orderBy: Nome do campo pelo qual deseja ordenar
- filters: Lista de Filtros, é possível filtrar por termos ou montar filtros complexos
- field: Nome do Campo que vai ser utilizado pelo filtro
- condition: Condição AND ou OR caso tenha mais de um Filtro na lista
- operator: Tipo de operação. 
  - 0 StartWith.
  - 1 Contains.
  - 2 EndWith.
  - 3 Equals.
  - 4 Greater.
  - 5 GreaterOrEquals.
  - 6 Less.
  - 7 LessOrEquals.
  - 8 Different.
  - 9 Myself.
  - 10 UnderMyRole.
  - 11 SameRole.
  - 12 UserHasRole.
  - 13 In.
  - 14 NotIn.
     - value: Valor do Filtro.
     - classPropertyId: Valor do ClassPropertyId do Campo : Opcional.
     - fieldTypeId: Tipo do Campo Opcional.
        

Você pode utilizar a ferramenta de filtro do Builder pra facilitar a geração do objeto e pegar o valor inspecionando:
    
![image](https://user-images.githubusercontent.com/13450436/153061046-860a90d7-8f05-4151-971a-ac48b42fadcd.png)

{"filters":[{"field":"Name","condition":"AND","operator":8,"value":null,"childs":[],"classPropertyId":381541,"fieldTypeId":25}],"skip":0,"take":100,"orderBy":""}
    
![image](https://user-images.githubusercontent.com/13450436/153061068-7423903d-291a-4d0b-b17b-9f5da2c49c48.png)
    
 O resultado da Api deve ser parecido com esse:
    
 ![image](https://user-images.githubusercontent.com/13450436/155110500-48fcef6c-82c6-4f45-b82a-36fe66622980.png)

 Response:
 - Total: Total de Registros na Query.
 - List: Lista de objetos com os valores.
 - Formats: Formato dos campos Ex:Date, String, Number.
    
    
### ⚫ Get
A api Get serve para pegar uma entidade de um form, passando um id em específico
O endereço da api é esse logo abaixo: 
    
https://builder.easy.rocks/api/FormBuilderSave/{IdDaEntitdade}
    
A requisição também deve incluir o header de autenticação, e o id do projeto em que está sendo feita:
    
![image](https://user-images.githubusercontent.com/13450436/155111165-72bec197-c775-4c64-ad6c-af7c1505abbc.png)

Além disso deve incluir o seguinte payload:
    
![image](https://user-images.githubusercontent.com/13450436/155111280-5ac3f884-283f-42db-a9c4-a8f1d7af95b1.png)

- projectId: O id do projeto (pode ser obtido pelo network ao editar algum item da grid)
- formId: O id do formulário se encontra também na url
    
![image](https://user-images.githubusercontent.com/13450436/155111434-145daedd-3d0f-4d3f-9431-b50cd337bdd6.png)
    
A api retorna um objeto com os valores da entidade ex:
    
![image](https://user-images.githubusercontent.com/13450436/155111583-65fa3dce-9781-4f7b-ae13-0d96609d8909.png)

### ⚫ Post
A api de Post serve tanto para criar uma nova entidade como também atualizar uma entidade, ela possui o seguinte endereço:
    
https://builder.easy.rocks/api/FormBuilderSave
    
Também precisa do header de autenticação, precisa do id do projeto e do projectHash:
    
![image](https://user-images.githubusercontent.com/13450436/155114029-cd8a07fe-6e70-4247-8554-705a5d9fc9fe.png)
    
O Payload consiste no seguinte objeto:
    
{"ProjectId":2072,"FormId":50839,"TableName":"SimpleForm_Person","PrimaryKeyName":"SimpleForm_PersonId","PrimaryKeyType":"Guid","Values":[{"FieldName":"Name","Value":"John Doe","SystemTypeName":"String","IsAutoIncrement":false},{"FieldName":"Birth","Value":"1956-01-01T00:00:00.000","SystemTypeName":"Date","IsAutoIncrement":false}]}

- ProjectId - Id do Projeto.
- PrimaryKeyName - Nome da chave primária.
- PrimaryKeyType - Tipo da chave primária.
- PrimaryKeyValue - Quando a intenção for atualizar um registro.
- TableName: Nome da tabela.
- Values - Uma lista com os campos a serem atualizados:
    - FieldName: Nome do campo.
    - IsAutoIncrement: Uma flag que define se o valor é autoincremento ou não.
    - SystemTypeName: Tipo do campo.
    - Valor: Valor do Campo.
    
![image](https://user-images.githubusercontent.com/13450436/155114685-40520b69-b2ce-4f04-98bc-b8d1b45c9e22.png)

Quando o update do valor da chave primária (PrimaryKeyValue) deve ser incluido 
![image](https://user-images.githubusercontent.com/13450436/155115991-2de7a0d9-832a-4587-b195-b810d72c98aa.png)
    

A reposta da api consiste no objeto abaixo:
    
{"updateMainForm":false,"item":{"ProjectId":2072,"FormId":50839,"RootFormId":null,"TableName":"SimpleForm_Person","PrimaryKeyName":"SimpleForm_PersonId","PrimaryKeyValue":"22600a54-c329-46c8-9b74-ebb02332ec7f","PrimaryKeyType":"Guid","WorkflowId":null,"WorkflowStepId":null,"WorkflowActionId":null,"EntityFormKey":null,"WorkflowFormKey":null,"Values":[{"FieldName":"Name","Value":"John Doe","SystemTypeName":"String","IsAutoIncrement":false,"OneToManyRows":null},{"FieldName":"Birth","Value":"1956-01-01T00:00:00Z","SystemTypeName":"Date","IsAutoIncrement":false,"OneToManyRows":null}],"IsNew":true,"ProjectHash":"163a7de6b6a2","FieldValuesChanged":null,"oneToManyData":null,"UserId":null,"IsBuilderUser":true,"Facilities":[]}}
    
- updateMainForm: Flag é utilizada pelo sistema caso o form seja um children para que o form principal também seja atualizado.
- item: Dados da entidade que foi atualizada.
  - ProjectId: Id do Projeto.
  - FormId: Id do Form.
  - RootFormId: Id do Form Principal.
  - TableName: Nome da tabela.
  - PrimaryKeyName: Nome da chave primária.
  - PrimaryKeyValue: Valor da chave primária.
  - PrimaryKeyType: Tipo da chave primária.
  - WorkflowId: Id do Workflow.
  - WorkflowStepId: Id do Step.
  - EntityFormKey: Id da Entidade (Usado no histórico do Workflow).
  - Values: Valores após a entidade ser atualizada semelhante a lista que foi enviada.
  - IsNew: Flag que define se o registro é novo ou não. 
  - ProjectHash - hash do projeto.
  - FieldValueChanged - flag que define se algum valor foi alterado.
  - oneToManyData - Rows de um one to many.
  - UserId - Id do usuário que fez o update null se o usuário for do builder.
  - IsBuilderUser - Flag que define se o usuário foi do Builder.
  - Facilities - Lista de Facilities do usuário caso o projeto utilize facilities.
    
 ### ❌ Delete
 
 A api que serve para apagar uma entidade consiste no seguinte endereço, a requisição deve ser feita em modo delete:
    
 https://builder.easy.rocks/?projectId={projectId}&formId={formId}&rootFormId={rootFormId}&tableName={tableName}&primaryKeyName={primaryKeyName}&primaryKeyType={primaryKeyType}&primaryKeyValue={primaryKeyValue}

Todos parâmetros são query string:
    
![image](https://user-images.githubusercontent.com/13450436/155117527-1d87e181-1bbe-4c90-b51d-06e94617716e.png)

    
 - projectId: Id do Projecto.
 - formId: Id do Form.
 - rootFormId: Caso seja um Child Form, Id do form principal.
 - tableName: Nome da tabela.
 - primaryKeyName: Nome da chave primária.
 - primaryKeyType: Tipo da chave primária.
 - primaryKeyValue: Valor da chave primaria da entidade a ser apagada.
    
 A api também precisa do header de autenticação, do id do projeto e do projectHash:
    
![image](https://user-images.githubusercontent.com/13450436/155114029-cd8a07fe-6e70-4247-8554-705a5d9fc9fe.png)
    
 A response da api consiste no seguinte objeto:
 {"updateMainForm":false}
    
 - updateMainForm: se o form principal deve ser atualizado ou não. 
    
 O status 200 quer dizer que a entidade foi apagada com sucesso. 
 
 
    
 
 
    
    
    
    
    


    
   

 
 


    
   

    
    
    
    
