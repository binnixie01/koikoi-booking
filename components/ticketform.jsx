import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const TicketForm = ({ onClick, place }) => {
  const [amount, setAmount] = useState();
  const router = useRouter();
  const { status, data } = useSession();
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleBooking = async (e) => {
    e.preventDefault()

    try {
      if (data) {
        const name = data.user.email
        const res = await fetch("/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, place, amount }),
        });

      }
    } catch (error) {
      console.log(error);
    }


    router.replace("/orders");
  };
  const isDisabled = amount == 0 || amount == undefined;
  const handleClose = () => {
    onClick(false);
  };

  return (
    <div className="bg-slate-50 md:w-1/4 absolute top-1/2 md:left-1/3 left-1/4 p-4 flex flex-col gap-2 w-1/2">
      <Button
        className="absolute right-0 top-0 w-2 text-xs rounded-full"
        onClick={handleClose}
      >
        X
      </Button>
      <form onSubmit={handleBooking}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="number">No. of Ticket</Label>
          <Input
            type="number"
            id="number"
            onChange={handleChange}
            placeholder="Enter no of tickets"
            defaultValue={0}
          />
        </div>
        <div>Total : {50 * amount}</div>
        <Button
          onClick={handleBooking}
          className="w-full"
          type="submit"
          disabled={isDisabled}
        >
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default TicketForm;
