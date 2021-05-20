import React from 'react'
import ShowsCard from './ShowsCard'
import IMAGE_NOT_FOUND from '../../images/not-found.png'

const ShowsGrid = ({ data }) => {
    return (
        <div>
            {
                data.map(({ show }) => {
                    return (
                        <ShowsCard
                            key={show.id}
                            id={show.id}
                            name={show.name}
                            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
                            summary={show.summary} />
                    )
                })
            }
        </div>
    )
}

export default ShowsGrid
