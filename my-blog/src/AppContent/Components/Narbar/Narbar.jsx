import { NavLink } from "react-router-dom";
import style from './Narbar.module.css';
import { useEffect, useState } from "react";


export default function Navbar() {
  const [backgroundOpacity,setBackgroundOpacity]=useState(0)
  const [isHidden,setIsHidden]=useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
      const scrollTop=window.scrollY;
      const maxScroll=600;
      const newOpacity=Math.min(scrollTop/maxScroll,1);
      setBackgroundOpacity(newOpacity);
      if(scrollTop>maxScroll+200){
        setIsHidden(true);
      }else{
        setIsHidden(false)
      }
    }
    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }
  },[])
  return (
    <nav className={`${style.navbar} ${isHidden ? style.hidden : ''}`} 
    style={{backgroundColor:`rgba(152, 192, 240,${backgroundOpacity})`}}
    >
     <div className={style.container}>
      <ul>
        <li><NavLink to='/' >首页</NavLink ></li>
        <li><NavLink  to='/articles'>文章</NavLink ></li>
        <li><NavLink  to='/chats'>说说</NavLink ></li>
        <li><NavLink  to='/about'>关于</NavLink ></li>
        <li><NavLink  to='/unity'>Unity作品集</NavLink ></li>
      </ul>
     </div>
    </nav>
   
  );
}