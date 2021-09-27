import React, { Fragment, useState, useEffect } from 'react'

import Header from './componentes/Header'
import BuscarContactos from './componentes/BuscarContactos'
import BtnContactos from './componentes/BtnContactos'
import AdcionarContactos from './componentes/AdcionarContactos'
import EditarContacto from './componentes/EditarContacto'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

const App = () => {

  const [name, saveName] = useState('')
  const [lastName, saveLastName] = useState('')
  const [phone, savePhone] = useState('')

  const [getId, setId] = useState()

  const [getContactos, setContactos] = useState([])

  const [getBuscar, setBuscar] = useState([])


  useEffect(() => {
    setContactos(getBuscar)
  }, [getBuscar])

  const eliminar = (contacto) => {
    confirmAlert({
      title: 'Confirmar',
      message: 'Tens certeza que queres eliminar este contacto?',
      buttons: [
        {
          label: 'SIM',
          onClick: () => {
            let cont = 0;
            let arreglo = getContactos
            arreglo.forEach((registro) => {
              if (contacto.id === registro.id) {
                arreglo.splice(cont, 1);
              }
              cont++;
            });

            let lista = []
            for (let i = 0; i < arreglo.length; i++) {
              lista = Array.from([...arreglo])
            }
            setContactos([...lista])
          }
        },
        {
          label: 'Não',
        }
      ]
    });

  }

  const editar = (id) => {
    setId(id)
    let cont = 0;
    let newArrayContactos = getContactos
    newArrayContactos.forEach((registro) => {
      if (id === registro.id) {
        saveName(newArrayContactos[cont].nome)
        saveLastName(newArrayContactos[cont].sobrenome)
        savePhone(newArrayContactos[cont].telefone)
      }
      cont++;
    });

  }

  const mostrarContactos = () => {
    let listaContactos = []

    if (getBuscar.length > 0) {
      listaContactos = getContactos.filter(buscar => {
        if (buscar.nome.toLowerCase() === getBuscar.toLowerCase()
          || buscar.sobrenome.toLowerCase() === getBuscar.toLowerCase()
          || (buscar.nome.toLowerCase() + ' ' + buscar.sobrenome.toLowerCase()) === getBuscar.toLowerCase()
          || buscar.telefone === getBuscar
          || buscar.telefone.replace('+', '') === getBuscar
          || buscar.id === getBuscar) {
          return buscar
        }
      });

    } else {
      listaContactos = getContactos
    }

    if (getBuscar.length > 0 && listaContactos.length === 0) {
      return (
        <tr key={0}>
          <td colspan={6} className="busca-invalida">Não encontro nenhum contacto que coincida com sua busca!</td>
        </tr>
      )
    } else {
      return listaContactos.map(contacto => (
        <tr key={contacto.id}>
          <th scope="row">{contacto.id}</th>
          <td>{contacto.nome}</td>
          <td>{contacto.sobrenome}</td>
          <td>{contacto.telefone}</td>
          <td>
            <a href="" className="btn-editar" id="editar" onClick={(e) => {
              e.preventDefault()
              editar(contacto.id)
            }} data-toggle="modal" data-target="#abrir-modal-editar">
              <i className="far fa-edit mr-1"></i>Editar</a>
          </td>
          <td>
            <a href="" className="btn-eliminar" id="eliminar" onClick={(e) => {
              e.preventDefault()
              eliminar(contacto)
            }}>
              <i className="fas fa-trash-alt mr-1"></i>Eliminar</a>
          </td>
        </tr>
      ))
    }
    }

  return (
    <Fragment>
      <Header />
      <section className="container mt-4">
        <div className="row justify-content-between mt-4">
          <BuscarContactos
            setBuscar={setBuscar}
          />
          <BtnContactos />
          <div className="col-lg-12 mt-3 mb-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Sobrenome</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {getContactos.length > 0 ? mostrarContactos() :
                  <tr key={0}>
                    <td colspan={6} className="lista-vazia">Nao tem nenhum contacto adicionado!</td>
                  </tr>
                }
              </tbody>

            </table>
          </div>
          <AdcionarContactos
            name={name}
            saveName={saveName}
            lastName={lastName}
            saveLastName={saveLastName}
            phone={phone}
            savePhone={savePhone}
            getContactos={getContactos}
            setContactos={setContactos}
          />
        </div>
        <EditarContacto
          name={name}
          saveName={saveName}
          lastName={lastName}
          saveLastName={saveLastName}
          phone={phone}
          savePhone={savePhone}
          getContactos={getContactos}
          setContactos={setContactos}
          id={getId}
          setId={setId}
        />
      </section>
    </Fragment>
  );
}

export default App;
