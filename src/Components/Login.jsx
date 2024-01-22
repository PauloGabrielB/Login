import React from "react";

export default function Login({login}) {
    
    return (
        <>
        <div className="form-container">
      <form className="form">
        <div className="form-group">
        <label htmlFor="email">Email</label>    
        <input type="email" name="email" id="email" placeholder="email" />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="senha" id="senha" placeholder="senha" />
        </div>
        <button onClick={ () => onClick(login) } className="form-submit-btn">Entrar</button>
      </form>
  </div>
        </>
    )

}

