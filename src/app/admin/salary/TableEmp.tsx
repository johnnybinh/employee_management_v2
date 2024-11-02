import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { clerkClient } from "@/util/ClerkClient";
import { eq } from "drizzle-orm";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { db } from "@/app/db";
import { UserSalaries } from "@/app/db/schema/schema";
import { FormInput } from "lucide-react";
import { revalidatePath } from "next/cache";
import { useToast } from "@/hooks/use-toast";

export async function TableEmp() {
  const user = await clerkClient.users.getUserList({});

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Username</TableHead>
          <TableHead>Salary</TableHead>
          <TableHead className="text-center">Edit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {user.data.map(async (users, index) => (
          <TableRow key={index}>
            <TableCell>{users.username}</TableCell>
            <SalaryCell id={users.id} />
            <TableCell className="text-center">
              <Dialog>
                {" "}
                <DialogTrigger asChild>
                  <Button>Edit</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    {" "}
                    <DialogTitle>Edit Salary for {users.username}</DialogTitle>
                    <DialogDescription>
                      Add or edit Salary record
                    </DialogDescription>
                  </DialogHeader>
                  <form
                    action={async (formData) => {
                      "use server";
                      try {
                        const existingRecord = await db
                          .select()
                          .from(UserSalaries)
                          .where(eq(UserSalaries.user_id, users.id));

                        if (existingRecord.length > 0) {
                          await db
                            .update(UserSalaries)
                            .set({
                              salary: formData.get("salary")?.toString() || "",
                            })
                            .where(eq(UserSalaries.user_id, users.id));
                        } else {
                          await db.insert(UserSalaries).values({
                            user_id: users.id,
                            salary: formData.get("salary")?.toString() || "",
                          });
                        }

                        const { toast } = useToast();
                        toast({
                          title: "Update Successfully",
                          variant: "default",
                        });
                      } catch (error) {}
                      revalidatePath("/admin/salary");
                    }}
                    className="flex gap-2 flex-col"
                  >
                    <Label htmlFor="input">Amount</Label>
                    <Input
                      name="salary"
                      type="text"
                      placeholder="10000"
                    ></Input>
                    <DialogClose className="flex justify-end w-full ">
                      {" "}
                      <Button className="w-1/4 self-end" type="submit">
                        Submit
                      </Button>
                    </DialogClose>
                  </form>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const SalaryCell = async (id) => {
  const res = await db
    .select({ salary: UserSalaries.salary })
    .from(UserSalaries)
    .where(eq(UserSalaries.user_id, id.id));
  return (
    <>
      <TableCell>
        {res.map((res, index) => (
          <div key={index}>{res.salary}</div>
        ))}
      </TableCell>
    </>
  );
};
