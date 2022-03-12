import React from 'react'
import DevCard from '../components/ui/devCard'
import { useData } from '../hooks/useData'

const FavoritesPage = () => {
    const { getBookmarkedDevelopers } = useData()
    const developers = getBookmarkedDevelopers()

    return (
        <div className="container pt-5">
            <h1 className="mb-5 text-center">Избранные разработчики</h1>
            <div className="row">
                {developers.length ? (
                    developers.map((dev) => (
                        <div className="col-12 col-md-4" key={dev.id}>
                            <DevCard developer={dev} />
                        </div>
                    ))
                ) : (
                    <p className="text-center">
                        Вы еще не добавляли разработчиков в избранное
                    </p>
                )}
            </div>
        </div>
    )
}

export default FavoritesPage
