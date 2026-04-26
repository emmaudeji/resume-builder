'use client'

import { AlertTriangle, Loader2, Trash, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import CenterModal from "./CenterModal";
import { DialogDescription, DialogTitle } from "../ui/dialog";
import { LOG_MESSAGES } from "@/utils/logging/LOG_MESSAGES";

interface ConfirmDeleteCardProps {
  text?: string;
  onDelete:  () => Promise<void>;
  onCancel?: () => void;
  trigger?: React.ReactNode
}

export default function DeleteCard({ text, onDelete, onCancel, trigger }: ConfirmDeleteCardProps) {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const deleteItem = async() => {
        try {
            setLoading(true)
            await onDelete()
        } catch (error) {
            console.log(error)
            toast.error( LOG_MESSAGES.ERROR.DELETE_FAILED || 'Request was unsuccessful, try again')
        } finally {
            setLoading(false)
            setOpen(false)
        }
    }

  return (
    <CenterModal
        open={open}
        setOpen={setOpen}
        className="max-w-sm text-center space-y-3"
        triggerBtn={
            trigger ? trigger :
             <button><Trash2 size={20} className="text-red-300 hover:text-red-600"/></button>
        }
        title={
          <div className="flex items-center justify-center gap-3 text-red-600">
          <AlertTriangle className="w-6 h-6" />
          <span className="text-lg font-semibold">Confirm Deletion</span>
        </div>
        }
        footer={
          <div className="flex justify-center gap-3  ">
              <Button
                  variant={'outline'}
                  disabled={loading}
                onClick={()=>{
                  onCancel&&onCancel
                  setOpen(false)
              }}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
              >
                Cancel
              </Button>
              <Button
                  variant={'destructive'}
                  disabled={loading}
                  onClick={deleteItem}
                  className="  bg-red-600 text-white hover:bg-red-700 transition"
              >
                {loading ? <Loader2 className="animate-spin" /> : null } Delete  
              </Button>
          </div>
        }
    >
        {
          text ? (
            <> <span className="font-medium">{text}</span>? This action cannot be undone.</>
          ) : (
            <>Are you sure you want to delete the item? This action cannot be undone.</>
          )
        }
    </CenterModal>
  );
}

 