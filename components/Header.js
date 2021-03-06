import React from 'react'
import Welcome from './Welcome'
import { Search } from './Search'
import { HeaderOptions } from './HeaderOptions'

export default class Header extends React.Component {

  render () {
    return (
      <header className="header">
        <div className="header-container">
          <div className="header-brand">
            <h1>
              <img 
                src="/static/image/header/profite_logo_novo.png"
                className="header-brand-image" />
            </h1>
          </div>
          <Welcome name="Visitante"/>
          <Search />
          <HeaderOptions />
        </div>
      </header>
    )
  }
}
