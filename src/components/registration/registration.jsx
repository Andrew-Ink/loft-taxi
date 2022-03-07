import React from 'react'

export const Registration = ({ navigateTo }) => {
  return <>
    <h2>Регистрация</h2>
    <div className="registration">
      <h2 className="registration__title">Войти</h2>
      <form className="registration__form form">
        <div className="form__elem">
          <label htmlFor="email">Email*</label>
          <input type="email" className="form__input" id="email" name="email" />
        </div>
        <div className="form__elem">
          <label htmlFor="name">Как вас зовут*</label>
          <input type="name" className="form__input" id="name" name="name" />
        </div>
        <div className="form__elem">
          <label htmlFor="password">Придумайте пароль*</label>
          <input type="password" className="form__input" id="password" name="password" />
        </div>

        <button className="button" onClick={() => { navigateTo('map') }}>Зарегистрироваться</button>

        <span>Уже зарегистрированы?</span>
        <button className="button" onClick={() => { navigateTo('login') }}>Войти</button>
      </form>
    </div>
  </>
}