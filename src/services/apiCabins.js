/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins(){
    
    const  { data, error } = await supabase.from("cabins").select("*");
    
    if (error){
        console.log(error)
    }
    return data;

}

export async function createCabin(newCabin){
  console.log(newCabin) 
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  // https://uigpzemiinlfiglciffq.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;

  // 1. Create cabin
  const { data, error } = await supabase.from("cabins").insert([{...newCabin, image:imagePath}]);

  if (error) {
    console.log(error); 
    throw new Error("Cabin could not be created!");
  }
  // 2. upload image
  const {error:storageError} =await supabase.storage.from('cabins-images')
  .upload(imageName, newCabin.image)

  // 3. Delete the cabin if there   was an error uploading image
  if (storageError) await supabase.from('cabins').delete().eq('id',data.id);
  console.log(storageError)
  return data;
}


export async function deleteCabins(id){
    
const {data, error } = await supabase
  .from("cabins")
  .delete()
  .eq("id", id);

   if (error) {
     throw new Error("Cabin could not be deleted");
   }

   return data;
}