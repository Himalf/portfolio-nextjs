"use client"
import React from 'react';
import Image from 'next/image';
import profile from "../../../public/assets/profilepng.png"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
 
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
type Props = {};

export default function HeroSection({}: Props) {
  const data = [
    {
      goal: 400,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 239,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 349,
    },
  ]
  const [goal, setGoal] = React.useState(350)
 
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }
 
  return (
    <main 
      className="relative w-full h-screen rounded-tr-xl rounded-bl-xl"
    >
      {/* Background layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center rounded-tr-xl rounded-bl-xl"
        style={{
          backgroundImage: `url('/assets/bgimage.jpg')`,
          opacity: 0.2, // Apply opacity only to the background
          zIndex: -1, // Ensure it's behind the content
        }}
      ></div>

      {/* Content layer */}
      <section className='flex justify-center items-center'>
      <section className="relative z-10 text-secdondaryColor flex flex-col px-10 py-10 gap-10  h-full w-full ">
       
       <div className='text-5xl font-bold'>
Hello, I am 
        </div>
        <div>
        <h1 className="capitalize text-8xl text-ternaryColor font-extrabold">himal fullel</h1>
        </div>
        <div>
          <h1 className='text-5xl font-bold'>A web Developer, </h1>
          <h2 className='text-4xl font-semibold'>from Nepal</h2>
        </div>
        <Drawer>
      <DrawerTrigger asChild>
<div className='w-40 h-10 px-5 py-2 cursor-pointer bg-ternaryColor text-primaryColor font-semibold rounded-sm  text-center'>See Ranking</div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily github commit goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <Minus />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  commits/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <Plus />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
       
      </section>

      <section className='py-5'>
      <HoverCard>
  <HoverCardTrigger>
<Image src={profile} alt='profile logo' height={800} className='cursor-pointer'/>

  </HoverCardTrigger>
  <HoverCardContent>
    
    Himal Fullel,
  A Creative Designer and Developer From Nepal
  </HoverCardContent>
</HoverCard>

      </section>
        </section>
    </main>
  );
}
