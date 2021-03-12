import React from 'react';

//Credits for An Object Is A youtube Channel


function ResponsiveCard(props){
    return (<div style={styles.card} >
    <img style={styles.img} src={props.images} alt="Card Item"/>
    </div>)
}

const styles={
    card:{
        margin:0,
        padding:0,
        width:'inherit',
        height:'inherit',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -50%)',
    },
    img:{
        
        maxWidth:'100%',
        maxHeight:'100%',
        position:'relative  ',
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -50%)',
    }
}

export default React.memo(ResponsiveCard);