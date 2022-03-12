import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import { DataProvider } from './hooks/useData'
import UserProvider from './hooks/useUsers'
import DeveloperPage from './pages/DeveloperPage'
import FavoritesPage from './pages/FavoritesPage'
import HomePage from './pages/HomePage'
import ReviewsPage from './pages/ReviewsPage'

function App() {
    return (
        <>
            <Navbar />
            <DataProvider>
                <UserProvider>
                    <Switch>
                        <Route path={'/favorites'} component={FavoritesPage} />
                        <Route path={'/reviews'} component={ReviewsPage} />
                        <Route exact path={'/'} component={HomePage} />
                        <Route
                            path={'/:developerId?'}
                            component={DeveloperPage}
                        />
                    </Switch>
                </UserProvider>
            </DataProvider>
        </>
    )
}

export default App
