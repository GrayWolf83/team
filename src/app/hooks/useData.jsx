import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { createDeveloperData } from '../utils/createDeveloper'
import { PropTypes } from 'prop-types'
import Loader from '../components/ui/Loader'
import localStorageService from '../services/localStorage.service'
import developerService from '../services/developer.service'

const DataContext = React.createContext()

export const useData = () => {
    return useContext(DataContext)
}

export const DataProvider = ({ children }) => {
    const [developers, setDevelopers] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getDeveloperList()
    }, [])

    async function getDeveloperList() {
        try {
            const { content } = await developerService.getDevelopers()
            if (Object.keys(content).length) {
                setDevelopers(Object.values(content).map((item) => item))
            } else {
                await createDeveloper({
                    name: 'Сергей',
                    age: 38,
                    role: 'TeamLead',
                    image: 'https://avatars.dicebear.com/api/avataaars/7rii5l.svg'
                })
                await createDeveloper({
                    name: 'Максим',
                    age: 22,
                    role: 'Developer',
                    image: 'https://avatars.dicebear.com/api/avataaars/uufr4k.svg'
                })
                await createDeveloper({
                    name: 'Бешил',
                    age: 25,
                    role: 'Developer',
                    image: 'https://avatars.dicebear.com/api/avataaars/apabe.svg'
                })
                await getDeveloperList()
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    async function createDeveloper(devData) {
        const developer = createDeveloperData(devData)
        console.log(developer)
        try {
            await developerService.createDeveloper(developer)
        } catch (error) {
            console.log(error)
        }
    }

    function getDeveloperById(id) {
        return developers.find((developer) => developer.id === id)
    }

    function getBookmarkedDevelopers() {
        return developers.filter((developer) => developer.bookmark)
    }

    function changeBookmark(id) {
        localStorageService.changeBookmark(id)
        setDevelopers(
            developers.map((developer) => {
                if (developer.id === id) {
                    return {
                        ...developer,
                        bookmark: Boolean(localStorageService.getBookmark(id))
                    }
                }
                return developer
            })
        )
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
