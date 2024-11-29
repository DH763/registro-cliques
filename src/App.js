import React, { Component } from "react";

class RegistroCliques extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCliques: 0, // Total de cliques realizados
      listaHorariosClick: [], // Lista com os horários dos cliques
    };
  }

  // Método para registrar o clique
  registrarClique = () => {
    const horarioAtual = new Date().toLocaleTimeString(); // Obtém o horário atual
    this.setState((prevState) => ({
      totalCliques: prevState.totalCliques + 1, // Incrementa o total de cliques
      listaHorariosClick: [...prevState.listaHorariosClick, horarioAtual], // Adiciona o horário à lista
    }));
  };

  render() {
    const { totalCliques, listaHorariosClick } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "white", backgroundColor: "#333", padding: "20px", borderRadius: "10px" }}>
        <h2>Registro de Horário de Cliques</h2>
        <button
          onClick={this.registrarClique}
          style={{ padding: "10px 20px", fontSize: "16px", marginBottom: "20px" }}
        >
          Clique aqui
        </button>
        <div>
          <h4>Total de Cliques: {totalCliques}</h4>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {listaHorariosClick.map((horario, index) => (
              <li key={index}>• {horario}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default RegistroCliques;