import React from "react";
import ReactToPrint from "react-to-print";

class Componente01ToPrint extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {

        const { usuarios } = this.props

        var linha = 1

        return (
            <div>
                <div className="div10">
                    <div className="div11">Código</div>
                    <div className="div12">Nome</div>
                    <div className="div13">Email</div>
                </div>
                {usuarios.map(u => {
                    linha = linha + 1
                    if ((linha % 25) === 0) {
                        return <div>
                            <div className="pulo"></div>
                            <div className="div10">
                            <div className="div11">Código</div>
                            <div className="div12">Nome</div>
                            <div className="div13">Email</div>
                </div>
                        </div>
                    } else
                    return (

                        <div className="div20">
                            <div className="div21">{u.id}</div>
                            <div className="div22">{u.nome}</div>
                            <div className="div23">{u.email}</div>
                        </div>
                    )

                })

                }
            </div>
        );
    }
}




class Componente01 extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        const { usuarios } = this.props

   
        return (
            <div>
                <ReactToPrint
                    trigger={() => <button >Imprimir</button>}
                    content={() => this.componentRef}
                />
                <p></p>
                <Componente01ToPrint aa="aa" bb="bb" cc="cc" usuarios={usuarios} ref={el => (this.componentRef = el)} />
            </div>
        );
    }
}

export default Componente01;