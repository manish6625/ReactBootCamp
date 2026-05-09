
import './App.css'
import cart from './cart'

function App() {
    let arr=[
      {
        id:1,
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque libero explicabo doloremque aspernatur       eum repellat ad inventore eos expedita dolorum natus minima totam, culpa aut repudiandae porro aliquam at"
      },
      {
        id:2,
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque libero explicabo doloremque aspernatur        eum repellat ad inventore eos expedita dolorum natus minima totam, culpa aut repudiandae porro aliquam at"
      },
      {id:3,
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque libero explicabo doloremque aspernatur       eum repellat ad inventore eos expedita dolorum natus minima totam, culpa aut repudiandae porro aliquam at"
      }
    ]


    let result=arr.map((item,ind)=>{
      
        return(
          <div className='card'>
            <h1>{item.id}</h1>
            <p>{item.content}</p>
            <button className='btn'>Read More</button>
                                        <div className='card1'></div>

          </div>
        )
    });


  return (
    <div>
           <div className='container'>  

            {result}
          </div>
    </div>
  )
}


export default App
