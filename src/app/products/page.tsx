/* eslint-disable @next/next/no-img-element */
"use client"
import Header from '@/components/Header/Header'
import withAuth from '../../auth/withAuth'
import { useEffect, useState } from 'react'
import { instance } from '@/services/axios'
import { Loader2 } from 'lucide-react'
import { typeProduct } from '@/types/productType'
import CarouselContainer from '@/components/Carousel/CarouselContainer'
import CategoryRow from '@/components/CategoryRow/CategoryRow'

function Products(){

    const [products, setProducts] = useState<typeProduct[] | null>([])
    const [loading, setLoading] = useState(true)

    const getProducts = async()=>{
        
        try{
            const response = await instance.get('/products')
            console.log(response.data)
            setProducts(response.data.products)
            setLoading(false)
        }
        catch(error){
            console.log(error)
            setLoading(true)
        }
    }

    useEffect(()=>{
        getProducts()
    },[setProducts])

    if(loading){
        return (
            <div className="w-full h-[100dvh]">
            <Header />

            <div className='w-full flex items-center justify-center h-[100svh]'>
                <Loader2 className='animate-spin' size={50} color='#222'/>
            </div>
        </div>
        )
    }

    return(
        <div className="w-full h-[100dvh]">
            <Header />

            <div className='w-full h-[100dvh]'>

            <CarouselContainer />

            <CategoryRow />
                <div className='flex w-full p-3 flex-wrap gap-4 justify-center'>
                    {
                       products?.map((item)=>(
                            <span className='w-[280px] h-[370px] border rounded-lg bg-white overflow-hidden shadow-sm border-1' key={item.id}>
                                
                            <div className='flex justify-center w-full h-[220px] overflow-hidden border-b'>
                               <img 
                                className='w-[90%] object-contain hover:scale-[1.03] transition-transform'
                                src={item.image}
                                alt={item.title}/> 
                            </div>
                                
                            <div className='flex justify-center flex-col overflow-hidden mt-1 p-5'>
                                <h1 className='text-ellipsis line-clamp-2 text-[15px] my-3'>{item.title}</h1>

                                {item.discount ? <span className='flex gap-2 items-center'>
                                    <h2 className='text-[#44BBA4]'>${item.price - item.discount}</h2>
                                    <h2 className='text-[#44BBA4]'>{'<-'}</h2>
                                    <h2 className='text-[#44BBA4] line-through text-[14px]'>${item.price}</h2>
                                </span> : <h2 className='text-[#44BBA4]'>${item.price}</h2>}
                            </div>
                            </span>
                       )) 
                    }
                    
                </div>
            </div>
        </div>
    )   
}

export default withAuth(Products)