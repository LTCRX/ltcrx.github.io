import React, {Component} from "react";
import "../../../Assets/css/Global.css";

export default class index extends Component {
    render() {
        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <p className="text-center fs-6">
                    E-mail:
                    <strong style={{color: "#C23522"}}> ltc.den@ufpe.br</strong>
                </p>
            </div>
        );
    }
}
