class PLayerForm extends Component {
    render() {
        let shirtNumb = this.props.data.menu.shirtNumber
        let role = this.props.data.menu.role

        let playerNumber = shirtNumber.map((number, key) => {
            return <option key={key} value={number}>{number}</option>
        })

        let playerRole = role.map((role, key) => {
            return <option key={key} value={role}>{role}</option>
        })

        return (
            <div className="player-form">
                <div className="container">
                    <form
                        className="form-horizontal"
                        onSubmit={this.addPlayer.bind(this)}>
                        <h2>Insert the player</h2>
                        <hr />

                        <div className="form-group">
                            <label className="col-sm-2 control-label">First Name</label>
                            <div className="col-sm-10">
                                <input
                                    required
                                    className="form-control"
                                    ref="name"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-2 control-label">Last Name</label>
                            <div className="col-sm-10">
                                <input
                                    required
                                    className="form-control"
                                    ref="surname"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm=2 control-label">Known Name</label>
                            <div className="col-sm-10">
                                <input
                                    required
                                    className="form-control"
                                    ref="knoname"
                                    type="text"
                                />
                            </div>
                        </div>

                    <div className='form-group'>
                        <label className="col-sm-2 control-label">Role</label>
                        <div className="col-sm-10">
                            <select
                                required
                                className="form-control"
                                ref="shirtNumb"
                                name="shirtNumber">
                                <option defaultValue=''>Please Select the Shirt Number</option>
                                {playerNumber}
                            </select>
                        </div>
                    </div>    

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Role</label>
                        <div className="col-sm-10">
                            <select
                                required
                                className="form-control"
                                ref="role"
                                name="role">
                                <option defaultValue=''>Please Select a Role</option>
                                {playerRole}
                            </select>
                        </div>
                    </div>
                    <input className="btn btn-succes" type="submit" value="Insert The Player" />
                </form>
            </div>
        </div>
        )
    }
}