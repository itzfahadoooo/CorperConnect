"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const profileFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  dateOfBirth: z.date({
    required_error: "Date of birth is required.",
  }),
  placeOfBirth: z.string().min(2, {
    message: "Place of birth must be at least 2 characters.",
  }),
  gender: z.string({
    required_error: "Please select a gender.",
  }),
  maritalStatus: z.string({
    required_error: "Please select a marital status.",
  }),
  nationality: z.string().min(2, {
    message: "Nationality must be at least 2 characters.",
  }),
  stateOfOrigin: z.string().min(2, {
    message: "State of origin must be at least 2 characters.",
  }),
  lga: z.string().min(2, {
    message: "LGA must be at least 2 characters.",
  }),
  residentialAddress: z.string().min(5, {
    message: "Residential address must be at least 5 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  languagesSpoken: z.string().min(2, {
    message: "Please enter at least one language.",
  }),
  institutionAttended: z.string().min(2, {
    message: "Institution attended must be at least 2 characters.",
  }),
  courseOfStudy: z.string().min(2, {
    message: "Course of study must be at least 2 characters.",
  }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const Profileform = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: undefined,
      gender: "",
      maritalStatus: "",
      placeOfBirth: "",
      nationality: "Nigerian",
      stateOfOrigin: "",
      lga: "",
      residentialAddress: "",
      phoneNumber: "",
      email: "",
      languagesSpoken: "",
      institutionAttended: "",
      courseOfStudy: "",
    },
  });

  const navigate = useNavigate();

  const { firebaseUser, userData } = useUser();

  async function onSubmit(data: ProfileFormValues) {
    setIsSubmitting(true);

    try {
      if (!firebaseUser) {
        toast.error("Error", { description: "User not logged in" });
        setIsSubmitting(false); // reset submitting state before returning
        return;
      }

      const userRef = doc(db, "users", firebaseUser.uid);

      await setDoc(userRef, {
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        placeOfBirth: data.placeOfBirth,
        nationality: data.nationality,
        stateOfOrigin: data.stateOfOrigin,
        lga: data.lga,
        residentialAddress: data.residentialAddress,
        languagesSpoken: data.languagesSpoken,
        institutionAttended: data.institutionAttended,
        courseOfStudy: data.courseOfStudy,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender,
        maritalStatus: data.maritalStatus,
      });

      // Optional: simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Profile created", {
        description: "Your profile has been successfully updated.",
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      });

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Error", {
        description: "Something went wrong. Please try again.",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    if (userData) {
      form.reset({
        fullName: userData.fullName || "",
        dateOfBirth: userData.dateOfBirth
          ? new Date(userData.dateOfBirth)
          : undefined,
        gender: userData.gender || "",
        maritalStatus: userData.maritalStatus || "",
        placeOfBirth: userData.placeOfBirth || "",
        nationality: userData.nationality || "Nigerian",
        stateOfOrigin: userData.stateOfOrigin || "",
        lga: userData.lga || "",
        residentialAddress: userData.residentialAddress || "",
        phoneNumber: userData.phoneNumber || "",
        email: userData.email || "",
        languagesSpoken: userData.languagesSpoken || "",
        institutionAttended: userData.institutionAttended || "",
        courseOfStudy: userData.courseOfStudy || "",
      });
    }
  }, [userData]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6 rounded-lg border border-[#008000]/20 p-6 shadow-sm">
          <div className="text-xl font-medium text-[#008000]">
            Personal Information
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of Birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value instanceof Date &&
                          !isNaN(field.value.getTime()) ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}

                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="placeOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Place of Birth</FormLabel>
                  <FormControl>
                    <Input placeholder="Lagos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maritalStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marital Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select marital status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-6 rounded-lg border border-[#008000]/20 p-6 shadow-sm">
          <div className="text-xl font-medium text-[#008000]">
            Location Information
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="stateOfOrigin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State of Origin</FormLabel>
                  <FormControl>
                    <Input placeholder="Lagos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lga"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Local Government Area (LGA)</FormLabel>
                  <FormControl>
                    <Input placeholder="Ikeja" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="residentialAddress"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Residential Address</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your full residential address"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-6 rounded-lg border border-[#008000]/20 p-6 shadow-sm">
          <div className="text-xl font-medium text-[#008000]">
            Contact Information
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+234 800 000 0000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-6 rounded-lg border border-[#008000]/20 p-6 shadow-sm">
          <div className="text-xl font-medium text-[#008000]">
            Education & Skills
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="languagesSpoken"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Languages Spoken</FormLabel>
                  <FormControl>
                    <Input placeholder="English, Yoruba, Igbo" {...field} />
                  </FormControl>
                  <FormDescription>
                    Separate multiple languages with commas
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="institutionAttended"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution Attended</FormLabel>
                  <FormControl>
                    <Input placeholder="University of Lagos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="courseOfStudy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course of Study</FormLabel>
                  <FormControl>
                    <Input placeholder="Computer Science" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#008000] hover:bg-[#008000]/90 sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Profile"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Profileform;
