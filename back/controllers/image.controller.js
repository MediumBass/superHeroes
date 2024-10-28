const Image = require("../Sequalize/models/image.model");
class ImageController {
    async createImage(req, res) {
        const { hero_id, image_link} = req.body;
        try {
            const newImage = await Image.create({
                hero_id,
                image_link,
            });
            res.json(newImage);
        } catch (error) {
            console.error(error);
            res.json({ error: 'Cant add image' });
        }
    }
    async getAllImagesByHeroId(req, res){
        let { id } = req.params;
        try {
            const images = await Image.findAll({
                where: {
                    hero_id: id
                },
            });
            res.json(images);
        }catch (error){
            res.send("No images for this Hero")
        }
    }
    async deleteOneImage(req, res) {
        const { id } = req.params;
        try {
            await Image.destroy({
                where: {
                    id: id
                },
            });
        }catch (error) {
            res.send("No image found");
        }
        res.send("Image Deleted");
    }
    async deleteAllImagesByHeroId(req, res) {
        const { id } = req.params;
        try {
        await Image.destroy({
            where: {
                hero_id: id
            },
        });
        }catch (error) {
            res.send("No image found");
        }
        res.send("All Images Deleted");
    }
}

module.exports = new ImageController()