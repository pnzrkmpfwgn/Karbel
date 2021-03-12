import classes from './WhyUs.module.css';

const WhyUs = () =>{
    return <div className={classes.why_us} >
    <h3 className={classes.heading}> Neden Karbel ? </h3>
    
    <hr/>
        <div className={classes.grid_container}>
    <div className={classes.grid_item}>
    <div className={classes.img}><i className={"fas fa-hourglass fa-3x"} ></i></div>
    <h3>Verimlilik ve Zaman Yönetimi</h3>
    <p>Drops of rain could be heard hitting the pane, which made him feel quite sad. How about if I sleep a little bit longer and forget all of this nonsense</p>
    </div>

    <div className={classes.grid_item} >
    <div className={classes.img}> <i className={"fas fa-chart-bar fa-3x"} ></i> </div>
    <h3>Sektörümüzde Liderlik</h3>
    <p>At the floundering legs, he looks and only stopped when he began to feel a mild, dull pain there that he had never felt before.</p>
    </div>
    
    <div className={classes.grid_item}>
    <div className={classes.img}> <i className={"fas fa-users fa-3x"} ></i> </div>
    <h3>Nitelikli İnsan Kaynağı</h3>
    <p>He threw himself onto his right and rolled back to where he was. He must have tried it hundred times, shut his eyes so that wouldn't have to look</p>
    </div>

    <div className={classes.grid_item} >
    <div className={classes.img}> <i className={"fas fa-laptop fa-3x"} ></i> </div>
    <h3> Yeni Teknolojilerin Takibi</h3>
    <p>Doing business like this takes much effort than doing your own business at home, and on top of that there's the curse of travelling</p>
    </div>

    <div className={classes.grid_item} >
    <div className={classes.img}> <i className={"fas fa-chess-rook fa-3x"} ></i> </div>
    <h3>Güvenilirlik</h3>
    <p>He worries about making train connections and irregular food, contact with different people all the time so that you or anyone become friendly.</p>
    </div>

    <div className={classes.grid_item} >
    <div className={classes.img}> <i className={"fas fa-leaf fa-3x"} ></i> </div>
    <h3>Çevreye Saygı</h3>
    <p>It can all go to Hell. He felt a slight itch up on his belly, pushed himself up on his back towards the headboard so that he lift his head better</p>
    </div>
</div>
    </div>
}

export default WhyUs;