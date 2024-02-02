import { proyectos } from '../bd/datosPrueba'
import { ls } from '../componentes/funciones'

export default {
  template: `
    <div class="container">
      <h1 class="mt-5">Proyectos</h1>
      <div class="row mt-5">
        <div class="col-12">
          <ul class="nav nav-tabs">
            <li class="nav-item w-50">
              <button class="selectorFicha fichaProyectos nav-link w-100 active">
                Todos los proyectos
              </button>
            </li>
            <li id="pestanyaMisProyectos" class="nav-item w-50">
              <button class="selectorFicha fichaMisProyectos nav-link w-100">
                Mis proyectos
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="border border-top-0 p-3">
        <div class="row">
          <div class="col-12 col-sm-4 mb-3">
            <a id="botonSubirProyecto" href="#/proyectoNuevo" class="btn btn-primary w-100 router-link">Subir proyecto</a>
          </div>
          <div class="d-flex col-12 col-sm-8 mb-3">
            <button class="vistaTabla btn btn-secondary me-2 bi bi-list"></button>
            <button class="vistaTarjetas btn btn-secondary me-2 bi bi-grid-3x3-gap"></button>
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <i class="bi bi-search"></i>
              </span>
              <input
                id="inputBusqueda"
                type="text"
                class="form-control"
                placeholder="Buscador"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <span class="input-group-text" id="addon-wrapping">
                <i id="borrarBuscador" class="bi bi-x"></i>
              </span>
            </div>
          </div>
        </div>

        <div id="tabTabla" class="col-12 d-none d-xl-block" style="overflow-x: auto">
          <table class="table table-hover align-middle mt-3" style="min-width: 1000px">
            <thead>
              <tr>
                <th></th>
                <th>
                  Nombre <span><i class="bi bi-caret-down"></i></span>
                </th>
                <!-- Add other table headings as needed -->
              </tr>
            </thead>
            <tbody id="tbodyProyectos">
              <!-- Data will be populated here -->
            </tbody>
          </table>
        </div>

        <div id="tabTarjetas" class="d-xl-none row">
          <!-- Data will be populated here -->
        </div>
      </div>
    </div>
  `,
  script: () => {
    const datos = proyectos
    const usuario = ls.getUsuario()

    const pintaTabla = (proyectosFiltrados) => {
      const misProyectos = false
      if (misProyectos) {
        proyectosFiltrados = datos.filter((proyecto) => proyecto.user_id === usuario.user_id)
      }
      let tbodyProyectos = ''
      proyectosFiltrados.forEach((proyecto) => {
        let botones = ''
        if (usuario.user_id === proyecto.user_id) {
          botones = `
            <td><a
              data-id=${proyecto.id}
              class="botonAdmin botonEditar d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
            ></a></td>
            <td><a
              data-id=${proyecto.id}
              class="botonAdmin botonBorrar d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
            ></a></td>
          `
        }
        tbodyProyectos += `
          <tr data-id="${proyecto.id}" class="verDetalle">
            <td>
              <div class="containerImagen">
                <img 
                  class="verDetalle"
                  data-id="${proyecto.id}"
                  width="200px" 
                  src=${proyecto.imagen || 'images/imagenVacia.png'} 
                  alt="imagen proyecto" />
              </div>
            </td>
            <td>${proyecto.nombre}</td>
            <!-- Add other table data as needed -->
            <td>${proyecto.descripcion}</td>
            <td><a href="${proyecto.enlace}" target="_blank"><i class="bi bi-link fs-4"></i></a></td>
            <td><a href="${proyecto.repositorio}" target="_blank"><i class="bi bi-folder-symlink fs-4"></i></a></td>
            <td>${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</td>
            <td>${proyecto.created_at}</td>
            <td>${proyecto.estado}</td>
            <td>
              ${botones}
            </td>
          </tr>
        `
      })
      document.querySelector('#tbodyProyectos').innerHTML = tbodyProyectos
    }
    let misProyectos = false

    const pintaTarjetas = (proyectosFiltrados) => {
      if (misProyectos) {
        proyectosFiltrados = datos.filter((proyecto) => proyecto.user_id === usuario.user_id)
        console.log(proyectos)
      }
      let tarjetasProyectos = ''
      proyectosFiltrados.forEach((proyecto) => {
        let botones = ''
        if (usuario.user_id === proyecto.user_id) {
          botones = `
            <a
              data-id=${proyecto.id}
              class="botonAdmin botonEditar d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
            ></a>
            <a
              data-id=${proyecto.id}
              class="botonAdmin botonBorrar d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
            ></a>
          `
        }
        tarjetasProyectos += `
          <div class="col-12 col-lg-6">
            <div class="card mb-3">
              <div class="row g-0">
                <div
                  class="col-4 verDetalle"
                  data-id="${proyecto.id}"
                  style="
                    background-image: url(${proyecto.imagen || 'images/imagenVacia.png'});
                    background-position: center;
                    background-size: cover;
                  "
                ></div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">${proyecto.nombre}</h5>
                    <p class="card-text">
                      ${proyecto.descripcion}
                    </p>
                    <p class="small m-0 text-end text-italic">Autor: ${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</p>
                    <p class="small text-end text-italic">Fecha: ${proyecto.created_at}</p>
                    <a class="btn btn-sm btn-outline-primary" href="${proyecto.enlace}" target="_blank">
                      <i class="bi bi-link"></i> Enlace
                    </a>
                    <a class="btn btn-sm btn-outline-primary" href="${proyecto.repositorio}" target="_blank">
                      <i class="bi bi-folder-symlink"></i> Repositorio
                    </a>
                    ${botones}
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      })
      document.querySelector('#tabTarjetas').innerHTML = tarjetasProyectos
    }

    pintaTabla(datos)
    pintaTarjetas(datos)

    document.querySelector('.vistaTabla').addEventListener('click', (boton) => {
      document.querySelector('#tabTabla').classList.remove('d-none')
      document.querySelector('#tabTarjetas').classList.add('d-none')
    })

    document.querySelector('.vistaTarjetas').addEventListener('click', (boton) => {
      document.querySelector('#tabTabla').classList.add('d-none')
      document.querySelector('#tabTarjetas').classList.remove('d-none')
    })

    const inputBusqueda = document.getElementById('inputBusqueda')

    inputBusqueda.addEventListener('input', () => {
      const textoBusqueda = inputBusqueda.value.toLowerCase()
      const proyectosFiltrados = datos.filter(
        (proyecto) => proyecto.nombre.toLowerCase().includes(textoBusqueda)
      )
      pintaTabla(proyectosFiltrados)
      pintaTarjetas(proyectosFiltrados)
    })

    document.querySelector('#borrarBuscador').addEventListener('click', () => {
      inputBusqueda.value = ''
      pintaTabla(datos)
      pintaTarjetas(datos)
    })

    document.querySelector('.nav-tabs').addEventListener('click', (event) => {
      if (event.target.classList.contains('fichaProyectos')) {
        misProyectos = false
      } else if (event.target.classList.contains('fichaMisProyectos')) {
        misProyectos = true
      }
      pintaTabla(datos)
      pintaTarjetas(datos)
    })

    document.querySelector('main').addEventListener('click', (event) => {
      if (event.target.classList.contains('verDetalle')) {
        const idProyecto = event.target.dataset.id
        mostrarDetalles(idProyecto)
      } else if (event.target.classList.contains('botonEditar')) {
        const idProyecto = event.target.dataset.id
        editarProyecto(idProyecto)
      } else if (event.target.classList.contains('botonBorrar')) {
        const idProyecto = event.target.dataset.id
        borrarProyecto(idProyecto)
      }
    })

    // Función para mostrar detalles del proyecto
    const mostrarDetalles = (idProyecto) => {
      // Aquí deberías implementar la lógica para mostrar los detalles del proyecto.
      // Puedes usar el idProyecto para obtener los detalles del proyecto y mostrarlos en una nueva vista o modal.
      console.log(`Mostrar detalles del proyecto con ID ${idProyecto}`)
    }

    // Función para editar un proyecto
    const editarProyecto = (idProyecto) => {
      // Aquí deberías implementar la lógica para permitir la edición del proyecto con el idProyecto.
      // Puedes redirigir a una nueva página o mostrar un formulario de edición en la misma página.
      console.log(`Editar proyecto con ID ${idProyecto}`)
    }

    // Función para borrar un proyecto
    const borrarProyecto = (idProyecto) => {
      // Aquí deberías implementar la lógica para confirmar la eliminación del proyecto con el idProyecto.
      // Puedes mostrar un cuadro de diálogo de confirmación y, si se confirma, realizar la eliminación.
      console.log(`Borrar proyecto con ID ${idProyecto}`)
      // eslint-disable-next-line no-undef
      const confirmacion = confirm('¿Estás seguro de que deseas borrar este proyecto?')

      if (confirmacion) {
        // Implementar la lógica para borrar el proyecto aquí
        console.log('Proyecto borrado')
      } else {
        // Acciones a realizar si se cancela la eliminación
        console.log('Cancelado')
      }
    }
  }
}
