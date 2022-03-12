import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createDeveloper } from '../utils/createDeveloper'
import { PropTypes } from 'prop-types'
import Loader from '../components/ui/Loader'
import localStorageService from '../services/localStorage.service'

const DataContext = React.createContext()

export const useData = () => {
    return useContext(DataContext)
}

export const DataProvider = ({ children }) => {
    const [developers, setDevelopers] = useState()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setDevelopers([
                createDeveloper('Сергей', 38, 'TeamLead'),
                createDeveloper('Максим', 23, 'developer'),
                createDeveloper('Бешил', 25, 'developer')
            ])
            setLoading(false)
        }, 1500)
    }, [])

    function getDeveloperById(id) {
        return developers.find((developer) => developer.id === id)
    }

    function getBookmarkedDevelopers() {
        return developers.filter((developer) => developer.bookmark)
    }

    function changeBookmark(name) {
        localStorageService.changeBookmark(name)
        setDevelopers((prevState) => [
            ...prevState.map((developer) => {
                if (developer.name == name) {
                    return {
                        ...developer,
                        bookmark: !developer.bookmark
                    }
                }
                return developer
            })
        ])
    }

    return (
        <DataContext.Provider
            value={{
                developers,
                changeBookmark,
                getDeveloperById,
                getBookmarkedDevelopers
            }}>
            {isLoading ? <Loader /> : children}
        </DataContext.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
