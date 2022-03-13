import React from 'react'
import DevCard from '../components/ui/devCard'
import { useData } from '../hooks/useData'
import localStorageService from '../services/localStorage.service'

const FavoritesPage = () => {
    const { developers } = useData()
    const bookmarkedDevelopers = developers.filter((developer) =>
        localStorageService.getBookmark(developer.id)
    )

    return (
        <div className="container mt-4">
            <h1 className="mb-5 text-center">Избранные разработчики</h1>
            <div className="row">
                {bookmarkedDevelopers.length ? (
                    bookmarkedDevelopers.map((dev) => (
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
