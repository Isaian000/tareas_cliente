// src/components/ContactForm.tsx
import { useState, type FormEvent, type ChangeEvent } from 'react';
import './ContactForm.css'

interface FormData {
    nombre: string;
    email: string;
    mensaje: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        email: '',
        mensaje: '',
    });
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        setEnviado(true);
    };

    return (
        <section id="contacto" className="contacto">
            <h2>Contáctame</h2>
            {enviado ? (
                <p role="status" className="contacto-confirmacion">
                    ¡Gracias, Tu mensaje fue recibido.
                </p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />

                    <label htmlFor="email">Correo</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />

                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required />

                    <button type="submit">Enviar</button>
                </form>
            )}
        </section>
    );
}