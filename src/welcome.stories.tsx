import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome Gump-UI', module)
    .add('welcome', () => {
        return (
            <>
                <h3>Gump-UI 是跟着慕课网课程的教学下完成，完成了部分组件，后续会继续更新更多组件。</h3>
                <p>Gump-UI 使用 React Hooks 和 typescript</p>
                <h3>安装试试</h3>
                <code>
                    npm install gump-ui --save
                </code>
            </>
        )
    }, { info: { disable: true } })