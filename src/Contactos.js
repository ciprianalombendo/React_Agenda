import React from "react";
import EditarContacto from "./EditarContacto";

export default class Contactos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.delete = this.delete.bind(this);
    this.switchEdit = this.switchEdit.bind(this);
  }

  delete() {
    const { id } = this.props.contacto;
    const url = `http://localhost:3001/contactos/${id}`;

    fetch(url, {
      method: "DELETE"
    });

    this.props.fetchContactosCallback();
  }

  switchEdit() {
    this.setState({ editing: !this.state.editing });
  }

  render() {
    const { id, nome, email, telefone } = this.props.contacto;

    return (
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th>Telefone</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{id}</td>
              <td>{nome}</td>
              <td>{email}</td>
              <td>{telefone}</td>
              <td>
                <button class="btn btn-danger btn-sm" onClick={this.delete}>
                  Apagar
                </button>
              </td>
              {"  "}
              <td>
                <button
                  class="btn btn-success btn-sm"
                  onClick={this.switchEdit}
                >
                  Editar
                </button>

                {this.state.editing ? (
                  <EditarContacto
                    contacto={this.props.contacto}
                    fetchContactosCallback={this.props.fetchContactosCallback}
                    switchEdit={this.switchEdit}
                  />
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}