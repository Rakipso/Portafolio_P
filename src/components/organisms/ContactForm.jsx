import React, { useState, useEffect } from 'react';
import Button from '../atoms/Button';

const ContactForm = () => {
  // Estado para almacenar los valores de los inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Estado para manejar los errores de validación
  const [errors, setErrors] = useState({});
  
  // Estado para el mensaje de éxito post-envío
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Hook useEffect: Se ejecuta cuando isSubmitted cambia.
  // Limpia el mensaje de éxito después de 5 segundos.
  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
    // Cleanup function para evitar fugas de memoria
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  // Manejador genérico para los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    // Limpiamos el error en tiempo real mientras el usuario escribe
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  // Lógica de validación del lado del cliente
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    
    // Regex básico para validar el formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido.';
    }
    
    if (!formData.message.trim()) newErrors.message = 'El mensaje no puede estar vacío.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitamos que la página se recargue
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      // Si hay errores, actualizamos el estado para mostrarlos en la UI
      setErrors(formErrors);
    } else {
      // Flujo de éxito (aquí iría el llamado a tu API si tuvieras una)
      console.log('Datos enviados:', formData);
      setErrors({});
      setIsSubmitted(true);
      // Reiniciamos el formulario
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="card p-4 shadow-sm border-0">
      <h3 className="mb-4">Ponte en contacto</h3>
      
      {isSubmitted && (
        <div className="alert alert-success" role="alert">
          ¡Gracias por tu mensaje! Me pondré en contacto contigo a la brevedad.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Campo Nombre */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ej. Juan Pérez"
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Campo Correo Electrónico */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@correo.com"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Campo Mensaje */}
        <div className="mb-4">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <Button type="submit" variant="primary" isFullWidth={true}>
          Enviar Mensaje
          </Button>
      </form>
    </div>
  );
};

export default ContactForm;