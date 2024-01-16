import { spenseicon, gradieicon, fibericon } from "../assets"

export const navLinks = [
    {
        id: 'products',
        name: 'Products',
        subItems: [
            {
                id: 'spense',
                name: 'Spense',
                description: 'Spense is landing page for writers. Great for practicing absolute positioning and flex layouts.',
                logo: spenseicon
            },
            {
                id: 'fiber',
                name: 'Fiber Landing Page',
                description: 'An online portfolio generator. Great to practice flex/grid layouts and absolute positioning.',
                logo: fibericon
            },
            {
                id: 'gradie',
                name: 'Gradie Sign Up Page',
                description: 'Gradie is a simple sign up page, great to practice centering layouts.',
                logo: gradieicon
            }
        ]
    },
    {
        id: 'challenges',
        name: 'Challenges',
    },
    {
        id: 'resources',
        name: 'Resources',
    },
    {
        id: 'others',
        name: 'Other Links',
    }
]