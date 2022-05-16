import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './main.less';
import { getRepos } from './../actions/repos';
import { setCurrentPage } from '../../reducers/reposReducer';
import Repo from './repo/Repo';
import { createPages } from './../../utils/pagesCreator';

const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    
    const currentPage = useSelector(state => state.repos.currentPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const perPage = useSelector(state => state.repos.perPage)
    
// totalCount - количество репозиториев
// perPage - количество репозиториев на странице

    const [searchValue, setSearchValue] = useState("")
    const pagesCount = Math.ceil(totalCount/perPage)
    const pages = []
    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    const searchHandler = () => {
        dispatch(currentPage(1))
        dispatch(getRepos(searchValue))
    }

    return (
        <div className='container'>
            <div className="search">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Input repo name' className="search-input" />
                <button onClick={() => searchHandler()} className='search-btn'>Search</button>
            </div>
            {
                isFetching === false
                ?
                repos.map(repo => <Repo repo={repo} />)    
                :
                <div className='fetching'>

                </div>    
            }

            <div className='pages'>
                {pages.map((page, index) => <span 
                    key={index} 
                    className={currentPage == page ? "current-page" : "page"}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>
        </div>
    )
}

export default Main