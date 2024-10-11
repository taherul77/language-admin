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
import React, { ReactNode, useState } from "react";

interface EditModalProps {
  children: ReactNode;
  ModalTitle: string;
  description?: string; // Optional description property
  onSave: () => void; // Callback for handling save action
}

const EditModal = ({ children, ModalTitle,description, onSave }: EditModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  
  const handleSave = () => {
    onSave(); // Trigger the save action from parent
    handleClose(); // Close the modal after saving
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="w-full" variant="outline" onClick={handleOpen}>
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{ModalTitle}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>} 
          </DialogHeader>

          {children}
          <DialogFooter>
            <Button variant="outline" onClick={handleClose}>Cancel</Button>
            <Button type="button" onClick={handleSave}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditModal;
