// Test data

export const testExtract =
{
  data: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">' +
    '<title>Test HTML</title></head>' +
    '<body><p>Text to be extracted from HTML</p></body></html>'
}

export const testExtractExpected = 'Text to be extracted from HTML';

export const testAnalyse = {
  model: 'general_en',
  score_tag: 'positive',
  agreement: 'DISAGREEMENT',
  subjectivity: 'SUBJECTIVE',
  confidence: '86',
  irony: 'NONIRONIC'
}


