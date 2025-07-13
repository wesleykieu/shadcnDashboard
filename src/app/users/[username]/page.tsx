import { CardList } from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { EditUser } from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppLineChart } from "@/components/AppLineChart";

export default function SingleUserPage() {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/payments">Payments</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>John Doe</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>   
            {/* CONTAINER */} 
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* LEFT SIDE */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/* USER BADGES CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User Badges</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verfied User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    {/* INFORMATION CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                        
                         <h1 className="text-xl font-semibold">User Information</h1>
                         <Sheet>
                            <SheetTrigger asChild>
                                <Button>Edit User</Button>
                            </SheetTrigger>
                            <EditUser />
                        </Sheet>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">Profile Completion</p>
                                <Progress value={70} />
                            </div>
                            <div className="flex items-center gap-2" >
                                <span className="font-bold">Username: </span>
                                <span>john.doe</span>
                            </div>
                            <div className="flex items-center gap-2" >
                                <span className="font-bold">Email: </span>
                                <span>john.doe@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2" >
                                <span className="font-bold">Phone: </span>
                                <span>+1 234 567 890</span>
                            </div>
                            <div className="flex items-center gap-2" >
                                <span className="font-bold">Location: </span>
                                <span>San Jose</span>
                            </div>
                            <div className="flex items-center gap-2" >
                                <span className="font-bold">Role: </span>
                                <Badge>Admin</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Joined on 2025.01.01</p>
                            

                        </div>
                    </div>
                    {/* CARD LIST CONTAINER */}

                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transactions" />
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="w-full xl:w-2/3 space-y-6">
                {/* USER CARD CONTAINER */}
                <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-4">
                        <Avatar className="size-12">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>

                        <h1 className="text-xl font-semibold">John Doe</h1>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Hello I am urmom type shit bomboclat
                        </p>
                    </div>
                {/* CHART CONTAINER */}
                <div className="bg-primary-foreground p-4 rounded-lg">
                    <AppLineChart />
                    
                </div>

                </div>

            </div>
        </div>
    );
};
