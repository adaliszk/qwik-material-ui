import { Slot, component$, useStylesScoped$, useStyles$ } from '@builder.io/qwik'
import { ButtonProps } from './types'


/**
 * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a post.
 *
 * @docs https://m3.material.io/components/buttons/overview
 */
export const Button = component$<ButtonProps>((props) =>
{
    // language=css
    useStyles$(`
        :root {
            --button-radius: calc(var(--theme-border-radius) * 2);
            --button-padding: var(--theme-box-spacing);
            --button-background: var(--elevation-background, var(--color-surface));
            --button-ink: var(--color-on-primary);
            --button-background-filled: var(--color-primary);
            --button-ink-filled: var(--color-on-primary);
            --button-background-tonal: var(--color-primary-container);
            --button-ink-tonal: var(--color-on-primary-container);
            --button-border: var(--elevation-border, var(--color-surface));
            --button-border-outlined: var(--color-primary);
            --button-ink-outlined: var(--color-primary);
            --button-shadow: var(--elevation-shadow, none);
        }
    `)

    // language=css
    useStylesScoped$(`
        button {
            padding: var(--button-padding);
            border-radius: var(--button-radius);

            background: var(--button-background);
            border: 1px solid var(--button-border);
            box-shadow: var(--button-shadow);

            transition: filter 300ms cubic-bezier(.55, 0, .1, 1);
            cursor: pointer;

            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        button.horizontal {
            flex-direction: row;
        }

        button.vertical {
            flex-direction: column;
        }

        button:hover {
            filter: brightness(90%);
        }

        button:active {
            filter: brightness(80%);
        }

        button.elevated {
            border: 1px solid var(--elevation-border);
            box-shadow: var(--elevation-shadow);
        }

        button.filled {
            background: var(--button-background-filled);
            color: var(--button-ink-filled);
        }

        button.tonal {
            background: var(--button-background-tonal);
            color: var(--button-ink-tonal);
        }

        button.outlined {
            border: 1px solid var(--button-border-outlined);
            color: var(--button-ink-outlined);
        }

        button[disabled] {
            opacity: 50%;
        }
    `)

    return (
        <button
            className={[props?.theme ?? 'text', props?.direction ?? 'horizontal'].join(' ')}
            disabled={props?.disabled ?? false}>
            <Slot name={'prefix'}/>
            <Slot/>
            <Slot name={'suffix'}/>
        </button>
    )
})
