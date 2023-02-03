import React from 'react'

let handleSubmit = async (e) => {
  e.preventDefault();
}

function Intro() {
  return (
    <div>
      <h1>Hello Vite!</h1>
      <h3 id="user"></h3>
      <form onSubmit={handleSubmit}>
        <input type="text" id="signup-email" placeholder="Email" />
        <input type="password" id="signup-password" placeholder="Password" />
        <input type="password" id="signup-password-confirm" placeholder="Confirm Password" />
        <button type="submit" id="Sign Up">Submit</button>
      </form>

      <form id="sign_in_form">
        <input type="text" id="signin-email" placeholder="Email" />
        <input type="password" id="signin-password" placeholder="Password" />
        <button type="submit" id="Login">Submit</button>
      </form>

      <button id="sign_out">Logout</button>
    </div>
  )
}

export default Intro  