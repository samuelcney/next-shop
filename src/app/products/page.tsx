"use client"
import Header from '@/components/Header/Header'
import withAuth from '../../auth/withAuth'

function Products(){
    return(
        <div className="w-full h-[100dvh]">
            <Header />
        </div>
    )   
}

export default withAuth(Products)