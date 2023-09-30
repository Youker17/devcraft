import AnimatedCursor from "react-animated-cursor";


export default function Cursor() {
    return (
        <AnimatedCursor
            innerSize={8}
            outerSize={8}
            color='184, 193, 236'
            outerAlpha={0.5}
            innerScale={0.7}
            outerScale={5}
            outerStyle={{ mixBlendMode: 'color-dodge' }}

            clickables={[
                'a',
                ".cur",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
        />
    )
}