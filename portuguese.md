<h1>Easy Builder Tutorial em português</h1>
<img src="https://easybuilder.easy.rocks/wp-content/uploads/2023/07/logoladoazul-300x83.png" />

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
    - [ProgressBar 📶](#id-ProgressBar)
    - [Gantt 📊📅](#id-Gantt)
    - [Date 📆](#id-Date)
    - [DateTime 📆⏲️](#id-DateTime)
    - [Time ⌛](#id-Time)
    - [Checkbox ✅](#id-CheckBox)
    - [ChecklistDB 📁](#id-ChecklistDB)
    - [Radio 🔘](#id-Radio)
    - [Dropdown🗄️](#id-Dropdown)
    - [DropdownDB 📥](#id-DropdownDB)
    - [AutoComplete 🗄️🧲](#id-AutoComplete)
    - [Label 🔤](#id-Label)
    - [Wizard 🛤️](#id-Wizard)
    - [Box 📦](#id-Box)
    - [Signature ✒️](#id-Signature)
    - [Static Image 🌄](#id-Static)
    - [Upload Image 📸📩](#id-Upload)
    - [File Upload 📂📩](#id-File)
    - [One-To-Many 📃➡️📃](#id-One-To-Many)
    - [Multi Upload 📂➕](#id-MultiUpload)
    - [Multi-tag 🏷️](#id-MultiTag)
    - [Additional Data ➡️📃](#id-Additional)
    - [Button ⏸️](#id-Button)
    - [HTML Field 🦰](#id-HTML)
    - [Quiz 🧩](#id-Quiz)
    - [Email 📧](#id-Email)
    - [Password 🔐](#id-Password)
    - [Horizontal Line 📏🪓](#id-Horizontal)
    - [Repeater 🔁](#id-Repeater)
    - [Page View 🖼️](#id-PageView)
    - [Chat 💬](#id-Chat)
    - [Location 🗺️](#id-Location)
    - [Chart 📊](#id-Chart)
    - [Multi-Select 🌐](#id-Multi-Select)
    - [Grid 🗃️](#id-Grid)
    - [Carousel 🎠](#id-Carousel)
- [Form 📄](#id-form)
    - [Video call Coming Soon](id-Video)
    - [Tab (Form)](#id-Tab)
    - [Dev Properties (Form)](#id-Properties)
    - [CSS Class (Dev Properties)](#id-CSS)
    - [Notification (Form)](#id-Notification)
    - [Event type](#id-Event)
    - [Software Replication](#id-Software)
    - [List](#id-list)
    - [How to Add a User](#id-How)
    - [How to Give User Permission](#id-Permission)
    - [Form Events](#id-Form-Events)
- [Tools 🔧](#id-Tools)
    - [🔧 DataSource](#id-DataSource)
    - [🔧 Process](#id-Process)
    - [🔧 Process Job](#id-Job)
    - [🔧 Report](#id-Report)
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
- [Page Tutorials 📄](#id-PageTutorials)
   - [Criar gride em uma page](#id-gridInPage)
   - [Como filtrar um DropdownDB por outro DropdownDB](#id-FiltroDDB)

   teste sa saq

<div id='id-frist'/>

## Primeiros passos no Easy Builder 🦶
<p>Em primeiro plano precisamos criar um login no <b>"Easy Builder"(nossa plataforma de criação).<p>
    
- Acessando o link https://builder.easy.rocks/

<img src="./BuilderImages/BuilderImagesAtualizadas/login.png">   
    
 Nesta imagem vemos uma tela de login, é nela que você ira se cadastrar, há varias formas de cadastro como Google, Microsoft Teams,Facebook ou com seu email,o recomendado é que utilize o email da Easy (....@easyteam.rocks) o qual você recebeu clicando em <i>"Sign UP".<br>
  
### Agora precisamos confirmar seu email 📧⚠️
Será enviado um link de confirmação para o seu email cadastrado, então acesse-o, e abra o email da Easy Builder que será encontrado na Caixa de Entrada ou no Lixo Eletrônico.

 
<img src="https://user-images.githubusercontent.com/81401104/114757978-d9a00280-9d32-11eb-9a5b-e0e30040c51c.png">

Por fim clique em _Link Here_  para confirmar o email.⤴️

Pronto agora você ja pode logar no <b>"Easy Builder"</b> sem problemas clicando em _Sign In_.⤵️
 
<img src="./BuilderImages/BuilderImagesAtualizadas/loginSingIn.png">

                                                                   Feito o cadastro Parabens!!🥇🎉

<div id='id-hands'/>
 
## É hora de por a mão na massa 🖐️

Agora iremos aprender a fazer um projeto, menu e formulário básico, para que você já possa experimentar as funcionalidades do Easy Builder.

Após o login no Builder você irá se deparar com o seguinte contéudo:

![image](./BuilderImages/BuilderImagesAtualizadas/ProjetoNew.png)

    
Selecione “New” e logo abaixo em “Project title” escreva o título do seu projeto (pode ser “ProjetoTeste”) e um descricrição do projeto(pode ser "Projeto teste para tutorial")

![image](./BuilderImages/BuilderImagesAtualizadas/ProjetoNewInfo.png)

e clique no botão _Save_

(Irá demorar um pouco aqui pois estará sendo criado o banco de dados para o seu projeto)

Agora você estará na sua página inicial com as três abas principais, nesse caso automaticamente será a aba “Project”. 

Então, voltará na tela inicial com as duas abas principais “Form” e “Report” (que significa “Formulário” e “Relatório” respectivamente), agora clique na aba “Form” que esta marcada em verde:
    
![image](./BuilderImages/BuilderImagesAtualizadas/Forms.png)
    
E agora clique no botão _Form_, que está marcado em vermelho na imagem acima, automaticamente irá abrir uma nova aba no seu navegador.
![image](./BuilderImages/BuilderImagesAtualizadas/FormsNew.png)

Nessa nova página, no campo do “Enter the name of the form here” escreva o título do seu formulário (pode ser “FormulárioTeste”).

![image](./BuilderImages/BuilderImagesAtualizadas/FormTitle.png)

Clique no botão _"Save"_ que se encontra na parte superior a direita.

![image](./BuilderImages/BuilderImagesAtualizadas/Save.png)

Selecione o componente “Textfield” (da aba lateral Tools - Gallery Fields) e arraste para o campo cinza onde está escrito “Drop new field here!”.

Agora clique no componente que você arrastou (“Textfield”), e logo irá abrir uma aba lateral na direita chamada “Properties of Field”.


Lá no topo do “Properties of Field”, abaixo de “General”, No campo “Name”  escreva ‘‘Nome’’ e no campo “Label” também escreva “Nome”.
Agora clique no botão  _"Save"_ e depois clique no botão _"Run"_, irá abrir a seguinte página:

![image](./BuilderImages/BuilderImagesAtualizadas/FormTeste.png)

Aqui estará disponível a visualização dos registros salvos. ⤴️
    
> Clique no botão _"New"_, você será direcionado para a seguinte tela:

![image](./BuilderImages/BuilderImagesAtualizadas/FormNew.gif)


Adicione o nome “Samuel”, e clique no botão _"Save & Close"_ !!

 ![image](./BuilderImages/BuilderImagesAtualizadas/FormSaveClose.gif)


<h3>⚠️Atenção para não confundir "Save" em vez de "Save & Close"</h3>

![image](./BuilderImages/BuilderImagesAtualizadas/FormName.png)

Repita o processo colocando nome diferente.

Você pode fazer o download da lista de registros em formato de  lista do excel clicando no botão _"Export Excel"_ 
    
e então será enviado no seu email o link para download da lista excel.
Um gif curto para te ajudar:

![image](./BuilderImages/BuilderImagesAtualizadas/FormExportExel.gif)


### Como Executar a Aplicação 💻

Ao chegar na tela do formulário, preencha o “Form Title”(o titulo do formulário) e insira os componentes “Textfield” e “Email”:

![image](./BuilderImages/BuilderImagesAtualizadas/ExecutarAplicação.gif)


Já podemos executar a aplicação, para isso, clique no botão _"SAVE"_ no pé da página e depois clique no botão _"Run"_

![image](./BuilderImages/BuilderImagesAtualizadas/Run.gif)

<br>Irá para a seguinte tela

![image](./BuilderImages/BuilderImagesAtualizadas/FormNew.gif)


Essa é a tela dos registros após eles terem sido inseridos e salvos.⤴️

Para inserir novos registros, clique no botão _"New"_ no topo desta tela

Então irá abrir a seguinte tela:

<img src="https://user-images.githubusercontent.com/81401104/115062670-fd914e80-9ec0-11eb-9c75-7956b6bcefce.png">

Essa é a tela de registrar, onde irá inserir as novas informações dentro do sistema.

Após preencher os campos, clique no botão _"Save & Close".

<img src="https://user-images.githubusercontent.com/81401104/115065052-0c2d3500-9ec4-11eb-8b6b-25e0628429fb.gif">

E você estará de volta na tela dos registros, com o formulário salvo e disponível para visualização.
*Caso queira editar o formulário salvo, clique no ![imagem](./BuilderImages/BuilderImagesAtualizadas/Editar.png)
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
  <td>Quiz</td>
 </tr>
 <tr>
  <td>Email</td>
  <td>Password</td>
  <td>Horizontal Line</td>
 </tr>
</table>

É importante perceber que na seção “Properties of Field”, existem várias seções (“General”, “Behavior”, “Presentation”, “Events”, “Intro”, etc) podendo ter mais ou menos seções, e com mais ou menos itens, dependendo do componente.<br>

O exemplo de “Properties of Field” da imagem abaixo é do componente “Textfield”.

![sq](./BuilderImages/BuilderImagesAtualizadas/Componentes.gif)


É importante saber disso para que facilite o processo de localizar as seções, itens, etc.<br>

Outra situação recorrente é a referenciação dentro do tutorial de um componente para outro tutorial dentro deste documento.<br>

É importante também que já tenha realizado os passos dos tutoriais  “Como Criar Seu Primeiro Projeto, Menu e Formulário” e “Como Executar a Aplicação”.

<div id='id-textfield'/>
 
## Textfield 📓

![image](./BuilderImages/BuilderImagesAtualizadas/Texrfield.png)

O componente “Textfield” serve para escrever textos, principalmente nomes, mas também pode ser utilizado para gravar números de telefone usando a máscara nas propriedades do campo, veremos como fazer isso em breve.

Selecione o componente “Textfield”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no componente que você acabou de soltar).
![image](./BuilderImages/BuilderImagesAtualizadas/Textfield.gif)

🔗Vídeo:https://www.youtube.com/watch?v=ySN4K9JrlwQ&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=11

### Textfield 📓 > GENERAL 🎖️

![image](./BuilderImages/BuilderImagesAtualizadas/General.png)

Nessa aba “Properties of Field”, abaixo de “General”, tem o campo “Name”, este se refere a identificação do campo para a codificação, para possíveis programações posteriores. Geralmente nele você irá repetir o que estará escrito em “Label” que é a identificação do campo para o usuário.

O campo “Column Title” serve para identificar quando for visualizar a lista (para visualizar em formato lista observe o topo da página, selecione “List” ).

O campo “Placeholder” serve como um guia para o que preencher, é interessante que você visualize isso, escreva no campo “Testando”, observe o efeito no campo no formulário.

<img src="https://user-images.githubusercontent.com/81401104/115271003-46404600-a113-11eb-860f-ca5edf37ad4b.png">


### Textfield 📓 > VALUES 1️⃣

![image](./BuilderImages/BuilderImagesAtualizadas/Values.png)



Em “Properties of Field”, abaixo de “Values”, há 4 campos e uma caixa de seleção, que são respectivamente: “Mask”, “Default”, “Minimum Length”, “Maximum Length” e “Enable Barcode Scanner”.

Em “Mask” você pode determinar o padrão específico de preenchimento, ou seja, quantidade e tipo específica de caracteres. Por exemplo, se você quer que o campo aceite números de telefone em um formato específico, você pode preencher esse campo com (00)00000-0000, faça isso agora para testarmos.

Para que fique harmônico, vá em “Name” e “Label” e escreva “Número de Telefone”. Deixe o campo do “Placeholder” em branco.

Execute a aplicação.
![image](./BuilderImages/BuilderImagesAtualizadas/MaskTelefone.png)


Preencha o campo “Número de telefone” com qualquer número, pode ser (45) 98765-4321 
e  então clique no botão ![image63](https://user-images.githubusercontent.com/81401104/126811136-c8402d22-6277-4071-835d-1afcd6c25227.png)


Agora você consegue visualizar seus registros:
![image](./BuilderImages/BuilderImagesAtualizadas/TelefoneSaveTeste.png)
 e o processo é o mesmo de antes para adicionar novos registros.

“Default” se refere a um preenchimento automático de valor. Insira no campo “Default” do “Número de Telefone” com “(45)99887-6655”.

Execute a aplicação.

![image](./BuilderImages/BuilderImagesAtualizadas/TelefoneDefault.png)


Observe que já está preenchido com (45)99887-6655, mas é possível alterá-lo.

“Minimum Length” se refere ao número mínimo de caracteres a ser usado no preenchimento do campo. Por exemplo, selecione e arraste mais um componente “Textfield” para dentro do formulário e então edite apenas essa configuração do “Minimum Length” para o valor de 5.

Execute a aplicação. Ao preencher o campo você perceberá que será necessário no mínimo 5 caracteres para que seja possível salvar o registro

“Maximum Length” se refere ao número máximo de caracteres permitido no preenchimento do campo. Por exemplo, você pode selecionar e arrastar mais um “Textfield” para dentro do formulário e então editar apenas essa configuração do “Maximum Length” para o valor de 10.

Execute a aplicação. Ao preencher o campo você perceberá que será permitido no máximo 10 caracteres para que seja possível salvar o registro.

“Enable Barcode Scanner” se refere a permitir scanner de código de barras. Você pode testar essa configuração ao selecionar a caixa de seleção e então execute a aplicação. Na tela de registro, 
clique no <img src="https://user-images.githubusercontent.com/81401104/115289090-9a095a00-a128-11eb-82ee-a03ac0411da2.png"> e então irá acionar a câmera do dispositivo, e fará a leitura do código de barras.

### Textfield 📓 > BEHAVIOR 🎬
![image](./BuilderImages/BuilderImagesAtualizadas/BehaviorText.png)

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

![image](./BuilderImages/BuilderImagesAtualizadas/Integer.gif)

 no “Properties of Field”, abaixo de “General”, em “Name” e “Label” preencha o campo com “Idade”. 
 
![idade2](./BuilderImages/BuilderImagesAtualizadas/GeneralIdade.png)


Volte a editar as propriedades de  “Idade” abaixo de “Behavior” ,clique no ![image](./BuilderImages/BuilderImagesAtualizadas/+.png)
do “Visibility Rules”,

irá abrir a seguinte janela:

![image13](./BuilderImages/BuilderImagesAtualizadas/VisibilityRules.png)

no “Name” escreva “Regra da Idade”, em “Type” selecione “Integer”, em “Operation” selecione “Greater or Equal”, em “Value” escreva “18”.

Agora clique no botão ![image13](https://user-images.githubusercontent.com/81401104/126811619-a920a2e3-db11-44b0-8eaf-e2fd930e58e1.png)

Agora desmarque a caixa de seleção “Visible”.

![image](./BuilderImages/BuilderImagesAtualizadas/Visible.png)

Então clique na lista suspensiva do “Visibility Rules” (do campo “Idade”) e selecione “Regra da Idade”:

![image](./BuilderImages/BuilderImagesAtualizadas/RegraIdade.png)

 e então aparecerá mais uma lista embaixo, clique e selecione “Idade”.
(imagem na próxima página)
![image](/BuilderImages/BuilderImagesAtualizadas/visibilityRulesNew.png)


Agora execute a aplicação ![image](./BuilderImages/BuilderImagesAtualizadas/Run.gif).

Automaticamente se abrirá uma nova página no seu navegador (tela dos registros), clique no botão ![image](https://user-images.githubusercontent.com/81401104/115290892-7810d700-a12a-11eb-8693-bb6fb8a2f6a0.png)

![image](https://user-images.githubusercontent.com/81401104/115290923-8101a880-a12a-11eb-83b8-c57244d444a9.png)

Preencha o campo “Idade” com “18” e observe que o campo “Número de Telefone” surge para ser preenchido.

e se preencher o campo “Idade” com “17”, o campo “Número de Telefone” não irá aparecer.

Você pode aplicar essas regras da mesma forma para a obrigatoriedade e desativação.

### Textfield 📓 > OTHERS 📝
![image](./BuilderImages/BuilderImagesAtualizadas/Others.png)

Aqui na seção “Others” você encontrará essa lista do “Feed Data”, que serve para preencher o campo com dados fictícios para validá-lo.

Com o campo “Número de Telefone” ou “Nome Completo” você pode preenchê-lo com a opção “Phone” ou “People” respectivamente.

Agora execute a aplicação.

Automaticamente se abrirá uma nova página no seu navegador, e você verá registro de números de telefones/nomes fictícios na tela (próxima página), que verificará o campo como válido.
![image](https://user-images.githubusercontent.com/81401104/115293603-ec00ae80-a12d-11eb-9cd5-6b381b83ff9c.png)


### Textfield 📓 > PRESENTATION 📊
![image](./BuilderImages/BuilderImagesAtualizadas/Presentation.png)


Nessa seção você consegue editar quanto de espaço o campo irá ocupar nas telas de desktops, tablets, mobiles horizontais e mobiles verticais respectivamente. O espaço ocupado pode variar de 8% até 100%.

Clique no campo “Número de Telefone”  criado antes.
![image](https://user-images.githubusercontent.com/81401104/115293785-1f433d80-a12e-11eb-8835-39fa7699f32a.png)


Se você está usando desktop, clique na primeira lista suspensiva e então escolha a opção col-lg-12:100% e observe como ficou no formulário.

![image](https://user-images.githubusercontent.com/81401104/115293817-2702e200-a12e-11eb-871a-709b8a766f4b.png)

Execute a aplicação.

Você pode voltar na tela de edição do formulário e testar com as outras medidas para visualizar como ficam.

No item “CSS Class”  você pode informar a classe de css customizada para o componente.

### Textfield 📓 > EVENTS 🎞️
![image](./BuilderImages/BuilderImagesAtualizadas/Events.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “Events” dos componente “Decimal” e “Button”.

### Textfield 📓 > INTRO ℹ️ 

![image](./BuilderImages/BuilderImagesAtualizadas/Intro.png)

A seção “Intro” serve como uma introdução instrutiva, para explicar sobre o preenchimento dos campos ou o que você achar importante.

É importante saber que essa funcionalidade só irá funcionar na primeira vez, se quiser testá-lo novamente será preciso criar um novo formulário.

Vamos testar isso agora, selecione e solte dois componentes “Textfield” dentro do formulário. 
![image](./BuilderImages/BuilderImagesAtualizadas/IntroText.png)

No primeiro “Textfield”, em “Position” selecione “Top”, em “Order” digite “1”, em “Message” escreva “Primeiro esse” (imagem na próxima página).

![image](./BuilderImages/BuilderImagesAtualizadas/IntroMessage.gif)

Agora execute a aplicação.
Clique no botão ![image](https://user-images.githubusercontent.com/81401104/115294470-05562a80-a12f-11eb-9dd2-e6adb2664492.png).

Então irá aparecer o efeito do intro na seguinte página:
![image](https://user-images.githubusercontent.com/81401104/115294508-1010bf80-a12f-11eb-8f4e-54cf9a4d30a9.png)

Essa visualização de destaque do campo com a mensagem ao lado (ou embaixo, etc), é efeito das configurações na seção “Intro”.

Você pode continuar adicionando novos campos e alternando as ordens e as mensagens, mas lembre-se que só funciona da primeira vez, então para testar denovo é necessário criar um novo formulário.

<div id='id-textarea'/>

## TextArea 📄
![image](./BuilderImages/BuilderImagesAtualizadas/TextareaLogo.png)

Com o componente  “Textarea” você consegue adicionar valores do tipo letras e números, com uma área maior que uma linha.

Selecione o componente “Textarea”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada

“Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/BuilderImagesAtualizadas/textarea.gif)

Execute a aplicação

E na tela de registrar, no campo do “Textarea” você pode adicionar valores do tipo letras e números, com 2 linhas ou mais (pode-se adicionar mais linhas na seção “Presentation”, em “Rows”)

![image](./BuilderImages/BuilderImagesAtualizadas/TextareaOla.png)

Após salvar:

![image](./BuilderImages/BuilderImagesAtualizadas/RunOla.png)

🔗Vídeo: https://www.youtube.com/watch?v=5M0pQUNpSHc&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=12

### TextArea 📄 > PRESENTATION 📊

![image](./BuilderImages/BuilderImagesAtualizadas/TextareaPresentation.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “Presentation” do componente “Textfield”.

O item “Rows” se refere a quantas linhas você quer para o seu componente “Textarea”. Por exemplo, se colocar “4”, perceberá que o componente aumentou para 4 linhas.

<div id='id-Editor'/>

## Editor 🎬
![image](./BuilderImages/BuilderImagesAtualizadas/Editor.png)

É um componente que permite o usuário inserir texto com a formatação desejada.

Selecione o componente “Editor”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/BuilderImagesAtualizadas/Editor.gif)

Execute a aplicação:
![image](./BuilderImages/BuilderImagesAtualizadas/EditorExecução%20.png)

E aqui você pode editar o texto com a formatação que quiser (sublinhado, negrito, entre outros), pode adicionar links, emojis e várias outras coisas.

Após adicionar as informações que quiser, clique no botão ![image](https://user-images.githubusercontent.com/81401104/115909993-a8b28280-a442-11eb-90a0-60ada9302880.png).

E irá aparecer da seguinte forma:

![image](./BuilderImages//BuilderImagesAtualizadas/EditorForm.png)

Para editar o registro adicionado, clique no botão ![image](https://user-images.githubusercontent.com/81401104/115912062-3e4f1180-a445-11eb-9f37-620b54b1690f.png)
 (embaixo de “Control”).
 
🔗Vídeo: https://www.youtube.com/watch?v=cfZNgUaZ1vc
<div id='id-Hidden'/>

## Hidden 🙈
![image](./BuilderImages/BuilderImagesAtualizadas/Hidden.png)

Com este componente você pode calcular valores que são ocultos ao usuário final, e enviar para salvar no banco de dados e consultar posteriormente em relatórios.

Selecione o componente “Hidden”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

Para aprender como usar o componente “Hidden”, acesse o tutorial do componente “Signature”.

### Hidden 🙈 > DATA TYPE 🗃️
![image](/BuilderImages/BuilderImagesAtualizadas/hiddenDataType.png)

Em Type você pode selecionar uma das 5 opções possíveis:
<ol>
 <li>String (para campos de texto)</li>
 <li>Integer (para números inteiros)</li>
 <li>Decimal (para números decimais)</li>
 <li>DateTime (para data e hora)</li>
 <li>Boolean (para verdadeiro ou falso)</li>
 <li>Guid ( é um código único)</li>
</ol>
<br>
Default Value: Valor padrão (o valor será preenchido automaticamente, mas sendo possível alterar caso necessário).

<div id='id-Integer'/>

## Integer 🔢
![image](./BuilderImages/BuilderImagesAtualizadas/Integer.png)
<br>
É um componente utilizado para quando se necessita digitar números inteiros para uma aplicação.

Selecione o componente “Integer”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](./BuilderImages/BuilderImagesAtualizadas/Integer.gif)

Execute a aplicação.

![image](./BuilderImages/BuilderImagesAtualizadas/IntegerRun.png)

Perceba que só é possível  inserção de números dentro do campo.

Após salvar, estará disposto da seguinte forma na tela dos registros:
![image](./BuilderImages/BuilderImagesAtualizadas/IntegerSave.png)

🔗Vídeo: https://www.youtube.com/watch?v=hP0mfTJ18Qs&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=14

### Integer 🔢 > VALUES 1️⃣
![image](./BuilderImages/BuilderImagesAtualizadas/ValuesInteger.png)

Em  “Values”, existem 3 campos e uma caixa de seleção, que são respectivamente: Default, Minimum Value, Maximum Value e Auto Increment.

Default: se refere a um preenchimento automático de valor, por exemplo, insira no campo “Default” o valor “10”.

Execute a aplicação:
![image](./BuilderImages/BuilderImagesAtualizadas/IntegerValues.gif)

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/115915188-5fb1fc80-a449-11eb-89e1-57eae620af5d.png). 

Observe que já está preenchido com “10”, mas é possível alterá-lo.

Minimum Value: se refere ao valor mínimo do número a ser usado no preenchimento do campo. Para testar, preencha esse campo com “5”.

Execute a aplicação.

Preencha o campo com “4” e depois com “5” e observe que o valor mínimo a ser inserido é “5”  para ser possível salvar as informações inseridas no campo.

Maximum Value: se refere ao valor máximo do número a ser usado no preenchimento do campo. Para testar, preencha esse campo com “15”.

Execute a aplicação. 

Preencha o campo com “15” e depois com “16” e observe que o valor máximo permitido é “15”  para ser possível salvar as informações inseridas no campo.

Auto Increment: Irá iniciar com o valor 1 e depois continuar com a sequência (2,3,4…) de forma automática. Se tiver um valor inicial definido, por exemplo, “34”, irá continuar a partir dele (35,36,37…), igual nas imagens de exemplo a seguir:
![image](./BuilderImages/BuilderImagesAtualizadas/AutoIncrement.gif)

<div id='id-Decimal'/>

## Decimal 💲
![image](./BuilderImages/BuilderImagesAtualizadas/Decimal.png)

É um componente usado para digitar números decimais para uma aplicação.

Selecione o componente “Decimal”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/BuilderImagesAtualizadas/Decimal.gif)

Execute a aplicação.

![image](./BuilderImages/BuilderImagesAtualizadas/DecimalRun.png)

Perceba que na tela de registrar a estrutura padrão é de número decimal.

Após adicionado e salvo, estará disposto da seguinte forma na tela dos registros:

![image](./BuilderImages/BuilderImagesAtualizadas/DecimalForm.png)

🔗Vídeo: https://www.youtube.com/watch?v=IS_NL5Txe7A&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=15

### Decimal 💲 > VALUES 1️⃣
![image](./BuilderImages/BuilderImagesAtualizadas/DecimalValues.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “Values” do componente “Integer”.

Scale: Se refere a quantidade de algarismos após o ponto ou vírgula, por exemplo, adicione o valor “5” no campo do “Scale”. Ao executar a aplicação, ficará parecido com a seguinte imagem:

![image](./BuilderImages/BuilderImagesAtualizadas/DecimalScale.png)

Perceba que há cinco algarismos após o ponto.

### Decimal 💲 > EVENTS ⚙️

![image](./BuilderImages/BuilderImagesAtualizadas/Events.png)

Para testar a seção “Events” vamos apagar os campos criados anteriormente com o componente “Decimal” e deixar vazio o formulário.

Agora, selecione e arraste 3 componentes “Decimal”, um do lado do outro.
Nomeie o primeiro de “Number1”, o segundo de “Number2” e o terceiro de “Total” (Igual na imagem abaixo)
![image](./BuilderImages/BuilderImagesAtualizadas/DecimalEventsComponentes.png)

Iremos realizar a seguinte função: ao preencher o valor do “Number1” e do “Number2” automaticamente será dado o resultado da soma desses dois campos no “Total” 

Clique no botão ![add your script here](/BuilderImages/BuilderImagesAtualizadas/AddScript.png)(se localiza na seção “Events”) do campo “Total”  e automaticamente abrirá essa aba:

![image](./BuilderImages/BuilderImagesAtualizadas/addScrptPromp.png)

Nesse campo do “Custom Scripts” copie e cole o seguinte:

                                                    function soma() {
                                    this.entity.Total = this.entity.Number1 + this.entity.Number2;
                                    }

Agora volte para o “Form Design”  do lado de “Dev Properties”, no topo da página. 
(Imagem abaixo)
![image](./BuilderImages/BuilderImagesAtualizadas/Designer.png)

Clique no campo “Number1”, vá na seção “Events”, em “Name” selecione a opção “onkeyup” e em “On” escreva “soma()” e então clique no botão 
![image](https://user-images.githubusercontent.com/81401104/115918481-f2549a80-a44d-11eb-88f0-43c93d31576e.png).

![image](./BuilderImages/BuilderImagesAtualizadas/EventsDecimalInfomaç.png)

Após clicar no botão, ficará assim:

![image](./BuilderImages/BuilderImagesAtualizadas/EventsDecimal+.png)

Faça a mesma coisa com o campo “Number2”.

Execute a aplicação.
![image](./BuilderImages/BuilderImagesAtualizadas/FormDecimalEvents.png)

Então clique no botão ![image](https://user-images.githubusercontent.com/81401104/115918700-3778cc80-a44e-11eb-9a07-4f211134ff73.png).

Abrirá a seguinte página:
![image](https://user-images.githubusercontent.com/81401104/115919016-a524f880-a44e-11eb-8654-73047c48392f.png)

No “Number1” insira o valor “2.55”, e no “Number2” insira o valor “1.32” e automaticamente irá aparecer o valor “3.87” no campo “Total”. Você pode testar com outros valores se quiser.

Após adicionar os valores, clique no botão ![image](https://user-images.githubusercontent.com/81401104/115919054-b3731480-a44e-11eb-9cd3-02fef99ed26b.png)
.

<div id='id-ProgressBar'/>

## ProgressBar 📶

![image](./BuilderImages/IconeProgressbar.png)

O componente "Progress Bar" cria uma barra de progresso com um valor definido previamente.

Selecione o componente, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/gifProgressbar.gif)

## ProgressBar 📶 > VALUES

Em "Default Value", insira o valor de progresso da barra.

![image](./BuilderImages/ValuesProgressbar.png)

## ProgressBar 📶 > OTHERS

Em "Unit", defina a unidade de medida do progresso. O uso mais comum é o da porcentagem (%).

![image](./BuilderImages/othersProgressbar.png)

Execute a aplicação.

Ao criar um novo registro, o componente estará disposto dessa maneira:

![image](./BuilderImages/RunProgressbar.png)

<div id='id-Gantt'/>

## Gantt 📊📅

![image](./BuilderImages/iconeGantt.png)

Com o componente "Gantt" é possível acompanhar o progresso de tarefas através do tempo.

⚠️ Para o funcionamento desse componente, será necessário criar dois forms extras: Projetos e Tarefas.

No form "Projetos", registre o nome dos projetos em um Textfield.

![image](./BuilderImages/telatodaprojetosGantt.png)

No form "Tarefas", registre as seguintes informações:

- Projeto (DropdownDB);
- Tarefa (Textfield);
- Tarefa principal (DropdownDB);
- Data de início planejada (Date);
- Data de término planejada (Date);
- Data de início real (Date);
- Data de término real (Date);
- Progresso da tarefa (Integer).

![image](./BuilderImages/telatodatarefasGantt.png)

💡O DropdownDB de Projeto deve referenciar o textfield do Form "Projetos".

💡O DropdownDB Tarefa Principal deve referenciar o campo Tarefa desse form "Tarefas".

🚨As labels dos componentes podem variar, porém TODOS eles são INDISPENSÁVEIS para o funcionamento do componente "Gantt".

Segue exemplo de registros de Projetos e Tarefas, respectivamente.

![image](./BuilderImages/gridprojetosGantt.png)

![image](./BuilderImages/gridtarefasGantt.png)

Agora crie uma page e insira o componente "Gantt", arrastando-o e soltando-o onde está escrito “Drop new field here!”.

![image](./BuilderImages/arrastarcampoGantt.gif)

### Gantt 📊📅 > SOURCE 🔌

![image](./BuilderImages/sourceGantt.png)

Em "DataSource", clique no botão ![image](./BuilderImages/plusDatasource.png) para criar um novo DataSource.

Insira um título, selecione o form "Tarefas" e marque todos os campos desse form.

![image](./BuilderImages/datasourcegifGantt.gif)

Clique em ![image](./BuilderImages/saveclouse.png).

Agora selecione o DataSource criado.

![image](./BuilderImages/datasourceselecionarGantt.gif)

Em "Id (Primary Key)", selecione a chave primária do form "Tarefas".

![image](./BuilderImages/idprimarykeyGantt.png)

Em "Parent", selecione o campo "Tarefa principal".

![image](./BuilderImages/parentGantt.png)

Em "Name", selecione o campo "Tarefa".

![image](./BuilderImages/nameGantt.png)

Em "Progress", selecione o campo "Progresso da tarefa".

![image](./BuilderImages/progressGantt.png)

Em "Start Date Planned", selecione o campo "Data de início planejada".

![image](./BuilderImages/startdateplannedGantt.png)

Em "End Date Planned", selecione o campo "Data de término planejada".

![image](./BuilderImages/enddateplannedGantt.png)

Em "Start Date", selecione o campo "Data de início real".

![image](./BuilderImages/startdateGantt.png)

Em "End Date", selecione o campo "Data de término real".

![image](./BuilderImages/enddateGantt.png)

Aumente a apresentação do componente para 100%.

![image](./BuilderImages/presentationGantt.png)

Execute a aplicação e teste a funcionalidade.

![image](./BuilderImages/runGantt.png)

<div id='id-Date'/>

🔗Vídeo: https://www.youtube.com/watch?v=GfUIl304zrs

## Date 📆 
![image](./BuilderImages/BuilderImagesAtualizadas/Date.png)

Com o componente “Date” é possível adicionar uma data, data atual, uma data pré-definida ou uma outra data qualquer preenchida pelo usuário.

Selecione o componente “Date”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](./BuilderImages/BuilderImagesAtualizadas/DateDrop.gif)

Execute a aplicação

Na tela de registrar, o campo estará disposto da seguinte maneira:
![image](./BuilderImages/BuilderImagesAtualizadas/DateRun.png)

Perceba que o formato é de mês/dia/ano. Então é só selecionar a data e depois salvar:
![image](./BuilderImages/BuilderImagesAtualizadas/DateForm.png)

🔗Vídeo: https://www.youtube.com/watch?v=ZINKzaGHI-w&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=16

### Date 📆 > VALUES 1️⃣
![image](./BuilderImages/BuilderImagesAtualizadas/DateValues.png)

Default (Padrão): O campo será preenchido com uma data pré-determinada, mas é possível alterar, se necessário.

Por padrão o formato está “mm/dd/yyyy” que significa “mês/dia/ano”. 

Current Date (Data atual). Ao selecionar essa caixa, o campo “Date” sempre estará preenchendo automaticamente com a data atual.

<div id='id-DateTime'/>

## DateTime 📆⏲️ 
![image](./BuilderImages/BuilderImagesAtualizadas/DateTime.png)

Com este componente você pode adicionar uma data e horário atual, data e horário pré definido ou uma outra data e horário qualquer preenchida pelo usuário

Selecione o componente “DateTime”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](./BuilderImages/BuilderImagesAtualizadas/DateTime.gif)

Execute a aplicação.

![image](./BuilderImages/BuilderImagesAtualizadas/DateTimeNew.png)

Perceba que a data está no formato mês/dia/ano e o horário está no formato AM/PM.
![image](./BuilderImages/BuilderImagesAtualizadas/DateTimeNewInform.png)

Após salvar, estará disposto da seguinte forma na tela dos registros:
![image](./BuilderImages/BuilderImagesAtualizadas/DateTimeForm.png)

🔗Vídeo: https://www.youtube.com/watch?v=Qw93cdchp-c&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=17

### DateTime 📆⏲️ > VALUES 1️⃣
![image](./BuilderImages/BuilderImagesAtualizadas/DateTimeValues.png)

Default (Padrão): O campo será preenchido com uma data e horário pré-determinado, mas é possível alterar, se necessário.

Por padrão o formato está “mm/dd/yyyy” que significa “mês/dia/ano”. 

  “ --:-- --” é o formato padrão de horário da américa do norte, por exemplo, 04:45 AM ou 9:03 PM que no sistema brasileiro seriam 04:45 e 21:03 respectivamente.

Current Date/Time (Data e horário atual): Ao selecionar essa caixa, o campo “DateTime” sempre estará preenchendo automaticamente com a data e horário atual.

<div id='id-Time'/>

## Time ⌛ 
![image](./BuilderImages/BuilderImagesAtualizadas/Time.png)

Com este componente você pode adicionar um horário atual, horário pré definido ou um outro horário qualquer preenchida pelo usuário.

Selecione o componente “Time”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/BuilderImagesAtualizadas/Time.gif)

Execute a aplicação.

O componente estará disposto da seguinte maneira na tela de registrar:
![image](./BuilderImages/BuilderImagesAtualizadas/TimeNew.png)

Perceba que está no formato “--:-- --”, isso quer dizer que o horário é em AM/PM (AM para antes do meio dia e PM para depois do meio dia). 

Após salvar o horário, a tela dos registros estará disposta da seguinte maneira:
![image](./BuilderImages/BuilderImagesAtualizadas/TimeForm.png)

Vídeo: https://www.youtube.com/watch?v=9kFXdYT4GAY&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=18

### Time ⌛ > VALUES 1️⃣
![image](./BuilderImages/BuilderImagesAtualizadas/TimeValues.png)

Default (Padrão): O campo será preenchido com uma horário pré-determinado, mas é possível alterar, se necessário.

<div id='id-CheckBox'/>

## CheckBox ✅
![image](./BuilderImages/BuilderImagesAtualizadas/Checkbok.png)

O componente  “Checkbox” é uma caixa de seleção que permite o usuário a fazer uma escolha binária, ou seja, uma escolha entre duas opções mutuamente exclusivas..

Selecione o componente “Checkbox”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/BuilderImagesAtualizadas/Checkbox.gif)

Escreva “Obrigatório” nos campos “Name” e “Label” que se encontram na seção “General” do ”Properties of Field” do checkbox.     
 ![image](./BuilderImages/BuilderImagesAtualizadas/CheckboxGeneral.png)

Agora execute a aplicação.
Na tela de registrar você consegue visualizar o componente:

![image](./BuilderImages/BuilderImagesAtualizadas/CheckboxNew.gif)

Após salvá-los, estará dispostos da seguinte forma na tela de registros:

![image](./BuilderImages/BuilderImagesAtualizadas/CheckboxForm.png)

### CheckBox ✅ > VALUES 1️⃣
![image](./BuilderImages/BuilderImagesAtualizadas/CheckboxValues.png)

A caixa de seleção “Default Value” se refere ao campo já estar marcado ou não na hora de realizar os registros.

🔗Vídeo: https://www.youtube.com/watch?v=BSVBdBxE4sA&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=19

<div id='id-ChecklistDB'/>

## ChecklistDB 📁
![image](./BuilderImages/BuilderImagesAtualizadas/CheckListDB.png)

Este componente cria uma lista de controle que será conectada a um DataSource. Os registros podem ser inseridos pelo usuário final.

Selecione o componente “ChecklistDB”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/BuilderImagesAtualizadas/CheckListDB.gif)

Para visualizar a utilização desse componente, desça até a seção “Source” deste tutorial.

*** Entre em contato com o suporte da easy comtec para utilizar esse componente ****

### ChecklistDB 📁 > PRESENTATION 📊

![image](./BuilderImages/BuilderImagesAtualizadas/CheckListDBPresen.png)

Para poder visualizar as diferenças de apresentação, é obrigatório que já tenha adicionado valores na seção “Values”.

Para saber mais sobre como usar essa funcionalidade, vá até a seção “Presentation” do componente “Textfield”.

Em “Style” você tem três opções que pode selecionar: “Fixed”, “Fluid” ou “Vertical”. Selecione cada opção e perceba a diferença na disposição visual dos itens.

### ChecklistDB 📁 > SOURCE 🔌

![image](./BuilderImages/BuilderImagesAtualizadas/CheckListDBSource1.png)

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
![image](./BuilderImages/BuilderImagesAtualizadas/Radio.png)

Com o componente “Radio” você pode fornecer uma lista de opções mas selecionar apenas uma opção como verdadeira.

Selecione o componente “Radio”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/BuilderImagesAtualizadas/Radio.gif)

Para utilizar 
desça até a seção “Values” desse tutorial para aprender como usar esse componente.

Vídeo: https://www.youtube.com/watch?v=RPHA64EMDEE&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=20

### Radio 🔘 > VALUES 1️⃣
![image](./BuilderImages/BuilderImagesAtualizadas/RadioValues.png)

Aqui você irá adicionar os valores, por exemplo, criar listas com as opções para selecionar, lembrando que apenas uma opção poderá ser selecionada com esse componente.

Agora clique no botão ![image](./BuilderImages/BuilderImagesAtualizadas/+.png)
, automaticamente abrirá a janela modal “Enumerations” (imagem na próxima página), em “Name” escreva “Gênero”, em “Type” mantenha a opção “String”, em "MaxLenght" mantenha a opção "0".

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/115923580-d30d3b80-a454-11eb-8fd6-3a7feb9d307d.png)
 e adicione “Masculino”, denovo clique ![image](https://user-images.githubusercontent.com/81401104/115923596-d99bb300-a454-11eb-89e1-866c67f5326a.png)
e adicione a opção  “Feminino” e então clique no botão ![image13](https://user-images.githubusercontent.com/81401104/126812104-48efecf4-105b-42d9-8682-ae7d8d2d7fdc.png)
 . (Imagem na próxima página)

 ![image](./BuilderImages/BuilderImagesAtualizadas/RadioValues.gif)

Três coisas importantes de saber sobre a janela “Enumerations”:
Em “Type” você tem duas opções que pode selecionar: “String” ou “Integer”. “String” se refere a palavras, “Integer” se refere a números.
“Max Length” se refere a quantidade máxima de caracteres que cada opção terá.    
E na opção ![image](./BuilderImages/BuilderImagesAtualizadas/RadioAlert.png) podemos adicionar um alerta quando selecionamos a opção.

![image](./BuilderImages/BuilderImagesAtualizadas/RadioEnumerations.png)

Ainda na seção “Values”,  tem o item “Default”, clicando nele irá aparecer as opções “Masculino” e “Feminino”, isso quer dizer que se você selecionar um desses dois agora, na hora de preencher o formulário um deles já estará selecionado, mas ainda será possível mudar caso queira. 

Execute a aplicação.

O componente será visto da seguinte maneira na tela de registrar:
![image](./BuilderImages/BuilderImagesAtualizadas/RadioNew.png)

<div id='id-Dropdown'/>

## Dropdown 🗄️
![image](./BuilderImages/BuilderImagesAtualizadas/Dropdown.png)

O componente “Dropdown” serve para você fornecer uma lista de opções em formato de menu.

Selecione o componente “Dropdown”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/BuilderImagesAtualizadas/Dropdown.gif)

Na seção “Values” do “Properties of Field”, clique no botão ![image](./BuilderImages/BuilderImagesAtualizadas/+.png)
, irá aparecer a seguinte janela modal:

![image](./BuilderImages/BuilderImagesAtualizadas/DropdownEnumerations.png)

Em “Name” escreva veículo, então clique no ![image](https://user-images.githubusercontent.com/81401104/116136117-4a86d900-a6a8-11eb-994e-083b8e5dba93.png)
. Irá a aparecer o seguinte embaixo do botão:

![image](./BuilderImages/BuilderImagesAtualizadas/DropdownAddoptions.png)

Edite o “Option A” para “Carro”. Adicione mais duas opções e altere-as para “Moto” e “Caminhão”. 
![image](./BuilderImages/BuilderImagesAtualizadas/DropdownAddVeiculos.png)

Clique no botão![image](https://user-images.githubusercontent.com/81401104/116136235-6db18880-a6a8-11eb-883f-89dd8444852f.png)
 , e após salvo, voltará automaticamente para a tela de design do formulário. 

Execute a aplicação.

Na tela de registrar, o “Dropdown” funcionará da seguinte forma:

![image](./BuilderImages/BuilderImagesAtualizadas/DropdownNew.png)

🔗Vídeo: https://www.youtube.com/watch?v=QsfoAgq2EIs&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=21

### Dropdown 🗄️ > VALUES 1️⃣
![image](./BuilderImages/BuilderImagesAtualizadas/RadioValues.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “Values” do componente “Radio”.

<div id='id-DropdownDB'/>

## DropdownDB 📥
![image](./BuilderImages/BuilderImagesAtualizadas/DropdownDB.png)

O componente “DropdownDB” serve para você fornecer uma lista de opções em formato de menu a partir de um DataSource. O usuário final consegue inserir dados nessa lista.

 (Obs: A única diferença entre o “AutoComplete” e o “DropdownDB” é que o “AutoComplete” aparece quando é pesquisado e o “DropdownDB” aparece numa lista)

Selecione o componente “DropdownDB”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/BuilderImagesAtualizadas/DropdownDB.gif)

Para aprender como usar esse componente, desça até a seção “Source” deste tutorial.

### DropdownDB 📥 > SOURCE 🔌

![image](./BuilderImages/BuilderImagesAtualizadas/DropdownDBSource.png)

Nessa seção “Source” serão trazidos o conjunto de valores inseridos em outro campo, que pode ser de outro ou do mesmo formulário, desde que seja sob o mesmo projeto.

Então, vamos começar criando mais um formulário (igual demonstrado no tutorial “Como Criar Seu Primeiro Projeto, Menu e Formulário”).

E nesse novo formulário vamos adicionar o componente “Textfield” chamado "Cor" para dentro dele.

![image](./BuilderImages/BuilderImagesAtualizadas/TextfieldCor.png)

Na seção “General”,Nomeie os campos “Name” e “Label”, de “Cor”.
  
![image](./BuilderImages/BuilderImagesAtualizadas/TextfieldGeneralCores.png)

Agora execute a aplicação.       
Irá abrir a seguinte página:

![image](./BuilderImages/BuilderImagesAtualizadas/CoresNew.png)

No campo “Cor” escreva “Vermelho”, clique no botão ![image](https://user-images.githubusercontent.com/81401104/116137555-14e2ef80-a6aa-11eb-8ad0-c16e743bb352.png)
.. 
![image](./BuilderImages/BuilderImagesAtualizadas/CoresFormVermelho.png)

Repita o processo para adicionar as cores “Verde”, “Amarelo” e “Azul.
![image](./BuilderImages/BuilderImagesAtualizadas/CoresForm.png)

Agora vamos voltar para o outro formulário com o componente “DropdownDB”.
![image](./BuilderImages/BuilderImagesAtualizadas/DropdownDBSource.gif)

E então em “Properties of Field”, desça até “Source” e em “Class” selecione o formulário que foi criado o campo “Cor” e em “Description Field” selecione o campo “Cor”.

Execute a aplicação.
![image](./BuilderImages/BuilderImagesAtualizadas/DropdownDBrun.png)

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/116137809-68553d80-a6aa-11eb-9117-ccec127c6faf.png) e irá abrir a seguinte página:
![image](./BuilderImages/BuilderImagesAtualizadas/dropdownn)

Selecione o campo do DropDownDB:       
![image](./BuilderImages/BuilderImagesAtualizadas/DropdownDBOpç.gif.png)

E você irá visualizar os valores adicionados no campo “Cor” do outro formulário. Selecione uma opção e então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116137914-8cb11a00-a6aa-11eb-9c8e-be336ebe2ba2.png)
![image](./BuilderImages/BuilderImagesAtualizadas/DropdownDBform.png)
:
 Você pode realizar o mesmo processo com ambos os campos no mesmo formulário.
Ainda na seção “Source”, em “Additional Data” você pode adicionar outro conjunto de valores de um campo desde que seja do mesmo formulário selecionado no “Class”.

<div id='id-AutoComplete'/>

## AutoComplete 🗄️🧲
![image](./BuilderImages/BuilderImagesAtualizadas/AutoComplete.png)

O componente “AutoComplete” serve para fornecer auto-completar a inserção do item a partir de um DataSource. O usuário final consegue inserir dados nessa lista.

A única diferença entre o “AutoComplete” e o “DropdownDB” é que o “AutoComplete” aparece quando é pesquisado e o “DropdownDB” aparece numa lista.

Ou seja, sabendo utilizar o “DropdownDB” você também saberá utilizar o componente “Autocomplete”

Selecione o componente “Dropdown”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/BuilderImagesAtualizadas/AutoComplete.gif)

Na seção “Source”, em “Class”  do “Autocomplete” selecione a opção “Cor” e em “Description Field” também selecione “Cor” 

(O formulário “Cor” e campo “Cor” com os registros de “Vermelho”,”Verde”, “Azul” e “Amarelo” foram criados durante o tutorial do componente “DropdownDB”).

Agora execute a aplicação.

Na tela de registrar, perceberá que ao escrever as letras iniciais, irá aparecer as opções disponíveis:
![image](./BuilderImages/BuilderImagesAtualizadas/AutoCompleteNew.gif)

E então é só selecionar a opção desejada e prosseguir.

🔗Vídeo: https://www.youtube.com/watch?v=l0tQAqhDfVk&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=24

### AutoComplete 🗄️🧲 > FILTER 📮
![image](./BuilderImages/BuilderImagesAtualizadas/AutoCompleteFilter.png)

Filter Name: Filtrar nome.

Filter Value: Filtrar valor.

### AutoComplete 🗄️🧲 >  SOURCE 🗂️

![image](./BuilderImages/BuilderImagesAtualizadas/AutoCompleteSource.png)

Class (classe, nome do formulário ou datasource)
Description Field (Campo de descrição)

Allow add and edit (Permitir adicionar e editar)

Enable barcode scanner (Habilitar scanner de código de barras)

Additional Data (Dados adicionais)

Source From (Fonte de)

To (Para)

<div id='id-Label'/>

## Label 🔤
![image](./BuilderImages/BuilderImagesAtualizadas/Label.png)

Com este componente você pode apresentar valores do tipo letras e números, estes valores não serão gravados no banco de dados.

Selecione o componente “Label”, então arraste-o e solte-o onde está escrito “Drop new field here!”.

![image](./BuilderImages/BuilderImagesAtualizadas/Label.gif)

 No campo do “Label”, da seção “General” do “Properties of Field”, clique no botão ![image](https://user-images.githubusercontent.com/81401104/116139313-43fa6080-a6ac-11eb-8ec1-44a4518a202e.png)
 para fazer a importação de um documento de texto do seu computador.
 
![image](./BuilderImages/BuilderImagesAtualizadas/LabelSelect.png)

* O documento de texto tem que ser formato “.txt”.

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/116139413-5e343e80-a6ac-11eb-9ba4-4cd4a1a80ee2.png)
 para fazer o upload do documento.

Para esse tutorial eu criei o seguinte documento:
![image](https://user-images.githubusercontent.com/81401104/116139490-6f7d4b00-a6ac-11eb-9a93-cd86fed9bac8.png)

Perceba que cada item está em uma linha, isso tornará possível criar as opções.
![image](https://user-images.githubusercontent.com/81401104/116139529-7c9a3a00-a6ac-11eb-8b4b-5c178f2b33dd.png)

Selecione a primeira opção, e clique no botão ![image](https://user-images.githubusercontent.com/81401104/116139572-8ae85600-a6ac-11eb-80b8-18d902d1c193.png)

Execute a aplicação.
![image](./BuilderImages/BuilderImagesAtualizadas/LabelNew.png)

E após salvar, não será salvo no banco de dados, pois esse texto é apenas para orientação dentro do formulário.
![image](./BuilderImages/BuilderImagesAtualizadas/LabelForm.png)

🔗Vídeo: https://www.youtube.com/watch?v=SM_LHGXmJm0&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=25

<div id='id-Wizard'/>

## Wizard 🛤️

![image](./BuilderImages/iconeWizard.png)

O componente "Wizard" cria um fluxo de etapas e orienta o usuário através de uma fácil navegação, com os botões "Back" e "Next".

Selecione o componente “Wizard”, arrastando-o e soltando-o onde está escrito “Drop new field here!”.

![image](./BuilderImages/arrastaarcampoWizard.gif)

Clique em "Step 0" e renomeie sua label.

![image](./BuilderImages/identificacaoWizard.gif)

Para adicionar componentes a etapa, há um espaço “Drop new field here!” dentro do componente "Wizard".

![image](./BuilderImages/arrastarcamposparadentroWizard.gif)

Para criar uma nova etapa, clique em "New Step +".

![image](./BuilderImages/newstepWizard.gif)

Note que agora o botão "Back" está disponível, possibilitando o retorno à etapa anterior.

![image](./BuilderImages/backsetaWizard.png)

Crie uma nova etapa e retorne ao "Step 1".

![image](./BuilderImages/voltandostep2Wizard.gif)

Note que agora está disponível também o botão "Next", possibilitando o retorno e o avanço entre as etapas.

![image](./BuilderImages/backnextWizard.png)

Para excluir uma etapa, clique em "Delete".

![image](./BuilderImages/deleteWizard.gif)

Execute a aplicação e teste a funcionalidade.

![image](./BuilderImages/runWizard.gif)

<div id='id-Box'/>

## Box 📦
![image](./BuilderImages/BuilderImagesAtualizadas/Box.png)

Com este componente você pode criar seções dentro do formulário, para organizar os componentes que estarão dentro dele e realizar funcionalidades conjuntas (das regras de visibilidade, por exemplo).

Isso permitirá economizar tempo na hora de editar as seções do “Properties of Field”, por exemplo, criando regra de visualização para todo o conjunto de componentes dentro do groupbox.

Selecione o componente “Box”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

Ira aparecer varias opções de layout, bastas selecionar a que melhor se encaixa para você.

![image](./BuilderImages/BuilderImagesAtualizadas/box.gif)

Agora arraste um componente “Textfield” e um “Integer” para dentro do “Groupbox” no campo aonde está escrito "Drop new field here!" e nomeie o textfield de “Letra”, e o “Integer” de “Número”:

![image](./BuilderImages/BuilderImagesAtualizadas/BoxInfo.png)

E agora, selecionando o box você consegue configurar o “Behavior”, “Presentation” e “Intro” de todos os componentes dentro dele de uma vez só. 

Para saber mais sobre como editar e visualizar essas configurações do “Properties of Field”, acesse as seções “General”, “Behavior”, “Presentation” e “Intro” do componente “Textfield”.

Obs: também é possível editar essas propriedades para cada componente individualmente dentro do GroupBox.

Execute a aplicação.
![image](./BuilderImages/BuilderImagesAtualizadas/BoxNew.png)

Adicione os valores nos dois campos e depois clique no botão ![image](https://user-images.githubusercontent.com/81401104/116139938-fc280900-a6ac-11eb-9f51-c7d0873d32e3.png)
.
![image](./BuilderImages/BuilderImagesAtualizadas/BoxForm.png)

🔗Vídeo: https://www.youtube.com/watch?v=1F6CkX0M4P4

### Box 📦 > GENERAL 🎖️

Para saber mais sobre como usar essa funcionalidade, vá até a seção “General” do componente “Textfield”.

![image](./BuilderImages/BuilderImagesAtualizadas/BoxGeneral.png)

Ao selecionar caixa "Border", será criado a borda para o componente, e também será possível editar o campo “Label”.

Ao selecionar caixa "Collapsible", será criada uma box como caixa suspensa, e também será possível editar o campo “Label”.

🔗Vídeo: https://www.youtube.com/watch?v=1F6CkX0M4P4

<div id='id-Signature'/>

## Signature ✒️
![image](/BuilderImages/BuilderImagesAtualizadas/Signature.png)

Com este componente você pode adicionar uma assinatura do usuário no seu formulário.

Selecione o componente “Signature”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/BuilderImagesAtualizadas/Signature.gif)

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

![image](/BuilderImages/BuilderImagesAtualizadas/SignatureAssinatura.png)

E no “Hidden” que está acima acima do “DateTime” o nomeie de “Hidden do DateTime”. 
E na seção “Data Type”, no item “Type” selecione a opção “DateTime”. (imagem abaixo)

![image](/BuilderImages/BuilderImagesAtualizadas/SignatureDataTime.png)

Agora vá até a seção “Signature” do componente “Signature”. No item “Date field” selecione a opção “Data e Hora” e no “Info field” selecione a opção  “Hidden Assinatura”.

![image](./BuilderImages/BuilderImagesAtualizadas/SignatureConf.png)

Execute a aplicação.

Então irá abrir a seguinte tela:
![image](./BuilderImages/BuilderImagesAtualizadas/SignatureForm.png)

Agora copie a URL (Link) desse formulário:

![image](./BuilderImages/BuilderImagesAtualizadas/SignatureURL.png)

E então abra em uma janela anônima:

![image](./BuilderImages/BuilderImagesAtualizadas/SignatureLoguin.png)

Entre com seu usuário. 

[Para continuar daqui em diante, é necessário ter realizado os passos dos tutoriais “Como Criar Seu Usuário” e “Como Dar Permissão Ao Seu Usuário”]
 
Aparecerá a seguinte tela:
![image](./BuilderImages/BuilderImagesAtualizadas/SignatureForm.png)

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/116141954-b6207480-a6af-11eb-8b8e-157154509935.png)
 e abrirá a seguinte tela:
![image](./BuilderImages/BuilderImagesAtualizadas/SignatureNew.png)

Clique na caixa amarela “Click to Sign”, e aparecerá a seguinte janela:
![image](https://user-images.githubusercontent.com/81401104/116142075-da7c5100-a6af-11eb-9f99-a97d33c03da8.png)

Então é só desenhar a assinatura, por exemplo: 
![image](https://user-images.githubusercontent.com/81401104/116142120-e6681300-a6af-11eb-851f-a26f4172ecae.png)

E então clicar no botão ![image](https://user-images.githubusercontent.com/81401104/116142149-eec04e00-a6af-11eb-8865-51292d30aef4.png). Automaticamente voltará para essa página:
![image](./BuilderImages/BuilderImagesAtualizadas/SignatureSave.png)

Então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116142206-00a1f100-a6b0-11eb-9eec-ac2d4a76f486.png).

Será direcionado para a seguinte página:
![image](https://user-images.githubusercontent.com/81401104/116142262-16171b00-a6b0-11eb-98dc-f67dfb2cce56.png)

E aqui você consegue visualizar os registros.

Para visualizar o formulário preenchido com a assinatura, é só clicar no ![image](https://user-images.githubusercontent.com/81401104/116142292-1fa08300-a6b0-11eb-859f-e8a3af060214.png) (abaixo de “Control”).

### Signature ✒️ > SIGNATURE ✒️🗄️
![image](./BuilderImages/BuilderImagesAtualizadas/SignatureConfVa.png)

Date field: Selecionar o campo que contém o componente “Date” ou “DateTime”.

Info field: Selecionar o campo que contém o componente “Hidden” atrelado à assinatura.

<div id='id-Static'/>

## Static Image 🌄
![image](/BuilderImages/BuilderImagesAtualizadas/StaticImage.png)

Com este componente você pode adicionar uma imagem que sempre estará sendo mostrada no formulário e não será salva dentro do banco de dados. 

Sobre as imagens é possível adicionar eventos como abrir outros forms ou hiperlink para outros sites. 

Selecione o componente “Image”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](./BuilderImages/BuilderImagesAtualizadas/StaticImage.gif)

Agora siga o GIF abaixo para adicionar sua imagem:

![image](./BuilderImages/BuilderImagesAtualizadas/StaticImageUpload.gif)

Agora execute a aplicação.

![image](/BuilderImages/BuilderImagesAtualizadas/StaticImageNew.png)

A imagem aparece no formulário, mas não será salva no banco de dados. Ela pode servir como referência instrutiva, logomarca ou hiperlink, entre outros.

🔗Vídeo: https://www.youtube.com/watch?v=S0gTJ196YeU

### Static Image 🖼️ > IMAGE 🚞
![image](/BuilderImages/BuilderImagesAtualizadas/StaticImageImage.png)

Na seção “Image” do componente “Image” você pode dar descrição (“Description”) e um link, para qual será direcionado quando clicar na imagem. Lembre-se de clicar no ![image](https://user-images.githubusercontent.com/81401104/116143294-5a56eb00-a6b1-11eb-84a9-37a064bb07e3.png)
para adicionar o evento de ao clicar na imagem ser direcionado para o link.    
![image](/BuilderImages/BuilderImagesAtualizadas/StaticImageBotao.png)

<div id='id-Upload'/>

## Upload Image 📸📩
![image](/BuilderImages/BuilderImagesAtualizadas/UploadImage.png)

Este componente permite você adicionar uma imagem com o formato desejado que ficará visível no registro

Selecione o componente “ImageInput”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/BuilderImagesAtualizadas/UploadImage.gif)

Execute a aplicação clicando no botao ![image](./BuilderImages/RunButton.png):

Agora Siga o GIF abaixo para fazer o Upload da Imagem:

![image](./BuilderImages/BuilderImagesAtualizadas/UploadImageNew.gif)

Para visualizar a foto que você acabou de adicionar, clique no botão ![image](https://user-images.githubusercontent.com/81401104/116143693-d3564280-a6b1-11eb-8522-78da4e1fef90.png)(Abaixo de “Control”)

🔗Vìdeo: https://www.youtube.com/watch?v=euHhuJY1vSA

### Upload Image 📸 > Upload 🔼 > Public 📮
![public-property](https://github.com/magnoeasy/easybuilder/assets/60669964/5cbc5048-37d6-4583-a46b-60fc83270e74)

Use a properiedade `public` quando:
- A imagem não contém dados sensíveis e compartilhar ela não vai expor informação privada
- Você quer otimizar a performance, já que a sua imagem pode ser carregada mais rapidamente por que não gastamos tempo verificando as permissões
- Você está trabalhando em uma página publica(por exemplo, uma landing page) que não vai exigir que o usuário faça log in

Quando você marca um `upload image` como `public` a imagem carregada não será mais protegida pelas configurações de permissão
- Será acessível por usuários, mesmo que você não tenha concedido permissão para que eles vejam os dados do formulário onde a imagem foi salva
- Será acessível por usuários que não fizeram log in
- Será salva em um repositório público de imagens
  
<div id='id-File'/>

## File Upload 📂📩
![image](/BuilderImages/BuilderImagesAtualizadas/FileUpload.png)

É um componente que permite anexar arquivos em um cadastro.

Selecione o componente “FileUpload”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/BuilderImagesAtualizadas/FileUpload.gif)

Salve apertando o botao ![image](./BuilderImages/saveButton.png) e Depois
Execute a aplicação clicando no botao ![image](./BuilderImages/RunButton.png).

Agora siga o GIF abaixo para fazer o upload do arquivo desejado:

![image](./BuilderImages/BuilderImagesAtualizadas/FileUploadNew.gif)

Após o passo acima você Irá para a tela dos registros abaixo:

![image](/BuilderImages/BuilderImagesAtualizadas/FileUploadForm.png)

Caso queira visualizar o registro do “FileUpload”, clique no ![image](https://user-images.githubusercontent.com/81401104/116144386-a8b8b980-a6b2-11eb-9872-e7b158064521.png)(Control).

Então irá para a seguinte tela (próxima página):
![image](/BuilderImages/BuilderImagesAtualizadas/FIleUploadDowlond.png)

E para fazer o download do arquivo é só clicar no botão 
![image](https://user-images.githubusercontent.com/81401104/116144826-dc93df00-a6b2-11eb-8281-b7987cb96718.png).

🔗Vídeo: https://www.youtube.com/watch?v=Hk_XcIS_U_E

### File Upload 📂📩 > UPLOAD 🗂️
![image](/BuilderImages/BuilderImagesAtualizadas/FileUploadUp.png)

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
![image](/BuilderImages/BuilderImagesAtualizadas/UploadImageOthers.png)

Ao selecionar a caixa de seleção “Allow to delete file from storage” será permitido deletar arquivos do storage (onde ficam armazenados os arquivos) .

<div id='id-One-To-Many'/>

## One-To-Many 📃➡️📃
![image](/BuilderImages/BuilderImagesAtualizadas/OneToMany.png)

Com este componente você consegue realizar uma relação de um para vários, por exemplo: Sala de aula - quem são os alunos, empresa - quem são os colaboradores.

Selecione o componente “OneToMany”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).

![image](./BuilderImages/BuilderImagesAtualizadas/OneToMany.gif)

Nas propriedades do “OneToMany”, na seção “Source”, adicione a opção “Cor” (Esse formulário “Cor” foi criado durante o tutorial do “DropdownDB”).

É importante que esteja logado na tela de registros do formulário “Cor” para poder visualizar o resultado do processo. No momento, a tela de registro de cores está da seguinte maneira:

![image](/BuilderImages/BuilderImagesAtualizadas/OneToManyCores.png)
                            
Volte na tela do One-To-Many e execute a aplicação.
![image](/BuilderImages/BuilderImagesAtualizadas/OneToManyNew.png)

No campo “Cor”, preencha com “Laranja”, então clique no botão![image](https://user-images.githubusercontent.com/81401104/116289846-3bb42b00-a769-11eb-9772-eaed741142d9.png).
![image](/BuilderImages/BuilderImagesAtualizadas/OneToManyLaranja.png)

Então, clique no botão ![image](https://user-images.githubusercontent.com/81401104/116290167-8f267900-a769-11eb-8ba4-8d735c2edee4.png).

A tela dos registros do One-To-Many estará da seguinte forma:
![image](/BuilderImages/BuilderImagesAtualizadas/OneToManyForm.png)

Agora, abra a tela dos registros das cores e atualize ela 
![image](/BuilderImages/BuilderImagesAtualizadas/OneToManyCorLaranja.png)

Perceba que a cor “Laranja” foi adicionada na tela de registro do formulário “Cor”.

![image](/BuilderImages/BuilderImagesAtualizadas/OneToManyConf.png)

 Open as Modal: Abrir como um modal. Um modal é uma janela em destaque dentro da página (igual aquela quando se cria ou edita um projeto).

Source (Fonte): É da onde os dados serão buscados.

Refresh Source (Atualizar fonte): Ás vezes pode ter sido criado o source recentemente mas a lista não ter sido atualizada, para isso serve o botão.

### One-To-Many 📃➡️📃 > Aggregation Data
![image](/BuilderImages/BuilderImagesAtualizadas/OneToManyAggregationData.png)

<table>
 <tr>
  <td>Source (Fonte)</td>
  <td>Destination (Destino)</td>
  <td>Operation (Operação)</td>
  <td>Column (Coluna)</td>
  <td>Output (Resultado)</td>
 </tr>
</table>

<div id='id-MultiUpload'/>

## Multi Upload 📂➕

![image](./BuilderImages/iconeMultiupload.png)

O componente "Multi Upload" permite que o usuário faça upload de diversas imagens ou arquivos.

⚠️ O componente requer que os arquivos sejam armazenados em um form criado previamente. Por isso, antes de utilizá-lo, crie um form contendo o componente "File Upload". Segue exemplo:

![image](./BuilderImages/telatodaMultiupload.png)

Feito isso, selecione o componente “Multi Upload”, arrastando-o e soltando-o onde está escrito “Drop new field here!”.

![image](./BuilderImages/arrastandocampoMultiupload.gif)

### Multi Upload 📂➕ > UPLOAD 🗂️

![image](./BuilderImages/tiposdearquivoMultiupload.gif)

Em "Accepted Types", selecione os formatos de arquivos desejados.

Em "Max. File Size", insira o tamanho máximo de arquivo aceito.

### Multi Upload 📂➕ > SOURCE 🔌

![image](./BuilderImages/sourceMultiupload.png)

Em "Form", selecione o form criado anteriormente.

![image](./BuilderImages/formMultiupload.png)

Em "DataSource", clique no botão ![image](./BuilderImages/plusDatasource.png) para criar um novo DataSource.

Insira um título, selecione o form criado anteriormente e marque o campo "File Upload".

![image](./BuilderImages/datasourceMultiupload.gif)

Clique em ![image](./BuilderImages/saveclouse.png).

Agora selecione o DataSource criado.

![image](./BuilderImages/selecionandodatasourceMultiupload.gif)

Em "Upload Field", selecione o campo "File Upload".

![image](./BuilderImages/uploadfieldMultiupload.png)

Execute a aplicação e teste a funcionalidade.

![image](./BuilderImages/runMultiupload.gif)

<div id='id-MultiTag'/>

## MultiTag 🏷️

![image](/BuilderImages/BuilderImagesAtualizadas/Multi-tag.png )

É um componente que funciona como um autocomplete para múltiplos valores (relação 1:N).

Selecione o componente “MultiTag”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](./BuilderImages/BuilderImagesAtualizadas/Multi-tag.gif)

Para realizar o tutorial desse componente, desça até a seção “Source”.

### MultiTag 🏷️ > SOURCE 🔌

![image](./BuilderImages/BuilderImagesAtualizadas/Multi-tagSource.png)

Para fazermos uso do componente “MultiTag” teremos que criar 3 formulários. O primeiro para adicionar os nomes, o segundo para conectar os nomes a um componente “DropdownDB”, e então conectar o segundo com o terceiro formulário que será do “MultiTag”.

Primeiro passo, crie um novo formulário com o componente “Textfield”, também nomeando-o de “Membro da Equipe” .
![image](/BuilderImages/BuilderImagesAtualizadas/MembroDaEquipeForm.png)

e adicione os nomes “João”, “Maria”, “Carlos” e “Lucas”.
![image](/BuilderImages/BuilderImagesAtualizadas/MembroDaEquipeNew.png)

Segundo passo, crie mais um formulário usando o componente “DropdownDB” e nomeando-o de “reunião da equipe”.
![image](/BuilderImages/BuilderImagesAtualizadas/ReuniãoDaEquipeForm.png)

Na seção “Source” desse componente, no item “Form” selecione a opção “Membro_da_Equipe”  e em “Description Field” também selecione “MembroDaEquipe”. 

![image](/BuilderImages/BuilderImagesAtualizadas/ReuniãoDaEquipeSource.png)

Clique no botão ![image](https://user-images.githubusercontent.com/81401104/116294723-afa50200-a76e-11eb-9530-bd7de54c0609.png) no pé da página.

Agora vamos criar o terceiro formulário, nomeando-o de “Participantes”.  Adicione o componente “Multitag” para dentro do formulário.

![image](/BuilderImages/BuilderImagesAtualizadas/ParticipantesForm.png)

Agora na seção “Source” do MultiTag, no item “Form” selecione “reuniao_da_Equipe”, e em “Relation Field” selecione “ReuniaoDaEquipeId” - (imagem abaixo).
![image](/BuilderImages/BuilderImagesAtualizadas/Multi-tagParticipantesSource.png)

Execute a aplicação.
![image](/BuilderImages/BuilderImagesAtualizadas/Multi-tagnew.png)

Comece a escrever as primeiras letras e logo aparecerá os nomes.     
Selecione “Lucas”, “Maria” e “João”.
![image](/BuilderImages/BuilderImagesAtualizadas/Multi-tagNew.gif)


E então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116294980-f561ca80-a76e-11eb-9602-277e3c8f8579.png)
.
Irá aparecer da seguinte forma: 
![image](https://user-images.githubusercontent.com/81401104/116295016-feeb3280-a76e-11eb-8561-490f44818321.png)

Para visualizar  e editar esse formulário adicionado, clique no botão ![image](https://user-images.githubusercontent.com/81401104/116295079-14f8f300-a76f-11eb-96e4-6fc8d24d8abc.png)
.

<div id='id-Additional'/>

## Additional Data ➡️📃
![image](/BuilderImages/BuilderImagesAtualizadas/AdditionalData.png)

Este componente permite apresentar dados extras através de um DataSource.

Selecione o componente “AdditionalData”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](./BuilderImages/BuilderImagesAtualizadas/AdditionalData.gif)

Para visualizar a utilização desse componente, desça até a seção “Additional Data” deste tutorial

### Additional Data➡️📃 > GENERAL 🎖️
![image](./BuilderImages/BuilderImagesAtualizadas/AdditionalDataGeneral.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “General” do componente “Textfield”.

Ao selecionar a caixa de seleção ![image](./BuilderImages/BuilderImagesAtualizadas/GeneralBorder.png), será criado a borda para o componente, e também será possível editar o campo “Label”.

Ao selecionar a caixa de seleção ![image](./BuilderImages/BuilderImagesAtualizadas/GeneralCollapsible.png), será criado um colapso no componente, e também será possível editar o campo “Label”.

### Additional Data➡️📃 > SOURCE
![image](./BuilderImages/BuilderImagesAtualizadas/AdditionalDataSource.png)

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
![image](/BuilderImages/BuilderImagesAtualizadas/OrigemForm.png)

(Para aprender mais sobre o componente “Dropdown”, acesse o tutorial dele)

No campo do “Status”, em “Values” clique no botão ![image](https://user-images.githubusercontent.com/81401104/116296368-884f3480-a770-11eb-8470-f88450cd50ff.png) e adicione dois valores “Aprovado” e “Pendente”.
![image](/BuilderImages/BuilderImagesAtualizadas/EnumerationsOrigem.png)

Execute a aplicação:
![image](https://user-images.githubusercontent.com/81401104/116296442-9f8e2200-a770-11eb-8750-5a1165958d44.png)

No campo do “Nome”  escreva “João Carlos” e do “Status” selecione a opção “Aprovado” e então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116296486-addc3e00-a770-11eb-84d8-ddaad8354b06.png)
.

Repita o processo adicionando o nome “Maria Aparecida” com o Status de “Pendente”.

Agora vamos criar outro formulário, e nomeá-lo de “Destino”.

E vamos arrastar o componente “DropdownDB” para dentro dele e nomeá-lo de “Origem”. 
![image](/BuilderImages/BuilderImagesAtualizadas/FormDestino.png)

Na seção “Source” dele, em “Class” selecione a opção “Origem”. Em “Description Field” selecione “Nome”.

Agora selecione o componente “Additional Data” e arraste ao lado do campo “Origem”.
![image](/BuilderImages/BuilderImagesAtualizadas/FormDestinoAdd.gif)

Agora na seção “Source” do componente “Additional Data”, na linha do “DataSource” clique no ![image](https://user-images.githubusercontent.com/81401104/116296897-1f1bf100-a771-11eb-9d41-7de58f56e049.png) e irá abrir a seguinte janela:
![image](./BuilderImages/BuilderImagesAtualizadas/DataSourceNew.png)

Em “Title” escreva “Origem”, em “Class” selecione o projeto no qual você criou os formulários anteriormente, Irá aparecer da seguinte forma:
![image](./BuilderImages/BuilderImagesAtualizadas/DataSouceOrigem.png)

Clique para marcar a flag nos campos “Nome” e “Status” que estão marcados abaixo da opção "Form", e logo a tela ficará da seguinte maneira:
![image](./BuilderImages/BuilderImagesAtualizadas/dataSourceOrigemFlag.png)

Perceba que foram adicionados os campos “Nome” e “Status” dentro do DataSource.

Agora clique no botão ![image](./BuilderImages/saveButton.png) . E automaticamente voltará para a tela de edição do formulário:
![image](./BuilderImages/BuilderImagesAtualizadas/AdditionalDropNew.gif.png)

Agora na seção “Source”, em “DataSource”, selecione a opção “Origem”, em “DataSource Filter” selecione a opção “OrigemId”, em “Source Field” selecione a opção “OrigemId”, em “Show” selecione “First”, em “Sorted By” selecione a opção “Nome”.<br>
⚠️ATENÇÃO: Nos campos aonde está escrito “AdditionalDateid”, voce ira selecionar o nome do seu formulario que voce selecionou no Class anteriormente.<br>
![image](./BuilderImages/BuilderImagesAtualizadas/AdditionalSource.png)

Agora selecione e arraste o componente “Label” em cima do “Additional Data” e nomeie ele de "Status" como no GIF abaixo:
![image](./BuilderImages/BuilderImagesAtualizadas/DestinoLabelStatus.gif)

Agora na seção “General”, no “DataLinkUrl” selecione a opção “Status”:
![image](./BuilderImages/BuilderImagesAtualizadas/StatusGeneralDatalink.png)

Execute a aplicação:
![image](https://user-images.githubusercontent.com/81401104/116297363-93569480-a771-11eb-8c70-2e70c8236691.png)

Selecione o nome “João Carlos” e observe a mensagem ao lado:
![image](https://user-images.githubusercontent.com/81401104/116297403-9c476600-a771-11eb-879d-bff518d372dd.png)

Selecione o nome “Maria Aparecida” e observe a mensagem ao lado:
![image](https://user-images.githubusercontent.com/81401104/116297452-a79a9180-a771-11eb-9f3d-f5c93261eccc.png)

<div id='id-Button'/>

## Button ⏸️
![image](/BuilderImages/BuilderImagesAtualizadas/Button.png)

Com este componente é possível inserir funções personalizadas de JavaScript.

Selecione o componente “Button”, então arraste-o e solte-o onde está escrito “Drop new field here!”
![image](./BuilderImages/BuilderImagesAtualizadas/Button.gif  )

Para saber mais sobre como usar esse componente, desça até a seção “Events” desse tutorial.

🔗Vídeo: https://www.youtube.com/watch?v=IGGbMFxysPE&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=31

### Button ⏸️ > GENERAL 🎖️

![image](./BuilderImages/BuilderImagesAtualizadas/ButtonGeneral.png)

A opção "Icon" abrira uma lista de opções de icones para customizar o botão.

Para saber mais sobre como usar as outras funcionalidade, vá até a seção “General” do componente “Textfield”.

### Button ⏸️ > EVENTS ⚙️ 

![image](./BuilderImages/BuilderImagesAtualizadas/ButtonEvents.png)

Vamos testar a seção “Events” começando por arrastar um novo componente “Button” dentro do formulário. 

Nesse teste iremos fazer com que ao clicar o botão será mostrado uma mensagem.

Agora, na seção “Events” desse novo botão, iremos clicar no botão .  
![image](./BuilderImages/BuilderImagesAtualizadas/AddScriptHere.png)

Então abrirá a seguinte aba: 
![image](/BuilderImages/BuilderImagesAtualizadas/CustomScript.png)

Em “Custom Scripts” copie e cole o seguinte script: 

                                    function alerta() {
            alert('Pode ser usado em alertas, redirecionar para outra página executar uma função javascript');
            }

Então clique no botão ![image](/BuilderImages/BuilderImagesAtualizadas/Save.png)
para testar se o script é válido, se ele for, irá aparecer no topo direito uma mensagem dizendo:  “Confirmation Custom Script Valid”.

Agora volte na seção “Events”, em “Name” selecione a opção “OnClick”, e em “On” escreva “alerta()”
e então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116298711-27752b80-a773-11eb-9b58-b0e031acccb3.png).         

Então ficará da seguinte maneira:    
![image](./BuilderImages/BuilderImagesAtualizadas/ButtonAlert.png)

Execute a aplicação:
![image](/BuilderImages/BuilderImagesAtualizadas/ButtonFormRun.png)

Clique no botão azul ![image](/BuilderImages/BuilderImagesAtualizadas/New.png) e então irá para a próxima página.

Agora clique no ![image](/BuilderImages/BuilderImagesAtualizadas/ButtonClick.png)e você verá o seguinte aviso na tela:
![image](/BuilderImages/BuilderImagesAtualizadas/ButtonAlertExecut.gif)

<div id='id-HTML'/>

## HTML Field 🦰
![image](/BuilderImages/BuilderImagesAtualizadas/HtmlField.png)

 É um componente que permite inserir um texto em html no formulário.

Selecione o componente “HTMLField”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](./BuilderImages/BuilderImagesAtualizadas/HtmlFIeld.gif)

No campo “HTML” abaixo de “General”  (onde está indicando a flecha), você irá colar o seu código HTML.

Por exemplo, uso o código: 
![image](https://user-images.githubusercontent.com/81401104/116300074-d5350a00-a774-11eb-80be-e09fd664078b.png)

Execute a Aplicação:
Perceba que a palavra “obrigatórios” está em negrito, devido ao código html.

![image](./BuilderImages/HTMLFieldprint.png)

🔗Vídeo: https://www.youtube.com/watch?v=izhSKwdUDvg&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=32

### HTML Field 🦰 > GENERAL 🎖️
![image](/BuilderImages/BuilderImagesAtualizadas/HtmlFieldGeneral.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “General” do componente “Textfield”.

HTML: É onde você irá colar o seu código HTML, assim que clicar no icone de lapis, vai abrir a seguinte tela em modal. 

![image](/BuilderImages/BuilderImagesAtualizadas/HtmlEditor.png)

<div id='id-Quiz'/>

## Quiz 🧩
![image](/BuilderImages/BuilderImagesAtualizadas/Quiz.png)

Este componente cria um questionário de perguntas e respostas onde o usuário adiciona alternativas falsas e verdadeiras, colocando a pontuação das resposta verdadeiras no Score.

Selecione o componente “Decimal”, então arraste-o e solte-o onde está escrito “Drop new field here!”.
![image](./BuilderImages/BuilderImagesAtualizadas/Decimal.gif)

Agora Selecione o componente “Quiz”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field”.(Se não aparecer, apenas clique no campo que você acabou de soltar).
![image](/BuilderImages/BuilderImagesAtualizadas/Quiz.gif)


Clique no campo do “Enter Your Question” e escreva “Quanto é 1 + 1 ?” e clique no botão ![image](https://user-images.githubusercontent.com/81401104/116300346-2cd37580-a775-11eb-8e02-41eabd2abd67.png)
.
![image](/BuilderImages/BuilderImagesAtualizadas/QuizPrimeiraP.png)

Clique no icone marcado de vermelho na imagem acima para adicionar as respostas.
![image](/BuilderImages/BuilderImagesAtualizadas/QuizResposta.png)

No campo do “Enter Your Answer” escreva “2” 
e marque a caixa de seleção  e então clique no botão ![image](https://user-images.githubusercontent.com/81401104/116300507-58eef680-a775-11eb-8077-ac3545e3c6ab.png)
.

Repita essa última etapa adicionando a resposta “3” sem marcar a caixa de seleção ![image](https://user-images.githubusercontent.com/81401104/116300583-6e642080-a775-11eb-8475-4a253709993f.png)
.

Agora vamos adicionar mais uma questão: “Quanto é 2 + 2 ?”

E adicionar duas respostas: “4” e marcando a caixa de seleção![image](https://user-images.githubusercontent.com/81401104/116300627-7c19a600-a775-11eb-8218-4497a05bc066.png)
, e “5” sem marcar a caixa de seleção.
![image](/BuilderImages/BuilderImagesAtualizadas/QuizPerguntas.png)

Agora, para que seja possível mostrar o resultado do quiz, vamos utilizar o componente “Decimal” que criamos no começo e vamos nomea-lo de "PorcentagemDeAcerto",agora clique de volta no Quiz, vá até a seção “Others”, em “Score Field” selecione a opção “PorcentagemDeAcerto”.
![image](./BuilderImages/BuilderImagesAtualizadas/QuizOthers.png)

Execute a aplicação. Irá abrir essa página:
![image](/BuilderImages/BuilderImagesAtualizadas/QuizExecut.gif)

Selecione as opções e perceberá que o campo “Acertos” dará a porcentagem de acerto automaticamente.

Após selecionar as opções desejadas, clique no botão ![image](https://user-images.githubusercontent.com/81401104/116300816-b5eaac80-a775-11eb-800d-4ab1214bfe00.png).

Então verá a tela dos registros e caso queira editar o form salvo,
basta clicar no botão ![image](https://user-images.githubusercontent.com/81401104/116300853-bf741480-a775-11eb-894f-42b430729206.png)
.

🔗Vídeo: https://www.youtube.com/watch?v=eVAWxyWRydA&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=33

### Quiz 🧩 > OTHERS 
![image](./BuilderImages/BuilderImagesAtualizadas/QuizOthersB.png)

Para saber mais sobre como usar essa funcionalidade, vá até a seção “Others” do componente “Textfield”.

Score Field: Irá selecionar o campo que está dentro do mesmo formulário para mostrar o resultado do quiz. Esse outro campo deve utilizar o componente “Integer” para cumprir sua função.

<div id='id-Email'/>

## Email 📧
![image](/BuilderImages/BuilderImagesAtualizadas/Email.png)

O componente “Email” serve para aceitar somente preenchimento de email.

Selecione o componente “Email”, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no componente que você acabou de soltar).
![image](./BuilderImages/BuilderImagesAtualizadas/Email.gif)

Após soltar o componente email dentro do formulário, execute a aplicação clicando no botão ![image](./BuilderImages/RunButton.png).

E perceba que na tela de registrar só será permitido salvar o que foi inserido no campo “Email” se o sistema considerar aquilo como email, por exemplo:
![image](./BuilderImages/BuilderImagesAtualizadas/EmailSave.gif)

Perceba que quando estava escrito apenas “Easy” não era possível salvar, mas quando foi adicionado ao final “@team” se tornou possível salvá-lo.

🔗Vídeo: https://www.youtube.com/watch?v=kPtjDcOXSGw&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=34

<div id='id-Password'/>

## Password 🔐
![image](/BuilderImages/BuilderImagesAtualizadas/Password.png)

O componente “Password” vem com sua submáscara de campo preparada para password (****), ou seja, para tornar discreto o preenchimento de informações sensíveis, por exemplo, de CPF.

Selecione o componente “Password”, então arraste-o e solte-o onde está escrito “Drop new field here!”. 

![image](./BuilderImages/BuilderImagesAtualizadas/Password.gif)

Execute a aplicação clicando no botão ![image](./BuilderImages/RunButton.png)<br>
Ao inserir os caracteres, perceba que ele estará oculto.
![image](./BuilderImages/BuilderImagesAtualizadas/PasswordNew.png)

E após salvar, irá para a tela de registros:
![image](/BuilderImages/BuilderImagesAtualizadas/PasswordForm.png)

E mesmo que acesse o formulário novamente, clicando no ![image](https://user-images.githubusercontent.com/81401104/116301456-6eb0eb80-a776-11eb-9bc3-afd8ee4e4456.png)
(abaixo de “Control”), ainda não será possível visualizar a informação inserida:

🔗Vídeo: https://www.youtube.com/watch?v=GLaBaRqX7V4&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=35

<div id='id-Horizontal'/>

## Horizontal Line 📏🪓
![image](/BuilderImages/BuilderImagesAtualizadas/HorizontalLine.png)

O “Horizontal Line” faz quebra de linha, com o objetivo principal de organizar a disposição dos componentes.

Selecione o componente “Horizontal Line”, então arraste-o e solte-o onde está escrito “Drop new field here!”. 
![image](./BuilderImages/BuilderImagesAtualizadas/HorizontalLine.gif)

Ao colocar o “Horizontal Line” dentro do formulário, você perceberá que ele é só uma linha, com a única função de organizar a disposição dos componentes dentro da tela.

Vamos adicionar dois componentes “Textfield” dentro do formulário, um à esquerda e o outro à direita do “Horizontal Line”.
![image](/BuilderImages/BuilderImagesAtualizadas/HorizontalLineSepar.png)

Agora, vá nas propriedades do “Horizontal Line”, na seção “Presentation”, na primeira lista (desktop), selecione a opção “Col-lg-12-100%”. A disposição visual estará da seguinte maneira:
![image](/BuilderImages/BuilderImagesAtualizadas/HorizontalLineVert.png)

Agora execute a aplicação clicando no botao![image](./BuilderImages/RunButton.png).

Perceberá que na tela de registrar estará organizado da mesma forma:
![image](/BuilderImages/BuilderImagesAtualizadas/HorizontalLineNew.png)

É isso o que o “Horizontal Line” faz, quebra linhas para organizar a disposição dos componentes.

🔗Vídeo: https://www.youtube.com/watch?v=mdgoTSvefjc&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=36

<div id='id-Repeater'/>

## Repeater 🔁
![image](/BuilderImages/BuilderImagesAtualizadas/Repeater.png)

O repeater é o componente utilizado para apresentação de dados dentro de uma page, com ele é possível reproduzir o conteúdo de um formulário no ambiente de page

Selecione o componente, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no componente que você acabou de soltar).
![image](./BuilderImages/BuilderImagesAtualizadas/Repeater.gif)

Perceba que ao inserir o Repeater não poderá salvar a page até que tenha selecionado um Datasource na aba de propriedades.  
![image](/BuilderImages/BuilderImagesAtualizadas/RepeaterSource.png)

Podemos fazer isso facilmente utilizando o builder. Para adicionar a fonte de dados que utilizaremos, devemos procurar a aba “Source”, dentro das propriedades do componente, e clicar no botão “+”. Neste exemplo nosso DataSource conterá três campos: Nome, idade e telefone.

Para exibir os dados no repeater utilizamos outro componente, o label, e adicionamos um Databind para ele
![image](/BuilderImages/BuilderImagesAtualizadas/RepeaterLabel.gif)

Essa ligação de dados foi definida no Datasource que criamos no passo anterior. Procure em properties pela aba Databind e selecione o elemento que você deseja exibir.
![image](/BuilderImages/BuilderImagesAtualizadas/RepeaterDataBind.png)

Perceba que os campos são exibidos automaticamente conforme o que foi definido no Datasource

### Como pegar um valor de um repeater no script da página

1 - Configure um evento para a sua função\
![image](https://github.com/magnoeasy/easybuilder/assets/60669964/18221230-061f-4909-9697-a0da0fd188ce)

2 - Declare a sua função\
<code>function getRepeaterValue() {
    const repeaterInstances = this.getField("MyRepeater");
    const firstInstance = repeaterInstances[0];
    const instanceLines = firstInstance.value;
    const firstLine = instanceLines[0];
    const name = firstLine.Name;
}
</code>

### Como mudar o valor de um repeater no script da página

1 - Configure um evento para a sua função\
![image](https://github.com/magnoeasy/easybuilder/assets/60669964/38906244-8581-4527-95ba-308cd38aa754)

2 - Declare a sua função\
<code>function setRepeaterValue() {
    const repeaterInstances = this.getField("MyRepeater");
    const firstInstance = repeaterInstances[0];
    firstInstance.setValue([{
        Name: 'Paul'
    }]);
}
</code>

<div id='id-PageView'/>

## Page View 🖼️

![image](./BuilderImages/iconePageview.png)

O componente "Page View" incorpora o conteúdo de uma page dentro de outra page.

![image](./BuilderImages/mostrandoquadradosPageview.gif)

Primeiro crie uma página com o conteúdo desejado.

![image](./BuilderImages/pagenavbarPageview.png)

Em seguida, crie outra página e insira o componente "Page View", arrastando-o e soltando-o onde está escrito “Drop new field here!”.

![image](./BuilderImages/arrastandocomponentePageview.gif)

Na aba “Properties of Field”, em Page, insira o nome da página criada anteriormente.

![image](./BuilderImages/namePageview.gif)

Por fim, escolha uma porcentagem de apresentação para o componente.

![image](./BuilderImages/presentationPageview.gif)

Execute a aplicação e teste a funcionalidade.

![image](./BuilderImages/runPageview.png)

💡 A utilização do "Page View" é uma excelente maneira de economizar tempo de desenvolvimento e facilitar a manutenção de seu projeto, uma vez que ele dispensa a necessidade de desenvolver elementos repetitivos.

⚠️ ATENÇÃO: Qualquer modificação feita na page original será automaticamente refletida em todas as outras pages que estão utilizando o componente.

![image](./BuilderImages/changePageview.gif)

🔗 Vídeo: https://www.youtube.com/watch?v=NQLAC_KBAM4

<div id='id-Chat'/>

## Chat 💬
![image](./BuilderImages/BuilderImagesAtualizadas/Chat.png)

O componente "Chat" cria um chat dentro da sua aplicação.

Selecione o componente, então arraste-o e solte-o onde está escrito “Drop new field here!”. Quando soltá-lo, irá aparecer do lado direito da tela uma aba chamada “Properties of Field” (Se não aparecer, apenas clique no componente que você acabou de soltar).
![image](./BuilderImages/BuilderImagesAtualizadas/Chat.gif)

Nomeie o Formulario de "FormChat" ,Agora na aba “Properties of Field” vá até "Behavior" e deixe selecionado a opções "Visible" e "Admin" como na imagem abaixo:<br>
![image](./BuilderImages/BuilderImagesAtualizadas/ChatBehavior.png)

Após fazer isso clique no Botão ![image](./BuilderImages/saveButton.png).

Agora crie um novo formulario e o nomeie de "PageChat" e arraste o Componente "Repeater" para dentro dele como no Gif abaixo:
![image](./BuilderImages/BuilderImagesAtualizadas/ChatRepeater.gif)

Feito isso clique em cima do "Repeater" ira abrir uma janela chamada “Properties of Field” nela vá até "Source" na linha "DataSource" clique no botão ![image](./BuilderImages/addbutton.png) irá abrir a seguinte janela Modal:

![image](./BuilderImages/BuilderImagesAtualizadas/DataSource.png)

Nomeie o Campo "Title" de "DatasourceChat" no campo Class selecione o formulario criado anteriormente "ChatForm" como na imagem abaixo:
![image](./BuilderImages/BuilderImagesAtualizadas/ChatDataSource.png)

Agora clique duas vezes em cima de "chat" que está marcado em vermelho e a janela ficará desse jeito:

![image](./BuilderImages/BuilderImagesAtualizadas/ChatDataSourcec.png)

Agora clique no botão ![image](./BuilderImages/saveButton.png) e depois no botão ![image](./BuilderImages/saveclosebutton.png).<br>
Ainda em "Source" no "DataSource" selecione o datasource que acabamos de criar "DatasourceChat" e em "Sorted By" selecione "Chat" como na imagem abaixo:

![image](./BuilderImages/BuilderImagesAtualizadas/ChatSource.png)

Agora clique no botão ![image](./BuilderImages/filterButton.png) irá abrir a seguinte janela modal:

![image](./BuilderImages/modalfilter.png)

Na Janela modal em "Filter name" escreva "GetAll" clique no botão ![image](./BuilderImages/buttonaddfilter.png) em "Field" selecione "Chat" e em "Operation" selecione "DIFFERENT" como no Gif abaixo:

![image](./BuilderImages/BuilderImagesAtualizadas/ChatRepeaterFilter.gif)

Agora arraste o componente "Chat" para dentro do "Repeater" como no gif abaixo:

![image](./BuilderImages/BuilderImagesAtualizadas/ChatRepeater.gif)

Em “Properties of Field” vá até "source" em "DataBind" selecione "Chat" como na imagem abaixo:

![image](./BuilderImages/BuilderImagesAtualizadas/ChatDataBind.png)

Agora clique no botão ![image](./BuilderImages/saveButton.png) e depois execute a aplicação clicando no botão ![image](./BuilderImages/RunButton.png) vooê vai ver a seguinte pagina:

![image](./BuilderImages/pagechatjpg.png)

Volte no "FormChat" execute a aplicação clicando no botão ![image](./BuilderImages/RunButton.png) você sera direcionado para outra aba lá voce irá clicar em ![image](./BuilderImages/newbutton.png) e fazer a requisição do chat como no Gif abaixo:

![image](./BuilderImages/formechatgifrun.gif)

Após a requisição ser feita na tela abrirá uma caixa como na imagem abaixo, nela você consegue adicionar o tópico do Chat e o numero de participantes.

![image](./BuilderImages/chatsetings.png)

Agora volte para a tela do "PageChat" clique no botão ![image](./BuilderImages/newbutton.png) como no gif abaixo:

![image](./BuilderImages/pagechatgif2.gif)


é assim que fica o seu chat pronto como na imagem abaixo:

![image](./BuilderImages/chatpage.png)

<div id='id-Location'/>

## Location 🗺️

![image](./BuilderImages/location1.png)

O componente "Location" captura sua localização atual de maneira precisa.

Selecione o componente "Location", arrastando-o e soltando-o onde está escrito "Drop new field here!". 

![image](./BuilderImages/location2.gif)

Ao adicionar o componente ao formulário, você perceberá que ele é uma incorporação do Google Maps.

Para armazenar sua localização, insira o componente "Textfield" ao lado do "Location".

![image](./BuilderImages/location3.gif)

Em seguida execute o formulário, clicando no botão ![image](./BuilderImages/run.png) , e crie um novo registro, clicando em ![image](./BuilderImages/new.png).

Não faça nenhuma inserção, apenas salve o formulário.

![image](./BuilderImages/locationgrid.gif)

Perceba que sua localização ficará salva na grid do form em detalhes, incluindo informações como cidade, bairro, nome da rua, CEP, etc.

![image](./BuilderImages/datagridprint.png)

⚠️ AVISO: Para que o componente funcione corretamente, certifique-se de permitir em seu navegador que o Builder acesse suas informações de localização.

<div id='id-Chart'/>

## Chart 📊

![image](./BuilderImages/chart.png)

🚨ATENÇÃO: Para utilizar esse componente, é necessário já ter realizado o tutorial “DataSource”.

O componente "Chart" cria automaticamente um gráfico a partir de registros em um formulário. Você tem a liberdade de escolher o tipo de gráfico desejado e o esquema de cores presente nele.

![image](./BuilderImages/printChart.png)

Comece gerando os dados que serão exibidos no gráfico. Crie um formulário e registre as informações desejadas.

![image](./BuilderImages/formChart.png)

![image](./BuilderImages/datagridChart.png)

Em seguida, crie um DataSource para cada gráfico. Ele servirá como fonte de dados do componente.

Selecione o formulário criado anteriormente e marque apenas o campo que contém os dados a serem apresentados.

![image](./BuilderImages/gifChart.gif)

Para contar o número de registros desse campo, escolha Count em Operations. Em Field, selecione o campo assinalado e, em Alias, atribua um nome a essa variável.

![image](./BuilderImages/gif2Chart.gif)

Clique em ![image](./BuilderImages/saveclouse.png) para concluir a etapa do DataSource.

Finalmente, crie uma page e insira o componente "Chart", arrastando-o e soltando-o onde está escrito "Drop new field here!".

![image](./BuilderImages/dropChart.gif)

Nas propriedades do campo, clique em Edit Chart Properties. 

![image](./BuilderImages/printValueChart.png)

Selecione o DataSource criado, escolha a variável que armazena a contagem dos registros em "Value" e, em "Label", o único campo marcado no DataSource. 

![image](./BuilderImages/valueChart.gif)

Clique em ![image](./BuilderImages/addProperty.png) e, em seguida, em ![image](./BuilderImages/save.png).

Salve a página.

Escolha o tipo de gráfico desejado em "Chart Type" e selecione uma paleta de cores adequada em "Color Scheme".

![image](./BuilderImages/colorChart.gif)

Repita esse processo para criar outros gráficos.

🔗 Vídeo: https://www.youtube.com/watch?v=EOJhpeBf8Yo

<div id='id-Multi-Select'/>

## Multi-Select 🌐

![image](./BuilderImages/iconeMultiselect.png)

O componente "Multi-Select" é um dropdown que possibilita a seleção de várias opções.

Insira o componente, arrastando-o e soltando-o onde está escrito "Drop new field here!". 

![image](./BuilderImages/multi-select.gif)

⚠️ O componente "Multi-Select" utiliza como source o componente <a href="#dropdowndb-📥">"DropdownDB"</a>. Por isso, antes de utilizar o "Multi-Select", certifique-se de já ter criado em outro form um "DropdownDB" com as opções desejadas. 

![image](./BuilderImages/dropdowndbesportesMultiselect.png)

### Multi-Select 🌐 > SOURCE🔌

![image](./BuilderImages/sourceMultiselect.png)

Em "Form", selecione o formulário que contém o campo "DropdownDB".

![image](./BuilderImages/formMultiselect.png)

Em "Description Field", selecione o name do campo "DropdownDB".

![image](./BuilderImages/discriptionfieldMultiselect.png)

Em "Label Field", selecione a label do campo "DropdownDB".

![image](./BuilderImages/labelfieldMultiselect.png)

Execute a aplicação e teste a funcionalidade.

![image](./BuilderImages/runMultiselect.gif)

<div id='id-Grid'/>

## Grid 🗃️

![image](./BuilderImages/iconeGrid.png)

O componente "Grid" exibe dados inseridos pelo usuário através de um layout semelhante a Datagrid do form. 

Primeiramente, crie o form que irá armazenar os dados.

![image](./BuilderImages/formGrid.png)

Em seguida, crie uma page e insira o componente "Grid", arrastando-o e soltando-o onde está escrito "Drop new field here!". 

![image](./BuilderImages/arrastandocomponenteGrid.gif)

### Grid 🗃️ > SOURCE🔌

![image](./BuilderImages/sourceGrid.png)

Em "DataSource", clique no botão ![image](./BuilderImages/plusDatasource.png) para criar um novo DataSource.

Insira um título, selecione o form criado anteriormente e marque todos os campos.

![image](./BuilderImages/datasourceGrid.gif)

Salve o DataSource clicando em ![image](./BuilderImages/saveclouse.png).

Selecione o DataSource criado.

![image](./BuilderImages/selecionardatasourceGrid.gif)

Posteriormente, clique em ![image](./BuilderImages/addcolumnsGrid.png) para organizar as colunas da grid.

Insira o nome da coluna, a largura em porcentagem e o campo que armazena o dado. Clique em ![image](./BuilderImages/addGrid.png) para salvar.

![image](./BuilderImages/addcolumnsgifGrid.gif)

Após adicionar todas as colunas, clique em ![image](./BuilderImages/closeGif.png).

![image](./BuilderImages/closegifGrid.gif)

Você também pode adicionar controles a grid clicando em ![image](./BuilderImages/addcontrolsGrid.png), porém atente-se ao aviso.

⚠️ AVISO: Os próximos passos irão exigir conhecimentos específicos em programação, mais especificamente na linguagem JavaScript.

Insira um título e um ícone para o controle e, em "Function", o nome da função que irá gerar a funcionalidade.

![image](./BuilderImages/addcontrolsgifGrid.gif)

🚨 Em "Control Icon", você deve inserir a classe do ícone desejado. Busque as opções disponíveis no site Font Awesome (https://fontawesome.com/icons)

![image](./BuilderImages/fontawesomeGrid.png)

🚨 O código em JavaScript deve ser escrito na aba "Custom Script", disponível em "Dev Properties".

![image](./BuilderImages/scriptGrid.gif)

Finalmente, execute o form e faça um registro.

![image](./BuilderImages/runformGrid.gif)

Em seguida, execute a page e visualize na grid o registro feito no form.

![image](./BuilderImages/runpageGrid.gif)

🔗 Vídeo: https://www.youtube.com/watch?v=LZUeBbknHs0

<div id='id-Carousel'/>

## Carousel 🎠

![image](./BuilderImages/iconeCarousel.png)

🚨ATENÇÃO: Esse componente requer a utilização do componente <a href="#upload-image-📸📩">"Upload Image"</a> e do “DataSource”.

O componente "Carousel" cria um carrosel de imagens a partir de um DataSource.

Primeiro você deve criar o formulário que armazenará as imagens desejadas. Salve os registros através do componente "Upload Image".

![image](./BuilderImages/cadastrandimagemCarousel.gif)

Em seguida crie uma page e insira o componente "Carousel", arrastando-o e soltando-o.

![image](./BuilderImages/arrastarcampoCarousel.gif)

### Carousel 🎠 > SOURCE🔌

![image](./BuilderImages/sourceCarousel.png)

Em "DataSource", clique no botão ![image](./BuilderImages/plusDatasource.png) para criar um novo DataSource.

Insira um título, selecione o form criado anteriormente e marque o campo "Upload Image".

![image](./BuilderImages/datasourceCarousel.gif)

Clique em ![image](./BuilderImages/saveclouse.png).

Agora selecione o DataSource criado.

![image](./BuilderImages/selecionardatasourceCarousel.gif)

Em "Image", selecione o componente "Upload Image".

![image](./BuilderImages/imageCarousel.png)

Em "Visible Items", defina quantas imagens cada slide terá.

![image](./BuilderImages/visibleitemsCarousel.png)

Em "N. Scroll Items", defina quantas imagens irão aparecer a cada mudança de slide.

![image](./BuilderImages/nscrollitemsCarousel.png)

OBS: Tanto em "Visible Items" quanto em "N. Scroll Items", o mais comum é a definição de somente 1 imagem. 

Em "Height", defina a altura do carrosel (em pixels).

![image](./BuilderImages/heightCarousel.png)

Execute a página e teste a funcionalidade.

![image](./BuilderImages/runCarousel.gif)

<div id='id-BarCode'/>

## BarCode 

![image](./BuilderImages/BuilderImagesAtualizadas/BarCode.png)

O componente BarCode cria um código de barra, usando letras e números.

Para criar, arrastamos o componente para local desejado.

![video](./BuilderImages/BuilderImagesAtualizadas/BarCode.mp4)

E vamos ate "Values".

![image](./BuilderImages/BuilderImagesAtualizadas/BarCodeValues.png)

Na flag "display Value" podemos mostrar junto ao código de barras o código em formato de letras e número que sera inserido em "Default".

Em "Barcode type" selecionamos o tipo de código que queremos.

![image](./BuilderImages/BuilderImagesAtualizadas/BarCodeType.png)

Em "Default" inserimos o código do produto ou objeto para gerar o código de barras.

![image](./BuilderImages/BuilderImagesAtualizadas/BarCodeDefault.png)

🔗 Vídeo: https://www.youtube.com/watch?v=vlpTgBW2874

## FORM 📄

<div id='id-form'/>

<div id='id-CSS'/>

## CSS Class 🎨🖌️

O Componente CSS está integrado às “Properties of Field” dos componentes e não exige amplo conhecimento de programação, proporcionando ao usuário a dispensa de código.

A aba “Properties of Field” sempre será exibida ao arrastar e soltar um componente ou ao clicar em um componente já presente na aplicação.

![image](./BuilderImages/addclassCSS.gif)

Na seção “Presentation”, clique em “Add Class” e em seguida no botão +.

Em “Type your style”, insira o nome da classe. Através das classes, é possível reutilizar estilos em outros componentes do mesmo projeto.

![image](./BuilderImages/inputstyleCSS.gif)

A partir de agora, você pode começar a estilizar seu componente:

![image](./BuilderImages/section1.png)

🔹Width: largura (em pixels).

🔹Height: altura (em pixels).

🔹Background: cor de fundo.

➡️ Ative a opção Border para estilizar as bordas do componente.

![image](./BuilderImages/bordaCSS.png)

🔸Size: espessura da borda (em pixels).

🔸Radius: arredondamento da borda (em pixels).

Clique em ![image](./BuilderImages/setainvertidaCSS.png) para adicionar espessuras nas bordas em diferentes dimensões do componente, nesta ordem: borda superior, borda direita, borda inferior, borda esquerda.

![image](./BuilderImages/section2.png)

🔸Color: cor da borda do componente.

🔹Padding: distância entre o conteúdo de um componente e suas bordas (em pixels).

🔹Margin: distância entre componentes (em pixels).

![image](./BuilderImages/section3.png)

➡️ Adicione medidas em diferentes dimensões do componente. Observe que:

- Top: superior
- Right: direita
- Bottom: inferior
- Left: esquerda

➡️ Ative a opção Display Flex para transformar o componente em um container flexível e alinhar itens “filhos”.

![image](./BuilderImages/displayflexCSS.png)

📌 Flex-Direction: direção em que os itens são alinhados.

- column: coluna
- column-reverse: coluna de baixo para cima
- row: linha
- row-reverse: linha da direita para esquerda

![image](./BuilderImages/flexdirectionCSS.png)

📌 Justify-Content: alinhamento horizontal dos itens.
- center: centro
- flex-start: borda de início
- flex-end: borda final
- space around: mesmo espaço entre os itens, com um espaço igual para as margens
- space-between: mesmo espaço entre os itens, colados junto à margem.

![image](./BuilderImages/justifycontentCSS.png)

📌 Flex-Wrap: Define se os itens devem quebrar ou não a linha.
- wrap: Quebra a linha assim que um dos flex itens não puder mais ser compactado.
- nowrap: Valor padrão, não permite a quebra de linha.
- wrap-reverse: Quebra a linha assim que um dos flex itens não puder mais ser compactado. A quebra é na direção contrária, ou seja para a linha acima.

![image](./BuilderImages/flexwrapCSS.png)

📌 Align-Items: alinhamento vertical dos itens
- center: centro
- flex-start: borda de início
- flex-end: borda final
- stretch: estica os itens para preencher todo o container
- baseline: itens são alinhados de acordo com o alinhamento de seus textos.

![image](./BuilderImages/alignitemsCSS.png)

📌 Align-Content: organiza as linhas do container quando há espaço sobrando no eixo vertical
- space-between: ítens distribuídos igualmente; a primeira linha junto ao início do container e a última linha junto ao final do container.
- space-around: ítens distribuídos igualmente com o mesmo espaçamento entre cada linha.
- stretch: ítens em cada linha esticam para ocupar o espaço remanescente entre elas.
- center: ítens centralizados no container.
- flex-start: ítens alinhados com o início do container.
- flex-end: ítens alinhados com o final do container.

![image](./BuilderImages/aligncontentCSS.png)

🔹Font-Family: define a família da fonte do componente.

🔹Text align: define o alinhamento do texto do componente.

![image](./BuilderImages/section4.png)

🔹Size: tamanho da label do componente, podendo escolher a medida (px, %, vh, vw, rem, em).

![image](./BuilderImages/section5.png)

🔹Color: cor da label do componente.

🔹Weight: intensidade do negrito da label do componente (bold, normal, bolder, lighter)

![image](./BuilderImages/weightCSS.png)

🔹Style: estilo da label do componente (italic, normal, oblique)

![image](./BuilderImages/styleCSS.png)

🔹Decoration: decorações acima e abaixo da label do componente

![image](./BuilderImages/decorationCSS.png)

🔹Line Height: altura da linha da label do componente (em pixels)

🔹Letter Spacing: espaço entre as letras da label do componente (em pixels)

🔹Opacity: opacidade da label do componente (em pixels).

![image](./BuilderImages/section6.png)

➡️ Ative a opção Shadow para adicionar sombras ao componente.

![image](./BuilderImages/section7.png)

![image](./BuilderImages/section8.png)

🔸X: sombra horizontal (em pixels)

🔸Y: sombra vertical (em pixels)

🔸Blur: desfoque da sombra (em pixels)

🔸Spread: propagação da sombra (em pixels)

🔸Color: cor da sombra 

Clique em ![image](./BuilderImages/saveCSS.png) para salvar a classe.

🔗 Vídeo: https://www.youtube.com/watch?v=7w-d7rYo8LQ

<div id='id-Tab'/>

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
![formtesev](/BuilderImages/BuilderImagesAtualizadas/DevProperties.gif)
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
</ul>

e Form Rule (Regra do formulário) - Ao clicar nele, irá abrir o seguinte modal:
![rule2](/BuilderImages/BuilderImagesAtualizadas/RuleEditor.png).

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


<div id='id-Software'/>

## Replicação de Software

Entrar em contato com o suporte da Easy Comtec.

<div id='id-list'/>

## List
Para visualizar o formulário em formato de lista, crie um novo formulário e adicione os componentes “Textfield” e “Integer” e nomeie-os de “Name” e “Age” respectivamente.

![image](/BuilderImages/BuilderImagesAtualizadas/List.png)


Clique no botão ![image13](https://user-images.githubusercontent.com/81401104/126831008-669c7782-f252-4d38-8020-6ff676c6455a.png).

Agora selecione a opção “List” no cabeçário. Irá aparecer da seguinte forma:
![image](./BuilderImages/BuilderImagesAtualizadas/ListExec.png)



Ao clicar no botão ![image](https://user-images.githubusercontent.com/81401104/117356874-a14f9800-ae8a-11eb-8fcf-ac2385cfd89b.png), 

irá aparecer a seguinte janela em modal:
![image](./BuilderImages/BuilderImagesAtualizadas/ListModal.png)

Select fields to be displayed in list: Selecione os campos para aparecer na lista.

Order: Ordem , no calo dos items na coluna.

Ascend: Subir.

Descend: Descer.

Select All: Selecionar todos.

Select none: Selecionar nenhum.

Close: Fechar.

De volta na tela da lista, ao clicar no botão  ![image](https://user-images.githubusercontent.com/81401104/117357136-f12e5f00-ae8a-11eb-8bc7-b6c401199f1f.png)
(nova coluna), o seguinte modal irá aparecer:

![image](/BuilderImages/BuilderImagesAtualizadas/ListAddColum.png)

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

Caso queira editar as propriedades das colunas, passe o mouse em cima do nome de alguma das colunas ou clique com o botão do mouse direito e então irá aparecer os seguintes símbolos no canto esquerdo:

![image](https://user-images.githubusercontent.com/81401104/117493776-d111a500-af49-11eb-8f88-46f1d5e89512.png)

clique no símbolo de baixo, então irá mostrar as propriedades para serem editadas:

![image](/BuilderImages/BuilderImagesAtualizadas/ListPropertiesOfField.png)

E aqui dá para editar o nome da classe, título da coluna, largura da coluna e criar eventos.

Execute essa aplicação (com “Name” e “Age”). E então adicione os seguintes registros:

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

## 👨👩 Como Adicionar Um Usuário 

Para realizar esse tutorial, é necessário que tenha feito antes os passos no tutorial do 
“End User Access” na seção das configurações do projeto.

Após você ter criado o seu formulário, e clicar no botão ![image13](https://user-images.githubusercontent.com/81401104/126830920-3670bf6e-459e-46ee-8ed4-04c061a1cc97.png) e depois no ![Run](https://user-images.githubusercontent.com/81401104/126830943-bcef2a61-ad8e-4b9f-9de0-71aa6373223d.png), irá abrir a tela dos registros:

![image](https://user-images.githubusercontent.com/81401104/117496064-e0deb880-af4c-11eb-8b49-c002c05f6e9d.png)

No topo desta tela, clique em “Admin”, irá aparecer uma lista de opções, selecione a opção “User”.

![image](https://user-images.githubusercontent.com/81401104/117496105-f0f69800-af4c-11eb-8424-88da419dab10.png)

E então o título da tela irá mudar para “User”, pois iremos registrar usuários, igual na imagem a seguir:

![image](/BuilderImages/BuilderImagesAtualizadas/UserForm.png)

Clique no botão ![image15](https://user-images.githubusercontent.com/81401104/117496555-96aa0700-af4d-11eb-8756-099fc146e27e.png)

Preencha os campos com as informações correspondentes. Nesse caso eu criei um usuário fictício, apenas para demonstrar.

![image](/BuilderImages/BuilderImagesAtualizadas/UserNew.png)

Então, clique no botão ![image63](https://user-images.githubusercontent.com/81401104/126830855-6bed3f71-fc44-4afb-9982-6550f9c7307d.png).

E irá aparecer a tela de registro de usuário.

![image](/BuilderImages/BuilderImagesAtualizadas/User1.png)

<div id='id-Permission'/>

## 👨👩 Como Dar Permissão Ao Usuário 

Para realizar esse tutorial, é necessário que tenha feito antes os passos no tutorial do 
“Como Adicionar Um Usuário”.

Após ter criar o formulário e executar a aplicação, você irá se deparar com a tela dos registros:

![image](https://user-images.githubusercontent.com/81401104/117496975-2bad0000-af4e-11eb-8bf0-0eaa05261cdd.png)

No topo dessa página, clique no “Admin”, selecione a opção “Role”

![image](https://user-images.githubusercontent.com/81401104/117497065-4f704600-af4e-11eb-929a-bad1a2d9ba6c.png)

E então irá abrir a seguinte tela:
![image](/BuilderImages/BuilderImagesAtualizadas/Role.png)


Clique no  botão  ![image15](https://user-images.githubusercontent.com/81401104/117497267-aa09a200-af4e-11eb-97e1-8b37ea971925.png) e então abrirá a seguinte página:

Em “Name” escreva “Usuário” e em “Manager” selecione a opção criada antes. Então selecione todas as opções “View, Insert, Update, Delete”  (dependendo do que você quer, irá selecionar apenas alguns).
![image](/BuilderImages/BuilderImagesAtualizadas/RoleNew.png)


Então clique no botão ![image](https://user-images.githubusercontent.com/81401104/117497338-c574ad00-af4e-11eb-9870-9864f5a8303c.png).

Então irá para a seguinte página:
![image](/BuilderImages/BuilderImagesAtualizadas/RoleForm.png)

Clique no botão  ![image](https://user-images.githubusercontent.com/81401104/117497416-d7eee680-af4e-11eb-8776-60c5dc96225f.png) 
para voltar a editar o mesmo formulário:

![image](/BuilderImages/BuilderImagesAtualizadas/RoleNew.png)


E agora clique no aba “User Role”, no topo esquerdo essa página:
![image](/BuilderImages/BuilderImagesAtualizadas/UserRole.png)


Irá para a seguinte tela:

![image](/BuilderImages/BuilderImagesAtualizadas/UserRoleForm.png)


Clique no botão ![image15](https://user-images.githubusercontent.com/81401104/117497552-04a2fe00-af4f-11eb-8bb6-b8a9de3cfff6.png).

![image](/BuilderImages/BuilderImagesAtualizadas/UserRoleModal.png)

Agora clique no campo do “User ID” e selecione o usuário criado anteriormente.

Então clique no botão ![image](https://user-images.githubusercontent.com/81401104/117498098-b4786b80-af4f-11eb-9005-648c8442eeb8.png)

![image](/BuilderImages/BuilderImagesAtualizadas/RoleForm.png)


E agora você consegue visualizar os usuários que estão inseridos no “Role”.


<div id="id-Form-Events" />

## Form Events ⚡

<p>Forms events run scripts on specific events that happen while using forms.</p>

####Events Types:
<ul>
<li><b>OnLoadForm</b>  - Called whenever a Page is loaded.</li>
<li><b>OnNewForm</b> - Called whenever the user clicks to insert new records</li>
<li><b>OnEditForm</b> - Called whenever you edit a record</li>
</ul>

#####Examples of use:
To use it just declare a function in the "Custom scripts" with the name of the event, in this case the "onNewForm" was used.

<img src="./BuilderImages/FormEvents/OnNewFormDesign.gif">

At runtime, the constructor will look for the function with the keyword "onNewForm" in your "Custom Scripts" and execute it if it exists

<img src="./BuilderImages/FormEvents/OnNewFormRuntime.gif">

With "OnLoadForm" and "OnEditForm" the usage is the same.

Edit Form:
<img src="./BuilderImages/FormEvents/OnEditForm.gif">

Page:
<img src="./BuilderImages/FormEvents/OnLoadForm.gif">

Note: "OnLoadForm" is only effective in Pages.

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

Renomeie o “Textfield” para “Nome Completo” e o “Dropdown” para “Função”, tanto no “Name” quanto no “Label”  na seção “General” do “Properties of Field”.

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

![image](./BuilderImages/datasourceTools.png)

Em “Title” escreva o título do seu datasource, pode ser “DataSource X”, em “Class” selecione o Formulario que criou anteriormente "Formulario X" (Tutorial - “Formulário X”).
![image](./BuilderImages/datasourcetools2.png)


Clique duas vezes nos itens que aparece do lado direito da tela: “Funcao” e “Nome_Completo”.

![image](./BuilderImages/datasourcetools3new.png)


Perceba que foi adicionado para dentro do datasource. Agora clique no botão ![image](./BuilderImages/saveButton.png) e depois no botão![image](https://user-images.githubusercontent.com/81401104/117499529-b9d6b580-af51-11eb-8bd0-4d90679a2564.png).

Seu datasource foi criado:

![image](https://user-images.githubusercontent.com/81401104/117499564-c3f8b400-af51-11eb-8d66-6a1d6709301e.png)

🔗Vídeo: https://www.youtube.com/watch?v=MS_UWKBwO80&list=PLTHIfO0UrihGXWtezzJnmZgS74lfA3PdH&index=38

<div id='id-Process'/>

### 🔧 Process

Para utilizar o "Template", contate o suporte da Easy Comtec.

<div id='id-Job'/>

### 🔧 Process Job

Para utilizar o "Template", contate o suporte da Easy Comtec.

<div id='id-Report'/>

### 🔧 Report

Para realizar esse tutorial, é necessário que já tenha realizado os passos do tutorial “Formulário X” e  “Como Criar Um DataSource”.

Na tela inicial, quando logar na conta, se depará com a seguinte tela:

![image](./BuilderImages/Reportaba.png)


Selecione a aba “Report” e clique no botão ![image](./BuilderImages/newbutton.png).

Irá abrir a seguinte janela modal:

![image](./BuilderImages/reportmodal.png)


No “Title”, escreva o título do seu relatório (pode ser “Report X”), em "DataSource" selecione o datasource criado no tutorial anterios o “DataSource X”:

![image](./BuilderImages/reportname.png)


Clique no botão ![image](https://user-images.githubusercontent.com/81401104/117499759-0a4e1300-af52-11eb-8351-f8822d611d15.png). 

![image](./BuilderImages/reportimport.png)


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

Criando um novo projeto ou
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

Home Page: Pagina inicial do projeto.

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

Video Chat Twilio Settings Twilio Account Sid: Configurações de bate-papo por vídeo do Twilio
Sid da conta Twilio.

Twilio Api Key: Chave da API.

Chat Settings: Configurações do Chat.

Azure Communication Key: Chave de comunicação azure.

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

Date:
MM/dd/yyyy = (mês/ dia/ ano)<br> 
dd/MM/yyyy = (dia/ mês/ ano)<br>

DateTime:<br> 
MM/dd/yyyy hh:mm:ss a = [Mês/ dia/ ano  hora (0 a 12 AM/PM) :minuto :segundo]<br>
MM/dd/yyyy HH:mm:ss = [Mês/ dia/ ano  hora (0 a 23) :minuto: segundo]<br>
dd/MM/yyyy hh:mm:ss a = [dia/ mês/ ano  hora (0 a 12 AM/PM) :minuto :segundo]<br>
dd/MM/yyyy HH:mm:ss = [dia/ mês/ ano  hora (0 a 23) :minuto :segundo]<br>

##### Time:<br> 
HH:mm:ss = [Horas (0 a 23) :minutos :segundos]<br>
hh:mm :ss = [Horas (0 a 12) :minutos :segundos]<br>

##### Decimal:<br>
. (ponto)<br>
, (vírgula)<br>

#### 🙎‍♂️ End-User Access

Ao selecionar a aba do “End-User Access”, a seguinte tela irá aparecer:

![image](https://user-images.githubusercontent.com/81401104/117502591-1e940f00-af56-11eb-9a92-f67c1c4e7558.png)

 Aparecerá o item “End-user access type” - que significa “tipo de acesso ao usuário final” - com um dropdown com 3 opções:

Aparece o item “End-user access type” - que significa “tipo de acesso ao usuário final” - com um dropdown com 2 opções:

<ol>
 <li>Deny</li>
 <li>Authenticated </li>
</ol>

Ao selecionar a primeira opção (“Deny”), você estará negando acesso ao projeto pelo usuário final.

URL Access: Acesso da URL

Host: Hospedagem

Ao selecionar a 2ª opção (“Authenticated”), os seguintes conjuntos de campos irá aparecer:

![image](./BuilderImages/modalauthenticade.png)

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

<div id="id-PageTutorials"/>

## Page Tutorials 📄

<div id="id-gridInPage"/>

### Criar gride em uma page
⚠️ Importante:
- Para este procedimento será necessário utilizar uma variável de sessão.
- Certifique-se de Salvar após cada alteração.

Após criar o formulário com todas as entradas de dados que precisa, crie um datasource do mesmo e adicione os campos que irá precisar listar em sua page:
![image](/BuilderImages/BuilderImagesAtualizadas/Form.png)
![image](/BuilderImages/BuilderImagesAtualizadas/FormDataSource.png)

Deverá ser criado 2 pages, uma para listar os dados e outra para editar/excluir os dados.

Page 1 – Listar os dados:
Crie a page e em page class adicione a classe do formulário criado anteriormente.
![image](/BuilderImages/BuilderImagesAtualizadas/PageDataSourceForm.gif)

Passo 01 – Montando a grid
Usando Label faremos o cabeçalho de nossa grid.
![image](/BuilderImages/BuilderImagesAtualizadas/Page.gif)

Para listar os dados usaremos a ferramenta Repeater, em sua propriedade > Source > DataSource será escolhido o Datasouce criado.         
![image](/BuilderImages/BuilderImagesAtualizadas/PageRepetSource.png)

Com a ferramenta Label será feito o Databind com os dados vindo do datasource “Datasource” que criamos.
![image](/BuilderImages/BuilderImagesAtualizadas/PageDataSource.gif)

⚠️ O passo será repetido para as demais entradas com seus respectivos databinds.

Adicione uma outra label e adicione em seu databind o Id do formulário e desmarque a opção visible.
![image](/BuilderImages/BuilderImagesAtualizadas/RepeatId.gif)

Page 02 – Editar os dados
Crie a page e em page class adicione a classe do formulário como foi feito na page anterior.
<img src="./BuilderImages/GridInPage/img/0004.png">

Adicione um Hidden e nas propriedades General > Session Value selecione a variável de sessão criada.
<img src="./BuilderImages/GridInPage/gifs/0005.gif">

Adicione um repeater um em suas propriedades Source > DataSource e Source > Show, selecione  “Datasource for grid” e “First or Defalt ” respectivamente. (O First or Defalt irá mostrar o dado a ser editado, caso ele não exista será criado)
<img src="./BuilderImages/GridInPage/img/0005.png">

Adicione os campos que iram receber os dados a serem editados ou criarão novos dados. Os campos devem corresponder aos campos criados no formulário no começo deste tutorial.
<img src="./BuilderImages/GridInPage/img/0006.png">

Os campos adicionados também devem conter os respectivos databinds além de Page Class e Class Property em propriedades > Others.
<img src="./BuilderImages/GridInPage/gifs/0006.gif">

Adicione um HIdden para receber o databind do formulário.
<img src="./BuilderImages/GridInPage/gifs/0007.gif">

Adicione um botão e configure-o para que seja responsável por salvar as informações.
<img src="./BuilderImages/GridInPage/gifs/0008.gif">

De volta a Page 1 vamos adicionar os botões para editar e deletar os campos.
Será necessário um pequeno script que passará o Id para a Variável de sessão e redirecionará à page 2, onde os dados poderão ser editados ou criados.
Adicione o botão e o configure como abaixo (Botão Edit):
<img src="./BuilderImages/GridInPage/gifs/0009.gif">

Em Dev Properties adicione o script do evento que foi adicionado ao botão.
Script:
function redirect() {
    this.session.variavel_de_sessao = this.entity.Id
    window.open("URL do form a qual deseja redirecionar", "_self");
}
<img src="./BuilderImages/GridInPage/img/0007.png">

Adicione o segundo botão e o configure como abaixo (Botão Delete):
<img src="./BuilderImages/GridInPage/gifs/0010.gif">

Obs.: Como esse botão apenas irá excluir uma entrada do registro não será necessário script para ele.
Para que seja possível Editar o campo que foi clicado na nossa Page 1, será necessário configurar um filtro no repeater da Page 2.
Clique no Reapeater da Page 2 e em Propriedades > Souce > Filter e adicione um novo filtro e Configure-o como abaixo:
<img src="./BuilderImages/GridInPage/gifs/0011.gif">

Ainda na Page 2 adicione um botão para que volte a Page 1 onde é listado os dados.
<img src="./BuilderImages/GridInPage/gifs/0012.gif">

Por fim na Page 1 vamos adicionar o botão para criar uma nova entrada.
<img src="./BuilderImages/GridInPage/gifs/0013.gif">

Na aba dev properties adicione o função adicionada ao botão.
Script:
function addNew() {
    this.session.variavel_de_sessao = null
    window.open("URL do form a qual deseja redirecionar", "_self");
}
<img src="./BuilderImages/GridInPage/img/0009.png">

⚠️ É muito importante que os botões estejam dentro dos repeater para que funcionem corretamente.

## Resultado:
<img src="./BuilderImages/GridInPage/gifs/0014.gif">

<div id="id-FiltroDDB"/>

### Como filtrar um DropdownDB por outro DropdownDB

⚠️ Será usado como exemplo o filtro de cidade por estado. Fique tranquilo, você precisará apenas repetir esse processo em outros cenários.

Crie os formulários que servirão como source dos componentes e popule suas tabelas com as informações desejadas. Segue o exemplo:

Form de Estado

![image](./BuilderImages/estadosfiltrodropdowndb.png)

![image](./BuilderImages/gridestadosfiltrodropdowndb.png)

Form de Cidade

![image](./BuilderImages/municipiosfiltrodropdowndb.png)

![image](./BuilderImages/gridmunicipiosfiltrodropdowndb.png)

Crie uma page e insira os componentes "DropdownDB".

![image](./BuilderImages/arrastarcamposfiltrodropdowndb.gif)

Insira as informações necessárias na seção Source ("Form" e "Description Field").

![image](./BuilderImages/sourceestadosfiltrodropdowndb.png)

![image](./BuilderImages/sourcemunicipiosfiltrodropdowndb.png)

Abra as "Properties of Field" do campo que terá os dados filtrados.

![image](./BuilderImages/propriedadesfiltrodropdowndb.gif)

### DropdownDB 📥 > SOURCE 🔌 > FILTERS 🖇️

Em "Use" e "Filter By", selecione o Name do DropdownDB que servirá como parâmetro.

![image](./BuilderImages/filtersfiltrodropdowndb.png)

Execute a aplicação e teste a funcionalidade.

![image](./BuilderImages/runfiltrodropdowndb.gif)

🚨 ATENÇÃO: Documentação em Desenvolvimento.
