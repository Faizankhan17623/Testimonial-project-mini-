import React from 'react';
import Card from './components/test'
import reviews from './data'
function App(){
  // const data = reviews;
  // console.log(data)
  return(
    <div>
      <div>
        <h1>Our Testimonial</h1>

        <div className='w-6 mt-1 h-1 bg-blue-700'></div>
        <Card reviews = {reviews}></Card>
      </div>
    </div>
  )
}
export default App;