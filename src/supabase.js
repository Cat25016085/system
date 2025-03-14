import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://brspybfaafklfnsdetpa.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyc3B5YmZhYWZrbGZuc2RldHBhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MTk3MDY5MSwiZXhwIjoyMDU3NTQ2NjkxfQ.yysbn8WspFc-dI-QWq09gUitTXN8MtpAwnEwiotYlSw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
