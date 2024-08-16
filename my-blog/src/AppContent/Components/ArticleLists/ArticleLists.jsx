import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../Card/Card';
import { DataContext } from '../../Context/dataContext';

export default function ArticleLists() {
    const [searchParams, setSearchParams] = useSearchParams();//钩子来获取URL中的查询参数。
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 5;

    useEffect(() => {
        const page = parseInt(searchParams.get('page')) || 1;
        setCurrentPage(page);
    }, [searchParams]); //当searchParams变化时，解析page参数并设置当前页码。

    const {articles}=useContext(DataContext)

    const totalArticles=articles.length;//api TODO: 获取数据总数
    
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);////api TODO: 获取指定文章数据
    
    const totalPages = Math.ceil(totalArticles / articlesPerPage);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        setSearchParams({ page: pageNumber });
    };

    return (
        <>
            {currentArticles.map((article, index) => (
                <Card url={`/articles/${indexOfFirstArticle + index + 1}`} article={article} key={indexOfFirstArticle + index}></Card>
            ))}
            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
}