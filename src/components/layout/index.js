import React from 'react'
import Navbar from '../Navbar/navbar'
import { ContainerCover, } from './style'
import Footer from '../footer/index'
export default function Layout(props) {
    return (
        <>
            <Navbar />
            <ContainerCover>
                {props.children}
            </ContainerCover>
            <Footer />
        </>
    )
}
