import './item.css';

function Item({postId, id, name, email, body}){   //{postId, id, name, email, body}
    

    return(
     
             <tr><td >{id}</td><td >{postId}</td><td >{name}</td><td>{email}</td></tr>                         
           
      
    )
}
export default Item;