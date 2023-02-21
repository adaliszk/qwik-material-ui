import { Decorator } from 'storybook-framework-qwik'


interface FlexRowDecoratorProps
{
    gap: number
}


type FlexRowDecorator = (props: FlexRowDecoratorProps) => Decorator

export const FlexRow: FlexRowDecorator = ({ gap }) => (story) =>
    <div style={`display: flex; gap: ${gap}px; justify-content: space-between; align-items: center;`}>
        {story()}
    </div>
