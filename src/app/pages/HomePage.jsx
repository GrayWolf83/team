import React from 'react'
import DevCard from '../components/ui/devCard'
import { useData } from '../hooks/useData'

const HomePage = () => {
    const { developers } = useData()

    return (
        <div className="mt-3">
            <div className="container mt-4">
                <h1 className="mb-5 text-center">Наша команда</h1>
                <div className="row">
                    {developers.map((dev) => (
                        <div className="col-12 col-md-6 col-lg-4" key={dev.id}>
                            <DevCard developer={dev} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage
