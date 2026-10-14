import styles from './todoForm.module.css';
import { useState } from 'react';
import { Plus } from 'lucide-react';

const TodoForm = ({ onAgregarNota }) => {
    const [textNote, setTextNote] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (textNote.trim() === "") {
            console.log("No se puede agregar una nota vacía");
            return;
        }

        const newNote = {
            id: Date.now(),
            titulo: textNote,
            completed: false
        };

        onAgregarNota(newNote);
        setTextNote("");
    };

    return (
        <div className={styles.formContainer}>
            <h2>Todo form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="nota"
                    name="nota"
                    value={textNote}
                    onChange={(event) => setTextNote(event.target.value)}
                />
                <button type="submit">
                    <Plus size={15} />
                    Crear Nota
                </button>
            </form>
        </div>
    );
};

export default TodoForm;