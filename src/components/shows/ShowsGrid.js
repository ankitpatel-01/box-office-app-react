import React from 'react'
import ShowsCard from './ShowsCard'
import { FlexGrid } from '../styled'
import IMAGE_NOT_FOUND from '../../images/not-found.png'


const ShowsGrid = ({ data }) => {
    return (
        <FlexGrid>
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
        </FlexGrid>
    )
}

export default ShowsGrid
