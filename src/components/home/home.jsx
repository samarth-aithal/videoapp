import React, {useState,  Fragment} from "react";
import ShakaPlayer from 'shaka-player-react';
import Banner from '../common/banner';
import {mockData} from './mockData'; 
import Button from '@material-ui/core/Button';
import '../../common/common.css'

export default function Home(){

    const [show, setShow] = React.useState(false);
    // const [data, setData] = useState(mockData);
    const [chromeless, setChromeless] = React.useState(false);
    const [active, setActive] = React.useState('all');
    const ref = React.useRef(null);
  
    const config = {
      'controlPanelElements': ['rewind', 'fast_forward']
    }
     
     // ref.current.ui.m.controlPanelElements = ['fat']
   
    
    React.useEffect(() => {
        window.getShakaInst = () => {
          // ref.current;
          ref.current.ui.configure(config)
         }
    }, []);
    
    // function onToggle() {
    //   setShow(!show);
      
    // }
  
    function onChromeless() {
      setChromeless(!chromeless);
    }
  
    const [src, setSrc] = React.useState(null);
  
    function srcHandler(value) {
      setShow(true);
      setSrc(value);
    }
  
   

    // function dataSetter( genreType ){
    //   setActive(genreType);
    //     if(genreType === "all"){
    //         setData(data);
    //     }
    //     else{
    //         setData(data.filter(movie => movie.genre === genreType));
    //     }
    //     console.log('outData',data)
    // }
   
    function dataSetter(value){
      setActive(value);
    }
                  
    
    return(
        <Fragment>
            <div className='page-layout'> 
            <div>
                <div onClick={() => {dataSetter("all")}} className={`category ${active ==='all'? `selected-category`:``}`}>All</div>
                <div onClick={() => {dataSetter("action")}} className={`category ${active ==='action'? `selected-category`:``}`}>Action</div>
                <div onClick={() => {dataSetter("drama")} }className={`category ${active ==='drama'? `selected-category`:``}`}>Drama</div>
                <div onClick={() => {dataSetter("comedy")}} className={`category ${active ==='comedy'? `selected-category`:``}`}>Comedy</div>
                <div onClick={() => {dataSetter("romantic")}} className={`category ${active ==='romantic'? `selected-category`:``}`}>Romantic</div>
                <hr />
            </div>
            
      
            {show && (
                <div className='video-player'>
                  <Button size="small" variant="contained" color="primary" onClick={()=>{setShow(false)}}>
                    Stop
                  </Button>
                   <ShakaPlayer ref={ref} height={500} autoPlay src={src} chromeless={chromeless} />
                </div>
            )}
          <div className='item-list'>
            {mockData.map(movie => {
              return  <div key={movie.title} >
                        <Banner title={movie.title} playHandler={()=>srcHandler(movie.srcUrl)} description = {movie.description} imageUrl = {movie.imageUrl} />
                      </div>
            })}
          </div>  
           
           </div>
           {/* playHander={srcHandler(movie.srcUrl)} */}
        </Fragment>
    )
}