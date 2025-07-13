"use client";
import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { format } from "date-fns";

export const TodoList = () => {

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);


    return (
        <div className="">
            <h1 className="text-lg font-medium mb-4">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                        }}
                        
                    />
                </PopoverContent>
            </Popover>
            {/* List */}
            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                <div className="flex flex-col gap-4">
            {/* List Items */}
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1"/>
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Item 1</label>
                </div>
            </Card>
            </div>

            </ScrollArea>

        </div>
    );
};

