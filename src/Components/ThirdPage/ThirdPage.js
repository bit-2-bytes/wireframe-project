import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import './ThirdPage.scss'

function ThirdPage() {
    return (
        <div className='third-page-container'>
            <div className="blue-column">
                <div className="third-page-image"></div>
                <div className="third-page-content">
                    <span className='third-page-heading'>Lorem ipsum </span>
                    <div className='third-page-line'></div>
                    <span className='third-page-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    <span className='third-page-link'>
                        Lorem ipsum 
                        <Arrow/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ThirdPage