"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const reservationSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(5, "Enter a contact number"),
  date: z.string().min(1, "Choose a date"),
  time: z.string().min(1, "Select a time"),
  partySize: z.string().min(1, "Party size is required"),
  occasion: z.string().optional(),
  notes: z.string().optional()
});

export type ReservationFormValues = z.infer<typeof reservationSchema>;

export const ReservationForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      partySize: "2",
      occasion: "",
      notes: ""
    }
  });

  const handleSubmit = (values: ReservationFormValues) => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/reservations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values)
        });
        const data = await response.json();
        if (data?.ok) {
          toast.success("Reservation received! We will confirm shortly.");
          form.reset();
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error(error);
        toast.error("Unable to submit right now.");
      }
    });
  };

  const { register, handleSubmit: submitHandler, formState } = form;

  return (
    <form className="space-y-6" onSubmit={submitHandler(handleSubmit)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="name">
            Name
          </label>
          <Input id="name" placeholder="Your name" {...register("name")} aria-invalid={!!formState.errors.name} />
          {formState.errors.name && <p className="mt-1 text-xs text-danger">{formState.errors.name.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="email">
            Email
          </label>
          <Input id="email" type="email" placeholder="you@email.com" {...register("email")} aria-invalid={!!formState.errors.email} />
          {formState.errors.email && <p className="mt-1 text-xs text-danger">{formState.errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="phone">
            Phone
          </label>
          <Input id="phone" placeholder="+00 000 0000" {...register("phone")} aria-invalid={!!formState.errors.phone} />
          {formState.errors.phone && <p className="mt-1 text-xs text-danger">{formState.errors.phone.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="partySize">
            Party Size
          </label>
          <Select id="partySize" {...register("partySize")} aria-invalid={!!formState.errors.partySize}>
            {Array.from({ length: 12 }).map((_, index) => (
              <option key={index + 1} value={String(index + 1)}>
                {index + 1} guests
              </option>
            ))}
          </Select>
          {formState.errors.partySize && <p className="mt-1 text-xs text-danger">{formState.errors.partySize.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="date">
            Date
          </label>
          <Input id="date" type="date" {...register("date")} aria-invalid={!!formState.errors.date} />
          {formState.errors.date && <p className="mt-1 text-xs text-danger">{formState.errors.date.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="time">
            Time
          </label>
          <Input id="time" type="time" {...register("time")} aria-invalid={!!formState.errors.time} />
          {formState.errors.time && <p className="mt-1 text-xs text-danger">{formState.errors.time.message}</p>}
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-ink" htmlFor="occasion">
          Occasion
        </label>
        <Input id="occasion" placeholder="Birthday, celebration, etc." {...register("occasion")} />
      </div>
      <div>
        <label className="text-sm font-medium text-ink" htmlFor="notes">
          Notes
        </label>
        <Textarea id="notes" rows={4} placeholder="Tell us about allergies or requests" {...register("notes")} />
      </div>
      <Button type="submit" size="lg" disabled={isPending} aria-busy={isPending} className="w-full sm:w-auto">
        {isPending ? "Submitting..." : "Submit Reservation"}
      </Button>
    </form>
  );
};
