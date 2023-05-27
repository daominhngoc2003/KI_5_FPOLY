const menus = [
    { id: 1, name: "Trang chủ", link: "/" },
    { id: 2, name: "Dự án", link: "/projects" },
    { id: 3, name: "Liên hệ", link: "/contact" },
    { id: 4, name: "Bài viết", link: "/posts" },
];

const projects = [
    {
        id: 1,
        name: "Dự án 1",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Tùng" },
        ],
    }, //project
    {
        id: 2,
        name: "Dự án mẫu",
    }, // project
    {
        id: 3,
        name: "Dự án tốt nghiệp",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Tùng" },
        ],
    },
];

export { projects, menus };
