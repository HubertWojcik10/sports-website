import Home from '../components/home/Home'
import Head from '../components/seo/Head'

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
    </main>
  )
}
