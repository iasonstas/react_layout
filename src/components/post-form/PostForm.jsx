import React from 'react';
import { useForm } from 'react-hook-form';
import './PostForm.scss';
// Regex for better performance out of PostForm scope.
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^((\+30\d{10})|(69[0-9]{8}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

export default function PostForm({ labels }) {
  const { buttonText, formLabels } = labels;

  const { register, handleSubmit, reset, formState, errors } = useForm({ mode: 'onChange' });

  const { isDirty, isValid } = formState;

  const onSubmit = data => {
    alert('Form Submitted Successfully!');
    console.log(
      `%c
        --SUBMITING--
        phone : ${data.phone}
        email : ${data.email}
        password: ${data.password}\n`,
      'color:red'
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column form-content">
      <div id="input-container">
        <input
          type="text"
          placeholder={formLabels && formLabels[0]}
          className="input-cell mt-2"
          name="phone"
          ref={register({ required: true, pattern: { value: phoneRegex, message: 'Not accepted' } })}
        />
        {errors.phone && errors.phone.type === 'required' && <div className="ml-05 text-danger">Required field</div>}
        {errors.phone && <div className="ml-05 text-danger">{errors.phone.message}</div>}
        <input
          type="email"
          placeholder={formLabels && formLabels[1]}
          name="email"
          className="input-cell mt-2"
          ref={register({ required: true, pattern: { value: emailRegex, message: 'Should have email form.' } })}
        />
        {errors.email && errors.email.type === 'required' && <div className="ml-05 text-danger">Required field</div>}
        {errors.email && <div className="ml-05 text-danger">{errors.email.message}</div>}

        <input
          autoComplete="off"
          type="password"
          placeholder={formLabels && formLabels[2]}
          className="input-cell mt-2"
          name="password"
          ref={register({
            required: true,
            pattern: {
              value: passwordRegex,
              message:
                'More than 8 digits. It should include at least: a number, a capital letter, a symbol and a low case letter'
            }
          })}
        />
        {errors.password && errors.password.type === 'required' && <p className="ml-05 text-danger">Required field</p>}
        {errors.password && <p className="ml-05 text-danger">{errors.password.message}</p>}

        <button type="submit" disabled={!isDirty || !isValid} className="btn-input">
          {buttonText}
        </button>
      </div>
    </form>
  );
}
