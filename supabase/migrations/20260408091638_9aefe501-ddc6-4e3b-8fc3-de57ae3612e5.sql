
-- Create storage bucket for career applications
INSERT INTO storage.buckets (id, name, public) VALUES ('career-applications', 'career-applications', false);

-- Allow anyone to upload files to career-applications bucket
CREATE POLICY "Anyone can upload career files"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'career-applications');

-- Allow public read access for career application files (so edge function can access)
CREATE POLICY "Service role can read career files"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'career-applications');
