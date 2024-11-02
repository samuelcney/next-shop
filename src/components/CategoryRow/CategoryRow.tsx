import { instance } from "@/services/axios"
import { useEffect, useState } from "react"

export default function CategoryRow(){

    const [categories, setCategories] = useState<string[]>()

    const getCategories = async()=>{
        
        try {
            const response = await instance.get('/products/category')
            setCategories(response.data.categories)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getCategories()
    },[])

    return(
        <div className="flex gap-4 mt-4 px-20">
            {categories?.map((item)=>(
                <span key={item} className="border-[#44BBA4] border-2 px-6 py-2 rounded-md
                hover:scale-[1.04] hover:cursor-pointer bg-[#44bba325] transition-all">
                    <h1 className="-tracking-tighter font-light">{item.toUpperCase()}</h1>
                </span>
            ))}
        </div>
    )
}