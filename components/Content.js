import Contact from './Contents/Contact'
import Hello from './Contents/Hello'
import Projects from './Contents/Projects'
import Exprerience from './Contents/Exprerience'

function Content() {
  return (
    <div className="flex flex-col">
      <Hello />
      <Exprerience />
      <Projects />
      <Contact />
    </div>
  )
}

export default Content
