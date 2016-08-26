const App = {
    Players: connect(
        function mapStateToProps(state) {
            return {
                players: state
            };
        },
        function mapDispatchToProps(dispatch) {
            return {
                editPlayer: (id, text) => dispatch(actions.editPlayer(id, text)),
                deletePlayer: (id) => dispatch(actions.deletePlayer(id)),
                addPlayer: (text) => dispatch(actions.addPlayer(text))
            };
        }
    )(components.Players)
};

const { Players } = App;