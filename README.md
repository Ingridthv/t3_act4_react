# Lista de Notas con React

Mini aplicación hecha con React y Vite. Permite agregar, completar,
editar y eliminar notas. Usa componentes, props, estado (`useState`)
y renderizado de listas con `.map()`.

## Componentes

- **TodoApp:** componente principal. Guarda la lista de notas en el estado
  y define las funciones para agregar, eliminar, completar y actualizar.
- **TodoForm:** formulario para crear notas. Recibe `onAgregarNota` por props.
- **EditNoteForm:** formulario para editar una nota. Recibe `nota`,
  `onEditarNota` y `onCancelar` por props.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

## Preguntas

**a) ¿Qué diferencia hay entre props y state en React?**

Las props son datos que un componente padre le pasa a un componente hijo.
El hijo solo las puede leer, no modificarlas. Por ejemplo, `TodoApp` le pasa
`onAgregarNota` a `TodoForm`. El state, en cambio, son datos que pertenecen
al propio componente y que pueden cambiar con el tiempo. Cuando el state
cambia, React vuelve a dibujar el componente con los valores nuevos.

**b) ¿Por qué es importante usar una key al renderizar una lista?**

La key le permite a React identificar cada elemento de la lista. Gracias a
eso, cuando agrego, borro o cambio una nota, React sabe cuál elemento
cambió y solo actualiza ese, en lugar de confundirlos o volver a dibujar
todo. En mi app uso `key={nota.id}` en cada `<li>`.

**c) Explica con tus propias palabras qué hace `useState` y da un ejemplo.**

`useState` sirve para que un componente recuerde información y para que la
pantalla se actualice cuando esa información cambia. Devuelve dos cosas: el
valor actual y una función para cambiarlo. Al llamar a esa función, React
guarda el valor nuevo y vuelve a renderizar el componente.

En mi mini aplicación lo usé en varios lugares:
- En `TodoApp`: `const [notas, setNotas] = useState([...])` guarda la lista
  de notas, y `setNotas` la actualiza al agregar, borrar, completar o editar.
- En `TodoForm`: `const [textNote, setTextNote] = useState("")` guarda lo que
  el usuario escribe en el input.
- En `TodoApp` también: `notaEditandoId` guarda cuál nota se está editando.

**d) Enlace del repositorio de GitHub:**

https://github.com/Ingridthv/t3_act4_react

**e) Enlace del proyecto desplegado en GitHub Pages:**

https://ingridthv.github.io/t3_act4_react/
