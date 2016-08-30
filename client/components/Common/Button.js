import React, {Component, PropTypes as PT} from "react";
import cx from "classnames";

class Button extends Component {

    static propTypes = {
        primary: PT.bool,
        link: PT.bool,
        busy: PT.bool,
        disabled: PT.bool,
        updated: PT.bool,
        error: PT.string,
        busyText: PT.string,
        onClick: PT.func
    }

    static defaultProps = {
        primary: true,
        link: false,
        busy: false,
        disabled: false,
        updated: false,
        error: null,
        busyText:"Please wait...",
        onClick: () => {}
    }

    _buttonContent() {
        if (this.props.busy) {
            return this.props.busyText;
        }
        return this.props.children;
    }

    /**
     * Devuelve el estado de "cancelado" para el botón. El botón debe estar
     * "cancelado" (NO DEBE responder a eventos onClick) en las siguientes
     * circunstancias: A) Cuando nos envían mediante props en "props.disabled"
     * que el botón debe estar realmente cancelado o B) cuando mostramos
     *
     * NOTA: Esto no tiene nada que ver con el CSS ".diabled".
     * El class="disabled" sólo es una pista visual de deshabilitado
     * (generalmente con un color más clarito) pero no tiene nada que ver con
     * el estado deshabilitado del botón.
     */
    _disabledState() {
        return this.props.disabled || this.props.busy || !!this.props.error;
    }

    render() {
        let { link, busy, error, primary, disabled } = this.props;
        let classes = cx({
            "btn" : true,
            "btn-link"    : link,
            "btn-primary" : !link && primary,
            "btn-default" : !link && !primary,
            "disabled"    : disabled,
            "loading"     : busy,
            "error"       : error
        }, this.props.className);

        return (
            <button
                disabled={this._disabledState()}
                onClick={this.props.onClick}
                className={classes}>
                {this._buttonContent()}
            </button>
        );
    }

}

export default Button;
