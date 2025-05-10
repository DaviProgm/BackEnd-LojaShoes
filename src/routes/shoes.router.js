import { PrismaClient } from "../../generated/prisma/index.js";
import express from "express";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/shoes", async  (req, res) => {
  //Get ALL Shoes
  try {
    const allShoes = await prisma.shoes.findMany();
    
    res.status(200).json(allShoes)                    
  } catch (error) {
    res.status(500).json({ error: "internal servidor error" });
  }
});
router.post("/shoes", async (req,res) => {
    const {name, brand, size, color,price, photo,stock} = req.body; 
 await   prisma.shoes.create({
        data:{
            name,
            brand,
            size,
            color,
            price,
            photo,
            stock
        }
    })
    res.status(201).json({message: "criado com sucesso"})
})

export default router;
