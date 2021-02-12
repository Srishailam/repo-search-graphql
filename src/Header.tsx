import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'

interface IViewer {
    name: string;
    avatarUrl: string;
}

interface IQueryResult{
    data:{
        viewer: IViewer;
    }
}

export const Header:FC = () => {
    const [viewer, setViewer]:[IViewer, (viewer:IViewer) => void ] = useState({name:'', avatarUrl:''});
    useEffect(() => {
       axios.post('https://api.github.com/graphql',{
           query: `query{
               viewer{
                   name
                   avatarUrl
               }
           }`
       },{
           headers: {
               Authorization: 'bearer 28d96dcb2bd864641740ff44f9e7eea4799f69ce'
           }
       }).then( response => {
           setViewer(response.data.data.viewer);
       })
    }, [])
    return (
        <div className="Header">
            <img src={viewer.avatarUrl} alt="Avatar" className="avatar"/>
            <div className="viewer">{viewer.name}</div>
            <h1>GitHub Search</h1>
        </div>
    )
}
