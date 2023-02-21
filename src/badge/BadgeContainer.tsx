import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'
import { BadgeContainerProps } from './types'

/**
 * Badge helper to position a badge superscript correctly with a text node
 *
 * @docs https://m3.material.io/components/badges/overview
 */
export const BadgeContainer = component$<BadgeContainerProps>((props) =>
{
    // language=css
    useStylesScoped$(`
        .badge-container {
            position: relative;
            display: inline-block;
        }

        .badge-container [name="badge"] {
            transform: translateX(50%) translateY(-50%);
            right: 0;
            top: 0;
        }
    `)

    return (
        <span className="badge-container">
            {props?.children}
            <Slot/>
            <Slot name="badge"/>
        </span>
    )
})
