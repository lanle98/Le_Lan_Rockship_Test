const faker = require('faker')


//  generate fake data
function generateData() {
    let data = { albums: [], photos: [] }
    for (let id = 1; id < 20; id++) {
        let title = faker.name.title()
        let image = faker.image.avatar()
        data.albums.push({
            "id": id,
            "title": title,
            "image": image,
            "isFavorite": false
        })
    }

    for (let id = 1; id < 50; id++) {
        let title = faker.name.title()
        let image = faker.image.avatar()
        data.photos.push({
            "id": id,
            "title": title,
            "image": image,
        })
    }
    return data
}

module.exports = generateData


