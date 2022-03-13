import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import AuthProvider from './hooks/useAuth'
import { CommentsProvider } from './hooks/useComments'
import { DataProvider } from './hooks/useData'
import UserProvider from './hooks/useUsers'
import AuthPage from './pages/AuthPage'
import CommentsPage from './pages/CommentsPage'
import DeveloperPage from './pages/DeveloperPage'
import FavoritesPage from './pages/FavoritesPage'
import HomePage from './pages/HomePage'

function App() {
    return (
        <>
            <Navbar />
            <DataProvider>
                <CommentsProvider>
                    <UserProvider>
                        <AuthProvider>
                        <Switch>
                            <Route
                                path={'/favorites'}
                                component={FavoritesPage}
                            />
                            <Route
                                path={'/comments/:developerId?'}
                                component={CommentsPage}
                            />
                            <Route
                                exact
                                path={'/auth/:method'}
                                component={AuthPage}
                            />
                            <Route exact path={'/'} component={HomePage} />
                            <Route
                                path={'/:developerId?'}
                                component={DeveloperPage}
                            />
                        </Switch>
                      </AuthProvider>
                    </UserProvider>
                </CommentsProvider>
            </DataProvider>
        </>
    )
}

export default App
