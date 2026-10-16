import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// Asegúrate de importar el import '@testing-library/jest-dom' en tu setupTests.js
import ContactForm from './ContactForm';

describe('Pruebas en el organismo <ContactForm />', () => {

  test('Debe renderizar correctamente todos los campos y el botón de envío', () => {
    render(<ContactForm />);
    
    // Verificamos que los inputs y el textarea estén en el documento
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
    
    // Verificamos que el botón de envío exista
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument();
  });

  test('Debe mostrar mensajes de error de validación al intentar enviar el formulario en blanco', () => {
    render(<ContactForm />);
    
    // Simulamos el clic en el botón de enviar sin llenar los campos
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    fireEvent.click(submitButton);
    
    // Verificamos que se muestren los textos de error definidos en la validación del lado del cliente
    expect(screen.getByText('El nombre es obligatorio.')).toBeInTheDocument();
    expect(screen.getByText('El correo electrónico es obligatorio.')).toBeInTheDocument();
    expect(screen.getByText('El mensaje no puede estar vacío.')).toBeInTheDocument();
  });

  test('Debe limpiar los errores al escribir un correo inválido y luego uno válido', () => {
    render(<ContactForm />);
    
    // 1. Enviamos vacío para detonar errores
    fireEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }));
    expect(screen.getByText('El correo electrónico es obligatorio.')).toBeInTheDocument();

    // 2. Escribimos un correo inválido y enviamos
    const emailInput = screen.getByLabelText(/correo electrónico/i);
    fireEvent.change(emailInput, { target: { value: 'correo-sin-arroba.com' } });
    fireEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }));
    expect(screen.getByText('Ingresa un correo electrónico válido.')).toBeInTheDocument();

    // 3. Escribimos un correo válido y comprobamos que el error de formato desaparece al tipear
    fireEvent.change(emailInput, { target: { value: 'usuario@correo.com' } });
    expect(screen.queryByText('Ingresa un correo electrónico válido.')).not.toBeInTheDocument();
  });

  test('Debe mostrar el mensaje de éxito y limpiar el formulario al enviar datos correctos', () => {
    render(<ContactForm />);
    
    // Llenamos los campos con información válida
    fireEvent.change(screen.getByLabelText(/nombre/i), { target: { value: 'Juan Pérez' } });
    fireEvent.change(screen.getByLabelText(/correo electrónico/i), { target: { value: 'juan@ejemplo.com' } });
    fireEvent.change(screen.getByLabelText(/mensaje/i), { target: { value: 'Hola, me interesa tu portafolio.' } });
    
    // Enviamos el formulario
    fireEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }));
    
    // Verificamos que aparezca el mensaje de éxito
    expect(screen.getByText('¡Gracias por tu mensaje! Me pondré en contacto contigo a la brevedad.')).toBeInTheDocument();
    
    // Verificamos que los campos se hayan vaciado
    expect(screen.getByLabelText(/nombre/i).value).toBe('');
    expect(screen.getByLabelText(/correo electrónico/i).value).toBe('');
    expect(screen.getByLabelText(/mensaje/i).value).toBe('');
  });

});