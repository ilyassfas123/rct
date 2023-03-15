

const Card = (Props)=>{
    
return(

   
    
    <div className='DIVB'>
      <img  src= {Props.card.item.IMG} className='IG' /> 
      <div className='DIVC'> <h2 className='TIT'> {Props.card.item.Title}</h2>
      <p className='PARA'>{Props.card.item.Summary}</p> </div>
     <button className='bf'>Watch Now<ion-icon name="play-circle-outline"></ion-icon></button>
       </div>
    
    
    )
}
    export default Card
