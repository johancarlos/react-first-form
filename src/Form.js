import  React , {Component} from 'react';

class Form extends Component{
  render(){
    return(
      <div>
        <h1>Registro:</h1>
        <form>
          <label>nombre:</label>
          <input name="name"/>
          <br/>
          <label>apellido:</label>
          <input name="lastname"/>
          <br/>
          <label>Fecha de Cumpleanios:</label>
          <input name="email"/>
          <br/>
          <label>correo Eletronico:</label>
          <input name="email"/>
          <br/>
          <label>contrasena:</label>
          <input name="contrasena" type="password"/>
          <br/>
          <button>Registrarse</button>
          <br/><br/>
        </form>
      </div>
    );
  }
}
export default Form;
