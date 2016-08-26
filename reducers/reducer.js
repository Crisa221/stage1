var listOfPlayer = {
    player:{
        1:{
            id: 1,
            name: "Nico",
            surname: "Crisa",
            knowname: "Drake",
            shirtNumb: 5,
            role: "Striker"

        },
        2:{
            id: 2,
            name: "Ema",
            surname: "Crisa",
            knowname: "Grinch",
            shirtNumb: 12,
            role: "Defender"
        },
        3:{
            id: 3,
            name: "Pietro",
            surname: "Smusi",
            knowname: "lol",
            shirtNumb: 9,
            role: "Goalkeeper"
        }
    },

    menu: {
        shirtNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                     12, 13, 14, 15, 16, 17, 18, 19, 20],
        role: ['Goalkeeper', 'Defender', 'Midfielder',
                'Striker']  
    
    }
}

var defaultState = {
}

const player = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
        return state.push(
            Map(action.player)
        );
        case 'DELETE_PLAYER':
        return state.filter(player =>
            player.id !== action.id
            );
        case 'EDIT_PLAYER':
        return state.map(player => 
            player.id === action.id ?
                Object.assign({}, player, { text: action.text }) :
                player
        );
        default:
            return state;
    }
};

const store = createStore(defaultState);

ReactDOM.render(
    <Provider store={store}>
        <Players />
    </Provider>,
    document.getElementById('App')
);