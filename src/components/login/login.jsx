import React from 'react'

export const Login = ({ navigateTo }) => {
  return <>
    <h2>Логин</h2>
    <div className="login">
      <h2 className="login__title">Войти</h2>

      <form className="login__form form">
        <div className="form__elem">
          <label htmlFor="email">Email</label>
          <input type="email" className="form__input" id="email" name="email" />
        </div>
        <div className="form__elem">
          <label htmlFor="password">Пароль</label>
          <input type="password" className="form__input" id="password" name="password" />
        </div>

        <button className="button" onClick={() => { navigateTo('map') }}>Войти</button>

        <span>Новый пользователь?</span>
        <button className="button" onClick={() => { navigateTo('registration') }}>Регистрация</button>
      </form>
    </div>
  </>
}