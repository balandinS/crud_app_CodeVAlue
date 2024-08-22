import React from 'react'
import { IPropsTopBar } from '../../../types/UIKIT'


const TopBAr = (props: IPropsTopBar) => {
    return (
        <div className={`flex px-[24px] items-center w-[100%] h-[60px] bg-electron_blue`}>
            <h3 className={`text-white text-2xl`}>{props.title}</h3>
        </div>
    )
}


export default TopBAr