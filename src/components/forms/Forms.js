import React from 'react';
import Item from '../item/item';
import './form.css';
var _ = require('lodash');

function Forms({list, setlist, itemseach, setitemsearch}){
    function byField(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
      }
  const handlerSort = e => {
    const target = e.target.textContent;
	console.log('target: ', e.target.id);
	if(e.target.id === "list" ){
    let users = _.cloneDeep(list);
    if(target === "id"){
        users.sort(byField('id'));
         if(users[0].id === list[0].id && users[users.length-1].id === list[list.length-1].id){
            const resverse = users.reverse();
             setlist(resverse);
        }else{
          setlist(users);
        }
    }
    if(target === 'postId'){
        users.sort(byField('postId'));
        if(users[0].postId === list[0].postId && users[users.length-1].postId === list[list.length-1].postId){
          console.log('users4444: ', users);
          const resverse = users.reverse();
           setlist(resverse);
      }else{
        setlist(users);
      }
    }
    if(target === 'name'){
        users.sort(byField('name'));
        if(users[0].name === list[0].name && users[users.length-1].name === list[list.length-1].name){
          console.log('users4444: ', users);
          const resverse = users.reverse();
           setlist(resverse);
      }else{
        setlist(users);
      }
    }
    if(target === 'email'){
        users.sort(byField('email'));
        if(users[0].email === list[0].email && users[users.length-1].email === list[list.length-1].email){
          const resverse = users.reverse();
          console.log('users4444: ', users);
          setlist(resverse);
       }else{
        setlist(users);
       }
    }
}
   
  }
  function searchClose() {
	setitemsearch('');
  };
    return(
        <div className="form">
          {
			
        itemseach ?
		<>
		<div className="row">
			<div className="col-md-3 offset-md-8">
				<button type="button" className="btn btn-primary btn-sm" onClick={searchClose} >закрыть поиск</button>
			</div>

		</div>
		<div className="text"> <span>результаты поиска</span> </div>
		<table border="1" >
			<thead>
			
			  <tr>
				<th scope="col" className="theader" onClick={handlerSort} id="itemseach">id</th>
				<th scope="col" className="theader" onClick={handlerSort}id="itemseach">postId</th>
				<th scope="col" className="theader" onClick={handlerSort}id="itemseach">name</th>
				<th scope="col" className="theader" onClick={handlerSort}id="itemseach">email</th>
			  </tr>
			</thead>
		  <tbody>
		  {
		 
		  itemseach.map(object_item => (
			  <Item   postId = {object_item.postId}
					  id = {object_item.id}
					  name = {object_item.name}
					  email = {object_item.email}
					  body = {object_item.body}
					  key = {object_item.id}
					  />
			))
		}
	  	</tbody>
		</table>
		</>
            :
			<table border="1" >
			<thead>
			  <tr>
				<th scope="col" className="theader" onClick={handlerSort} id="list">id</th>
				<th scope="col" className="theader" onClick={handlerSort} id="list">postId</th>
				<th scope="col" className="theader" onClick={handlerSort} id="list">name</th>
				<th scope="col" className="theader" onClick={handlerSort} id="list">email</th>
			  </tr>
			</thead>
		  <tbody>
		  {
		  list ? 
			list.map(object_item => (
			  <Item   postId = {object_item.postId}
					  id = {object_item.id}
					  name = {object_item.name}
					  email = {object_item.email}
					  body = {object_item.body}
					  key={object_item.id}
					  listid = "list"
					  />
			 ))
			  : <tr><th >нет данных</th></tr>
		  }
	  </tbody>
	</table>
          }

    </div>
  )
}
export default Forms;