import IMG1 from './Death-Note.webp'
import Card from './Card.js'

const Movies = (Props) => {
   

return(

<div className='DIVA'>
{Props.Mov.map(item=>(
<Card card = {item}/>

)

)
}

</div>



    
)
}
export default Movies