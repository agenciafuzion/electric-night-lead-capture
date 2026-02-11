
-- Create jobs table
CREATE TABLE public.jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  location TEXT NOT NULL,
  contract_type TEXT NOT NULL,
  seniority TEXT NOT NULL,
  salary_range TEXT,
  tags TEXT[] DEFAULT '{}',
  is_urgent BOOLEAN NOT NULL DEFAULT false,
  is_confidential BOOLEAN NOT NULL DEFAULT false,
  application_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Public read access (anyone can see jobs)
CREATE POLICY "Anyone can view jobs"
ON public.jobs
FOR SELECT
USING (true);

-- Only authenticated users can insert
CREATE POLICY "Authenticated users can insert jobs"
ON public.jobs
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Only authenticated users can update
CREATE POLICY "Authenticated users can update jobs"
ON public.jobs
FOR UPDATE
TO authenticated
USING (true);

-- Only authenticated users can delete
CREATE POLICY "Authenticated users can delete jobs"
ON public.jobs
FOR DELETE
TO authenticated
USING (true);
