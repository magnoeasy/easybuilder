# Lifecycle Event Handlers Documentation

## Overview

There are two ways to build UI in the platform:

1. **Pages**  
   - Static UI containers that render fields you drop onto them.  
   - No built‑in CRUD: dropping a text field on a page only renders a text input, without database integration.

2. **Forms**  
   - Full CRUD API support: dropping a text field on a form automatically creates a corresponding database column.  
   - Runtime for forms includes grids, buttons, and all operations (create, read, update, delete).

Based on this distinction, the following lifecycle event handlers are available:

---

## Events

| Event         | Fires When                   | Use Case                                    |
|---------------|------------------------------|---------------------------------------------|
| `onLoadForm`  | Page or form load            | General initialization, UI setup           |
| `onNewForm`   | Form open for **new** record | Set default values, generate IDs           |
| `onEditForm`  | Form open for **edit**       | Populate fields, fetch related data, disable fields |


## onLoadForm

- **When it fires**: Whenever a **Page** or **Form** is loaded in the browser.
- **Purpose**: Initialize UI state, import scripts, attach global listeners, set default session or entity values.
- **Signature**:
  ```javascript
  function onLoadForm() { /* ... */ }
  ```
- **Context**:
  - In a **Page**: run once when the page is rendered.
  - In a **Form**: run before any new/edit logic, after the page DOM is ready.

### Example
```javascript
function onLoadForm() {
  // Make `this` globally accessible for debugging
  window.this = this;

  // Log session info
  console.log('Form/Page loaded. Current user:', this.session.UserId);

  // Import external script (e.g., SweetAlert2)
  importScripts();

  // Set a default value on a field
  this.getField('StartDate').setValue(new Date().toISOString());
}
```

---

## onNewForm

- **When it fires**: When a **Form** is opened specifically to **create a new record** (CRUD “Create”).
- **Purpose**: Generate and assign initial values (IDs, timestamps), set defaults, configure UI for new entries.
- **Signature**:
  ```javascript
  function onNewForm() { /* ... */ }
  ```
- **Context**: Only in **Form** mode. Does **not** run when editing existing records.

### Example
```javascript
function onNewForm() {
  // Generate unique IDs for the new entity
  this.entity.NewRecordId = crypto.randomUUID();
  this.entity.RecordId = this.entity.NewRecordId;

  // Set the current user as creator
  this.entity.CreatedBy = this.session.UserId;

  // Initialize boolean flags
  this.entity.IsActive = true;
}
```

---

## onEditForm

- **When it fires**: When a **Form** is opened to **edit an existing record** (CRUD “Update”).
- **Purpose**: Pre-populate fields, fetch related data, adjust UI based on entity state.
- **Signature**:
  ```javascript
  function onEditForm() { /* ... */ }
  ```
- **Context**: Only in **Form** mode when editing; does **not** run for new records.

### Example
```javascript
function onEditForm() {
  // Make `this` globally available for debugging
  window.this = this;

  // Log the ID of the record being edited
  console.log('Editing record:', this.entity.RecordId);

  // Fetch additional data for a lookup
  this.getField('RelatedItems')[0].fetchData().then(() => {
    this.getField('RelatedItems')[0].detectChanges();
  });

  // Adjust UI: disable the ID field
  this.getField('RecordId').setDisabled(true);
}
```

---

## Best Practices

- **Distinguish Page vs Form**  
  - Use **onLoadForm** in pages for UI setup without CRUD.  
  - In forms, onLoadForm still fires but you can branch based on `this.entity.RecordId` to detect new vs edit.
- **Check Context**  
  - If you need logic only for new or edit, use **onNewForm** / **onEditForm** respectively.
- **Avoid Duplicate Handlers**  
  - Do not define multiple `onNewForm` functions in the same scope—only the last one will run.
- **Use `importScripts()`**  
  - To load external libraries (e.g., SweetAlert), call this helper inside onLoadForm.

---
