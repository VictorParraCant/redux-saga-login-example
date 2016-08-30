import React, {Component, PropTypes as PT} from "react";
import FormGroup from "components/Common/Forms/FormGroup";
import Button from "components/Common/Button";

class LoginForm extends Component {

    static propTypes = {
        processing: PT.bool, // send request?
        errors: PT.object,
        login: PT.func
    }

    static defaultProps = {
        processing: false,
        errors: {},
        login: () => {}
    }

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: this.props.errors,
            pause: false // error validation or send request
        };
    }

    // Disparar una método que me permita cambiar el estado
    // de los errores después del que el sagas traiga nuevos props.
    componentWillReceiveProps(next_props){
        let newErrors = next_props.errors;
        if (newErrors){
            this.setState({
                errors: {
                    ...newErrors,
                    ...this.props.errors
                },
                pause: true
            });
        } else {
            this.setState({ errors: this.props.errors });
        }
    }

    onChangeHandle(e) {
        let newErrors = { ...this.state.errors, [e.target.name]: null };
        this.setState({
            [e.target.name]: e.target.value,
            errors: newErrors
        });
        this.pausate(newErrors);
    }

    pausate(errors) {
        if( !errors.email && !errors.password ){
            this.setState({ pause: false });
        }
    }

    validate() {

        let newErrors = {};
        let hasErrors = false;
        let { email, password } = this.state;

        // Validate email
        if (!email || email.length < 2) {
            newErrors.email = "Min 2 chars";
            hasErrors = true;
        } else {
            // Si ya teniamos un fallo del server,
            // evitamos ponerlo en null
            newErrors.email = this.state.errors.email || null;
        }

        // Validate password
        if (!password || password.length < 2) {
            newErrors.password = "Min 2 chars";
            hasErrors = true;
        } else {
            newErrors.password = this.state.errors.password || null;
        }

        if ( hasErrors ) {
            this.setState({
                errors: newErrors,
                pause: true
            });
        } else {
            return true;
        }

    }

    submit(e) {
        e.preventDefault();
        if (!this.validate()) {
            return;
        } else {
            // Llamada a la accion de login
            // que traera nuevas props.
            this.props.login(this.state);
        }
    }

    render() {

        const { processing } = this.props;
        const {
            email,
            password,
            errors,
            pause
        } = this.state;

        return (
            <form>
                <h2>Login</h2>
                <hr />
                <FormGroup label="Email" errorText={errors.email}>
                    <input
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={::this.onChangeHandle}
                        disabled={processing}
                        />
                </FormGroup>

                <FormGroup label="Password" errorText={errors.password}>
                    <input
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={::this.onChangeHandle}
                        disabled={processing}
                        />
                </FormGroup>

                <Button busy={processing} disabled={pause} onClick={::this.submit}>
                    { processing && "Send ..." }
                    { !processing && "Login" }
                </Button>

            </form>
        );
    }
}

export default LoginForm;
