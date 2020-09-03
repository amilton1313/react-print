import React from "react";
import ReactToPrint from "react-to-print";

class ComponentToPrint extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {

        const { usuarios } = this.props

        console.log(usuarios)

        const saida = usuarios.map(u => {
            return (

                <div  className="fundo">
                    <div>{u.id}</div>
                    <div>{u.nome}</div>
                    <div>{u.email}</div>
                </div>
            )
        })

        return (
            <table>
                <thead className="fundo">
                    <th>column 1</th>
                    <th>column 2</th>
                    <th>column 3</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.aa}</td>
                        <td>{this.props.bb}</td>
                        <td>{this.props.cc}</td>
                    </tr>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                    </tr>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                    </tr>
                    {
saida
                    }
                </tbody>
            </table>
        );
    }
}

class Example extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        const { usuarios } = this.props

        console.log('ei ', usuarios)

        return (
            <div>
                <ReactToPrint
                    trigger={() => <a href="#">Print this out!</a>}
                    content={() => this.componentRef}
                />
                <ComponentToPrint aa="aa" bb="bb" cc="cc" usuarios={usuarios} ref={el => (this.componentRef = el)} />
            </div>
        );
    }
}

export default Example;