'use client';
import InputMask from 'react-input-mask'
import { zodResolver } from '@hookform/resolvers/zod';
import Confetti from 'react-dom-confetti';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '@/components/ui/form';
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
  } from '@/components/ui/dialog';
  import { Input } from '@/components/ui/input';
import { useState } from 'react';

import { saveLead } from '@/app/actions';
import { Button } from '@/components/ui/button';

  const formSchema = z.object({
    name: z.string().min(1, {message: "Campo Obrigatório"}),
    email: z.string().email({message: "Email Invalido"}),
    phone: z.string().min(9, {message: "Campo Obrigatório"}).refine(
        (value) => {
            // Aqui você pode colocar a lógica de validação desejada para o número de telefone
            const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
            return regex.test(value);
          },
          { message: 'Número de telefone inválido' }
        ),    
    message: z.string().min(1, {message: "Campo Obrigatório"}),
  });        
  

function Contact()  {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        }
    });

    const [isComplete, setComplete] = useState(false);

    const onSubmit = async(data: z.infer<typeof formSchema>) => {
        setComplete(true);
        await saveLead({
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message });
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button 
                    variant="default"
                    size='lg'
                    className='text-md bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
                    >Contato</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w[425px]'>
                <Confetti active={isComplete} config={{ 
                    spread: 90,
                    elementCount: 200}}
                    />
                    {isComplete ? (
                        <>
                        <DialogHeader>
                            <DialogTitle>
                                Parabens!!!
                            </DialogTitle>
                            <DialogDescription>
                                Sua mensagem foi enviada com sucesso, em breve estaremos entrando em contato.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogClose>
                            <Button variant='outline' onClick={() => {
                                setComplete(false);
                                form.reset();
                                }}>
                                    Fechar
                            </Button>
                        </DialogClose>
                        </>

                    ) :(
                       <>
                            <DialogHeader>
                                <DialogTitle>
                                    Fale Conosco
                                </DialogTitle>
                                <DialogDescription>
                                    Preencha os campos abaixo para entrar em contato.
                                </DialogDescription>
                            </DialogHeader>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                                <FormField
                                    control={form.control}
                                    name='name'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Nome</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Nome...' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name='email'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>E-mail</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Seu melhor e-mail...' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name='phone'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Celular</FormLabel>
                                        <FormControl>
                                            <InputMask
                                            className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
                                            mask='(99) 99999-9999'
                                            placeholder='(00) 00000-0000'
                                            {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name='message'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Mensagem</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Menssagem...' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <Button type='submit'>Enviar</Button>
                                </form>
                            </Form>
                       </> 
                    ) }
            </DialogContent>
        </Dialog>
    );
}

export default Contact 