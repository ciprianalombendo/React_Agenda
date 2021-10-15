import React from "react";

export default class AdcionarContactos extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      nome: "",
      email: "",
      telefone: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  handleChange(event) {
    this.setState({ id: event.target.value });
    this.setState({ nome: event.target.value });
    this.setState({ email: event.target.value });
    this.setState({ telefone: event.target.value });
  }

  save(event) {
    const newContactos = {
      id: this.state.id,
      nome: this.state.nome,
      email: this.state.email,
      telefone: this.state.telefone
    };

    fetch("http://localhost:3001/contactos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContactos)
    });

    this.setState({ id: "" });
    this.setState({ nome: "" });
    this.setState({ email: "" });
    this.setState({ telefone: "" });
    this.props.adcionarContactosCallback();
  }
  // <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>
  // </label>
  // <button onClick={save}>Criar</button>
  render() {
    return (
      <div>
        <h1> Cadastro de contato </h1>
        {/* <form onSubmit={this.handleSubmit}> */}
        <form id="formulario" action>
          <div class="form-group">
            <label for="id"> Id: </label>
            <input
              type="text"
              class="form-control"
              onChange={this.handleChange}
            ></input>
          </div>
          <div class="form-group">
            <label for="nome"> Nome: </label>
            <input
              type="text"
              class="form-control"
              onChange={this.handleChange}
            ></input>
          </div>
          <div class="form-group">
            <label for="email"> Email: </label>
            <input
              type="text"
              class="form-control"
              onChange={this.handleChange}
            ></input>
          </div>
          <div class="form-group">
            <label for="telefone"> Telefone: </label>
            <input
              type="text"
              class="form-control"
              onChange={this.handleChange}
            ></input>
          </div>
          <div class="form-group text-center">
            <button onClick={this.save} class="btn btn-primary btn-sm">
              Adicionar
            </button>{" "}
            {"  "}
          </div>
        </form>
      </div>
    );
  }
}