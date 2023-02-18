import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/blog.module.css';
import { formatearFecha } from '../utils/helpers';

function Post({post}) {

    const { titulo, contenido, url, imagen, publishedAt } = post;

  return (
    <article className={styles.post}>
    <Image className={styles.imagen} width={400} height={400} src={imagen.data.attributes.formats.small.url} alt={`Imagen blog ${titulo}`}/>

    <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer Post
        </Link>
    </div>
</article>
  )
}
export default Post