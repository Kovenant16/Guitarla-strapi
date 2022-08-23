
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

 const Nosotros = () => {
  return (
    <Layout pagina='Nosotros'>
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>

          <div className={styles.contenido}>
            <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='imagen sobre nosotros'/>
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, repellat incidunt! Ipsa odio explicabo laboriosam soluta provident doloribus, iure molestiae molestias reprehenderit reiciendis iusto, obcaecati architecto sapiente corrupti accusamus eveniet?</p>

            </div>
          </div>

        </main>
    </Layout>
  )
}

export default Nosotros
