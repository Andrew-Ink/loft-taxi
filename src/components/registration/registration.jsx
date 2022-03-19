import './registration.css'
import React from 'react'
import PropTypes from 'prop-types'

export const Registration = ({ navigateTo }) => {
  return <>
    <div className="registration">
      <h2 className="registration__title">Регистрация</h2>
      <form className="registration__form form">
        <div className="form__wrap ">
          <div className="form__elem">
            <label className="form__label" htmlFor="email">Email*</label>
            <input type="email" className="form__input" id="email" name="email" />
          </div>
          <div className="form__elem">
            <label className="form__label" htmlFor="name">Как вас зовут*</label>
            <input type="name" className="form__input" id="name" name="name" />
          </div>
          <div className="form__elem">
            <label className="form__label" htmlFor="password">Придумайте пароль*</label>
            <input type="password" className="form__input" id="password" name="password" />
          </div>
        </div>

        <button className="button button_theme--orange" onClick={() => { navigateTo('map') }}>Зарегистрироваться</button>

        <div className="form__text-wrap">
          <span className="form__text">Уже зарегистрированы?</span>
          <button className="button button_theme--light" onClick={() => { navigateTo('login') }}>Войти</button>
        </div>
      </form>
    </div>
  </>
}

Registration.propTypes = {
  navigateTo: PropTypes.func.isRequired
}