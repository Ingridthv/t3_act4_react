import { useState } from 'react';
import styles from './todoApp.module.css';
import TodoForm from './TodoForm/todoform';
import { FilePenLine, Trash } from 'lucide-react';
import EditNoteForm from './EditNoteForm/EditNoteForm';

function TodoApp() {
    const [notas, setNotas] = useState([
        { id: 1, titulo: 'Aprender React', completed: false },
        { id: 2, titulo: 'Hacer ejercicio', completed: true },
        { id: 3, titulo: 'Leer un libro', completed: true },
    ]);
    const [notaEditandoId, setNotaEditandoId] = useState(null);
    const [filtro, setFiltro] = useState('todas');

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
        setNotaEditandoId(null);
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

    const pendientes = notas.filter((n) => !n.completed).length;

    const notasFiltradas = notas.filter((nota) => {
        if (filtro === 'pendientes') return !nota.completed;
        if (filtro === 'completadas') return nota.completed;
        return true;
    });

    return (
        <div className={styles.app}>
            <h1 className={styles.titulo}>Notas</h1>
            <TodoForm onAgregarNota={agregarNota} />

            <div className={styles.barra}>
                <p className={styles.contador}>
                    {pendientes} {pendientes === 1 ? 'pendiente' : 'pendientes'} de {notas.length}
                </p>

                <div className={styles.filtros}>
                    {['todas', 'pendientes', 'completadas'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFiltro(f)}
                            className={filtro === f ? styles.activo : ''}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <ul className={styles.noteList}>
                {notasFiltradas.map((nota) => (
                    <li className={styles.noteItem} key={nota.id}>
                 <span className={styles.nota}>
                        <span
                          style={{
                            textDecoration: nota.completed ? 'line-through' : 'none',
                              opacity: nota.completed ? 0.6 : 1,
                           }}
                        >
                         {nota.titulo}
                    </span>
                    <span className={styles.emoji}>{nota.completed ? '✅' : '❌'}</span>
                </span>

                        <div className={styles.iconsContainer}>
                            <button
                                className={styles.estadoBtn}
                                onClick={() => marcarComoCompleta(nota.id)}
                            >
                                {nota.completed ? 'Desmarcar' : 'Completar'}
                            </button>
                            <button
                                className={styles.iconBtn}
                                onClick={() => setNotaEditandoId(nota.id)}
                            >
                                <FilePenLine size={18} />
                            </button>
                            <button
                                className={styles.iconBtn}
                                onClick={() => eliminarNota(nota.id)}
                            >
                                <Trash size={18} />
                            </button>
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
        </div>
    );
}

export default TodoApp;