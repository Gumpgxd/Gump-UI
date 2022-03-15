import React from "react"
import { addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import "../src/styles/index.scss"

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

const styles: React.CSSProperties = {
    padding: '20px 40px'
}
const anyWithInfo: any = withInfo

const CenterDecorator = (storyFn: any) => <div style={styles}>
    <h4>组件演示</h4>
    {storyFn()}
</div>
addDecorator(CenterDecorator)
addDecorator(anyWithInfo)
addParameters({ info: { inline: true, header: false, footer: false } })