import Image from 'next/image';
import Layout from "../components/layout"
import styles from'../styles/nosotros.module.css';

function Nosotros() {
  return (
    <div>
        <Layout
          title={'Nosotros'}
          description={'Sobre nosotros, GuitarLA, tienda de musica'}
        >
          <main className="contenedor">
            <h2 className="heading">Nosotros</h2>

            <div className={styles.contenido}>
              <Image src="/img/nosotros.jpg" width={1000} height={800} alt='Imagen sobre nosotros'/>

              <div>
                <p>Donec faucibus, lectus eu cursus porta, enim quam commodo nunc, eget iaculis magna lacus et eros. Etiam convallis faucibus risus eget blandit. Duis convallis eros id convallis feugiat. Praesent sem odio, lacinia at convallis et, auctor sit amet ipsum. Pellentesque sed bibendum ante. Praesent non felis augue. In rhoncus non mi a sollicitudin. Sed ut dui sed erat tempor dictum quis a eros.</p>

                <p> Ut laoreet ligula vel ex sollicitudin fringilla. Sed varius enim tortor, ac efficitur risus posuere nec. Duis tempor finibus suscipit. Pellentesque nec lorem metus. Maecenas mattis iaculis massa. Duis vitae vehicula augue. Curabitur at mauris sit amet diam placerat vestibulum a ut augue. Curabitur semper ipsum sit amet mi maximus interdum.</p>
              </div>
            </div>
          </main>
        </Layout>
    </div>

  )
}
export default Nosotros