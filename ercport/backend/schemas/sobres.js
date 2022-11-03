export default {
    name: 'sobres',
    title: 'Sobres',
    type: 'document',
    fields: [
        {
            name: 'titulo',
            title: 'Titulo',
            type: 'string',
        },
        {
            name: 'descricao',
            title: 'Descricao',
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
    ],
}