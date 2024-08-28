import { createClient } from "@/utils/supabase/server";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default async function Home() {
  return (
    <div>
      <h1>Ryan Klivansky</h1>
      <h2>Software Engineer</h2>
      <ThemeSwitcher />
    </div>
  );
}
