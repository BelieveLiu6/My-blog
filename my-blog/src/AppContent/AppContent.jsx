import { Route, Routes,useLocation } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import UnityWorks from './Components/UnityWorks/UnityWorks.jsx';
import About from './Components/About/About.jsx';
import Navbar from './Components/Narbar/Narbar.jsx';
import Title from './Components/Title/Title.jsx';
import Tools from './Components/Tools/Tools.jsx';
import style from'./AppContenet.module.css'
import ArticleLists from './Components/ArticleLists/ArticleLists.jsx';
import ChatLists from'./Components/ChatLists/ChatLists.jsx';
import Article from './Components/ArticleLists/Article/Article.jsx';
import { DataContext } from './Context/dataContext.js';
import articles from './Components/ArticleLists/articles.json';

export default function AppContent(){
    const locationUrl=useLocation();
    const DataValue={
      articles:articles,
      shuoshuo:[],
    }

    return (<>
    <DataContext.Provider value={DataValue}>
    <Navbar/>
      {locationUrl.pathname==='/'?<Title  />:<div className={style.title}><h1><em>Noting is imposible</em></h1></div>}
      <div className={style.content} >
        <main className={style.main}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/articles' element={<ArticleLists/>} />
            <Route path='/articles/:id' element={<Article/>}/>
            <Route path='/chats' element={<ChatLists/> } />
            <Route path='/about' element={<UnityWorks />} />
            <Route path='/unity' element={<About />} />
          </Routes>
        </main>
        <aside className={style.rightBar}>
          <Tools></Tools>
        </aside>
      </div>
      </DataContext.Provider>
    </>)
}