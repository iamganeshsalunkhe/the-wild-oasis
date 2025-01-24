/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins(){
    
    const  { data, error } = await supabase.from("cabins").select("*");
    
    if (error){
        console.log(error)
    }
    return data;

}

export async function createEditCabin(newCabin,id){
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)
  console.log(newCabin) 
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  // https://uigpzemiinlfiglciffq.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg
  const imagePath = hasImagePath ? newCabin.image:`${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;

  // 1. Create/Edit cabin
  let query =  supabase.from('cabins');

  // A) Create
  if (!id)
   query =query.insert([{...newCabin, image:imagePath}])

  // B) Edit
  if (id) 
    query= query 
      .update({ ...newCabin, image:imagePath})
      .eq("id",id)
  const { data, error } = await query.select().single();

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