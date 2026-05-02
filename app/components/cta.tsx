"use client"
import React, { useState } from 'react'
import StockCard from './stockCard'
import StampCard from './stampCard'
import StockCardSingle from './simpleStockCard'
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"

const waitListFormSchema = z.object({
    Email: z.email()
})

type wailtListFormData = z.infer<typeof waitListFormSchema>

const Cta = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm<wailtListFormData>({
        resolver: zodResolver(waitListFormSchema)
    })

    const onSubmit = async (data: wailtListFormData) => {
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error('Failed to submit form')
            }
            toast.success("Thank you! You are successfully on the waitlist", {
                position: "top-center"
            })
            reset()
        } catch (error) {
            console.error('Error submitting form:', error)
            toast.error("Oops there was an error, Please try again", {
                position: "top-center"
            })
        } finally {
            setIsSubmitting(false)
        }
    }


    return (
        <>
            <div className='flex flex-col xl:flex-row w-max h-max bg-white rounded-2xl overflow-hidden mt-26'>

                <div className='w-1/4 flex flex-row xl:flex-col gap-y-22'>
                    <div className='p-2 -mt-10 lg:-mt-16 -ml-50 xl:-ml-33 -rotate-6'>
                        <StampCard packId="bigtech" />
                    </div>
                    <div className='p-2 -mt-12 ml-0 xl:-ml-28'>
                        <StampCard packId="highgrowth" />
                    </div>
                    <div className='p-2 -mt-8 ml-0 xl:-ml-33 rotate-12'>
                        <StampCard packId="defi" />
                    </div>
                    <div className='p-2 -mt-8 ml-0 xl:-ml-33 rotate-12'>
                        <StampCard packId="datacenter" />
                    </div>
                </div>
                <div className='flex items-center justify-center w-2/4 my-6 xl:my-0 w-full ml-0 xl:ml-10'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h1 className='text-7xl font-semibold text-center'>
                            Join Our Waitlist
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col gap-y-4 xl:flex-row gap-2 w-full mt-4'>
                                <div className='flex flex-col'>
                                    <input
                                        type='email'
                                        placeholder='your@email.com'
                                        className='flex-1 px-4 py-3 rounded-full border border-gray-300 outline-none text-base'
                                        {...register("Email")}
                                    />
                                    {errors.Email && (
                                        <p className="text-red-500 text-sm mt-1 text-center mt-3" >{errors.Email.message}</p>
                                    )}
                                </div>
                                <div className='flex justify-center'>
                                    <button type='submit' disabled={isSubmitting} className='px-6 py-3 bg-black text-white rounded-full text-base font-semibold whitespace-nowrap hover:bg-gray-800 transition-colors'>
                                        {isSubmitting ? <Spinner /> : "Join Waitlist"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-1/4 flex flex-row  xl:flex-col xl:overflow-hidden gap-10 mt-10 xl:mt-0 ml-1 lg:ml-10'>
                    <div className='ml-0 xl:ml-16 -mt-3 -rotate-12 xl:-rotate-30 mt-0 -mt-10'>
                        <StockCardSingle ticker='AMZN' />
                    </div>
                    <div className='ml-0 xl:ml-10 mt-0 xl:mt-2 -rotate-40 xl:rotate-0'>
                        <StockCardSingle ticker='TSLA' />
                    </div>
                    <div className='ml-0 xl:ml-16 mt-0 xl:mt-8 rotate-0'>
                        <StockCardSingle ticker='SOL' />
                    </div>
                    <div className='ml-0 xl:ml-16 mt-0 xl:mt-8 -rotate-25'>
                        <StockCardSingle ticker='GOOGL' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cta