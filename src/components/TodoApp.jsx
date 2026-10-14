import { useState } from 'react';
import styles from './todoApp.module.css';
import TodoForm from './TodoForm/todoform';
import { FilePenLine } from 'lucide-react';
import { Trash } from 'lucide-react';
import EditNoteForm from './EditNoteForm/EditNoteForm';

function TodoApp() {
    const [notas, setNotas] = useState([
        { id: 1, titulo: 'Aprender React', completed: false },
        { id: 2, titulo: 'Hacer ejercicio', completed: true },
        { id: 3, titulo: 'Leer un libro', completed: false },
    ]);
    const [notaEditandoId, setNotaEditandoId] = useState(null);

    function agregarNota(nuevaNota) {
        setNotas((prev) => [...prev, nuevaNota]);
    }

    const eliminarNota = (id) => {
        setNotas(notas.filter((nota) => nota.id !== id));
    };

    const actualizarNota = (notaActualizada) => {
        setNotas(
            notas.map((nota) =>
                nota.id === notaActualizada.id ? notaActualizada : nota
            )
        );
    };

    const marcarComoCompleta = (notaId) => {
        setNotas(
            notas.map((nota) =>
                nota.id === notaId
                    ? { ...nota, completed: !nota.completed }
                    : nota
            )
        );
    };

    return (
        <>
            <h1 className={styles.titulo}>Notas</h1>
            <TodoForm onAgregarNota={agregarNota} />
            <ul className={styles.noteList}>
                {notas.map((nota) => (
                    <li className={styles.noteItem} key={nota.id}>
                        <span>
                            {nota.titulo} {nota.completed ? '✅' : '❌'}
                        </span>
                        <div className={styles.iconsContainer}>
                            <button onClick={() => marcarComoCompleta(nota.id)}>
                                {nota.completed ? 'Desmarcar' : 'Completar'}
                            </button>
                            <FilePenLine
                                onClick={() => setNotaEditandoId(nota.id)}
                                size={18}
                            />
                            <Trash
                                onClick={() => eliminarNota(nota.id)}
                                size={18}
                            />
                        </div>
                        {notaEditandoId === nota.id && (
                            <EditNoteForm
                                nota={nota}
                                onEditarNota={actualizarNota}
                                onCancelar={() => setNotaEditandoId(null)}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoApp;