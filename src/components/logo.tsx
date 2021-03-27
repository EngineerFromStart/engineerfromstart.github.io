import React from "react";
import * as styles from "./logo.module.scss"

class Triangles extends React.Component {

    triangleStyles: { borderLeft: string; borderRight: string; borderBottom: string; };
    constructor(props) {
        super(props);

        let final = props.size;
        
        let bottomSide = (final+final)*0.8660254;
        let rotate = this.props.positions.rotate | 0;
        this.triangleStyles = {
            borderLeft: final+"px solid transparent",
            borderRight: final+"px solid transparent",
            borderBottom: bottomSide+"px solid "+this.props.bg,
            top: this.props.positions.top,
            left: this.props.positions.left,
            transform: "rotate("+rotate+"deg)"
        } 
    }

    render() {
        return (
            <div className={styles.arrowUp} style={this.triangleStyles}></div>
        )
    }
}

export default class Logo extends React.Component {
    static size: number = 15;
    static triangleSizes: number = Logo.size/3;
    static triangleSizesPosition: number = (Logo.triangleSizes+Logo.triangleSizes)*.8660254;
    static bg: string = "white";

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{position: "relative"}}>
                <Triangles size={Logo.triangleSizes} bg={Logo.bg} positions={{left:0 , top: Logo.triangleSizesPosition*2}}></Triangles>
                <Triangles size={Logo.triangleSizes} bg={Logo.bg} positions={{left:Logo.triangleSizes*2 , top: Logo.triangleSizesPosition*2}}></Triangles>
                <Triangles size={Logo.triangleSizes} bg={Logo.bg} positions={{left:Logo.triangleSizes*4 , top: Logo.triangleSizesPosition*2}}></Triangles>
                <Triangles size={Logo.triangleSizes} bg={Logo.bg} positions={{left:Logo.triangleSizes*1, top: Logo.triangleSizesPosition*1}}></Triangles>
                <Triangles size={Logo.triangleSizes} bg={Logo.bg} positions={{left:Logo.triangleSizes*3, top: Logo.triangleSizesPosition*1}}></Triangles>
                <Triangles size={Logo.triangleSizes} bg={Logo.bg} positions={{left:Logo.triangleSizes*2, top: 0}}></Triangles>
                <Triangles size={Logo.triangleSizes} bg={Logo.bg} positions={{left:Logo.triangleSizes*2, top: Logo.triangleSizesPosition*1, rotate:180}}></Triangles>
                <Triangles size={Logo.triangleSizes} bg={Logo.bg} positions={{left:Logo.triangleSizes*1, top: Logo.triangleSizesPosition*2, rotate:180}}></Triangles>
                <Triangles size={Logo.triangleSizes} bg={Logo.bg} positions={{left:Logo.triangleSizes*3, top: Logo.triangleSizesPosition*2, rotate:180}}></Triangles>
            </div>
        )
    }
}
