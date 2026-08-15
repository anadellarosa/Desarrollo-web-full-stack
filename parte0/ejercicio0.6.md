```mermaid
sequenceDiagram
    sequenceDiagram
    participant navegador
    participant servidor

    Note over navegador: El usuario escribe una nota y hace clic en Save
    Note over navegador: React previene el envío tradicional del formulario

    navegador->>servidor: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate servidor
    Note over servidor: El servidor guarda la nueva nota
    servidor-->>navegador: JSON {"message":"note created"}
    deactivate servidor

    Note over navegador: React actualiza el estado y renderiza la nota nueva sin recargar la página
```
