import React from 'react'
import { styled } from 'styled-components'

const Style = styled.div`
    background-color: orange;
    font-size: 3rem;
    text-align: center;
    ul {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
`

function Styled() {
    let Menu = ["Menu1", "Menu2", "Menu3", "Menu4", "Menu5"];
    return (
        <Style>
            <ul>
                {
                    Menu.map((el, i) => {
                        return (
                            <li className='text-center' key={i}>{el}</li>
                        ) // key값은 실제 값이 아니지만 넣어줘야함 : 오류 방지
                    })
                }
            </ul>
            Styled
        </Style>
    )
}

export default Styled