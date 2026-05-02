import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactFormSchema = z.object({
  Email: z.string().email("Invalid email address"),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)
   
    const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`
    
    const airtablePayload = {
      fields: {
        Email: validatedData.Email,
      }
    }

    const airtableResponse = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(airtablePayload)
    })
    
    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text()
      
      return NextResponse.json(
        { 
          success: false, 
          message: 'Airtable API error', 
          error: errorText,
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully',
    })
    
  } catch (error) {
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation error', 
          errors: error.message 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        error: error instanceof Error? error.message : "Internal Server Error"
      },
      { status: 500 }
    )
  }
}
