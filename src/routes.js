import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home'
import Requests from './containers/Requests'

function Routes() {

    // Route é a rota interessada, o path é o caminho que será acessado, a barra significa que é o endereço principal e o component é o componente que será chamado, que no caso é o HOME que foi importado.
    // Por exemplo, path="/pedidos" component = {Requests} . Quando eu colocar www.isaque.com/pedidos será direcionado para o Requests que é a rota dos pedidos.

    // Com o Switch, ao ser encontrado o destino ele para de procurar se há outra rota igual. Encontrou, deixa de procurar outro.
    
    // O exact significa que a rota deve ser exibida exatamente como está no path.
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pedidos" component={Requests} />
            </Switch>
        </Router>
    )
}

export default Routes;