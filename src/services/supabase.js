import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://uigpzemiinlfiglciffq.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpZ3B6ZW1paW5sZmlnbGNpZmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MTY1NTcsImV4cCI6MjA1MTI5MjU1N30.7mFozQdOcBfIbRqDUZtZNOnNyMicehxDs7IkqSrcNfY";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;