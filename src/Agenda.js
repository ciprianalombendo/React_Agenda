import React from "react";
import Contactos from "./Contactos";

export default function Agenda(props) {
  const agendaContactos = props.contactos.map((contacto) => {
    return (
      <Contactos
        key={contacto.id}
        contacto={contacto}
        fetchContactosCallback={props.fetchContactosCallback}
      />
    );
  });

  return <table>{agendaContactos}</table>;
}