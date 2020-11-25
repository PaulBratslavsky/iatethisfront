import React, { useState } from 'react';
import styled from 'styled-components';
import { GiHotMeal } from 'react-icons/gi';
import Loader from '../componets/Loader';

const INITIAL_STATE = {
  identifier: '',
  password: '',
};

const LoginStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;

    .logo {
      text-align: center;
      margin-bottom: 1rem;
      svg {
        font-size: 5rem;
        color: #384d4e;
        border-radius: 50%;
        padding: 0.5rem;
        border: #384d4e solid 3px;
      }

      p {
        margin: 0.5rem;
        font-size: 2.8rem;
        color: #384d4e;
      }
    }

    form {
      font-size: 1.4rem;

      input,
      button {
        text-align: center;
        display: block;
        width: 100%;
        padding: 0.45rem 0.5rem;
        margin-bottom: 1rem;
        font-size: 1.8rem;
        border-radius: 6px;
        border: none;
        background: #e8f0fe;
      }

      input {
        color: #3c4242;
        /* background: #a1cde2; */
        border-bottom: #384c4e 3px solid;
      }

      input::placeholder {
        color: #535d5d;
        font-size: 1.6rem;
      }

      button {
        background: #384d4e;
        color: white;
      }
    }
  }

  .error {
    padding: 0.45rem 0.5rem;
    font-size: 1.5rem;
    border-radius: 6px;
    background: white;
    color: #ff0100;
  }
`;

export default function Login() {
  const [user, setUser] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleLogIn(e) {
    e.preventDefault();
    if (user.identifier.length === 0 || user.password.length === 0) {
      setError('Please provide your username or password');
    } else {
      alert('LOG IN USER');
      setLoading(true)
    }
  }

  function getUserInput(e) {
    const input = e.target;
    setUser({ ...user, [input.name]: input.value });
    setError('');
  }

  console.log(user);

  if (loading) return <Loader />;

  return (
    <LoginStyled>
      <div className='login-container'>
        <div className='logo'>
          <GiHotMeal />
          <p className='logo-text'>iatethis</p>
        </div>
        <form onSubmit={handleLogIn}>
          <input
            type='text'
            placeholder='user or email'
            name='identifier'
            value={user.identifier}
            onChange={getUserInput}
          />
          <input
            type='password'
            placeholder='password'
            name='password'
            value={user.password}
            onChange={getUserInput}
          />
          <button type='submit' disabled={loading ? true : false}>
            Login
          </button>
        </form>
        {error.length > 0 && <p className='error'>{error}</p>}
      </div>
    </LoginStyled>
  );
}
