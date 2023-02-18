import Link from "next/link"
import Layout from "../components/layout"

function Pagina404() {
  return (
    <Layout
        title="Pagina No Encontrada"
    >
        <p className="error">Pagina No Encontrada</p>
        <Link href='/' className="error-enlace">&laquo; Ir a Inicio</Link>
    </Layout>
  )
}
export default Pagina404