CREATE POLICY "Materiais: leitura pública" ON storage.objects
  FOR SELECT USING (bucket_id = 'materiais');
CREATE POLICY "Materiais: admins enviam" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'materiais' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Materiais: admins atualizam" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'materiais' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Materiais: admins apagam" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'materiais' AND public.has_role(auth.uid(), 'admin'));