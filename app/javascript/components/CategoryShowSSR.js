import axios from 'axios'
import React, {useState, useEffect} from 'react'

const CategoryShowSSR = (props) =>{
  const {id} = props

  const [cards, setCards] = useState([])
  const [category, setCategory] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=>{
    getCards()
  }, [])

  const getCards = async()=>{
    try{
      let res = await axios.get(`/categories/${id}/cards/`)
      let res1 = await axios.get(` https://reqres.in/api/users?delay=3`)
      setLoading(false)
      console.log(res.data)
      setCards(res.data.cards)
      setCategory(res.data.category)
    }catch(err){
      console.log(err)
      console.log(err.response)
      setError(true)
      setLoading(false)
      alert('err occurred get cards check console')
    }
  }

  const renderLoader = () => {
    if(loading){
      return <p>loading...</p>
    }
    if(error){
      return <p>error</p>
    }
  }
 
    return(
      <div>
        <h1>Category show page</h1>
        <a href='/'>back</a>
        {renderLoader()}
      </div>
  )
}

export default CategoryShowSSR