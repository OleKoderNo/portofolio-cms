export default {
    name: 'project',
    type: 'document',
    title: 'Prosjekt',

    fields: [
        {
            name: 'title',
            title: 'Prosjekt navn:',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Beskrivelse',
            type: 'text',
        },
        {
            name: 'url',
            title: 'Link',
            type: 'url',
        },
        {
            name: 'urlDesc',
            title: 'Link alternativ tekst',
            type: 'string',
        },
        {
            name: 'tag',
            title: 'Emne',
            type: 'array',
            of:[
                {
                    type: 'reference',
                    to: {type:'tags'},
                }
            ],
            desciption: 'Legg til emner som er brukt på utvikling av prosjektet.',
        },
    ],
} 