import React from 'react'

export const TitleData = ({ name, title, data }) => {
    return (
        <div className={`${name}__title-name`}>
            <span className={`${name}__title-name__title`}>{title}</span>
            <span className={`${name}__title-name__data`}>{data}</span>
        </div>
    )
};