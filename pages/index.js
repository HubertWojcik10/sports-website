import Home from '../components/_home/Home'
import Head from '../components/seo/Head'
import Contact from '../components/_contact/Contact'
import Header from '../components/header/Header'

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
      <Contact />
    </main>
  )
}
