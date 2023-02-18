import Layout from "../components/layout";
import Post from "../components/post";
import styles from '../styles/grid.module.css';

function Blog({posts}) {

  console.log(posts)
  return (
    <div>
        <Layout
          title={'Blog'}
          description={'Blgo de musica, venta de guitarras, consejos, GuitarLA'}
        >
          <section className="contenedor">
            <h2 className="heading">Blog</h2>

              <div className={styles.grid}>
                {posts?.map( post => (
                  <Post 
                    key={post?.id}
                    post={post?.attributes}
                  />
                ))}
              </div>
          </section>
        </Layout>
    </div>

  )
}
export default Blog

export async function getServerSideProps () {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data: posts} = await respuesta.json();

  return {
    props: {
      posts
    }
  }
}