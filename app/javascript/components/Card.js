import axios from 'axios'
import React, {useState} from 'react'
import CardForm from './CardForm'

const Card = (props) => {
    const {question, id, answer, answered,  categoryId,removeCard, updateCard} = props
    const [showSection, setShowSection] = useState('q')
    const deleteCard = async (id) => {
        try{
           let res = await axios.delete(`/categories/${categoryId}/cards/${id}`)
           console.log(res)
           removeCard(res.data.id)
        } catch(err){
            console.log(err)
            console.log(err.response)
            alert('err occured')
        }
    }

    const renderContent = ()=>{
        if(showSection === 'q'){
            return <p style={styles.text}>{question}</p>
        } 
        if(showSection === 'a'){
            return <p style={styles.text}>{answer}</p>
        }
        if(showSection === 'f'){
            return  (
                <>
                 <CardForm categoryId={categoryId} updateCard={updateCard} id={id} question={question} answer={answer}/>
                 <div onClick={()=> deleteCard(id)}>delete</div>
                </>
            )
        }
    }

    return (
        <div style={styles.container}>
            {renderContent()} 
            <div style={styles.footer}>
                <div style={showSection == 'q' ? {...styles.btn, border:'3px solid red'} : styles.btn} onClick={()=> setShowSection('q')}>q</div>
                <div style={showSection == 'a' ? {...styles.btn, border:'3px solid red'} : styles.btn} onClick={()=> setShowSection('a')}>a</div>
                <div style={showSection == 'f' ? {...styles.btn, border:'3px solid green'} : styles.btn} onClick={()=> setShowSection('f')}>f</div>
            </div> 
        </div>
    )
}

const styles = {
    text: {
       fontSize:'24px',
       padding:"10px",
       textAlign:'center'
    },
    container: {
        // border:'1px solid',
        boxShadow: '2px 2px 3px 2px #ddd',
        borderRadius:'4px', 
        margin:'10px'
    },
    footer:{
        display:'flex',
        justifyContent:'space-around'
    },
    btn: {
        border:'2px solid steelblue',
        borderRadius:'4px', 
        padding:'10px 20px',
        flex:1,
        margin:'0 5px',
        textAlign:'center'
    }
}
export default Card