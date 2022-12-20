import React from 'react'

export const Register = () => {
  return (
    <div class="formContainer">
        <div class="formWrapper">
            <form>
                <input type="text" placeholder="username" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button>Sign Up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}
