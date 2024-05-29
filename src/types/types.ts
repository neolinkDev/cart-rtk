import { Database } from 'src/data/types';

type ItemsEntity = Database['public']['Tables']['items']['Row'];

export type CartItems = ItemsEntity;
