import Home from '../components/_home/Home'
import Head from '../components/seo/Head'
import Contact from '../components/_contact/Contact'

export default function Index() {
  const props = {
    'title': 'Company',
    'description': 'description',
    'img': 'img',
    'alt': 'alt'
  }

  return (
    <main>
      <Head props={props}/>
      <Home />
      <Contact />
    </main>
  )
}
