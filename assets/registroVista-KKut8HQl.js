import { P as Perfil } from "./perfil-lj3xIkx2.js";
import { s as supabase } from "./supabase-EWOaK44p.js";
import "./main-JsA5dcba.js";
class User {
  // Constructor que asigna propiedades básicas de un usuario
  constructor(id = null, email = null, password = null) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
  // Método estático para crear un nuevo usuario (registro)
  static async create(userData) {
    const { data, error } = await supabase.auth.signUp(userData);
    if (error) {
      throw new Error(error.message);
    }
    console.log("usuario creado correctamente ", data);
    return new User(data.user.id, data.user.email);
  }
  // Método estático para iniciar sesión (recibe un objeto con email y password)
  static async login(userData) {
    const { data, error } = await supabase.auth.signInWithPassword(userData);
    if (error) {
      throw new Error(error.message);
    }
    return new User(data.user.id, data.user.email);
  }
  // Método estático para cerrar sesión
  static async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
    return true;
  }
  // Método estático para obtener el usuario actualmente logueado
  static async getUser() {
    const { data: { user } } = await supabase.auth.getUser();
    if (user)
      return new User(user.id, user.email);
  }
  // Método para actualizar datos del usuario (no está claro cómo se utiliza actualmente)
  static async update(nuevosDatos) {
    const { data, error } = await supabase.auth.updateUser({
      email: nuevosDatos.email
      // password: nuevosDatos.password,
      // data: { hello: 'world' }
    });
    if (error) {
      throw new Error(error.message);
    }
    return true;
  }
}
const registroVista = {
  template: (
    // html
    `
  <div class="container">
  <h1 class="mt-5 text-center">Registro</h1>
  <div class="m-5 mx-auto" style="max-width: 400px">
    <!-- Formulario de registro -->
    <form id="formularioRegistro" class="form border shadow-sm p-3" novalidate>
      <!-- Nombre -->
      <label for="nombre" class="form-label">Nombre:</label>
      <input required id="nombre" type="text" class="form-control" />

      <!-- Apellidos -->
      <label for="apellidos" class="form-label">Apellidos:</label>
      <input id="apellidos" type="text" class="form-control" />

      <!-- Email -->
      <label for="email" class="form-label">Email:</label>
      <input required id="email" type="email" class="form-control" />

      <!-- Contraseña -->
      <label for="pass" class="form-label mt-3">Contraseña:</label>
      <input required id="pass" type="password" class="form-control" />

      <!-- Botón enviar -->
      <input type="submit" class="btn btn-primary w-100 mt-3" value="Enviar" />
    </form>
  </div>
</div>
  `
  ),
  script: () => {
    console.log("vista registro cargada");
    const formulario = document.querySelector("#formularioRegistro");
    formulario.addEventListener("submit", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!formulario.checkValidity()) {
        formulario.classList.add("was-validated");
      } else {
        try {
          const usuario = {
            email: document.getElementById("email").value,
            password: document.getElementById("pass").value
          };
          console.log("Formulario valido. Datos formulario: ", usuario);
          const user = await User.create(usuario);
          console.log("user creado", user);
          const perfil = {
            ...usuario,
            user_id: user.id,
            nombre: document.getElementById("nombre").value,
            apellidos: document.getElementById("apellidos").value
          };
          Perfil.create(perfil);
          alert("Usuario creado correctamente. Revisa tu email...");
          window.location = "#/login";
        } catch (error) {
          alert("Error al crear usuario", error);
        }
      }
    });
  }
};
export {
  registroVista as default
};
