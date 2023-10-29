const API = {
    BASE_URL: 'https://dummyapi.io/data/v1',
    APP_ID: '653d10bca38ced29a15452a8',
    transformData(response) {
        const TITLES = [
            'Lady of the Gentlemen',
            'Prince of the Universe',
            'Princess of Arendell',
            'King of Fire',
            'Crown - The South',
            'Princess of Arendell',
            'Knight - The North',
            'Lady of the Gentlemen',
        ];

        const PROFESSIONS = [
            'Mercenary',
            'Judge',
            'Lawyer',
            'King',
            'Jester',
            'Mercenary',
            'Knight',
            'Mercenary',
        ];

        const ALSO_TARGETED = [
            [
                {
                    fullName: 'Bran Stark',
                    relationship: 'Son',
                    profileUrl: '#'
                },
                {
                    fullName: 'Sansa Stark',
                    relationship: 'Daughter',
                    profileUrl: '#'
                },
            ],
            [
                {
                    fullName: 'Bran Stark',
                    relationship: 'Son',
                    profileUrl: '#'
                },
            ],
        ];

        const REGIONS = [
            'Westoros',
            'The North',
            'Arendell',
            'West of Essos',
            'The South',
            'Westoros',
            'Arendell',
            'The North',
        ]

        const transformedData =  response.data.map((person, index) => ({
            ...person,
            profession: PROFESSIONS[index],
            title: TITLES[index],
            region: REGIONS[index],
            also_targeted: ALSO_TARGETED[index % 2],
        }));

        response.data = transformedData;

        return response;
    },
    async getVictims({ limit = 8, page = 1 } = {}) {
        try {
            const request = await fetch(`${this.BASE_URL}/user?limit=${limit}&page=${page}`, {
                method: "GET",
                headers: {
                    'app-id': this.APP_ID,
                }
            });
            if (request.ok) {
                const response = await request.json();
                return this.transformData(response);
            } else {
                throw new Error('Please try again shortly.');
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default API;