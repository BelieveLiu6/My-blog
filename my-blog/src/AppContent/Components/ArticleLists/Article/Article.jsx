import { useParams } from 'react-router-dom';
import style from './Article.module.css'
import ReactMarkdown from 'react-markdown';
import articles from'../articles.json';
export default function Article(){

    const {id}=useParams();
    const article=articles[id-1];
    //api 查询
    return(<>
    <div className={style.articleContainer}> 

        
        <h1 className={style.title}>{article.title}</h1>
        <p className={style.meta}>
            {/* <span>作者：{article.author}</span> |  */}
            <span> {article.date}</span> 
            {/* <span> {article.readingTime}</span> */}
        </p>
        {/* <p className={style.summary}>{article.summary}</p> */}
        <ReactMarkdown className={style.content}>{article.content}</ReactMarkdown>
        <div className={style.tags}>
                {article.tags.map(tag => (
                    <span key={tag} className={style.tag}>{tag}</span>
                ))}
        </div>


        <hr></hr>
        <div className={style.comments}>
                <h2>评论</h2>
                {article.comments.map((comment, index) => (
                    <div key={index} className={style.comment}>
                        <p><strong>{comment.author}</strong> ({comment.date})</p>
                        <p>{comment.content}</p>
                    </div>
                ))}
            </div>
    </div>
    
    </>)
}