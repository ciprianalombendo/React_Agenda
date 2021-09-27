import React from 'react';

const BuscarContactos = ({SetBuscar}) => {

    const guardarBusca = (e) => {
        e.preventDefault()
        SetBuscar(e.target.value)  
    }
    
    return ( 
        <div className="col-lg-4 mt-3 mb-3">
            <form className="form-search" onChange={guardarBusca}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Buscar Contacto" id="campo-buscar"/>
            </form>
        </div>
    );
}
 
export default BuscarContactos;