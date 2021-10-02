import {createClient} from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {SUPABASE_URL, SUPABASE_API_KEY} from '@env';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_API_KEY,
  {
    localStorage: AsyncStorage as any,
  }
)

