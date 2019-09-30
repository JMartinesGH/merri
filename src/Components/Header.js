import React from 'react';

export default function Header(){
    return(
        <header className="App-header">
          <a
            className="btn"
            href="./"
            target="_blank"
            rel="noopener noreferrer"
          >
            HOME
          </a>
          <a
            className="btn"
            href="./admin"
            target="_blank"
            rel="noopener noreferrer"
          >
            ADMIN
          </a>
        </header>
    )
}