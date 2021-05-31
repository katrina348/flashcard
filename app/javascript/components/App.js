import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Category from './Category'
import CategoryForm from './CategoryForm'

const App = ()=>{
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories()
    }, [])

    const addCategory = (category) => {
        let updatedCategories = [category, ...categories]
        setCategories(updatedCategories)
    }

    const updateCategory = (category) => {
        let updatedCategories = categories.map( c=>{
            if(c.id === category.id){
                return category
            } 
            return c
        } )

        setCategories(updatedCategories)
    }

    const getCategories = async () => {
        let res = await axios.get('/categories')
        setCategories(res.data)
    }

    const deleteCategory = async (id) => {
        console.log(id)
        let res = await axios.delete(`/categories/${id}`)
        let updatedCategories = categories.filter( c => c.id !== res.data.id )
        setCategories(updatedCategories)

    }

    const renderCategories = ()=>{
        if(categories.length == 0) {
            return <p>no categories</p>
        }
        return categories.map(c => {
            return <Category deleteCategory={deleteCategory} key={c.id} {...c} updateCategory={updateCategory}/>
        })
    }
    return (
        <div>
            <h1>App</h1>
            <p>front end guy you go from here</p>
            <CategoryForm addCategory={addCategory} />
            {renderCategories()}
        </div>
    )
}

export default App