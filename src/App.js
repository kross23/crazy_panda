
import {getData} from './components/fetch';
import {useEffect, useState} from 'react';
import Forms from './components/forms/Forms';
import Footer from './components/footer/Footer';
import PageLinck from './components/pagelinck/PageLinck';

import './App.css';

function App() {
	const [allobject, setallobject] = useState([]);// все данные
	const [countList, setcountList] = useState(10);//количество постов
	const [indexlist, setindexlist] = useState(1);// текущая страцица
	const [list, setlist] = useState(null);// посты одной страницы
	
	const [searchlist, setSearchList] = useState([]);// drop daun
	const [itemseach, setitemsearch] = useState(null); // найденое 
	const [serch, setSerch] = useState(''); // что ищем
	const [countPage, setCountPage] = useState(5);// 

	
function hendlerInput(e) {
	const target = e.target;
	setSerch(target.value);
	


}
function listset(allobject, countList, setlist ){
	if ( countList === 1 ){
		setlist(allobject);
	}
	if(countList > 1){
		let count = Math.abs(allobject.length - countList );
		let arr=[];
		for(let i = count; i< allobject.length;i++){
			arr.push(allobject[i]);
		}
		setlist(arr);
	}
}
function selectCountList(e) {
	let target = e.target.value;
	setcountList(Number(target));
}
function hendlerSearch(e) {
	e.preventDefault();
	//getData.url = `http://../comments.json`; // locall
	getData.url = `https://jsonplaceholder.typicode.com/comments`;
	getData.searchitem(serch, setitemsearch);
	setSerch('');
}

useEffect(() => {
	getData.url = `https://jsonplaceholder.typicode.com/comments?_limit=${(countList*indexlist)}`;
	getData.objeckts(setallobject);
}, [indexlist, countList]);// загрузка данных
useEffect(() => {
	listset(allobject, countList, setlist);
}, [allobject]);

useEffect(() => {
	if( serch.length > 0 ){
		//getData.url = `http://../comments.json`;
		getData.url = `https://jsonplaceholder.typicode.com/comments`;
		getData.search(serch, setSearchList);
	}
	if(serch === ''){
		setSearchList([]);
	}

}, [serch])

  return (
    <div className="App" >
		<header>
		<div> 
			<p>
				тестовое задание,
				данные используются с сайта 
				<span className="header-title">{'JSON'} Placeholder
				Free fake API for testing and prototyping. </span>
				данные: '/comments'
			</p>
		</div>
		<div className="row ">
			<div className="col-md-3 offset-md-8">
			<nav className="navbar navbar-light bg-light centr">
			<form className="form-inline">
				<input className="form-control mr-sm-2" type="text" placeholder="Поиск" aria-label="Поиск" list="serch" value={serch} onChange={hendlerInput}/>
			<datalist id="serch">
					{ searchlist.map((item, index) => (
                <PageLinck item = {item} key= {index}/>
               			))
					}
			</datalist>
			<button className="btn btn-outline-success my-2 my-sm-0" type="submit"onClick={hendlerSearch} >Поиск</button>
		</form>
		</nav>
	</div>

		</div>
		<span>количество строк на странице</span>
		  <select className="form-select" aria-label="Default select example"defaultValue={countList} onChange={selectCountList}>
			<option value="10">10</option>
			<option value="20">20</option>
			<option value="30">30</option>
			<option value="40">40</option>
			<option value="50">50</option>
			</select>
	  </header>
	  {itemseach? <Forms itemseach={itemseach} setitemsearch={setitemsearch} />  :
	   				<Forms list={list} setlist={setlist}/>}
    
	{ !itemseach?
	<Footer setindexlist = {setindexlist} indexlist={indexlist} 
	countList={countList} 
	countPage={countPage}
	setCountPage={setCountPage}
	/>:
	''
	}
	
    </div>
  );
}

export default App;
