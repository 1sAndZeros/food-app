
import { fetchRecipe } from "@/utils";
import Header from '@/components/RecipePage/Header';
import Ingredients from '@/components/RecipePage/Ingredients';
import Instructions from "@/components/RecipePage/Instructions";

export default async function Page({ params }: { params: { id: string } }) {
    const data = await fetchRecipe(params.id);
    const recipe = data?.recipe

    if(recipe) {
        return <div>
            <Header recipe={recipe} />
            <Ingredients recipe={recipe} />
            <Instructions recipe={recipe} />
        </div>
    }
    
}