import { supabase } from "./supabase";

export async function setupFormHandler(formId: string): Promise<void> {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById(formId) as HTMLFormElement;
    if (!form) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const submission = Object.fromEntries(formData.entries());

      console.log(submission);

      const { error } = await supabase.from("entries").insert([submission]);

      alert(error ? "Error sending form data" : "Form data sent successfully");
      if (!error) form.reset();
    });
  });
}

async function testSelectPolicy() {
  console.log("Testing SELECT policy on 'entries'...");

  const { data, error } = await supabase.from("entries").select("*");

  if (error) {
    console.error("SELECT blocked:", error.message);
  } else {
    console.log("SELECT allowed:", data);
  }
}

async function testDeletePolicy(entryId: number) {
  console.log(`Testing DELETE policy on 'entries' for ID ${entryId}...`);

  const { error } = await supabase.from("entries").delete().eq("id", entryId);

  if (error) {
    console.error("DELETE blocked:", error.message);
  } else {
    console.log("DELETE allowed: Entry deleted successfully.");
  }
}
