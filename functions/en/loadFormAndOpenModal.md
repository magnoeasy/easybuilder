# Usage Documentation: `this.parent.loadFormAndOpenModal`

---

## Method  
```ts
loadFormAndOpenModal(
  options: {
    FormId: string | number;
    FormKey?: any;
    [key: string]: any;
  }
): Promise<DialogInstance>
```

---

## Purpose  
Loads a specified form inside a modal dialog, allowing users to interact with the form without navigating away from the current page.

---

## Options  
- **`FormId`** (`string | number`)  
  Identifier or key of the form to load.  
- **`FormKey?`** (`any`, optional)  
  A primary key or identifier passed to the form to prefill or filter data.  
- **Additional options**  
  Any other parameters supported by the modal loader service.

---

## Return Value  
A `Promise<DialogInstance>` that resolves when the modal is opened.  
The `DialogInstance` typically provides:  
- **`result`**: A `Promise` that resolves when the modal closes.  
- **`type`**: Indicator of the modal mode (e.g., `"edit"` or `"create"`).  
- **`close()`**: Method to programmatically close the modal.

---

## Behavior  
1. Retrieves the form definition for `FormId` from the runtime form service.  
2. Initializes a modal dialog container.  
3. Renders the form inside the modal.  
4. Passes any `FormKey` or additional options to the form’s context.  
5. Returns the resulting `DialogInstance` for further handling.

---

## Examples  

### 1. Opening a Form Modal without a Key  
```js
this.parent.loadFormAndOpenModal({ FormId: "Add_Deal_Product_Modal" })
  .then(dialoger => {
    // Store the dialog instance for later use
    window.SelectDealProductModalScope.dialogInstance = dialoger;
    // React to modal close
    dialoger.result.then(() => {
      console.log("Modal closed");
    });
  });
```

---

### 2. Opening a Form Modal with a Primary Key  
```js
this.parent.loadFormAndOpenModal({ 
  FormId: 55765, 
  FormKey: primaryKey 
})
.then(dialoger => {
  // After modal opens, refresh related data
  ProfProfile.getField('Repeater')[0].fetchData();
});
```

---

## Notes  
- Always handle the returned promise to catch when the modal is ready.  
- Use `dialoger.result` to execute logic when the user closes or submits the modal.  
- The exact structure of `DialogInstance` depends on your modal service implementation (e.g., SweetAlert2, Angular Material).  
