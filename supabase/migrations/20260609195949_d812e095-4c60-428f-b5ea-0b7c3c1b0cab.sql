-- Uploads to career-applications now go through the send-career-application edge function
-- (service_role), so anon/authenticated must no longer be allowed to write directly.
DROP POLICY IF EXISTS "Anyone can upload career files" ON storage.objects;