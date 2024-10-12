'use server'

import { sql } from '@vercel/postgres';

export async function saveLead({
    name,
    email,
    phone,
    message,
}: {
    name: string    
    email: string
    phone: string
    message: string
}) {
    try{
        await sql`INSERT INTO Leads (name, email, phone, message) VALUES (${name}, ${email}, ${phone}, ${message})`

    } catch (error) {
        console.log(error)
    }
}