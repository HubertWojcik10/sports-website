import Home from '../components/_home/Home'
import Head from '../components/seo/Head'
import Header from '../components/header/Header'
import ContactForm from '../components/_contact/ContactForm'

export default function Index() {
  const props = {
    'title': 'Sports City',
    'description': 'description',
    'img': 'img',
    'alt': 'alt'
  }

  return (
    <main>
      <Head props={props}/>
      <Header />
      <Home />
      <ContactForm />
    </main>
  )
}
