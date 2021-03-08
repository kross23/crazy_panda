import './footer.css';
import {useEffect} from 'react';

function Footer({setindexlist,  countPage, setCountPage, indexlist}) {
    const handlerindexList = (e) => {
        e.preventDefault(); 
        const target = e.target;
        if (target.textContent === 'Next'){
            setCountPage(countPage+5);
            setindexlist(countPage + 1);
        }
        if(target.textContent === 'Previous' && countPage-5 > 0){
            setCountPage(countPage-5);
            setindexlist(countPage - 5 );
        }
        if (!isNaN(target.textContent)){
            let temp = target.textContent;
           temp = Number(temp);
            setindexlist(temp);
        }
       
    }
    function indexCount(){
        let currentClass = document.getElementsByClassName("page-link");
        for(let i=0 ; i< currentClass.length; i++){
            let temp = currentClass[i].textContent;
            if( Number(temp) === indexlist){
                currentClass[i].classList.add('active');
            }else{
                currentClass[i].classList.remove('active');
            }
        };
    }
    useEffect(() => {
        indexCount();
        //console.log('countindexlist',indexlist);
    }, [indexlist])

    return(
        <div className="row" >
            <div className=" offset-md-5">
            <nav aria-label="Page navigation example">

        <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#/" onClick={handlerindexList}>Previous</a></li>
         
            <li className="page-item"><a className="page-link active" href="#/"onClick={handlerindexList}>{countPage-4}</a></li>
            <li className="page-item"><a className="page-link" href="#/" onClick={handlerindexList}>{countPage-3}</a></li>
            <li className="page-item"><a className="page-link" href="#/" onClick={handlerindexList}>{countPage-2}</a></li>
            <li className="page-item"><a className="page-link" href="#/" onClick={handlerindexList}>{countPage-1}</a></li>
            <li className="page-item"><a className="page-link" href="#/" onClick={handlerindexList}>{countPage}</a></li>

            <li className="page-item"><a className="page-link" href="#/" onClick={handlerindexList}>Next</a></li>
            </ul>
            </nav>
            </div>
        </div>
       
    )
}
export default Footer;