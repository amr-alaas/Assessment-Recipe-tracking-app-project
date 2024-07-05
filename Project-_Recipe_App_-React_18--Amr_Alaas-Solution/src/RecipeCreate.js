import React, { useState } from "react";

function RecipeCreate({ onAdd }) {
  const [recipeName, setRecipeName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name: recipeName,
      cuisine: cuisine,
      photo: photoUrl,
      ingredients: ingredients,
      preparation: preparation,
    };
    onAdd(newRecipe);
    setRecipeName("");
    setCuisine("");
    setPhotoUrl("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input type="text" name="name" placeholder="Name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} required /></td>
            <td><input type="text" name="cuisine" placeholder="Cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} required /></td>
            <td><input type="text" name="photo" placeholder="Photo URL" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} required /></td>
            <td><textarea name="ingredients" placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required /></td>
            <td><textarea name="preparation" placeholder="Preparation" value={preparation} onChange={(e) => setPreparation(e.target.value)} required /></td>
            <td style={{ textAlign: "center" }}>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
