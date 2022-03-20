import React from 'react'
import { withAuth } from '../AuthContext/authContext'

export const Profile = () => {
  return <h2>Профиль</h2>
}

export const ProfileWithAuth = (withAuth(Profile))
