/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { ReactNode } from "react";
interface EditModalProps {
  children: ReactNode;
  ModalTitle: string;
}

const EditModal = ({ children, ModalTitle }: EditModalProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full" variant="outline">Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{ModalTitle}</DialogTitle>
          </DialogHeader>
          {children}
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditModal;
