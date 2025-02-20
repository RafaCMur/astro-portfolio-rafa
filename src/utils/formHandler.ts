import { supabase } from "./supabase";

// TODO add hCaptcha support
// TODO add data should be deleted after 180 days policy to the table
// TODO Linkedin post: Why you should avoid dependencies

export async function setupFormHandler(formId: string): Promise<void> {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById(formId) as HTMLFormElement;
    if (!form) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const submission = Object.fromEntries(formData.entries());

      // Save form data to Supabase
      const { error } = await supabase.from("entries").insert([submission]);

      if (error) {
        alert("Error saving form data");
        return;
      }

      alert("Form submitted successfully");

      // Send confirmation email using API
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });

      // Log the raw response before parsing
      const rawText = await response.text();
      console.log("Raw response from server:", rawText);

      try {
        const result = JSON.parse(rawText);
        if (!result.success) {
          console.error("Error sending email:", result.error);
          alert(
            "Your message was saved, but we couldn't send a confirmation email.",
          );
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        alert("Server response is not valid JSON.");
      }
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
