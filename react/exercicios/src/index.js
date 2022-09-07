import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Joao" sobrenome="Juca">
        <Filho nome= "Roberto"/>
        <Filho nome= "Tobias"/>
        <Filho nome= "Carla"/>
        </Pai>
        

    </div>
    
    , document.getElementById('root'))