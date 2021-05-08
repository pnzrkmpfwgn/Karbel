import React, {Component,createRef} from 'react';
import Card from './Card';
import {ImageData} from '../../data/ImageData';
import classes from './Slider.module.css';

//Credits for An Object Is A youtube Channel


class Deck extends Component{
    constructor(props){
        super(props);

        this.state={
            cards:[],
        }
        this.animation_in_progress= false;
         this.deck = createRef();
    }

    

    componentDidMount(){
        let new_cards = [];
        let center={
            x:parseFloat(this.deck.style.width)/2,
            y:parseFloat(this.deck.style.height)/2
        }
        let total_number_of_cards = 9;
        let middle_card_by_index = Math.floor(total_number_of_cards/2 );
        let new_x = 0;
        let new_y = 0;
        let new_z = 0;
        let new_scale=0;
        for(let i=0;i<14;i++){
            if(i< middle_card_by_index){//left side of the deck
                
                //order the cards
                new_x=center.x - ((300)*(middle_card_by_index - i));
                new_y=center.y ;

                // Cascade the cards
                new_x=new_x + ((0.333*300)*(middle_card_by_index - i))

                //zIndex the cards
                new_z=i;

                //Scale the cards
                new_scale=Math.pow(0.90,(middle_card_by_index - i));

            }else{//right side of the deck
                //order the cards
                new_x=center.x + ((300)*(i - middle_card_by_index));
                new_y=center.y ;
                
                // Cascade the cards
                new_x=new_x - ((0.333*300)*(i - middle_card_by_index))

                //z index of the cards
                new_z=i * (-1.0);

                //scale the cards
                new_scale=Math.pow(0.90,(i - middle_card_by_index));
                 
            }
            new_cards.push(
                <Card
                    image={'/assets/' + ImageData[i]}
                    x={new_x}
                    y={new_y}
                    z={i=== middle_card_by_index ? 100 : new_z}
                    scale={new_scale}
                    key={i}
                 />
            )
        }
        this.setState({cards:new_cards})
        this.update();
    }
    update(){
        setInterval(() => {
            this.handle_next();
        }, 6000);
    }

    handle_next=()=>{
        
    if(!this.animation_in_progress){
        this.animation_in_progress = true;

        let last_cards_left = this.deck.children[this.deck.children.length - 1 ].style.left;
        let last_cards_zIndex = this.deck.children[this.deck.children.length - 1 ].style.zIndex;
        let last_cards_transform = this.deck.children[this.deck.children.length - 1 ].style.transform;

        for(let i = this.deck.children.length - 1; i > 0 ; i--){
            this.deck.children[i].style.transitionDuration = '1.0s';
            this.deck.children[i].style.left = this.deck.children[i - 1].style.left;
            this.deck.children[i].style.zIndex = this.deck.children[i - 1].style.zIndex;
            this.deck.children[i].style.transform = this.deck.children[i - 1].style.transform
        }

        //Special case
        this.deck.children[0].style.transitionDuration= '0.2s';
        this.deck.children[0].style.transform = 'translate(-50%, -50%) scale(0)';

        setTimeout(()=>{
            this.deck.children[0].style.transitionDuration='0.0s';
            this.deck.children[0].style.left = last_cards_left;
            this.deck.children[0].style.zIndex = last_cards_zIndex;

            this.deck.appendChild(this.deck.children[0]);

            setTimeout(()=>{
                this.deck.children[this.deck.children.length - 1].style.transitionDuration= '0.2s';
                this.deck.children[this.deck.children.length - 1].style.transform = last_cards_transform;

                this.animation_in_progress = false;
            },100)

        },700)
        
    }else{
        return;
    }
    }
    
    handle_prev=()=>{
        if(!this.animation_in_progress){
            this.animation_in_progress = true;
    
            let first_cards_left = this.deck.children[0].style.left;
            let first_cards_zIndex = this.deck.children[0].style.zIndex;
            let first_cards_transform = this.deck.children[0].style.transform;
    
            for(let i = 0; i < this.deck.children.length -1; i++){
                this.deck.children[i].style.transitionDuration = '1.0s';
                this.deck.children[i].style.left = this.deck.children[i + 1].style.left;
                this.deck.children[i].style.zIndex = this.deck.children[i + 1].style.zIndex;
                this.deck.children[i].style.transform = this.deck.children[i + 1].style.transform
            }
    
            //Special case
            this.deck.children[this.deck.children.length - 1].style.transitionDuration= '0.2s';
            this.deck.children[this.deck.children.length - 1].style.transform = 'translate(-50%, -50%) scale(0)';
    
            setTimeout(()=>{
                this.deck.children[this.deck.children.length - 1].style.transitionDuration='0.0s';
                this.deck.children[this.deck.children.length - 1].style.left = first_cards_left;
                this.deck.children[this.deck.children.length - 1].style.zIndex = first_cards_zIndex;
    
                this.deck.insertBefore(this.deck.children[this.deck.children.length - 1],this.deck.children[0])
    
                setTimeout(()=>{
                    this.deck.children[0].style.transitionDuration= '0.2s';
                    this.deck.children[0].style.transform = first_cards_transform;
    
                    this.animation_in_progress = false;
                },100)
    
            },700)
            
        }else{
            return;
        }
    }
    
    render(){
        return <div style={styles.container} >
            <div title="Karbel Çelik Galerisi" id="karbel_çelik_galerisi" ref={ref_id => this.deck = ref_id} style={styles.deck}>
        {this.state.cards}
        </div>
        <div className={classes.button_container}>
            <div title="Geri Butonu" id="geri_butonu" onClick={this.handle_prev} className={classes.button} > <i  className="fa fa-chevron-left" ></i> </div>
            <div title="İleri Butonu" id="ileri_butonu" onClick={this.handle_next} className={classes.button}> <i  className="fa fa-chevron-right" ></i> </div>
        </div>
        </div>
    }
}

const styles={
    deck:{
        position:'absolute',
        top:'40%',
        left:'50%',
        transform:'translate(-60%,-50%)',
        height:'300px',
        width:'300px'
    }
}


export default Deck;