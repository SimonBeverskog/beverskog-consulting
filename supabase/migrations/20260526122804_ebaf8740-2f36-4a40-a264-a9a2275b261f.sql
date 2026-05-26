
DROP POLICY IF EXISTS "Service role can read career files" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload career files" ON storage.objects;

UPDATE storage.buckets
SET file_size_limit = 10485760,
    allowed_mime_types = ARRAY[
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
WHERE id = 'career-applications';

CREATE POLICY "Anyone can upload career files"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'career-applications');
