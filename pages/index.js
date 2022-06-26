import Home from '../components/_home/Home'
import Head from '../components/seo/Head'
import Header from '../components/header/Header'
import ContactForm from '../components/_contact/ContactForm'
import seo from '../data/seo/homepage.json'

const Index = () => {

  return (
    <>
      <Head props={seo}/>
      <Header />
      <Home />
      <ContactForm />
    </>
  )
}

export default Index