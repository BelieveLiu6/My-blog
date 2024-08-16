import { Link } from 'react-router-dom'
import style from './Card.module.css'
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
export default function Card({url,article}){
    
    const markdownToText=(markdown)=>{
        const processor=unified()
        .use(remarkParse)
        .use(remarkStringify, { bullet: '*', listItemIndent: 'one' });
    return processor.processSync(markdown).toString();
};
    let contentText=markdownToText(article.content); 
    contentText=contentText.replace(/#/g,'')   

    return (<>
    <div className={style.card}>
        <Link to={url} >
            <div className={style.title}>{article.title}</div>
            <p className={style.content}>{contentText}</p>
            <div className={style.bottom}>
                <div className={style.date}><button >{article.date}</button></div>
                <div className={style.tag}>{article.tags.map((m,index)=>(<button key={index}>{m}</button>))}</div>
            </div>
        </Link>
    </div>
    </>)
}