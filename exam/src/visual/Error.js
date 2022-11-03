import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <>
            <div>Error</div>
            <Link className="btn btn-primary"
                to={`/`}

            >aceptar</Link>
        </>
    )
}
