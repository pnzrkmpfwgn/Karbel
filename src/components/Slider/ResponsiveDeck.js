import React, { Component, Fragment } from 'react';
import {ImageData} from '../../data/ImageData';
import ResponsiveCard from './ResponsiveCard.js';

//Credits for An Object Is A youtube Channel

class ResponsiveDeck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: [],
            number_of_cards_by_index: 2
        }
    }

    componentDidMount() {
        const new_cards = [];

        for (let i = 0; i <= this.state.number_of_cards_by_index; i++) {
            new_cards.push(
                <ResponsiveCard images={'./assets/' + ImageData[i]} key={i}  />
            )
        }

        this.setState({ cards: new_cards }, () => {
            let img_width_as_percentage = 50;
            img_width_as_percentage = window.innerWidth < 768 ? 100 : img_width_as_percentage;
            let nav_buttons_placement_as_percentage = 60;
            nav_buttons_placement_as_percentage = window.innerWidth < 768 ? 100 : nav_buttons_placement_as_percentage;

            this.new_width =
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
                    (img_width_as_percentage / 100) * window.screen.width :
                    (img_width_as_percentage / 100) * window.innerWidth;

            this.view_port.style.width = `${this.new_width}px`;
            this.nav_buttons_container.style.width = `${nav_buttons_placement_as_percentage}vw`;
            this.nav_button_next.style.width = `${(this.new_width / 2) * 0.30}px`;
            this.nav_button_prev.style.width = `${(this.new_width / 2) * 0.30}px`;

            window.addEventListener('resize', () => {
                img_width_as_percentage = 50;
                img_width_as_percentage = window.innerWidth < 768 ? 100 : img_width_as_percentage;
                nav_buttons_placement_as_percentage = 60;
                nav_buttons_placement_as_percentage = window.innerWidth < 768 ? 100 : nav_buttons_placement_as_percentage;

                this.new_width =
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
                        (img_width_as_percentage / 100) * window.screen.width :
                        (img_width_as_percentage / 100) * window.innerWidth;

                this.view_port.style.width = `${this.new_width}px`;
                this.nav_buttons_container.style.width = `${nav_buttons_placement_as_percentage}vw`;
                this.nav_button_next.style.width = `${(this.new_width / 2) * 0.30}px`;
                this.nav_button_prev.style.width = `${(this.new_width / 2) * 0.30}px`;

                this.order_cards();

                this.right_boundary = parseFloat(this.images.children[this.state.number_of_cards_by_index].style.left) + this.new_width;
                this.left_boundary = parseFloat(this.images.children[0].style.left) - this.new_width;

                for (let i = 0; i < this.images.children.length; i++) {
                    this.last_positions[i] = parseFloat(this.images.children[i].style.left);
                }
            });

            this.order_cards();

            /* *********** TOUCH NAVIGATION *********** */
            this.start_touch_position = 0.0;
            this.updated_position = 0.0;
            this.speed_modifier = 0.8;
            this.last_positions = [];
            //this.right_boundary = parseFloat(this.images.children[this.state.number_of_cards_by_index].style.left) + this.new_width;
            //this.left_boundary = parseFloat(this.images.children[0].style.left) - this.new_width;

            for (let i = 0; i < this.images.children.length; i++) {
                this.last_positions.push(parseFloat(this.images.children[i].style.left));
            }

            this.touch_area.addEventListener('touchstart', this.handle_touch_start, { passive: false });
            this.touch_area.addEventListener('touchmove', this.handle_touch_move, { passive: false });
            this.touch_area.addEventListener('touchend', this.handle_touch_end, { passive: false });
            /* **************************************** */

            /* ********** BUTTON NAVIGATION *********** */
            this.scroll_in_progress = false;
            /* **************************************** */

            /* *********** WHEEL NAVIGATION *********** */
            this.mouse_over = false;
            this.wheel_timeout_id = null;

            this.touch_area.addEventListener('mouseover', this.handle_mouse_over, { passive: false });
            this.touch_area.addEventListener('mouseleave', this.handle_mouse_leave, { passive: false });
            this.touch_area.addEventListener('wheel', this.handle_wheel, { passive: false });
            /* **************************************** */

            /* *********** SNAP BACK LOGIC ************ */
            this.snap_in_progress = false;
            this.distance_to_scroll = 0.0;
            this.seed = 0.0;
            this.snap_speed_modifier = 0.05;
            /* **************************************** */
        });
    }

    componentWillUnmount(){}
    

    order_cards = () => {
        const card_width = parseFloat(styles.view_port.width),
            middle_card_by_index = Math.floor(this.state.number_of_cards_by_index / 2);
        let counter_for_right = 1,
            counter_for_left = middle_card_by_index;

        for (let i = 0; i < this.images.children.length; i++) {
            this.images.children[i].style.transitionDuration = '0.0s';

            if (i < middle_card_by_index) {
                this.images.children[i].style.left = `-${(counter_for_left * this.new_width) - (this.new_width / 2)}px`;
                counter_for_left--;
            } else if (i > middle_card_by_index) {
                this.images.children[i].style.left = `${(counter_for_right * this.new_width) + (this.new_width / 2)}px`;
                counter_for_right++;
            } else {
                this.images.children[i].style.left = `${this.new_width / 2}px`;
            }
        }
    }

    handle_boundaries = () => {
        if (Math.round(this.last_positions[this.state.number_of_cards_by_index]) >= this.right_boundary) {
            const beginning_of_deck = this.last_positions[0] - this.new_width;
            this.images.children[this.state.number_of_cards_by_index].style.left = `${beginning_of_deck}px`;
            this.last_positions[this.state.number_of_cards_by_index] = beginning_of_deck;

            this.images.insertBefore(this.images.children[this.state.number_of_cards_by_index], this.images.children[0]);
            this.last_positions.splice(0, 0, this.last_positions.pop());
        }
        if (Math.round(this.last_positions[0]) <= this.left_boundary) {
            const end_of_deck = this.last_positions[this.state.number_of_cards_by_index] + this.new_width;
            this.images.children[0].style.left = `${end_of_deck}px`;
            this.last_positions[0] = end_of_deck;

            this.images.appendChild(this.images.children[0], this.images.children[this.state.number_of_cards_by_index]);
            this.last_positions.splice(this.state.number_of_cards_by_index, 0, this.last_positions.shift());
        }
    }

    /* *********** SNAP BACK LOGIC ************ */
    snap_back = () => {
        this.snap_in_progress = true;

        const adjusted_positions = this.last_positions.map(position => Math.abs(position - (this.new_width / 2)));
        const closest_card_by_index = adjusted_positions.indexOf(Math.min(...adjusted_positions));

        this.distance_to_scroll = adjusted_positions[closest_card_by_index] *
            (this.last_positions[closest_card_by_index] > (this.new_width / 2) ? -1.0 : 1.0);

        this.animate_snap();
    }

    animate_snap = () => {
        this.seed = parseFloat(this.seed.toFixed(2));

        let percentage_to_move = Math.pow(this.seed, 2.0);
        percentage_to_move = parseFloat(percentage_to_move.toFixed(2));

        if (this.seed > 1) {
            this.snap_in_progress = false;
            this.seed = 0.0;

            for (let i = 0; i < this.images.children.length; i++) {
                this.updated_position = this.last_positions[i] + this.distance_to_scroll;
                this.images.children[i].style.left = `${this.updated_position}px`;
                this.last_positions[i] = this.updated_position;
            }

            this.handle_boundaries();
            return;
        }

        for (let i = 0; i < this.images.children.length; i++) {
            this.updated_position = this.last_positions[i] + (percentage_to_move * this.distance_to_scroll);
            this.images.children[i].style.left = `${this.updated_position}px`;
        }

        this.seed += 1 * this.snap_speed_modifier;
        requestAnimationFrame(this.animate_snap);
    }
    /* **************************************** */


    /* *********** TOUCH NAVIGATION *********** */
    handle_touch_start = event => {
        if (this.snap_in_progress) return;

        this.start_touch_position = event.changedTouches[0].screenX;

        for (let i = 0; i < this.images.children.length; i++) {
            this.images.children[i].style.transitionDuration = '0.0s';
        }
    }

    handle_touch_move = event => {
        event.preventDefault();
        if (this.snap_in_progress) return;

        const current_touch_position = event.changedTouches[0].screenX;
        let difference = current_touch_position - this.start_touch_position;
        difference *= this.speed_modifier;

        this.start_touch_position = current_touch_position;

        for (let i = 0; i < this.images.children.length; i++) {
            this.updated_position = this.last_positions[i] + difference;
            this.images.children[i].style.left = `${this.updated_position}px`;
            this.last_positions[i] = this.updated_position;
        }

        this.handle_boundaries();
    }

    handle_touch_end = () => {
        if (this.snap_in_progress) return;

        this.snap_back();
    }
    /* **************************************** */

    /* ********** BUTTON NAVIGATION *********** */
    handle_next = () => {
        if (this.scroll_in_progress || this.snap_in_progress) return;
        this.scroll_in_progress = true;

        for (let i = 0; i < this.images.children.length; i++) {
            this.updated_position = this.last_positions[i] + this.new_width;
            this.images.children[i].style.transitionDuration = '0.5s';
            this.images.children[i].style.left = `${this.updated_position}px`;
            this.last_positions[i] = this.updated_position;
        }

        this.handle_boundaries();

        setTimeout(() => {
            this.scroll_in_progress = false;
        }, 500);
    }

    handle_prev = () => {
        if (this.scroll_in_progress || this.snap_in_progress) return;
        this.scroll_in_progress = true;

        for (let i = 0; i < this.images.children.length; i++) {
            this.updated_position = this.last_positions[i] - this.new_width;
            this.images.children[i].style.transitionDuration = '0.5s';
            this.images.children[i].style.left = `${this.updated_position}px`;
            this.last_positions[i] = this.updated_position;
        }

        this.handle_boundaries();

        setTimeout(() => {
            this.scroll_in_progress = false;
        }, 500);
    }
    /* **************************************** */

    /* *********** WHEEL NAVIGATION *********** */
    handle_mouse_over = () => {
        if (this.snap_in_progress) return;
        this.mouse_over = true;

        for (let i = 0; i < this.images.children.length; i++) {
            this.images.children[i].style.transitionDuration = '0.0s';
        }
    }

    handle_mouse_leave = () => {
        if (this.snap_in_progress) return;
        this.mouse_over = false;
    }

    handle_wheel = event => {
        event.preventDefault();
        clearTimeout(this.wheel_timeout_id);

        if (this.snap_in_progress) return;

        if (this.mouse_over) {
            for (let i = 0; i < this.images.children.length; i++) {
                this.updated_position = this.last_positions[i] + (event.deltaY * 0.2);
                this.images.children[i].style.left = `${this.updated_position}px`;
                this.last_positions[i] = this.updated_position;
            }

            this.handle_boundaries();

            this.wheel_timeout_id = setTimeout(() => {
                this.snap_back();
            }, 100);
        }
    }
    /* **************************************** */

    render() {
        return (
         <Fragment>
            
                <div style={styles.nav_buttons_container} ref={ref_id => this.nav_buttons_container = ref_id} >
                <img style={styles.nav_buttons} ref={ref_id => this.nav_button_prev = ref_id} src="./assets/prev.png" alt="prev" id="önceki" onClick={this.handle_prev} />
                <img style={styles.nav_buttons} ref={ref_id => this.nav_button_next = ref_id} src="./assets/next.png" alt="next" id="sonraki" onClick={this.handle_next} />
            </div>
            <div ref={ref_id => this.touch_area = ref_id} style={styles.touch_area}></div>
            <div ref={ref_id => this.view_port = ref_id} style={styles.view_port} >
                <div ref={ref_id => this.images = ref_id} style={styles.images_container} >
                    {this.state.cards}
                </div>
            </div>
         
         
        </Fragment>
        )
    }
}

const styles = {
    view_port: {
        margin: 0,
        padding: 0,
        width: '500px',
        height: '300px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden'
    },
    images_container: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: 'inherit',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    touch_area: {
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '300px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // backgroundColor: 'rgba(255, 0, 0, 0.2)',
        zIndex: 9999
    },
    nav_buttons_container: {
        margin: 0,
        padding: 0,
        width: '100vw',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'rgba(0, 0, 255, 0.3)',
        zIndex: 99999,
        pointerEvents: 'none'
    },
    nav_buttons: {
        width: '50%',
        height: 'auto',
        cursor: 'pointer',
        pointerEvents: 'all'
    }
}

export default ResponsiveDeck;
