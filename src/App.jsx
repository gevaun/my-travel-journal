import Navbar from './components/Navbar'
import Journal from './components/Journal'
import data from './data/data'

function App() {

  const entries = data.map((item, index) =>
    <Journal
      key={index}
      item={item}
    />
  )

  return (

    <>
      <Navbar />
      <div className='container mx-auto p-6'>
        {entries}
      </div>
    </>
  )
}

export default App
