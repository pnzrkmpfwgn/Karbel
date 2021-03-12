import React from 'react';

//Credits for An Object Is A youtube Channel


function Card(props){
 
    return (
    <div
        style={{
            ...styles.card,
            left:`${props.x}px`,
            top:`${props.y}px`,
            zIndex:props.z,
            transform:`translate(-50%, -50%) scale(${props.scale})`
            }} 
     >
     <img style={{"boxShadow":" 10px 10px 8px #888888"}} src={props.image} alt=""/>
    </div>
    )
}

const styles={
    card:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        height:'200px',
        width:'300px',
        boxSizing:'border-box',
    }
}

export default React.memo(Card);