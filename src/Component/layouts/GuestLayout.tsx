import { PropsWithChildren } from 'react'

import '../../Styles/guest.css'

export default function Guest ({children} : PropsWithChildren) {

    return(
        <>
        <div className='guestmain'>
            <div className='guestfirsttopbar'>
                <nav>
                    <ul>
                        <li className='lemenu'>
                            Menu1
                        <div className='lesousmenus'>
                        <ul className='lesousmenul'>
                            <li>Sousmenu 1</li>
                            <li>Sousmenu 2</li>
                            <li>Sousmenu 3</li>
                        </ul>
                        </div>
                        </li>
                        
                        <li className='lemenu'>
                            Menu2
                        <div className='lesousmenus 1'>
                            <ul className='lesousmenul 1'>
                                <li>Sousmenu 4</li>
                                <li>Sousmenu 5</li>
                                <li>Sousmenu 6</li>
                            </ul>
                        </div>
                        </li>
                        <li className='lemenu'>Menu3</li>
                        <li className='lemenu'>Menu4</li>
                        <li className='lemenu'>Menu5</li>
                    </ul>
                </nav>
            </div>

            <div className='children'>
                {children}
            </div>
        </div>
        </>
    )
}