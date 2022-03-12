import React from 'react'
import DevCard from '../components/ui/devCard'

const HomePage = () => {
    const developers = [
        {
            id: '1',
            name: 'Сергей',
            age: 'some',
            description: '',
            bookmark: false
        },
        {
            id: '2',
            name: 'Максим',
            age: 'some',
            description: '',
            bookmark: false
        },
        { id: '3', name: 'Бешил', age: 'some', description: '', bookmark: true }
    ]
    return (
        <div className="container pt-5">
            <h1 className="mb-5 text-center">Наша команда</h1>
            <div className="row justify-content-around">
                {developers.map((dev) => (
                    <DevCard key={dev.id} developer={dev} />
                ))}
            </div>
        </div>
    )
}

export default HomePage
