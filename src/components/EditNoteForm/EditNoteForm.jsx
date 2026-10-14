import { useState } from "react";
import styles from "../todoApp.module.css";

const EditNoteForm = ({ nota, onEditarNota, onCancelar }) => {
    const [textoEditado, setTextoEditado] = useState(nota.titulo);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (textoEditado.trim() === "") return;

        onEditarNota({ ...nota, titulo: textoEditado });
        onCancelar();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.editForm}>
            <input
                type="text"
                value={textoEditado}
                onChange={(e) => setTextoEditado(e.target.value)}
                className={styles.editInput}
            />

            <button type="submit" className={styles.saveButton}>
                Guardar
            </button>
            <button
                type="button"
                onClick={onCancelar}
                className={styles.cancelButton}
            >
                Cancelar
            </button>
        </form>
    );
};

export default EditNoteForm;