import React from 'react'
import AndhraBank from './AndhraBank'
import CorporationBank from './CorporationBank'

export default function UnionBank() {
    return (
        <div>
           <h1 >Union Bank </h1> 
           <AndhraBank location="Nellore"/>
           <CorporationBank location="Tirupathi"/>
        </div>
    )
}

