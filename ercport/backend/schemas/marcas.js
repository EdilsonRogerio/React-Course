export default {
    name: 'marcas',
    title: 'Marcas',
    type: 'document',
    fields: [
        {
            name: 'imgUrl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'nome',
            title: 'Nome',
            type: 'string',
        },
    ],
}