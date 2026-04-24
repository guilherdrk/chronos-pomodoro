import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export const App = () => {
    console.log("oi");
    return (
        <>
            <Heading>
                Olá mundo 1
                <button>
                    <TimerIcon />
                </button>
            </Heading> 
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis esse
                libero corporis maxime? Omnis consectetur sequi temporibus tempore iure
                nemo fugit odio, maxime itaque repellat nobis sed officia, accusantium
                dolorem.
            </p>
        </>
    );
};
