import { component$, useStylesScoped$, useStyles$ } from '@builder.io/qwik'
import { BadgeProps } from './types'


/**
 * Badges are used to convey dynamic information, such as a count or status.
 * A badge can include text, labels, or numbers.
 *
 * @docs https://m3.material.io/components/badges/overview
 */
export const Badge = component$<BadgeProps>((props) =>
{
    // language=css
    useStyles$(`
        :root {
            --badge-radius: var(--theme-border-radius);
            --badge-padding: 0 var(--theme-item-spacing);
            --badge-overflow: calc(var(--theme-item-spacing) * -1);
            --badge-min-size: var(--theme-min-size);
            --badge-size: var(--theme-box-spacing);
            --badge-text-size: var(--theme-typo-small);
            --badge-background: var(--color-error);
            --badge-ink: var(--color-on-error);
        }
    `)

    // language=css
    useStylesScoped$(`
        .badge {
            display: inline-block;

            border-radius: var(--badge-radius);
            min-height: var(--badge-min-size);
            min-width: var(--badge-min-size);

            text-align: center;
            background: var(--badge-background);
            color: var(--badge-ink);

            font-size: var(--badge-text-size);
            line-height: var(--badge-radius);

            position: relative;
            right: var(--badge-overflow);
        }

        .badge > span:not(:empty) {
            padding: var(--badge-padding);
            min-height: var(--badge-size);
            min-width: var(--badge-size);
        }
    `)

    return (
        <sup className="badge">
            <span>{props?.text}</span>
        </sup>
    )
})
