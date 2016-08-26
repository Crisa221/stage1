class PlayerSet extends Component {
    render() {
        let players = this.props.data.map((player, key) => {
            return (
                <tr key={key}>
                    <td>{defaultState.player[id].name}</td>
                    <td>{defaultState.player[id].surname}</td>
                    <td>{defaultState.player[id].knowname}</td>
                    <td>{defaultState.player[id].shirtNumb}</td>
                    <td>{defaultState.player[id].role}</td>
                    <td>
                        <button
                            type="button"
                            className="btn btn-info btn-xs"
                            onClick={this.editPlayer.bind(this, player.id, player.text)}>
                        Edit
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger btn-xs"
                            onClick={this.deletePlayer.bind(this, player.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="player-lsit">
                <div className="container">
                    <h2>Player List</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Knowname</th>
                                <th>Shirt Number</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players}
                        </tbody>
                    </table>
                    {
                        !players.length &&
                            <div className="alert alert-info" role="alert">
                                No player insert on the table
                            </div>
                    }
                    </div>
                </div>
        )
    }
}

