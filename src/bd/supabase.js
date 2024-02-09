import { createClient } from '@supabase/supabase-js'

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

// Probamos la api de las funciones
const proyectoDetalleTodos = async () => {
  try {
    // eslint-disable-next-line no-unused-vars
    const { data, error } = await supabase
      .rpc('proyecto_detalle_todos')
    console.log('Consulta a la función proyecto_detalle_todos: ', data)
  } catch (error) {
    console.log(error)
  }
}
await proyectoDetalleTodos()

// Probamos a cerrar sesión
const logout = async () => {
  try {
    // eslint-disable-next-line no-unused-vars
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
