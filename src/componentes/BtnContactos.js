import React from 'react';


const BtnContactos = () => {
    return (
        <div className="col-lg-3 mt-3 mb-3">
            <div className="adcionar-contacto">
                <a href="#" className="btn-adcionar" data-toggle="modal" data-target="#abrir-modal">
                    <i className="fas fa-plus-circle pr-2"></i>
                    Adcionar Novo Contacto
                </a>
            </div>
        </div>
    );
    }

export default BtnContactos;