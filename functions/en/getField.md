# getField API Documentation

## Overview

The `getField` function provides a unified interface to interact with form fields in your page or form scripts. It returns either a **FieldAPI** object for single-value fields or an array of **RepeaterManagerType** for repeater fields, depending on the field type.

---

## Signature

```javascript
// Single-value fields:
const fieldAPI = this.getField('FieldTitle');

// Repeater fields:
const repeaterAPIs = this.getField('RepeaterFieldTitle'); // Array of managers
```

---

## 1. Repeater Fields

**RepeaterManagerType methods/properties:**

| Property / Method         | Description                                 |
|---------------------------|---------------------------------------------|
| `value`                   | Current repeater items (array of objects).  |
| `dataSource`              | Raw data source before mapping.             |
| `parentValues`            | Parent context values.                      |
| `fetchData(): Promise`    | Load or reload repeater data.               |
| `loadMore(): Promise`     | Load the next batch/page of data.           |
| `setValue(vals: any[])`   | Replace all repeater items.                 |
| `detectChanges()`         | Trigger UI update for this repeater.        |
| `setVisible(flag)`        | Show or hide the repeater.                  |

```javascript
// Access the first repeater manager
const productsRep = this.getField('Products')[0];

// Append a new item
const newItem = { ProductId: 123, Quantity: 2 };
productsRep.setValue(productsRep.value.concat(newItem));

// Or replace all items at once
productsRep.setValue([
  { ProductId: 101, Quantity: 5 },
  newItem
]);

// Load remote data and refresh UI
productsRep.fetchData().then(() => {
  productsRep.detectChanges();
});

// Read current items
const items = productsRep.value;
```

---

## 2. Dropdown / DropdownDB Fields

**DropdownAPI methods/properties:**

| Property / Method           | Description                                   |
|-----------------------------|-----------------------------------------------|
| `options`                   | Array of `{ Id, Description }` options.       |
| `value`                     | Current selected value.                       |
| `fetchData(): Promise`      | Load options from server (DB-backed).         |
| `setValue(val)`             | Select a value.                               |
| `setOptions(opts)`          | Override the options array.                   |
| `setVisible(flag)`          | Show or hide the dropdown.                    |
| `setDisabled(flag)`         | Enable or disable the dropdown.               |
| `detectChanges()`           | Trigger UI refresh.                           |

```javascript
const countryField = this.getField('Country');

// Load dynamic options
countryField.fetchData().then(() => {
  // Override options if needed
  countryField.setOptions([
    { Id: 'BR', Description: 'Brazil' },
    { Id: 'US', Description: 'United States' }
  ]);
  // Select a value
  countryField.setValue('BR');
  // Refresh the UI
  countryField.detectChanges();
});
```

---

## 3. AutoComplete Fields

**AutoCompleteAPI methods/properties:**

| Property / Method         | Description                          |
|---------------------------|--------------------------------------|
| `options`                 | Suggestion list (array of values).   |
| `value`                   | Current input or selection.          |
| `fetchData(): Promise`    | Load suggestion data.                |
| `setValue(val)`           | Set the input value.                 |
| `setVisible(flag)`        | Show or hide control.                |
| `setDisabled(flag)`       | Enable or disable control.           |
| `detectChanges()`         | Trigger UI refresh.                  |

```javascript
const tagField = this.getField('SearchTags');

// Fetch suggestions then set a value
tagField.fetchData().then(() => {
  tagField.setValue('Important');
  tagField.detectChanges();
});

// Read current suggestions
const suggestions = tagField.options;
```

---

## 4. OneToMany Fields

**OneToManyAPI methods/properties:**

| Property / Method       | Description                         |
|-------------------------|-------------------------------------|
| `value`                 | Current list values (array).        |
| `add(item)`             | Append a new row/item.              |
| `setValue(vals)`        | Replace entire list.                |
| `detectChanges()`       | Refresh the UI.                     |

```javascript
const itemsField = this.getField('OrderItems');

// Add a new row
itemsField.add({ ProductId: 10, Quantity: 1 });

// Replace entire list
itemsField.setValue([{ ProductId: 10, Quantity: 1 }]);

// Refresh UI
itemsField.detectChanges();
```

---

## 5. Chat Fields

**ChatAPI methods/properties:**

| Property / Method         | Description                           |
|---------------------------|---------------------------------------|
| `messages`                | Chat history (array of messages).     |
| `sendMessage(msg)`        | Send a new message.                   |
| `setMessage(msg)`         | Set the draft message text.           |
| `value`                   | Current chat field value.             |
| `setVisible(flag)`        | Show/hide chat.                       |
| `setDisabled(flag)`       | Enable/disable chat input.            |
| `detectChanges()`         | Trigger UI refresh.                   |

```javascript
const chatAPI = this.getField('SupportChat');

// Set and send a message
chatAPI.setMessage('Hello!');
chatAPI.sendMessage('Hello!');

// Read chat history
const history = chatAPI.messages;

// Update UI if needed
chatAPI.detectChanges();
```

---

## 6. PageView Fields

**PageViewAPI methods/properties:**

| Property / Method        | Description                                |
|--------------------------|--------------------------------------------|
| `value`                  | Current field value.                       |
| `setPageView(name)`      | Load/swap to another form/view by name.    |
| `setVisible(flag)`       | Show or hide the view container.           |
| `setDisabled(flag)`      | Enable or disable interaction.             |
| `detectChanges()`        | Trigger UI refresh.                        |

```javascript
const detailsView = this.getField('DetailsView');

// Switch to another form
detailsView.setPageView('AnotherForm').then(() => {
  detailsView.detectChanges();
});
```

---

## 7. RenderContainer Fields

**RenderContainerAPI methods/properties:**

| Property / Method      | Description                          |
|------------------------|--------------------------------------|
| `reload(): Promise`    | Reload the container content.        |
| `setVisible(flag)`     | Show or hide the container.          |
| `setDisabled(flag)`    | Enable or disable the container.     |
| `detectChanges()`      | Trigger UI refresh.                  |

```javascript
const containerAPI = this.getField('CustomContainer');

// Reload and refresh UI
containerAPI.reload().then(() => {
  containerAPI.detectChanges();
});
```

---

## 8. Wizard Fields

**WizardAPI methods/properties:**

| Property / Method     | Description                         |
|-----------------------|-------------------------------------|
| `nextStep()`          | Move to next step.                  |
| `previousStep()`      | Move to previous step.              |
| `setVisible(flag)`    | Show/hide the wizard.               |
| `setDisabled(flag)`   | Enable/disable wizard controls.     |
| `detectChanges()`     | Trigger UI refresh.                 |

```javascript
const wizardAPI = this.getField('SetupWizard');

// Navigate through wizard steps
wizardAPI.nextStep();
wizardAPI.previousStep();
wizardAPI.detectChanges();
```

---

## Best Practices

- **Existence Check**: Always verify `this.getField('Key')` returns a valid result.
- **Index Repeaters**: Use `[0]` (or correct index) for repeater fields before invoking methods.
- **Change Detection**: Call `detectChanges()` after updates for immediate UI refresh.
- **Async Data**: Await `fetchData()` before reading values or options.

