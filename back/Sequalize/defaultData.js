const heroes = [
    { nickname: 'Flash', real_name: 'Barry Allen', origin_description: 'Struck by lightning', superpowers: 'Super speed', catch_phrase: 'I am the fastest!' },
    { nickname: 'Superman', real_name: 'Clark Kent', origin_description: 'From Krypton', superpowers: 'Super strength', catch_phrase: 'Up, up and away!' },
    { nickname: 'Batman', real_name: 'Bruce Wayne', origin_description: 'Rich guy with gadgets', superpowers: 'Intelligence', catch_phrase: 'I am vengeance!' },
    { nickname: 'Wonder Woman', real_name: 'Diana Prince', origin_description: 'Amazonian warrior', superpowers: 'Strength and speed', catch_phrase: 'For justice!' },
    { nickname: 'Green Lantern', real_name: 'Hal Jordan', origin_description: 'Test pilot', superpowers: 'Power ring', catch_phrase: 'In brightest day!' },
    { nickname: 'Aquaman', real_name: 'Arthur Curry', origin_description: 'King of Atlantis', superpowers: 'Underwater breathing', catch_phrase: 'I am the sea!' },
    { nickname: 'Cyborg', real_name: 'Victor Stone', origin_description: 'Half machine', superpowers: 'Tech manipulation', catch_phrase: 'Booyah!' },
];
const images = [
    [
        {image_link: "https://static.wikia.nocookie.net/dcanimated/images/c/ce/Flash_%28STAS%29.png/revision/latest?cb=20210407221621"},
        {image_link: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/06/the-flash-endind.jpg"},
        {image_link: "https://www.mundodeportivo.com/alfabeta/hero/2024/01/the-flash-dc-comics.jpg?width=768&aspect_ratio=16:9&format=nowebp"},
    ],
    [
        {image_link: "https://media.newyorker.com/photos/5909527c1c7a8e33fb38a864/master/pass/Man_of_Steel-580.jpeg"},
        {image_link: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/03/10-cruelest-things-superman-has-done-in-dc-comics.jpg"},
    ],
    [
        {image_link: "https://www.mundodeportivo.com/alfabeta/hero/2024/09/bruce-wayne-caballero-oscuro-batman-dc.jpg?width=768&aspect_ratio=16:9&format=nowebp"},
        {image_link: "https://image.api.playstation.com/vulcan/img/rnd/202010/2621/H9v5o8vP6RKkQtR77LIGrGDE.png"},
    ],
    [
        {image_link: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/05/wonder-woman-tony-daniel-featured-dc.jpg"},
        {image_link: "https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"},
        {image_link: "https://img.20mn.fr/wKl1puPTRD22s_x65xjzpg/1444x920_wonder-woman-1984-patty-jenkins"},
    ],
    [
        {image_link: "https://i2.wp.com/www.slashfilm.com/img/gallery/rumor-mill-james-gunns-green-lantern-series-wants-this-marvel-dc-veteran-for-hal-jordan/l-intro-1725298956.jpg?w=1600&resize=1600,900&ssl=1"},
        {image_link: "https://m.media-amazon.com/images/M/MV5BMTQwMTcwOTA2NV5BMl5BanBnXkFtZTcwMjQ4OTM4Ng@@._V1_.jpg"},
    ],
    [
        {image_link: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/Aquaman.jpg"},
    ],
    [
        {image_link: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7afa395a-3463-4105-8b34-f8dd3f47b743_1200x675.jpeg"},
    ],
];

module.exports = {heroes,images}