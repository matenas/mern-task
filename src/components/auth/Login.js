import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {

    const [user, setUser] = React.useState({
        email: '',
        password: ''
    })

    const {email, password} = user;

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("enviado");

        //validar campos vacios

        //pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Login</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Escribe tu email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            value="Login"
                            className="btn btn-primario btn-block"
                        />
                    </div>
                </form>
                <Link to={'/register'} className="enlace-cuenta">
                    Registrate
                </Link>

            </div>
        </div>
    );
};

export default Login;