import { header } from './componentes/header'
import { footer } from './componentes/footer'
import { createClient } from '@supabase/supabase-js'
// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import './scss/styles.scss'

// Importamos la Función para detectar eventos al cargar las vistas
import { enrutador } from './componentes/enrutador'
// Importamos la vista por defecto (que será home)
async function cargarVista () {
  const componente = await import('./vistas/homeVista')
  const vista = componente.default
  // Inyectamos la vista home
  document.querySelector('main').innerHTML = vista.template
  // Ejecutamos la lógica de la vista
  vista.script()
}
cargarVista()

// Inyectamos el componente header
document.querySelector('header').innerHTML = header.template

// Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template

enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'

// Inyectamos el componente header
document.querySelector('header').innerHTML = header.template
header.script()

console.log('PRUEBAS SUPABASE')

const supabaseUrl = 'https://dlgnhtzgdglnnizsjixp.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsZ25odHpnZGdsbm5penNqaXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4ODUwODgsImV4cCI6MjAyMjQ2MTA4OH0.fDTPVEcyfF3gGoRJvn9iXY3RGH8bUp3w5ieOssMLbQc'
const supabase = createClient(supabaseUrl, SUPABASE_KEY)

console.log('conexion', supabase)
// Probamos la api de las tablas
// función para Leer perfiles
const leerPerfiles = async () => {
  try {
    // eslint-disable-next-line no-unused-vars
    const { data: perfiles, error } = await supabase
      .from('perfiles')
      .select('*')
    console.log('perfiles', perfiles)
  } catch (error) {
    console.log(error)
  }
}
// Ejecutamos la función
await leerPerfiles()

// Probamos a logearnos
const login = async () => {
  try {
    // USER LOGIN
    // eslint-disable-next-line no-unused-vars
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'aarooonvl@gmail.com',
      password: '31122004Aaron'
    })
    console.log('login', data)
  } catch (error) {
    console.log(error)
  }
}

await login()

const getUser = async () => {
  try {
    // GET USER
    const { data: { user } } = await supabase.auth.getUser()
    console.log('Consultamos datos de usuario con getUser(): ', user)
  } catch (error) {
    console.log(error)
  }
}

await getUser()

// Probamos a cerrar sesión
const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    console.log('Sesión cerrada con exito: ')
  } catch (error) {
    console.log(error)
  }
}
// Cerramos sesión
await logout()
// Probamos a mostrar datos de usuario logueado. Debería darnos null
await getUser()
