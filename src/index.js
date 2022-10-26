
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from "./images/logo.png";
import rasm from "./images/rasm2.png"
import rasm1 from "./images/rasm1.png"
import rasm3 from "./images/rasm3.png"
import rasm4 from "./images/rasm4.png"
import rasm5 from "./images/rasm5.png"
import rasm6 from "./images/rasm6.png"
import rasm7 from "./images/rasm7.png"
import rasm8 from "./images/rasm8.png"
import rasm9 from "./images/rasm9.png"
import rasm10 from "./images/rasm10.png"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <>
            <div className="container">
    <div className="navbar">
       <div className="left">
        <ul>
           <li className="logo">
             <img src={logo} />
           </li>
           <li>
             <a href="">About us</a>
           </li>
           <li>
             <a href="">NFTs</a>
           </li>
           <li>
             <a href="">Contact</a>
           </li>
         </ul>
       </div>
       <div className="right">
         <ul>
           <li>
             <a href="#">
               <i class="fa-brands fa-twitter"></i>
             </a>
           </li>
           <li>
             <a href="#">
               <i class="fa-brands fa-instagram"></i>
             </a>
           </li>
           <li>
             <a href="#">
               <i class="fa-brands fa-facebook-f"></i>
             </a>
           </li>
           <button className="">View on OpenSea</button>
         </ul>
       </div>
     </div>
     <div className='section'>
      <div className='lefttext'>
        <p>EXTRAORDINARY NFTs</p>
        <h1>Change your</h1>
        <h1>Digital Experience</h1>
        <p className='rasm'>Suspendisse sem neque, auctor a elementum ut,<br/>
        varius vel leo. Donec diam arcu, porta et magna at
        </p>
      </div>
      <div className='rightimg'>
        <p><img src={rasm}/></p>
        <h1><img src={rasm1}/></h1>
      </div>
     </div>
     <div className='img'>
      <div className='imglar'>
      <p><img src={rasm3}/></p>
      </div>
      </div>
      <div className='text'>
        <h1>Hey there,we are</h1>
        <p>Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam
        </p>
        <p>arcu, porta et magna at</p>
      </div>
      <div className='button'>
        <button>Jack</button>
        <button>Suni</button>
        <button>Colin</button>
      </div>
      <div className='section1'>
        <div className='left1'>
          <p><img src={rasm4}/></p>
        </div>
        <div className='right1'>
          <h6>Digital Artist</h6>
          <h1>Pellentesque blandit<br/>
          in quam rhoncus
          </h1>
          <p>Suspendisse ante mauris, volutpat congue sem ac,<br/> ul
            trices tempor lorem. Nullam eget vehicula tellus,<br/> ac consectetur urna.
             Mauris tincidunt, libero id<br/> ultrices tincidunt, mi leo pharetra dolor,
              sed luctus<br/> dui ipsum et augue. Integer non quam feugiat,<br/> porttitor libero a,
               tempor neque. Nulla ac orci<br/> mauris.
             Quisque nisi nisl, rutrum ac diam et, semper <br/>commodo quam</p>
        </div>
      </div>
      <div className='display'>
      <div className='left2'>
            <img src={rasm5}/>
          </div>
          <div className='right2'>
            <h3>our work</h3><br/>
            <h1>“Um… what’s going on here?”</h1>
            <p>Nulla facilisi. Praesent molestie diam eu enim aliquet <br/>
             pellentesque. Vestibulum consectetur vestibulum tristique. Sed <br/>
             purus neque, maximus fermentum bibendum et, porta in sapien.</p>
             <button>About Codx</button>
          </div>
      </div>
      <div className='number'>
        <div className='left'>
          <div className='btn1'>
            <button className='btn11'>01</button><br/>
            <br/> <h2>Motion Graphic</h2><br/>
            <p>Suspendisse sem neque, auctor a elementum ut,<br/>
             varius vel leo. Donec diam arcu, porta et magna at</p>
          </div><br/><br/><br/>
          <div className='btn2'>
            <button>02</button><br/>
            <br/> <h2>Digital Illustration</h2>
            <p>Suspendisse sem neque, auctor a elementum ut,<br/>
             varius vel leo. Donec diam arcu, porta et magna at</p>
          </div><br/><br/><br/>
          <div className='btn3'>
            <button>03</button><br/>
            <br/> <h2>Photography</h2>
            <p>Suspendisse sem neque, auctor a elementum ut,<br/>
             varius vel leo. Donec diam arcu, porta et magna at</p>
          </div>
        </div>
        <div className='right'>
          <p><img src={rasm6}/></p>
        </div>
      </div>
      <div className='rasm'>
        <p><img src={rasm7}/></p>
        <h1>Browse by Collections</h1>
      </div>
      <div className='imglar'>
        <div><img src={rasm8}/></div>
        <div><img src={rasm9}/></div>
        <div><img src={rasm10}/></div>
      </div>
      <div className='textlar'>
      <div><h2>Photography</h2></div>
        <div> <h2>Art</h2></div>
        <div><h2>Collectibles</h2></div>
      </div>
      <div className='wievall'>
        <button>View all</button>
      </div>
      <div className='Top'>
        <div className='Top-NFT'>
          <h1>Top NFT</h1>
        </div>
      </div>
   </div>
 </>
);

