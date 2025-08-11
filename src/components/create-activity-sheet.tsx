"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetCloseButton,
} from "@/components/ui/sheet";

export function CreateActivitySheet() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="cursor-pointer">Create Activity</Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[480px] max-w-[90vw]">
        <SheetHeader>
          <SheetTitle className="text-lg">Book Court</SheetTitle>
        </SheetHeader>
        <SheetCloseButton />

        <div className="h-[calc(100vh-64px)] overflow-y-auto px-6 pb-28 pt-6">
          <form className="space-y-5">
            <div className="space-y-2">
              <Label>Created By</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Ex: enna@gmail.com" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user1">enna@gmail.com</SelectItem>
                  <SelectItem value="user2">sara@gmail.com</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Time</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Start Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="08:00">08:00</SelectItem>
                    <SelectItem value="09:00">09:00</SelectItem>
                    <SelectItem value="10:00">10:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>End Time</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select End Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">09:00</SelectItem>
                    <SelectItem value="10:00">10:00</SelectItem>
                    <SelectItem value="11:00">11:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Choose Activity</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Activity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="padel">Padel</SelectItem>
                  <SelectItem value="tennis">Tennis</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border p-3">
              <Label className="mb-2 block">Add Players</Label>
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Player" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john-doe">John Doe</SelectItem>
                      <SelectItem value="emma-li">Emma Li</SelectItem>
                      <SelectItem value="max-karlsson">Max Karlsson</SelectItem>
                      <SelectItem value="sara-ahmed">Sara Ahmed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="Add Player"
                >
                  <span className="text-lg leading-none">+</span>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-md border p-3">
              <div className="text-sm font-medium">Recurring Activity?</div>
              <Switch />
            </div>

            <div className="space-y-2">
              <Label>Choose Multiple Courts</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Courts" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Court 1</SelectItem>
                  <SelectItem value="2">Court 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between rounded-md border p-3">
              <div className="text-sm font-medium">Booking Check In</div>
              <Switch />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Cancellation Time (Hours)</Label>
                <Input placeholder="24" />
              </div>
              <div className="space-y-2">
                <Label>Door Code</Label>
                <Input placeholder="Door Code" />
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-4 items-end">
              <div className="space-y-2">
                <Label>Total price</Label>
                <div className="flex items-center gap-2">
                  <div className="w-10 text-center rounded-md border py-2 text-sm">
                    $
                  </div>
                  <Input placeholder="0" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Discount</Label>
                <div className="flex items-center gap-2">
                  <Select>
                    <SelectTrigger className="w-[64px]">
                      <SelectValue placeholder="%" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percent">%</SelectItem>
                      <SelectItem value="fixed">$</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="0" />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="sticky bottom-0 left-0 right-0 z-10 flex items-center justify-between gap-2 border-t bg-background px-6 py-4">
          <Button variant="outline" className="w-32 cursor-pointer" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className="w-32 cursor-pointer">Book Court</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
