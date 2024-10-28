const Hero = require("../Sequalize/models/hero.model");
const Image = require("../Sequalize/models/image.model");

async function checkIfHeroExist(id, res){
    try {
        return await Hero.findByPk(id);
    } catch (error) {
        return ('Hero not found');
    }
}
class HeroController {
    async createHero(req, res) {
        console.log(req.body)
        const { nickname, real_name, origin_description, superpowers, catch_phrase } = req.body;
        try {

            const newHero = await Hero.create({
                nickname,
                real_name,
                origin_description,
                superpowers,
                catch_phrase
            });
             res.json(newHero);
        } catch (error) {
            console.error(error);
             res.json({ error: 'Cant add hero' });
        }
    }
    async getAllHeroes(req, res) {
        //5 objects per page, page 0 by default
        const page = parseInt(req.query.page, 10) || 1;
        const limit = 5;
        const offset = (page - 1) * limit;
        try {
            const heroes = await Hero.findAll({
                //makes LEFT JOIN to Images table to get first picture
                include: [{
                    model:Image,
                    as:'images',
                    required: false,
                    limit: 1
                }],
                limit: limit,
                offset: offset,
            });
            res.json(heroes);
        } catch (error) {
            console.error(error);
            res.json({ error: 'Cant get hero list' });
        }

    }

    async getOneHero(req, res) {
        const { id } = req.params;
        res.json(await checkIfHeroExist(id,res))
    }
    async updateHero(req, res) {
        const { id } = req.params;
        const { nickname, real_name, origin_description, superpowers, catch_phrase } = req.body;
        try {
            await checkIfHeroExist(id,res);
            await Hero.update(
                {
                    nickname,
                    real_name,
                    origin_description,
                    superpowers,
                    catch_phrase
                },
                {
                    where: { id }
                }
            );
             res.send("Hero Updated");
        } catch (error) {
             res.json({ error: error.message });
        }
    }
    async deleteHero(req, res) {
        const { id } = req.params;
        try {
            await Hero.destroy({
                where: {
                    id: id
                },
            });
        }catch (error){
             res.send("Something went wrong");
        }
             res.send("Hero Deleted");
    }
}

module.exports = new HeroController()