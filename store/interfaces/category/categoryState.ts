import categoryInfo from './categoryInfo';

interface categoryState {
    user:  categoryInfo | {},

    id: number | null,
    title: string | null,
    body: string | '',
    image: string | '',
    parent_id: number | null,
  

}
export default categoryState;