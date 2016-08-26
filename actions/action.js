const addPlayer = (text) => {
    return {
        type: 'ADD_PLAYER',
        player: {
            id: this.props.data.players,
            name: this.refs.name.value,
            surname: this.refs.surname.value,
            knowname: this.refs.knowname.value,
            shirtNumb: this.refs.shirtNumb.value,
            role: this.refs.role.value
        }
    }   
}

const deletePlayer = (id) => {
    return {
        type: 'DELETE_PLAYER',
        player: {
            id: id
        }
    }
}


const editPlayer = (id, text) => {
    return{
        type: 'EDIT_PLAYER',
        player: {
            name: this.refs.name.value,
            surname: this.refs.surname.value,
            knowname: this.refs.knowname.value,
            shirtNumb: this.refs.shirtNumb.value,
            role: this.refs.role.value
        }
    }
}

