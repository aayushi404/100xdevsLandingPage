import './App.css'
import Courses from './components/courses'
import Footer from './components/footer'
import Hero from './components/hero'
import NavBar from './components/navbar'
import Testimonials from './components/testimonial'
import { completedCourses, existingCourses } from './data/courses'
import { links } from './data/testimonials'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Courses heading="What You'll Learn with us" courses={existingCourses} />
      <Courses heading='Existing Co-horts' courses={completedCourses} />
      <Testimonials links={links} />
      <Footer />
    </>
  )
}

export default App
