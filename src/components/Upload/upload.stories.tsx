import React from "react";
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Icon from "../Icon/icon";
import Upload from './upload'

const SimpleUpload = () => (
    <Upload
        action="http://upload.gumpxd.cn/upload"
        onChange={action('changed')}
        onRemove={action('removed')}
        name="file"
        accept=".png"
        multiple
    />
)

const DragUpload = () => (
    <Upload
        action="http://upload.gumpxd.cn/upload"
        onChange={action('changed')}
        onRemove={action('removed')}
        name="file"
        accept=".png"
        multiple
        drag
    >
        <Icon icon="upload" size="5x" theme="secondary" />
        <br />
        <p>Drag file over to upload</p>
    </Upload>
)

storiesOf('Upload 上传', module)
    .add('点击上传', SimpleUpload)
    .add('拖拽上传', DragUpload)