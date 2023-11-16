import Card from '../Card/Card'
import './SecondPage.scss'

function SecondPage() {
    return (
        <div className="page-container">
            <div className="blue-column">
                <div className='page-desc-container'>
                    <span className='page-desc-haeding'>Lorem</span>
                    <span className='page-desc-subtitle'>Subtitle</span>
                    <div className='cards-container'>
                        <Card number="1" asset="../../assets/hero-caro-3.jpg"/>
                        <Card number="2" asset="../../assets/hero-caro-2.jpg"/>
                        <Card number="3" asset="../../assets/hero-caro-1.jpg"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SecondPage