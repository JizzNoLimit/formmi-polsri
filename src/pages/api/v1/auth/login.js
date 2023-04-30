import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    try {
        // jika bukan method POST maka ditolak
        if (req.method !== 'POST') return res.status(405).end()
        // variable email & password yg berasal dari client 
        const {email, password} = req.body
        // cari pengguna berdasarkan email 
        const user = await prisma.user.findUnique({
            where: { email }
        })
        // jika user tidak ditemukan maka dibatalkan
        if (!user) return res.status(401).json({ 
            status: 'error', 
            error: "Email tidak ditemukan" 
        })
        // cek password jika tidak sesuai maka dibatalkan
        const match = await bcrypt.compare(password, user.passowrd);
        if (!match) return res.status(401).json({ 
            status: 'error', 
            error: "Password salah!!" 
        })
        // JWT sign email, username, role
        const token = jwt.sign({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        }, process.env.SECRET_KEY, {
            expiresIn: 60 * 60 * 24 * 7
        })

        const serialized = serialize('token', token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7
        })

        return res.setHeader('Set-Cookie', serialized).status(200).json({
            status: 'success',
            message: "Login berhasil",
            token
        })
        
    } catch (error) {
        console.error(error);
    }
}