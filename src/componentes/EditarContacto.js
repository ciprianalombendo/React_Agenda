import React, { useState } from 'react';

const EditarContacto = ({ name, saveName, lastName, saveLastName, phone, savePhone, getContactos, setContactos, id, setId }) => {

    const [error, guardarError] = useState(false);
    const [contactoEditado, setContactoEditado] = useState(false)

    const datosContactoEditar = {
        nome: name,
        sobrenome: lastName,
        telefone: phone
    }

    const guardarDatos = (e) => {
        e.preventDefault()
        if (datosContactoEditar.nome === '' || datosContactoEditar.sobrenome === '' || datosContactoEditar.telefone === '') {
            guardarError(true)
            return;
        } else {
            guardarError(false)
            let cont = 0;
            let contactoEditar = getContactos
            contactoEditar.forEach((datosContacto) => {
                if (id === datosContacto.id) {
                    contactoEditar[cont].nome = name
                    contactoEditar[cont].sobrenome = lastName
                    contactoEditar[cont].telefone = phone
                }
                cont++;
            });

            let listaContactoEditado = []
            for (let i = 0; i < contactoEditar.length; i++) {
                listaContactoEditado = Array.from([...contactoEditar])
            }           
            setContactos([...listaContactoEditado])
            setContactoEditado(true)
            eliminarAlerta()
            
        }
    }

    const limpar = () => {
        document.getElementById('nome').value = ''
        document.getElementById('sobrenome').value = ''
        document.getElementById('telefone').value = ''
        saveName('')
        saveLastName('')
        savePhone('')
        setId(undefined)
    }

    const alertaContactoEditado = () => {
        return (
            <div className="col-lg-12 mt-3 alerta-add">
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Contacto editado corretamente!</h4>
                </div>
            </div>
        )   
    }

    const eliminarAlerta = () =>{
        setTimeout(() => {
            setContactoEditado(false)
        }, 2000);
    }


    return (
        <div className="col-lg-12">
            <div className="modal fade" id="abrir-modal-editar" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Editar Contacto</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={limpar}>
                                <span aria-hidden="true">&times;</span>
                            </button>
       </div>
     <div className="modal-body">
      <form onSubmit={guardarDatos}>
        <div className="row">
       <div className="col-lg-6">
             <input
              type="text"
              className="form-control"
              id="nome-edi"
              value={datosContactoEditar.nome}
              placeholder="Nome"
              onChange={e => saveName(e.target.value)}
     />

    </div>
    <div className="col-lg-6">
    <input
      type="text"
      className="form-control"
      id="sobrenome-edi"
      value={datosContactoEditar.sobrenome}
     placeholder="Sobrenome"
     onChange={e => saveLastName(e.target.value)}
     />
    </div>
    <div className="col-lg-12 mt-3">
    <input
         type="text"
         className="form-control"
         id="telefone-edi"
         value={datosContactoEditar.telefone}
         placeholder="Telefone"
         onChange={e => savePhone(e.target.value)}
         />
        </div>
        <div className="col-lg-12 mt-3 modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={limpar}>Cancelar</button>
          <button type="submit" className="btn btn-primary editar">Editar Contacto</button>
        </div>
             {(error) ?
        <div className="col-lg-12 mt-3">
        <div className="alert alert-danger">
                 <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>¡Error!</strong> Todos os campos são obrigatórios
        </div>
        </div>
             : ''}
                {(contactoEditado) ?
                    alertaContactoEditado()

                    : ''}
        </div>
             </form>
         </div>
        </div>
        </div>
        </div>
        </div>
    );

}

export default EditarContacto;