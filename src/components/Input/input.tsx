import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

export type InputSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

// Omit 忽略接口中的一直值
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**是否禁用 Input*/
  disabled?: boolean;
  /**设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize;
  /**添加图 */
  icon?: IconProp;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /**添加默认提示 */
  placeholder?:string;
  /**添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement;
  onChange? : (e: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 * ### 引用方法
 *
 * ~~~js
 * import { Input } from 'Gump-UI'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
export const Input: FC<InputProps> = (props) => {
  // 取出所有的属性
  const { disabled, size, icon, prepend, append,placeholder, style, ...restProps } = props
  // 根据不同的属性计算className

  const classes = classNames('gump-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })

  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }

  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }

  return (
    // 根据属性判断是否要添加不同的节点
    <div className={classes} style={style}>
      {prepend && <div className="gump-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
      <input
        className="gump-input-inner"
        placeholder={placeholder}
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="gump-input-group-append">{append}</div>}
    </div>
  )
}

Input.defaultProps = {
  disabled: false
}

export default Input;