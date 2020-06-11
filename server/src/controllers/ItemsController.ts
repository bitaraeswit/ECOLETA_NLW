import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*"); // uso o await para esperar pegar todos os itens, por isso coloco também o async

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.105/uploads/${item.image}`
      };
    });
    return response.json(serializedItems);
  }
}

export default ItemsController;
