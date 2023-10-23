'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../components/common/Button';
import { FormError } from '../components/common/FormError';

interface ILoginForm {
  email: string;
  password: string;
}

// LoginForm
const LoginForm = () => {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
    formState,
  } = useForm<ILoginForm>({
    mode: 'onChange',
  });

  const onSubmit = () => {
    const { email, password } = getValues();
  };

  return (
    // Render the login form
    <div className="h-screen flex items-center flex-col mt-10 lg:mt-28">
      <div className="w-full max-w-screen-sm flex flex-col px-5 items-center">
        <h4 className="w-full font-medium text-left text-3xl mb-5">
          Welcome back
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-3 mt-5 w-full mb-5"
        >
          {/* Email input */}
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Invalid email format',
              },
            })}
            type="email"
            placeholder="Email"
            className="input"
          />

          {/* Render email errors */}
          {errors.email?.type === 'pattern' && (
            <FormError errorMessage={'Please enter a valid email'} />
          )}
          {errors.email?.message && (
            <FormError errorMessage={errors.email?.message} />
          )}
          {/* Password input */}
          <input
            {...register('password', {
              required: 'Password is required',
            })}
            name="password"
            required
            type="password"
            placeholder="Password"
            className="input"
          />

          {/* Render password errors */}
          {errors.password?.message && (
            <FormError errorMessage={errors.password?.message} />
          )}

          <Button
            canClick={formState.isValid}
            loading={false}
            actionText={'Log in'}
          />
        </form>
        <div>New to Platform? </div>
      </div>
    </div>
  );
};

export default LoginForm;
