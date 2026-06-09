-- Explicit lockdown of career-applications bucket: only service_role can read/modify.
-- Uploads (INSERT) remain open per existing policy used by the public application form.

DROP POLICY IF EXISTS "Service role can read career applications" ON storage.objects;
CREATE POLICY "Service role can read career applications"
  ON storage.objects FOR SELECT
  TO service_role
  USING (bucket_id = 'career-applications');

DROP POLICY IF EXISTS "Service role can update career applications" ON storage.objects;
CREATE POLICY "Service role can update career applications"
  ON storage.objects FOR UPDATE
  TO service_role
  USING (bucket_id = 'career-applications')
  WITH CHECK (bucket_id = 'career-applications');

DROP POLICY IF EXISTS "Service role can delete career applications" ON storage.objects;
CREATE POLICY "Service role can delete career applications"
  ON storage.objects FOR DELETE
  TO service_role
  USING (bucket_id = 'career-applications');