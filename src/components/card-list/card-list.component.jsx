import React from 'react'
import {PlaceHolder} from '../placeholder/no-data-placeholder.component';

import { Card } from '../card/card.component'
import './card-list.style.css'
export const CardList = (props) => {
  if(props.monsters.length <=0) {
    return <PlaceHolder msg="No data found" />
  }
  return (<div className="card-list">{props.monsters.map((item, index) => <Card key = {index} monster={item} />)}</div>)
}