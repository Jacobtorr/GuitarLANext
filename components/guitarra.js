import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/guitarras.module.css'

function Guitarra({guitarra}) {

  const {nombre, imagen, descripcion, precio, url} = guitarra;

  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>

        <Link className={styles.enlace} href={`/tienda/${url}`}>
          Ver Producto
        </Link>

      </div>
    </div>
  )
}
export default Guitarra;