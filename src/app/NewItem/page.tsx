import {prisma} from "../db";
import Link from "next/link";
import {redirect} from "next/navigation";

export default function NewItem(){

    async function createTodoItem(data: FormData){
         "use server";
         const title = data.get("title")?.valueOf();
        const email = data.get("email")?.valueOf();
        const content = data.get("content")?.valueOf();
         await prisma.todo.create(
             {
             data:{
                 title,
                 content: content,
                 author: {
                     id: 0, lastName: "", email
                 },
                 },
             }
             );
         
         }

    return(
        <main className="">
            <h2 className="text-2xl">Create new item</h2>
           <form action={createTodoItem} className="flex gap-2 flex-col">
               <input
                   type="text"
                   name="title"
                   placeholder="Create a new todo item"
                   className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 focus-within:border-zinc-700 bg-transparent outline-none"
               ></input>
               <input
                   type="email"
                   name="email"
                   placeholder="Insert Email"
                   className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 focus-within:border-zinc-700 bg-transparent outline-none"
               ></input>
               <input
                   type="text"
                   name="content"
                   placeholder="Add content"
                   className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 focus-within:border-zinc-700 bg-transparent outline-none"
               ></input>
               <div className="flex gap-1 justify-end">
                   <Link
                       href=".."
                       className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 outline-none"
                   >
                       Cancel
                   </Link>
                   <button
                       type="submit"
                       className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 outline-none"
                   >
                       Save
                   </button>
               </div>
           </form>
        </main>
    )
}