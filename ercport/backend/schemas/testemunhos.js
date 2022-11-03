export default {
    name: 'testemunhos',
    title: 'Testemunhos',
    type: 'document',
    fields: [
        {
            name: 'nome',
            title: 'Nome',
            type: 'string',
        },
        {
            name: 'empresa',
            title: 'Empresa',
            type: 'string',
        },
        {
            name: 'imagemurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string',
        },
    ],
}