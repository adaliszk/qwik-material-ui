export interface ButtonProps {
    theme?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text'

    /**
     *
     */
    direction?: 'horizontal' | 'vertical'

    /**
     *
     */
    disabled?: boolean

    /**
     * @param {Event} click
     */
    onClick?: (click: Event) => void
}
