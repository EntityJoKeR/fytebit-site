import Link from 'next/link'
import MainContainer from '../components/MainContainer'
import MainHead from '../components/MainHead'
import CardsTop from '../components/CardsTop'
import HeadBottom from '../components/HeadBottom'


export default function () {
    
    return (
        <MainContainer>
            <MainHead/>
            <CardsTop/>
            <HeadBottom/>
        </MainContainer>
    )
}