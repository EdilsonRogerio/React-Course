export default {
    name: "trabalhos",
    title: "Trabalhos",
    type: "document",
    fields: [
        {
            name: "titulo",
            title: "Titulo",
            type: "string",
        },
        {
            name: "descricao",
            title: "Descricao",
            type: "string",
        },
        {
            name: "linkProjeto",
            title: "Link do Projecto",
            type: "string",
        },
        {
            name: "linkCodigo",
            title: "Link do Codigo",
            type: "string",
        },
        {
            name: "imgUrl",
            title: "ImageUrl",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [
                {
                    name: "tag",
                    title: "Tag",
                    type: "string",
                }
            ]
        },
    ],
};