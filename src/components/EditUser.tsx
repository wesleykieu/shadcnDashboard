"use client"

import { useForm } from "react-hook-form"

import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
 
const formSchema = z.object({
  username: z
  .string()
  .min(2, {message: "Username must be at least 2 characters"})
  .max(50, {message: "Username must be less than 50 characters"}),
  email: z.string().email({message: "Invalid email address"}),
  phone: z.string().min(10, {message: "Phone number must be at least 10 characters"}).max(15, {message: "Phone number must be less than 15 characters"}),
  location: z.string().min(2, {message: "Location must be at least 2 characters"}),
  role: z.enum(["admin", "user"], {message: "Invalid role"}),
})



export const EditUser = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "john.doe",
          email: "john.doe@gmail.com",
          phone: "+1 234 567 890",
          location: "San Jose",
          role: "admin",
        },
      })
      
    return (
        <SheetContent>
        <SheetHeader>
            <SheetTitle className="mb-4">Edit User</SheetTitle>
            <SheetDescription>
                Make changes to user information here. Click save when you're done.
            </SheetDescription>
        </SheetHeader>
        <Form {...form}>
            <form className="space-y-6 p-4">
                <FormField 
                    control={form.control} 
                    name="username" 
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public username.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control} 
                    name="email" 
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your email address.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control} 
                    name="phone" 
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your phone number.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control} 
                    name="location" 
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your location.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control} 
                    name="role" 
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Role</FormLabel>
                            <FormControl>
                                <select 
                                    {...field}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                >
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                    <option value="moderator">Moderator</option>
                                </select>
                            </FormControl>
                            <FormDescription>
                                This is your role in the system.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end gap-2 pt-4">
                    <Button type="button" variant="outline">Cancel</Button>
                    <Button type="submit">Save changes</Button>
                </div>
            </form>
        </Form>
    </SheetContent>
    )
}