import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {

    const [user,setUser] = React.useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const {name,email,password,password2} = user;

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviando...")

        //campos vacios

        //validar pass minimo 6 campos

        //los 2 campos pass iguales

        //pasar a action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Login</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Escribe tu nombre"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
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
                        <label htmlFor="password2">Re ingresa Password</label>
                        <input
                            type="password"
                            name="password2"
                            id="password2"
                            placeholder="Re ingresa Password"
                            value={password2}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            value="Registrar"
                            className="btn btn-primario btn-block"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Ya tienes una cuenta? Logeate
                </Link>

            </div>
        </div>
    );
};

export default Register;